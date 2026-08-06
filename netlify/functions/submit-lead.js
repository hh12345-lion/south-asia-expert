/**
 * Lead_notification_setup.md
 *
 * On form submit → POST JSON to /api/submit-lead
 * Netlify.toml force-redirects:
 *   /api/submit-lead → /.netlify/functions/submit-lead
 *
 * Inbound from the site:
 *   { fullName, email, phone } (+ optional sheet fields)
 *
 * Outbound to Lead_notification_url (or LEAD_NOTIFICATION_URL) — only these keys:
 *   { "Full Name", "Email", "Phone Number", "Brand name" }
 *
 * Also appends a row to Google Sheets when GOOGLE_* env vars are set
 * (Google_sheets_setup.md) so production keeps sheet + webhook.
 *
 * Change BRAND_NAME per brand site.
 */

const { google } = require("googleapis");

const BRAND_NAME = "South Asia Expert";

function jsonResponse(statusCode, data) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
    body: JSON.stringify(data),
  };
}

function getWebhookUrl() {
  return (
    process.env.Lead_notification_url ||
    process.env.LEAD_NOTIFICATION_URL ||
    ""
  ).trim();
}

function isGoogleSheetsConfigured() {
  return Boolean(
    process.env.GOOGLE_SHEET_ID?.trim() &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim() &&
      process.env.GOOGLE_PRIVATE_KEY?.trim()
  );
}

function sanitize(str) {
  return String(str ?? "")
    .replace(/<[^>]*>/g, "")
    .trim();
}

/** Keep phones as plain text (leading + would become a formula under USER_ENTERED). */
function sheetPlainText(value) {
  const v = String(value ?? "").trim();
  if (!v) return "";
  if (/^[=+]/.test(v)) return `'${v}`;
  return v;
}

/**
 * Column order matches lib/submit-lead.ts LEAD_SHEET_COLUMNS:
 * Timestamp | Full Name | Law Firm | Email | Phone | Profile | Country |
 * Proceedings | Funding | Deadline | Urgency | Case Summary | Brand name
 */
function buildSheetRow(parsed, name, mail, tel) {
  return [
    new Date().toISOString(),
    name,
    sanitize(parsed.organisation),
    mail,
    sheetPlainText(tel),
    sanitize(parsed.caseProfile),
    sanitize(parsed.region),
    sanitize(parsed.proceedings),
    sanitize(parsed.funding),
    sanitize(parsed.deadline),
    sanitize(parsed.urgency),
    sanitize(parsed.summary),
    BRAND_NAME,
  ];
}

async function appendLeadToSheet(row) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const sheetName = process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";
  const escaped = sheetName.replace(/'/g, "''");

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `'${escaped}'!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return jsonResponse(204, {});
  }

  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" });
  }

  const webhookUrl = getWebhookUrl();
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!webhookUrl && !sheetsConfigured) {
    console.error("Lead_notification_url and Google Sheets are not configured");
    return jsonResponse(500, { error: "Lead storage not configured" });
  }

  let parsed;
  try {
    parsed = JSON.parse(event.body || "{}");
  } catch {
    return jsonResponse(400, { error: "Invalid JSON body" });
  }

  try {
    const { fullName, email, phone } = parsed;

    if (!fullName || !email) {
      return jsonResponse(400, { error: "Missing required fields" });
    }

    const name = sanitize(fullName);
    const mail = String(email).toLowerCase().trim();
    const tel = phone != null ? sanitize(phone) : "";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      return jsonResponse(400, { error: "Invalid email address" });
    }

    if (sheetsConfigured) {
      try {
        await appendLeadToSheet(buildSheetRow(parsed, name, mail, tel));
      } catch (error) {
        console.error("Google Sheets write failed:", error?.message || error);
        if (!webhookUrl) {
          return jsonResponse(500, { error: "Failed to save submission" });
        }
      }
    }

    // Lead_notification_setup.md — only these four outbound keys
    if (webhookUrl) {
      const payload = {
        "Full Name": name,
        Email: mail,
        "Phone Number": tel,
        "Brand name": BRAND_NAME,
      };

      const ac = new AbortController();
      const t = setTimeout(() => ac.abort(), 12_000);
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: ac.signal,
        });

        if (!response.ok) {
          const text = await response.text();
          console.error("Webhook failed:", response.status, text);
          if (!sheetsConfigured) {
            return jsonResponse(502, { error: "Webhook delivery failed" });
          }
        }
      } catch (error) {
        console.error("Webhook request failed:", error?.message || error);
        if (!sheetsConfigured) {
          return jsonResponse(502, { error: "Could not reach lead notification endpoint" });
        }
      } finally {
        clearTimeout(t);
      }
    }

    return jsonResponse(200, { success: true });
  } catch (error) {
    console.error("submit-lead error:", error);
    return jsonResponse(500, { error: "Server error" });
  }
};
