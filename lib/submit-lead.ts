function getSiteDomain(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://southasiaexpert.com";
  try {
    return new URL(raw).hostname.replace(/^www\./, "");
  } catch {
    return "southasiaexpert.com";
  }
}

export const LEAD_BRAND_NAME = "South Asia Expert";

/** Row 1 headers in Google Sheet tab (GOOGLE_SHEET_TAB_NAME) — order must match buildLeadSheetRow() */
export const LEAD_SHEET_COLUMNS = [
  "Timestamp",
  "Full Name",
  "Law Firm",
  "Email",
  "Phone",
  "Profile",
  "Country",
  "Proceedings",
  "Funding",
  "Deadline",
  "Urgency",
  "Case Summary",
  "Brand name",
] as const;

/** Keep phones as plain text in Sheets (leading + would become a formula under USER_ENTERED). */
function sheetPlainText(value: string): string {
  const v = value.trim();
  if (!v) return "";
  if (/^[=+]/.test(v)) return `'${v}`;
  return v;
}

export function buildLeadSheetRow(payload: SubmitLeadPayload): (string | number | boolean | null)[] {
  const sanitize = (str: string) => str.replace(/<[^>]*>/g, "").trim();
  return [
    new Date().toISOString(),
    sanitize(payload.fullName ?? ""),
    sanitize(payload.organisation ?? ""),
    (payload.email ?? "").toLowerCase().trim(),
    sheetPlainText(sanitize(payload.phone ?? "")),
    sanitize(payload.caseProfile ?? ""),
    sanitize(payload.region ?? ""),
    sanitize(payload.proceedings ?? ""),
    sanitize(payload.funding ?? ""),
    payload.deadline ?? "",
    sanitize(payload.urgency ?? ""),
    sanitize(payload.summary ?? ""),
    LEAD_BRAND_NAME,
  ];
}

export type SubmitLeadInput = {
  fullName: string;
  email: string;
  phone: string;
};

export type SubmitLeadPayload = SubmitLeadInput & {
  organisation?: string;
  caseProfile?: string;
  region?: string;
  proceedings?: string;
  funding?: string;
  deadline?: string;
  urgency?: string;
  summary?: string;
};

/** Minimal webhook payload (n8n / Lead_notification_url) */
export function buildLeadWebhookPayload(input: SubmitLeadInput) {
  return {
    "Full Name": input.fullName.trim(),
    Email: input.email.trim(),
    "Phone Number": input.phone.trim(),
    "Brand name": LEAD_BRAND_NAME,
    domain: getSiteDomain(),
  };
}

export function getLeadWebhookUrl(): string | undefined {
  return (
    process.env.Lead_notification_url?.trim() ||
    process.env.LEAD_NOTIFICATION_URL?.trim() ||
    undefined
  );
}

/** Client-side: POST lead to /api/submit-lead (fullName, email, phone + optional sheet fields) */
export async function postSubmitLead(payload: SubmitLeadPayload): Promise<boolean> {
  try {
    const res = await fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: payload.fullName,
        email: payload.email,
        phone: payload.phone ?? "",
        organisation: payload.organisation,
        caseProfile: payload.caseProfile,
        region: payload.region,
        proceedings: payload.proceedings,
        funding: payload.funding,
        deadline: payload.deadline,
        urgency: payload.urgency,
        summary: payload.summary,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
