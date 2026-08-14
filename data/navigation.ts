import { asylumProfiles } from "./asylum-profiles";
import { caseTypes } from "./case-types";
import { countries } from "./countries";
import { guides } from "./guides";

export const asylumProfilesNavLinks = asylumProfiles.map((p) => ({
  label: p.title,
  href: `/asylum-profiles/${p.slug}`,
}));

export const countriesNavLinks = countries.map((c) => ({
  label: c.title,
  href: `/countries/${c.slug}`,
}));

export const caseTypesNavLinks = caseTypes.map((c) => ({
  label: c.title,
  href: `/case-types/${c.slug}`,
}));

export const resourcesNavLinks = [
  { label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" },
  { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
  { label: "Solicitor Guides", href: "/guides" },
  { label: "How matching works", href: "/how-to-instruct" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "Glossary", href: "/glossary" },
] as const;

export const guidesNavLinks = guides.map((g) => ({
  label: g.h1.replace(/:.*$/, "").slice(0, 40),
  href: `/guides/${g.slug}`,
}));

export const mobileNavGroups = [
  {
    title: "Countries",
    links: [{ label: "All Countries", href: "/countries" }, ...countriesNavLinks],
  },
  {
    title: "Asylum Profiles",
    links: [{ label: "All Asylum Profiles", href: "/asylum-profiles" }, ...asylumProfilesNavLinks],
  },
  {
    title: "Case Types",
    links: [{ label: "All Case Types", href: "/case-types" }, ...caseTypesNavLinks],
  },
  {
    title: "Resources",
    links: [...resourcesNavLinks],
  },
] as const;
