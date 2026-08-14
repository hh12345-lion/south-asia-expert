import Link from "next/link";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
};

/** Hairline list under the trigger — not a shelf, card, or numbered index */
export function NavDropdown({ label, href, items }: NavDropdownProps) {
  return (
    <div className="group relative self-stretch">
      <Link
        href={href}
        className="inline-flex h-full min-h-[48px] items-center gap-1 px-3 text-sm text-[#3A4250] transition hover:text-[#1C2541]"
      >
        <span>{label}</span>
        <svg className="h-3 w-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      <div className="pointer-events-none invisible absolute left-0 top-full z-50 min-w-[16rem] pt-1 opacity-0 transition-[opacity,visibility] duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
        <ul className="menu-list max-h-[min(70vh,22rem)] overflow-y-auto border border-[#D8D4CC] bg-white">
          {items.map((item) => (
            <li key={item.href} className="border-b border-[#D8D4CC] last:border-b-0">
              <Link
                href={item.href}
                className="flex min-h-[44px] items-center px-4 py-2 text-sm text-[#3A4250] hover:bg-[#EBE6DC] hover:text-[#1C2541]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
