"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentContext";

const btnPrimary =
  "inline-flex min-h-[44px] w-full items-center justify-center rounded-none bg-[#7C6C4F] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(200,146,42,0.35)] transition hover:bg-[#5F5340] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C6C4F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2541] sm:w-auto";
const btnSecondary =
  "inline-flex min-h-[44px] w-full items-center justify-center rounded-none border border-white/35 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2541] sm:w-auto";
const btnGhost =
  "inline-flex min-h-[44px] w-full items-center justify-center rounded-none px-4 py-2.5 text-sm font-medium text-white/90 underline-offset-2 transition hover:bg-white/8 hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto";

export function CookieBanner() {
  const { status, acceptAll, rejectNonEssential, openPreferences } = useCookieConsent();

  if (status !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      aria-modal="false"
      className="fixed inset-x-0 bottom-0 z-[100] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 animate-[slideUp_0.45s_cubic-bezier(0.22,1,0.36,1)]"
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-none border border-[#7C6C4F]/30 bg-[#1C2541] shadow-[0_-4px_40px_rgba(0,0,0,0.28),0_8px_32px_rgba(11,45,78,0.4)]">
        <div className="h-1 bg-gradient-to-r from-[#7C6C4F] via-[#3D5A80] to-[#7C6C4F]" aria-hidden />
        <div className="p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#7C6C4F]">
                Privacy & compliance
              </p>
              <h2 id="cookie-banner-title" className="mt-1.5 text-lg font-bold text-white sm:text-xl">
                We value your privacy
              </h2>
              <p id="cookie-banner-desc" className="mt-2 text-sm leading-relaxed text-white/82">
                We use cookies to run this website securely, understand how solicitors use our
                resources, and measure marketing performance. You can accept all cookies, reject
                non-essential cookies, or customise your preferences. See our{" "}
                <Link href="/cookie-policy" className="font-semibold text-[#7C6C4F] hover:underline">
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="font-semibold text-[#7C6C4F] hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <p className="mt-2 text-xs text-white/55">
                California residents: we do not sell personal information. Non-essential cookies are
                off until you opt in.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:max-w-md lg:shrink-0 lg:justify-end">
              <button type="button" onClick={acceptAll} className={btnPrimary}>
                Accept All
              </button>
              <button type="button" onClick={rejectNonEssential} className={btnSecondary}>
                Reject Non-Essential
              </button>
              <button type="button" onClick={openPreferences} className={btnGhost}>
                Customize Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
