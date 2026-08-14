import Link from "next/link";
import type { RelatedLink } from "@/data/related-links";

export function RelatedLinks({
  title = "Related pages",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (links.length === 0) return null;
  return (
    <aside className="mt-12 min-w-0 border-t border-[#7C6C4F] bg-[#EBE6DC]/50 p-4 sm:p-6">
      <p className="kicker">{title}</p>
      <ul className="mt-4 grid grid-cols-1 gap-1 md:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-[44px] items-center text-sm font-medium text-[#1C2541] hover:text-[#7C6C4F] hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
