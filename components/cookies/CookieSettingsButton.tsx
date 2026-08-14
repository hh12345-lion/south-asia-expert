"use client";

import { useCookieConsent } from "./CookieConsentContext";

type Props = {
  className?: string;
  variant?: "footer" | "inline";
};

export function CookieSettingsButton({ className = "", variant = "footer" }: Props) {
  const { openPreferences } = useCookieConsent();

  const base =
    variant === "footer"
      ? "inline-flex min-h-[44px] items-center text-sm text-[#5A6472] hover:text-[#1C2541] focus:outline-none focus-visible:underline"
      : "inline-flex min-h-[44px] items-center text-sm font-medium text-[#7C6C4F] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C6C4F]";

  return (
    <button type="button" onClick={openPreferences} className={`${base} ${className}`}>
      Cookie Settings
    </button>
  );
}
