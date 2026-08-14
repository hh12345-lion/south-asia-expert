import Link from "next/link";
import { BRIEF_CTA } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="bg-[#EBE6DC] py-14 text-center md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="font-display text-7xl font-semibold text-[#7C6C4F] sm:text-8xl" aria-hidden="true">
          404
        </p>
        <h1 className="font-display mt-4 text-3xl font-semibold text-[#1C2541] sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-lg text-[#3A4250]">This page does not exist or may have moved.</p>

        <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Link
            href="/"
            className="inline-flex min-h-[44px] w-full items-center justify-center bg-[#7C6C4F] px-6 py-3 font-semibold text-white transition hover:bg-[#1C2541] sm:w-auto sm:min-w-[200px] sm:px-8"
          >
            Return to homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center border border-[#1C2541] px-6 py-3 font-semibold text-[#1C2541] transition hover:bg-[#1C2541] hover:text-white sm:w-auto sm:min-w-[200px] sm:px-8"
          >
            {BRIEF_CTA}
          </Link>
        </div>
      </div>
    </section>
  );
}
