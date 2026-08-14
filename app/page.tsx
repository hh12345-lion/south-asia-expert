import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { CardGrid } from "@/components/ui/CardGrid";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { asylumProfiles } from "@/data/asylum-profiles";
import { services } from "@/data/services";
import { caseTypes } from "@/data/case-types";
import { countries } from "@/data/countries";
import { BRIEF_CTA, BRIEF_CTA_HOW, FAQ_HREF, FORM_HREF } from "@/lib/constants";
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

const steps = [
  {
    title: "Send a brief",
    body: "Name, firm, email, and a few lines on country, profile, and hearing date. That is enough to start matching.",
  },
  {
    title: "We match an expert",
    body: "Independent witnesses for Bangladesh, India, Sri Lanka, Nepal, and Bhutan — duty to the tribunal, not to either party.",
  },
  {
    title: "Report for the hearing",
    body: "CPR Part 35 and Practice Direction paragraph 10 reports, Legal Aid compatible, typically 2–4 weeks.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      <section className="border-b border-[#D8D4CC] bg-[#F7F5F0]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-end lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="kicker">South Asia · UK tribunals</p>
            <h1 className="font-display mt-4 text-3xl font-semibold leading-[1.15] text-[#1C2541] min-[375px]:text-4xl sm:text-5xl">
              Country expert evidence for South Asian asylum appeals
            </h1>
          </div>
          <div>
            <p className="max-w-lg text-base leading-relaxed text-[#3A4250] sm:text-lg">
              We match UK solicitors with independent expert witnesses for Bangladesh, India, Sri Lanka, Nepal, and
              Bhutan — reports that answer the tribunal&apos;s questions, not a party&apos;s narrative.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={FORM_HREF}
                className="inline-flex min-h-[48px] items-center justify-center bg-[#7C6C4F] px-7 py-3 font-semibold text-white hover:bg-[#1C2541]"
              >
                {BRIEF_CTA}
              </Link>
              <Link
                href={FAQ_HREF}
                className="inline-flex min-h-[48px] items-center justify-center border border-[#1C2541] px-7 py-3 font-semibold text-[#1C2541] hover:bg-[#1C2541] hover:text-white"
              >
                {BRIEF_CTA_HOW}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="kicker">How it works</p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-[#1C2541]">Three steps from brief to report</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-[#7C6C4F] pt-5">
                <p className="text-sm font-semibold text-[#7C6C4F]">{i + 1}</p>
                <h3 className="font-display mt-2 text-lg font-semibold text-[#1C2541]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3A4250]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-[#D8D4CC] bg-[#EBE6DC] py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="kicker">Why expert evidence</p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-[#1C2541]">
            Why South Asia evidence fails on CPIN alone
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-[#3A4250]">
            <p>
              In the year ending September 2025, Bangladesh, India, and Sri Lanka ranked among the nationalities with
              the highest asylum claims from visa holders. South Asia is the second most significant claim region after
              Sub-Saharan Africa — yet refusals still lean on generic CPIN positions that blur country-specific risk,
              profile, and personal factors.
            </p>
            <p>
              Independent expert evidence bridges that gap: political violence after Bangladesh&apos;s August 2024
              transition, Hindutva-related minority risk in India, KK [2021] Tamil return risk in Sri Lanka, caste and
              land conflict in Nepal, and Lhotshampa persecution histories in Bhutan.
            </p>
            <p>
              SouthAsiaExpert is politically neutral. We are not a diaspora organisation, advocacy group, or law firm.
              Experts matched through this site owe their duty to the tribunal.
            </p>
          </div>
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
              <li key={item.t} className="border-l-4 border-[#7C6C4F] bg-white px-4 py-4">
                <p className="font-display text-sm font-semibold text-[#1C2541]">{item.t}</p>
                <p className="mt-1 text-sm text-[#3A4250]">{item.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F7F5F0] py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="kicker">Jurisdictions</p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-[#1C2541]">South Asia by country</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#D8D4CC]">
                  <th className="py-3 pr-4 font-semibold text-[#1C2541]">Country</th>
                  <th className="py-3 font-semibold text-[#1C2541]">Focus</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((c) => (
                  <tr key={c.slug} className="border-b border-[#D8D4CC]/80">
                    <td className="py-4 pr-4 align-top font-semibold text-[#1C2541]">{c.title}</td>
                    <td className="py-4 text-[#3A4250]">{c.metaDescription}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="kicker">Risk profiles</p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-[#1C2541]">Key South Asian asylum profiles</h2>
          <p className="mt-3 max-w-2xl text-[#3A4250]">
            High-volume profiles in UK tribunals: political persecution, religious minorities, LGBTQ claims, and
            failed-asylum return risk.
          </p>
          <div className="mt-8">
            <CardGrid
              items={featuredProfiles.map((p) => ({
                title: p!.title,
                description: p!.metaDescription.slice(0, 160) + "...",
              }))}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#D8D4CC] bg-[#EBE6DC] py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="kicker">Services</p>
            <h2 className="font-display mt-2 text-2xl font-semibold text-[#1C2541]">Expert witness services</h2>
            <div className="mt-6">
              <CardGrid
                items={services.map((s) => ({
                  title: s.title,
                  description: s.description,
                }))}
              />
            </div>
          </div>
          <div>
            <p className="kicker">Proceedings</p>
            <h2 className="font-display mt-2 text-2xl font-semibold text-[#1C2541]">Where reports are used</h2>
            <div className="mt-6">
              <CardGrid
                items={caseTypes.slice(0, 6).map((c) => ({
                  title: c.title,
                  description: c.metaDescription.slice(0, 120) + "...",
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F0] py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="kicker">Guidance</p>
          <h2 className="font-display mt-3 max-w-2xl text-2xl font-semibold text-[#1C2541] sm:text-3xl">
            CPIN and country guidance — beyond the generic position
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[#3A4250]">
            Stay current with South Asia CPINs and country guidance including KK [2021] for Sri Lanka Tamil claims.
            Home Office materials leave gaps for Bangladesh, India, Nepal, and Bhutan. Expert analysis fills them for
            the FTT and Upper Tribunal.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
