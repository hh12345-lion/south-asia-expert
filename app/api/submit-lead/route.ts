import { NextResponse } from "next/server";
import {
  appendRowWithRetry,
  ensureHeaderRow,
  isGoogleSheetsConfigured,
} from "@/lib/google-sheets";
import {
  LEAD_SHEET_COLUMNS,
  buildLeadSheetRow,
  buildLeadWebhookPayload,
  getLeadWebhookUrl,
  type SubmitLeadPayload,
} from "@/lib/submit-lead";

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

export async function POST(request: Request) {
  const webhookUrl = getLeadWebhookUrl();

  if (!isGoogleSheetsConfigured() && !webhookUrl) {
    return NextResponse.json(
      {
        error:
          "Lead storage not configured. Set Google Sheets env vars and/or Lead_notification_url.",
      },
      { status: 503 }
    );
  }

  let body: SubmitLeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = sanitize(body.fullName ?? "");
  const email = (body.email ?? "").toLowerCase().trim();
  const phone = sanitize(body.phone ?? "");
  const organisation = sanitize(body.organisation ?? "");
  const summary = sanitize(body.summary ?? "");

  if (!fullName || !email) {
    return NextResponse.json({ error: "fullName and email are required" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const row = buildLeadSheetRow({ ...body, fullName, email, phone, organisation, summary });

  if (isGoogleSheetsConfigured()) {
    try {
      await ensureHeaderRow([...LEAD_SHEET_COLUMNS]);
      await appendRowWithRetry(row);
    } catch (error: unknown) {
      const err = error as { message?: string; code?: number; response?: { status?: number } };
      console.error("Google Sheets error:", {
        message: err?.message,
        code: err?.code,
        status: err?.response?.status,
        spreadsheetId: process.env.GOOGLE_SHEET_ID?.slice(0, 8) + "...",
        timestamp: new Date().toISOString(),
      });
      if (!webhookUrl) {
        return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
      }
    }
  }

  if (webhookUrl) {
    const outbound = buildLeadWebhookPayload({ fullName, email, phone });
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outbound),
        signal: AbortSignal.timeout(12_000),
      });
      if (!res.ok && !isGoogleSheetsConfigured()) {
        return NextResponse.json({ error: "Lead notification endpoint error" }, { status: 502 });
      }
    } catch {
      if (!isGoogleSheetsConfigured()) {
        return NextResponse.json({ error: "Could not reach lead notification endpoint" }, { status: 502 });
      }
      console.error("Lead webhook request failed");
    }
  }

  return NextResponse.json({ ok: true });
}
