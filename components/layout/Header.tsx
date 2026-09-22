"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BRIEF_CTA, FAQ_HREF, FORM_HREF } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: FAQ_HREF },
];

export function Header() {
  const toggleRef = useRef<HTMLInputElement>(null);

  const closeMobileMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false;
  };

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 overflow-x-clip border-b border-[#D4CDC2] bg-[#F6F4EE]/95 backdrop-blur-sm">
      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="header-bar mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0 shrink" aria-label="South Asia Expert home">
          <Image
            src="/brand/wordmark.png"
            alt="South Asia Expert"
            width={220}
            height={48}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-[44px] items-center px-3 text-sm text-[#3A4250] hover:text-[#1A2138]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={FORM_HREF}
            className="ml-3 inline-flex min-h-[44px] items-center bg-[#716148] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1A2138]"
          >
            {BRIEF_CTA}
          </Link>
        </nav>

        <label
          htmlFor="mobile-nav-toggle"
          className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center border border-[#D4CDC2] text-[#1A2138] lg:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="icon-open h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h10" />
          </svg>
          <svg className="icon-close hidden h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      <nav
        id="mobile-menu"
        className="mobile-drawer hidden max-h-[calc(100vh-5rem)] flex-col overflow-y-auto border-t border-[#D4CDC2] bg-[#F6F4EE] peer-checked:flex lg:hidden"
        aria-label="Mobile"
      >
        <div className="px-4 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex min-h-[44px] items-center border-b border-[#D4CDC2] text-[#1A2138]"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={FORM_HREF}
            className="mt-4 flex min-h-[48px] w-full items-center justify-center bg-[#716148] font-semibold text-white"
            onClick={closeMobileMenu}
          >
            {BRIEF_CTA}
          </Link>
        </div>
      </nav>
    </header>
  );
}
