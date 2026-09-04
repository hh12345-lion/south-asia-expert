import { SITE_URL } from "../constants";

export type PublicUrlEntry = {
  path: string;
  priority: number;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
};

/** Public indexable URLs for the landing-page site */
export const APP_STATIC_PATHS: PublicUrlEntry[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/faq", priority: 0.9, changefreq: "monthly" },
  { path: "/cookie-policy", priority: 0.5, changefreq: "yearly" },
  { path: "/privacy", priority: 0.3, changefreq: "yearly" },
  { path: "/terms", priority: 0.3, changefreq: "yearly" },
];

export const NON_INDEXABLE_PATHS = ["/contact", "/thank-you"] as const;

export const ROBOTS_DISALLOW_PATHS = ["/thank-you", "/contact", "/api/"] as const;

export type PublicUrlInventory = {
  siteUrl: string;
  entries: PublicUrlEntry[];
  allPaths: string[];
  allUrls: string[];
};

export function buildPublicUrlInventory(siteUrl: string = SITE_URL): PublicUrlInventory {
  const origin = siteUrl.replace(/\/$/, "");
  const byPath = new Map<string, PublicUrlEntry>();
  for (const entry of APP_STATIC_PATHS) {
    const path = entry.path.startsWith("/") ? entry.path : `/${entry.path}`;
    if (NON_INDEXABLE_PATHS.includes(path as (typeof NON_INDEXABLE_PATHS)[number])) continue;
    byPath.set(path, { ...entry, path });
  }

  const entries = [...byPath.values()].sort((a, b) => a.path.localeCompare(b.path));
  const allPaths = entries.map((e) => e.path);
  const allUrls = allPaths.map((p) => (p === "/" ? origin : `${origin}${p}`));

  return { siteUrl: origin, entries, allPaths, allUrls };
}
