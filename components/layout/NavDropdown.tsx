import Link from "next/link";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  blurb?: string;
  columns?: 1 | 2;
};

/** Full-width under-header shelf — not a floating card menu */
export function NavDropdown({ label, href, items, blurb, columns = 1 }: NavDropdownProps) {
  return (
    <div className="group relative self-stretch">
      <Link
        href={href}
        className="relative inline-flex h-full min-h-[64px] items-center gap-1.5 px-3 text-sm text-white/80 transition hover:text-white"
      >
        <span>{label}</span>
        <svg
          className="h-3 w-3 opacity-50 transition group-hover:rotate-180 group-hover:opacity-100 group-focus-within:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <span
          className="absolute inset-x-3 bottom-0 h-0.5 origin-left scale-x-0 bg-[#C43B2C] transition-transform duration-200 group-hover:scale-x-100 group-focus-within:scale-x-100"
          aria-hidden
        />
      </Link>

      {/* Shelf panel */}
      <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-[min(92vw,36rem)] -translate-x-1/2 pt-0 opacity-0 transition-[opacity,visibility] duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
        <div className="nav-shelf overflow-hidden border border-[#C5D0D8] border-t-[#C43B2C] border-t-[3px] bg-[#F5F7F8] shadow-[0_24px_48px_rgba(14,36,51,0.18)]">
          <div className="flex items-end justify-between gap-4 border-b border-[#C5D0D8] bg-[#DCE5EA]/50 px-5 py-4">
            <div>
              <p className="dossier-label">{label}</p>
              {blurb && <p className="mt-1 max-w-sm text-sm text-[#2C3A45]">{blurb}</p>}
            </div>
            <Link
              href={href}
              className="shrink-0 text-xs font-semibold uppercase tracking-wider text-[#C43B2C] hover:text-[#0E2433]"
            >
              View all →
            </Link>
          </div>
          <ul
            className={`max-h-[min(70vh,22rem)] overflow-y-auto p-2 ${
              columns === 2 ? "sm:columns-2 sm:gap-0" : ""
            }`}
          >
            {items.map((item, i) => (
              <li key={item.href} className="break-inside-avoid">
                <Link
                  href={item.href}
                  className="group/item flex min-h-[44px] items-baseline gap-3 px-3 py-2.5 text-sm text-[#2C3A45] transition hover:bg-[#0E2433] hover:text-white"
                >
                  <span className="font-display w-5 shrink-0 text-[0.65rem] tabular-nums text-[#C43B2C] group-hover/item:text-[#C43B2C]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-snug">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
