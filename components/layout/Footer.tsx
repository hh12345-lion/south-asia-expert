import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative mt-auto border-t-[3px] border-[#C43B2C] bg-[#0E2433] text-[#DCE5EA]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-12">
        <div className="max-w-md">
          <p className="dossier-label">South Asia · Expert Evidence</p>
          <p className="font-display mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            SouthAsia<span className="text-[#C43B2C]">Expert</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/55">
            Impartial matching for UK solicitors instructing country expert witnesses across Bangladesh, India, Sri
            Lanka, Nepal, and Bhutan. Not a law firm.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="font-display text-base text-white transition hover:text-[#C43B2C] sm:text-lg"
          >
            {SITE_EMAIL}
          </a>
          <nav
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.14em] text-white/50"
            aria-label="Footer"
          >
            <Link href="/contact" className="inline-flex min-h-[44px] items-center hover:text-white">
              Instruct
            </Link>
            <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-white">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-white">
              Cookies
            </Link>
            <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-white">
              Terms
            </Link>
            <CookieSettingsButton variant="footer" />
          </nav>
        </div>
      </div>
    </footer>
  );
}
