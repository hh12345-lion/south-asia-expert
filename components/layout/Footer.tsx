import Image from "next/image";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { BRIEF_CTA, FAQ_HREF, FORM_HREF, SITE_EMAIL, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#716148] bg-[#F6F4EE] text-[#3A4250]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label={`${SITE_NAME} home`}>
            <Image
              src="/brand/monogram.png"
              alt=""
              width={44}
              height={44}
              className="h-10 w-auto"
            />
            <span className="font-display text-lg font-semibold text-[#1A2138]">{SITE_NAME}</span>
          </Link>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-[#5A6472]">
            Matching counsel with country experts for Bangladesh, India, Sri Lanka, Nepal, and Bhutan. Not a law firm.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <a href={`mailto:${SITE_EMAIL}`} className="text-sm font-semibold text-[#1A2138] hover:text-[#716148]">
            {SITE_EMAIL}
          </a>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#5A6472]" aria-label="Footer">
            <Link href="/blog" className="inline-flex min-h-[44px] items-center hover:text-[#1A2138]">
              Blog
            </Link>
            <Link href={FAQ_HREF} className="inline-flex min-h-[44px] items-center hover:text-[#1A2138]">
              FAQ
            </Link>
            <Link href={FORM_HREF} className="inline-flex min-h-[44px] items-center hover:text-[#1A2138]">
              {BRIEF_CTA}
            </Link>
            <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-[#1A2138]">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-[#1A2138]">
              Cookies
            </Link>
            <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-[#1A2138]">
              Terms
            </Link>
            <CookieSettingsButton variant="footer" />
          </nav>
        </div>
      </div>
    </footer>
  );
}
