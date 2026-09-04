#!/usr/bin/env npx tsx
/**
 * Verifies landing-page SEO: sitemap inventory, robots, slug redirects.
 * Run: npm run seo:verify
 */
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { buildPublicUrlInventory } from "../lib/seo/publicUrlInventory";
import { SEO_SLUG_REDIRECTS } from "../lib/seo/slug-redirects";
import { SITE_URL } from "../lib/constants";

const SITEMAP_PATH = join(process.cwd(), "public", "sitemap.xml");
const ROBOTS_PATH = join(process.cwd(), "public", "robots.txt");

const REQUIRED_REDIRECTS: Record<string, string> = {
  "/what-is-a-somalia-expert-witness": "/",
  "/regions": "/",
  "/moj-country-guidance": "/",
  "/fees": "/",
  "/experts": "/",
  "/how-to-instruct": "/",
  "/countries": "/",
};

function extractLocs(xml: string): string[] {
  const locs: string[] = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    locs.push(m[1].trim());
  }
  return locs.sort();
}

function main() {
  let failed = false;

  if (!existsSync(SITEMAP_PATH)) {
    console.error(`Missing ${SITEMAP_PATH}. Run: npm run seo:generate`);
    process.exit(1);
  }
  if (!existsSync(ROBOTS_PATH)) {
    console.error(`Missing ${ROBOTS_PATH}. Run: npm run seo:generate`);
    process.exit(1);
  }

  const inventory = buildPublicUrlInventory(SITE_URL);
  const expected = [...inventory.allUrls].sort();
  const actual = extractLocs(readFileSync(SITEMAP_PATH, "utf-8"));

  const missing = expected.filter((u) => !actual.includes(u));
  const extra = actual.filter((u) => !expected.includes(u));

  if (missing.length > 0) {
    failed = true;
    console.error(`Sitemap missing ${missing.length} URL(s):`);
    missing.forEach((u) => console.error(`  - ${u}`));
  }
  if (extra.length > 0) {
    failed = true;
    console.error(`Sitemap has ${extra.length} unexpected URL(s):`);
    extra.forEach((u) => console.error(`  + ${u}`));
  }

  const robots = readFileSync(ROBOTS_PATH, "utf-8");
  if (!robots.includes(`Sitemap: ${inventory.siteUrl}/sitemap.xml`)) {
    failed = true;
    console.error(`robots.txt missing correct Sitemap line for ${inventory.siteUrl}`);
  }
  for (const path of ["/thank-you", "/contact", "/api/"]) {
    if (!robots.includes(`Disallow: ${path}`)) {
      failed = true;
      console.error(`robots.txt missing Disallow: ${path}`);
    }
  }

  for (const [from, to] of Object.entries(REQUIRED_REDIRECTS)) {
    if (SEO_SLUG_REDIRECTS[from] !== to) {
      failed = true;
      console.error(`Missing or incorrect redirect: ${from} -> ${to}`);
    }
  }

  if (SEO_SLUG_REDIRECTS["/faq"]) {
    failed = true;
    console.error("/faq must not redirect — it is a public page");
  }

  if (failed) {
    console.error("\nSEO verification failed.");
    process.exit(1);
  }

  console.log(`SEO verify OK: ${actual.length} sitemap URLs and landing-page redirects.`);
}

main();
