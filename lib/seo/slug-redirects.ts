/** 301 redirects — landing-page site: only /faq and /contact stay as extra pages */
export const SEO_SLUG_REDIRECTS: Record<string, string> = {
  "/what-is-a-somalia-expert-witness": "/",
  "/what-is-a-south-asia-expert-witness": "/",
  "/regions": "/",
  "/regions/bangladesh": "/",
  "/regions/india": "/",
  "/regions/sri-lanka": "/",
  "/regions/nepal": "/",
  "/regions/bhutan": "/",
  "/moj-country-guidance": "/",
  "/fees": "/",
  "/experts": "/",
  "/countries": "/",
  "/asylum-profiles": "/",
  "/case-types": "/",
  "/guides": "/",
  "/services": "/",
  "/qualifications": "/",
  "/glossary": "/",
  "/how-to-instruct": "/",
  "/south-asia-asylum-explained": "/",
  "/cpin-country-guidance": "/",
};

/** Hub prefixes redirected to the landing page (covers [slug] routes) */
export const LANDING_REDIRECT_PREFIXES = [
  "/countries",
  "/asylum-profiles",
  "/case-types",
  "/guides",
] as const;
