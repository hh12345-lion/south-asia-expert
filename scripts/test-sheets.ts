import { readFileSync } from "fs";
import { join } from "path";
import { appendRow, ensureHeaderRow, getSpreadsheetInfo, readRows } from "../lib/google-sheets";
import { LEAD_BRAND_NAME, LEAD_SHEET_COLUMNS, buildLeadSheetRow } from "../lib/submit-lead";

function loadEnvLocal() {
  try {
    const content = readFileSync(join(process.cwd(), ".env.local"), "utf-8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      process.env[key] = value;
    }
  } catch {
    /* .env.local optional when vars are already in environment */
  }
}

loadEnvLocal();

async function test() {
  console.log("--- Testing Google Sheets Connection ---\n");
  console.log("Expected header row (Row 1):", LEAD_SHEET_COLUMNS.join(" | "));
  console.log("Tab:", process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1");
  console.log("");

  try {
    const info = await getSpreadsheetInfo();
    console.log("✅ Spreadsheet found:", info.title);
    console.log("   Tabs:", info.sheets?.map((s) => s.name).join(", "));
  } catch (error) {
    console.error("❌ Failed to read spreadsheet info:", error instanceof Error ? error.message : error);
    process.exit(1);
  }

  try {
    await ensureHeaderRow([...LEAD_SHEET_COLUMNS]);
    console.log("✅ Header row ensured");
  } catch (error) {
    console.error("❌ Failed to ensure header:", error instanceof Error ? error.message : error);
    process.exit(1);
  }

  try {
    const result = await appendRow(
      buildLeadSheetRow({
        fullName: "Test Entry",
        organisation: "Test Law Firm",
        email: "test@example.com",
        phone: "+44 7700 900000",
        caseProfile: "Political Persecution",
        region: "Bangladesh",
        proceedings: "First-tier Tribunal (FTT)",
        funding: "Legal Aid",
        deadline: "",
        urgency: "Standard (7+ days)",
        summary: "Test submission from development environment.",
      })
    );
    console.log("✅ Row written:", result.updatedRange);
    console.log("   Brand column:", LEAD_BRAND_NAME);
  } catch (error) {
    console.error("❌ Failed to write row:", error instanceof Error ? error.message : error);
    process.exit(1);
  }

  try {
    const result = await readRows();
    console.log(`✅ Read ${result.rows.length} rows (including header)`);
    console.log("   Header:", result.rows[0]);
    console.log("   Last row:", result.rows[result.rows.length - 1]);
  } catch (error) {
    console.error("❌ Failed to read rows:", error instanceof Error ? error.message : error);
    process.exit(1);
  }

  console.log("\n--- All tests passed ---");
}

test();
