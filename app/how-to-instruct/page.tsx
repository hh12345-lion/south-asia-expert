import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How to Instruct a South Asia Expert Witness UK | Step-by-Step Guide",
  description:
    "Step-by-step guide for UK solicitors on instructing a South Asia expert witness for asylum appeals, Legal Aid cases, and immigration tribunal proceedings.",
  path: "/how-to-instruct",
});

const steps = [
  {
    n: 1,
    title: "Identify the Country and Profile",
    body: "Determine the appellant's country of origin (Bangladesh, India, Sri Lanka, Nepal, or Bhutan) and asylum profile (political persecution, religious minority, LGBTQ+, caste, journalist/HRD, diaspora activity). This determines the expert specialism and report scope.",
  },
  {
    n: 2,
    title: "Legal Aid or Privately Funded?",
    body: "Most South Asia expert reports in asylum proceedings are Legal Aid funded. Confirm funding status before instruction. Privately funded cases follow a different fee structure.",
  },
  {
    n: 3,
    title: "Prior Authority from LAA (if Legal Aid)",
    body: "Apply for LAA prior authority before instructing the expert. Include the expert's CV, proposed scope, estimated hours, and fee. Typical LAA rates are £50 to £100 per hour for report preparation.",
  },
  {
    n: 4,
    title: "Letter of Instruction",
    body: "Provide a detailed letter of instruction specifying the expert's role, questions to address, hearing date, and funding arrangements. Reference relevant country guidance (KK [2021] for Sri Lanka) and current CPINs.",
  },
  {
    n: 5,
    title: "Provide All Relevant Materials",
    body: "Include the screening record, Asylum Interview Record (AIR), Home Office refusal letter (RFRL), client witness statement, any previous expert reports, and relevant CPINs and country guidance decisions.",
  },
  {
    n: 6,
    title: "Expert Analysis and Report",
    body: "The expert prepares an independent report addressing the letter of instruction. Standard reports take 2 to 4 weeks. Urgent reports available within 72 hours subject to expert availability.",
  },
  {
    n: 7,
    title: "Written Questions and Oral Evidence",
    body: "If required, respond to written questions from the opposing party. Oral evidence is common in complex political persecution cases, KK [2021] Sri Lanka claims, or where the tribunal directs expert attendance.",
  },
];

export default function HowToInstructPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "How matching works" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="How matching a South Asia expert works"
        subtitle="Seven steps for UK immigration solicitors and Legal Aid practitioners."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 max-w-3xl text-[#3A4250] leading-relaxed">
          Experts instructed through SouthAsiaExpert are selected for academic and field-research qualifications, not
          political alignment. The expert&apos;s duty is to the tribunal under CPR Part 35 — to provide impartial
          country analysis whether the solicitor acts for the appellant or the respondent, and regardless of which
          South Asian country or asylum profile is at issue.
        </p>
        <div className="divide-y divide-[#D8D4CC] border-y border-[#D8D4CC]">
          {steps.map((s) => (
            <div key={s.n} className="grid grid-cols-[auto_1fr] gap-4 py-6 sm:gap-6">
              <span className="font-display text-xs tabular-nums text-[#7C6C4F]">
                {String(s.n).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display font-semibold text-[#1C2541]">{s.title}</h2>
                <p className="mt-2 leading-relaxed text-[#3A4250]">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <RelatedLinks
          links={[
            { label: "Instructing guide", href: "/guides/instructing-south-asia-expert" },
            { label: "Qualifications", href: "/qualifications" },
            { label: "Brief an expert", href: "/contact" },
          ]}
        />
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center bg-[#7C6C4F] px-6 py-3 font-semibold text-white hover:bg-[#1C2541]"
        >
          Brief an expert
        </Link>
      </PageShell>
    </>
  );
}
