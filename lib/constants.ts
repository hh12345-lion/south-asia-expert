export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.southasiaexpert.com";
export const SITE_NAME = "SouthAsiaExpert";
export const SITE_EMAIL = "cases@southasiaexpert.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/SouthAsiaExpertWitness";

/** Unique CTA — not Instruct / Retain / Find / Contact Us */
export const BRIEF_CTA = "Brief an expert";
export const BRIEF_CTA_HOW = "Read the FAQ";
export const FAQ_HREF = "/faq";
export const FORM_HREF = "/contact";

/** Single Google Sheet tab for every form submission — no Contact/Instruct split. */
export const SHEET_TAB_NAME = "Southasia Expert";

/** Stone-and-bronze tokens — unused by the five comparison sites */
export const COLORS = {
  primary: "#1C2541",
  accent: "#7C6C4F",
  highlight: "#3D5A80",
  background: "#F7F5F0",
  sectionAlt: "#EBE6DC",
  border: "#D8D4CC",
  heading: "#1C2541",
  body: "#3A4250",
  paper: "#F7F5F0",
  ink: "#1C2541",
  bronze: "#7C6C4F",
  steel: "#3D5A80",
  muted: "#5A6472",
} as const;
