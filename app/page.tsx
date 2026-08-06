import Link from "next/link";
import Image from "next/image";
import { CTASection } from "@/components/ui/CTASection";
import { CardGrid } from "@/components/ui/CardGrid";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { asylumProfiles } from "@/data/asylum-profiles";
import { services } from "@/data/services";
import { caseTypes } from "@/data/case-types";
import { countries } from "@/data/countries";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "South Asia Expert Witness UK | Bangladesh, India, Sri Lanka & Nepal Asylum Reports",
  description:
    "Find qualified South Asian country expert witnesses in the UK: Bangladesh, India, Sri Lanka, Nepal, and Bhutan. Country condition reports for asylum appeals and immigration tribunals. Legal Aid compatible.",
  path: "/",
});

const featuredProfileSlugs = [
  "political-persecution-south-asia",
  "religious-minority-persecution",
  "lgbtq-south-asia",
  "failed-asylum-seekers-return",
] as const;

const featuredProfiles = featuredProfileSlugs
  .map((slug) => asylumProfiles.find((p) => p.slug === slug))
  .filter(Boolean);

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      {/* Full-bleed monsoon hero — brand as hero-level signal */}
      <section className="relative min-h-[min(92vh,52rem)] overflow-hidden bg-[#0E2433]">
        <Image
          src="/images/nepal-valley.jpg"
          alt="Himalayan ridgelines spanning Nepal and the wider South Asian highland frontier"
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0E2433]/92 via-[#0E2433]/72 to-[#0E2433]/35"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E2433] via-transparent to-[#0E2433]/40" aria-hidden />

        <div className="relative z-[1] mx-auto flex min-h-[min(92vh,52rem)] max-w-7xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 sm:pb-20 lg:px-8">
          <p className="dossier-label animate-rise text-white/80">SouthAsiaExpert</p>
          <h1 className="font-display animate-rise-delay mt-4 max-w-4xl text-3xl font-semibold leading-[1.12] tracking-tight text-white min-[375px]:text-4xl sm:text-5xl lg:text-6xl">
            Country expert evidence for South Asian asylum appeals
          </h1>
          <p className="animate-rise-delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            We match UK solicitors with independent expert witnesses for Bangladesh, India, Sri Lanka, Nepal, and
            Bhutan — CPR Part 35 reports that answer the tribunal&apos;s questions, not a party&apos;s narrative.
          </p>
          <div className="animate-rise-delay-2 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center bg-[#C43B2C] px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0E2433]"
            >
              Instruct an Expert
            </Link>
            <Link
              href="/countries"
              className="inline-flex min-h-[48px] items-center justify-center border border-white/40 px-8 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Browse countries
            </Link>
          </div>
        </div>
      </section>

      {/* Dossier intro — asymmetric label + prose */}
      <section className="border-b border-[#C5D0D8] bg-[#F5F7F8] py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[11rem_1fr] lg:gap-16 lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="dossier-label">01 — Brief</p>
            <h2 className="font-display mt-3 text-xl font-semibold text-[#0E2433] sm:text-2xl">
              Why South Asia evidence fails on CPIN alone
            </h2>
          </div>
          <div className="max-w-3xl space-y-5 text-[#2C3A45] leading-relaxed">
            <p>
              In the year ending September 2025, Bangladesh, India, and Sri Lanka ranked among the nationalities with
              the highest asylum claims from visa holders. South Asia is the second most significant claim region after
              Sub-Saharan Africa — yet refusals still lean on generic CPIN positions that blur country-specific risk,
              profile, and personal factors.
            </p>
            <p>
              Independent expert evidence bridges that gap. A Part 35-compliant report can address political violence
              after Bangladesh&apos;s August 2024 transition, Hindutva-related minority risk in India, KK [2021]
              Tamil return risk in Sri Lanka, caste and land conflict in Nepal, and Lhotshampa persecution histories in
              Bhutan — with sources the tribunal can weigh.
            </p>
            <p>
              SouthAsiaExpert is politically neutral. We are not a diaspora organisation, advocacy group, or law firm.
              Experts matched through this site owe their duty to the tribunal across every jurisdiction and profile we
              cover.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  t: "CPR Part 35 compliant",
                  d: "Immigration Tribunal Practice Direction paragraph 10 and current expert evidence standards.",
                },
                {
                  t: "Five countries",
                  d: "Bangladesh, India, Sri Lanka, Nepal, Bhutan. Pakistan is covered separately.",
                },
                {
                  t: "Legal Aid compatible",
                  d: "LAA prior authority rates available for major South Asian asylum profiles.",
                },
                {
                  t: "Impartial analysis",
                  d: "Objective country conditions — not advocacy for any political or regional interest.",
                },
              ].map((item) => (
                <li key={item.t} className="border-l-[3px] border-[#1F6B5C] pl-4">
                  <p className="font-display text-sm font-semibold text-[#0E2433]">{item.t}</p>
                  <p className="mt-1 text-sm text-[#2C3A45]">{item.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Country rail — unique horizontal index */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="dossier-label">02 — Jurisdictions</p>
              <h2 className="font-display mt-2 text-2xl font-semibold text-[#0E2433] sm:text-3xl">
                South Asia by country
              </h2>
            </div>
            <Link href="/countries" className="text-sm font-semibold uppercase tracking-wider text-[#C43B2C] hover:text-[#0E2433]">
              All country hubs →
            </Link>
          </div>
        </div>
        <div className="country-rail mx-auto max-w-7xl bg-[#F5F7F8]">
          {countries.map((c, i) => (
            <Link key={c.slug} href={`/countries/${c.slug}`} className="group text-[#0E2433]">
              <span className="font-display text-[0.65rem] tabular-nums text-[#C43B2C]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display mt-3 block text-xl font-semibold sm:text-2xl">{c.title}</span>
              <span className="mt-2 block max-w-[12rem] text-sm leading-snug text-[#2C3A45] group-hover:text-white/80">
                {c.metaDescription.slice(0, 90)}…
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Image split + profiles */}
      <section className="border-y border-[#C5D0D8] bg-[#F5F7F8]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[22rem] lg:min-h-full">
            <Image
              src="/images/india-architecture.jpg"
              alt="Mughal-era marble architecture in northern India — context for India country-condition evidence"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
            <p className="dossier-label">03 — Risk profiles</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-[#0E2433] sm:text-3xl">
              Key South Asian asylum profiles
            </h2>
            <p className="mt-4 max-w-lg text-[#2C3A45] leading-relaxed">
              High-volume profiles in UK tribunals: political persecution, religious minorities, LGBTQ claims, and
              failed-asylum return risk — each with country-specific source material.
            </p>
            <div className="mt-8">
              <CardGrid
                items={featuredProfiles.map((p) => ({
                  title: p!.title,
                  description: p!.metaDescription.slice(0, 120) + "...",
                  href: `/asylum-profiles/${p!.slug}`,
                }))}
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
              <Link href="/asylum-profiles" className="text-[#C43B2C] hover:text-[#0E2433]">
                All profiles
              </Link>
              <Link href="/south-asia-asylum-explained" className="text-[#C43B2C] hover:text-[#0E2433]">
                Asylum explained
              </Link>
              <Link href="/guides" className="text-[#C43B2C] hover:text-[#0E2433]">
                Solicitor guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services + case types as dossier columns */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <p className="dossier-label">04 — Services</p>
            <h2 className="font-display mt-2 text-2xl font-semibold text-[#0E2433]">Expert witness services</h2>
            <div className="mt-8">
              <CardGrid
                items={services.map((s) => ({
                  title: s.title,
                  description: s.description,
                  href: "/services",
                }))}
              />
            </div>
          </div>
          <div>
            <p className="dossier-label">05 — Case types</p>
            <h2 className="font-display mt-2 text-2xl font-semibold text-[#0E2433]">Where reports are instructed</h2>
            <div className="mt-8">
              <CardGrid
                items={caseTypes.slice(0, 6).map((c) => ({
                  title: c.title,
                  description: c.metaDescription.slice(0, 100) + "...",
                  href: `/case-types/${c.slug}`,
                }))}
              />
            </div>
            <Link
              href="/case-types"
              className="mt-6 inline-flex min-h-[44px] items-center text-sm font-semibold uppercase tracking-wider text-[#C43B2C] hover:text-[#0E2433]"
            >
              View all case types →
            </Link>
          </div>
        </div>
      </section>

      {/* CPIN visual band */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tea-hills.jpg"
            alt="South Asian waterways and coastal lowlands — geographic context for country guidance"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0E2433]/85" aria-hidden />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="dossier-label text-white/70">06 — Guidance</p>
          <h2 className="font-display mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
            CPIN & country guidance — beyond the generic position
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            Stay current with South Asia CPINs and country guidance including KK [2021] for Sri Lanka Tamil claims. Our
            pillar guides explain where Home Office materials leave gaps for Bangladesh, India, Nepal, and Bhutan —
            and how expert analysis fills them for the FTT and Upper Tribunal.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/south-asia-asylum-explained"
              className="inline-flex min-h-[48px] items-center justify-center bg-[#C43B2C] px-6 py-3 font-semibold text-white hover:bg-white hover:text-[#0E2433]"
            >
              South Asia Asylum Explained
            </Link>
            <Link
              href="/cpin-country-guidance"
              className="inline-flex min-h-[48px] items-center justify-center border border-white/50 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              CPIN & Country Guidance
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
