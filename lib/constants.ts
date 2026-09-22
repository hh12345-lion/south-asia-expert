/** Apex domain — Netlify serves https://southasiaexpert.com (www redirects here). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://southasiaexpert.com";
export const SITE_NAME = "South Asia Expert";
export const SITE_EMAIL = "cases@southasiaexpert.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/SouthAsiaExpertWitness";

/** Unique CTA — not Instruct / Retain / Find / Contact Us */
export const BRIEF_CTA = "Brief an expert";
export const BRIEF_CTA_HOW = "Read the FAQ";
export const FAQ_HREF = "/faq";
export const FORM_HREF = "/contact";

/** Single Google Sheet tab for every form submission — no Contact/Instruct split. */
export const SHEET_TAB_NAME = "Southasia Expert";

/** Brand palette from guidelines */
export const COLORS = {
  primary: "#1A2138",
  accent: "#716148",
  highlight: "#1A2138",
  background: "#F6F4EE",
  sectionAlt: "#E8E2D8",
  border: "#D4CDC2",
  heading: "#1A2138",
  body: "#3A4250",
  paper: "#F6F4EE",
  ink: "#1A2138",
  bronze: "#716148",
  steel: "#1A2138",
  muted: "#5A6472",
  white: "#FFFFFF",
} as const;
