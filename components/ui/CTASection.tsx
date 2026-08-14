import Link from "next/link";
import { BRIEF_CTA, BRIEF_CTA_HOW, FAQ_HREF, FORM_HREF } from "@/lib/constants";

export function CTASection({
  title = "Ready to brief a South Asia expert?",
  description = "Send the essentials — we respond within one business day. Legal Aid compatible rates for major South Asian asylum profiles.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-y border-[#D8D4CC] bg-white py-14 sm:py-16">
      <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:px-8">
        <div className="max-w-xl">
          <p className="kicker">Next step</p>
          <h2 className="font-display mt-3 text-xl font-semibold text-[#1C2541] sm:text-2xl md:text-3xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#3A4250] sm:text-base">{description}</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
          <Link
            href={FORM_HREF}
            className="inline-flex min-h-[48px] items-center justify-center bg-[#7C6C4F] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#1C2541]"
          >
            {BRIEF_CTA}
          </Link>
          <Link
            href={FAQ_HREF}
            className="inline-flex min-h-[48px] items-center justify-center border border-[#1C2541] px-7 py-3 text-sm font-semibold text-[#1C2541] transition hover:bg-[#1C2541] hover:text-white"
          >
            {BRIEF_CTA_HOW}
          </Link>
        </div>
      </div>
    </section>
  );
}
