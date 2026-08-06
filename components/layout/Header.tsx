"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  asylumProfilesNavLinks,
  caseTypesNavLinks,
  countriesNavLinks,
  mobileNavGroups,
  resourcesNavLinks,
} from "@/data/navigation";
import { NavDropdown } from "@/components/layout/NavDropdown";

export function Header() {
  const toggleRef = useRef<HTMLInputElement>(null);
  const [scrolled, setScrolled] = useState(false);

  const closeMobileMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false;
  };

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        closeMobileMenu();
      }
    };
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 overflow-x-clip">
      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div
        className={`header-bar border-b transition-[background,box-shadow] duration-300 ${
          scrolled
            ? "border-white/10 bg-[#0E2433]/95 shadow-lg backdrop-blur-md"
            : "border-white/10 bg-[#0E2433]"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-stretch gap-4 px-4 sm:px-6 lg:px-8">
          {/* Brand block — hero-level identity in chrome */}
          <Link
            href="/"
            className="group relative flex min-h-[64px] shrink-0 flex-col justify-center border-r border-white/15 py-3 pr-5 sm:pr-8"
          >
            <span className="dossier-label !text-[#C43B2C]">South Asia · Expert Evidence</span>
            <span className="font-display text-lg font-semibold leading-none tracking-tight text-white sm:text-xl lg:text-2xl">
              SouthAsia<span className="text-[#C43B2C]">Expert</span>
            </span>
            <span
              className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C43B2C] transition-all duration-300 group-hover:w-full"
              aria-hidden
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-end gap-0 lg:flex" aria-label="Main">
            <NavDropdown
              label="Countries"
              href="/countries"
              items={countriesNavLinks}
              blurb="Five jurisdictions for country-condition evidence"
              columns={2}
            />
            <NavDropdown
              label="Asylum Profiles"
              href="/asylum-profiles"
              items={asylumProfilesNavLinks}
              blurb="High-volume South Asian risk profiles"
              columns={2}
            />
            <NavDropdown
              label="Case Types"
              href="/case-types"
              items={caseTypesNavLinks}
              blurb="Proceedings where expert reports are instructed"
              columns={2}
            />
            <NavDropdown
              label="Resources"
              href="/guides"
              items={[...resourcesNavLinks]}
              blurb="CPIN, guidance, and solicitor briefing notes"
              columns={1}
            />
            <Link
              href="/contact"
              className="ml-3 inline-flex min-h-[44px] items-center self-center border border-[#C43B2C] bg-[#C43B2C] px-5 py-2 text-sm font-semibold text-white transition hover:bg-transparent hover:text-[#C43B2C]"
            >
              Instruct
            </Link>
          </nav>

          <label
            htmlFor="mobile-nav-toggle"
            className="mobile-nav-label ml-auto inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center self-center border border-white/25 text-white lg:hidden"
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
      </div>

      <nav
        id="mobile-menu"
        className="mobile-drawer hidden max-h-[calc(100vh-5rem)] flex-col overflow-y-auto border-b border-[#C5D0D8] bg-[#F5F7F8] peer-checked:flex lg:hidden"
        aria-label="Mobile"
      >
        <div className="px-4 py-6">
          {mobileNavGroups.map((group) => (
            <div key={group.title} className="mb-8">
              <p className="dossier-label mb-3">{group.title}</p>
              <ul className="space-y-0 border-l border-[#C5D0D8]">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex min-h-[44px] items-center border-b border-[#C5D0D8]/60 px-4 text-[#2C3A45] transition hover:border-l-2 hover:border-l-[#C43B2C] hover:pl-5 hover:text-[#0E2433]"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="/contact"
            className="flex min-h-[48px] w-full items-center justify-center bg-[#C43B2C] font-semibold text-white"
            onClick={closeMobileMenu}
          >
            Instruct an Expert
          </Link>
        </div>
      </nav>
    </header>
  );
}
