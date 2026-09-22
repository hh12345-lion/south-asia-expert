import Link from "next/link";
import { BRIEF_CTA_HOW, FAQ_HREF } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank you",
  description: "Your expert witness brief has been received. We will respond within one business day.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-[#E8E2D8] py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="kicker">Received</p>
          <h1 className="font-display mt-4 text-3xl font-semibold text-[#1A2138] sm:text-4xl">Thank you</h1>
          <p className="mt-4 text-lg text-[#3A4250]">
            Your brief has been received. We will respond within one business day.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-[44px] min-w-[200px] items-center justify-center bg-[#716148] px-8 py-3 font-semibold text-white transition hover:bg-[#1A2138]"
            >
              Return to homepage
            </Link>
            <Link
              href={FAQ_HREF}
              className="inline-flex min-h-[44px] min-w-[200px] items-center justify-center border border-[#1A2138] px-8 py-3 font-semibold text-[#1A2138] transition hover:bg-[#1A2138] hover:text-white"
            >
              {BRIEF_CTA_HOW}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F4EE] py-12">
        <div className="mx-auto max-w-2xl px-4 text-[#3A4250] sm:px-6">
          <h2 className="font-display text-lg font-semibold text-[#1A2138]">What happens next?</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed">
            <li>We review your case details and match you with a qualified South Asia expert witness.</li>
            <li>You receive a response within one business day with proposed scope and timeline.</li>
            <li>Legal Aid cases: confirm LAA prior authority before the expert begins work.</li>
          </ul>
          <Link
            href={FAQ_HREF}
            className="mt-6 inline-flex min-h-[44px] items-center font-semibold text-[#716148] hover:underline"
          >
            {BRIEF_CTA_HOW}
          </Link>
        </div>
      </section>
    </>
  );
}
