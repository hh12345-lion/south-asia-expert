export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.southasiaexpert.com";
export const SITE_NAME = "SouthAsiaExpert";
export const SITE_EMAIL = "cases@southasiaexpert.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/SouthAsiaExpertWitness";

/** Monsoon-ink design tokens — cool paper, deep ink, vermilion, jade */
export const COLORS = {
  primary: "#0E2433",
  accent: "#C43B2C",
  highlight: "#1F6B5C",
  background: "#F5F7F8",
  sectionAlt: "#DCE5EA",
  border: "#C5D0D8",
  heading: "#0E2433",
  body: "#2C3A45",
  paper: "#F5F7F8",
  ink: "#0E2433",
  vermilion: "#C43B2C",
  jade: "#1F6B5C",
  mist: "#DCE5EA",
} as const;
