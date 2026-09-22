import type { Metadata } from "next";
import { SITE_URL } from "./constants";

const OG_IMAGE_ALT = "South Asia Expert";

export const OPEN_GRAPH_IMAGE = {
  url: `${SITE_URL}/og-default.jpg`,
  width: 1200,
  height: 630,
  alt: OG_IMAGE_ALT,
} as const;

export function createMetadata({
  title,
  description,
  path = "",
  noindex = false,
  follow = true,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
  follow?: boolean;
  /** Bypass layout title template (use for homepage or fully custom titles). */
  absoluteTitle?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const resolvedTitle = absoluteTitle ? { absolute: title } : title;
  return {
    title: resolvedTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: typeof resolvedTitle === "string" ? resolvedTitle : title,
      description,
      url,
      siteName: "South Asia Expert",
      locale: "en",
      type: "website",
      images: [OPEN_GRAPH_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: typeof resolvedTitle === "string" ? resolvedTitle : title,
      description,
      images: [OPEN_GRAPH_IMAGE.url],
    },
    robots: noindex
      ? { index: false, follow, googleBot: { index: false, follow } }
      : { index: true, follow: true },
  };
}
