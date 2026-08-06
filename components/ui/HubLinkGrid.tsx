import Link from "next/link";

type HubLink = { label: string; href: string };

export function HubLinkGrid({
  title,
  links,
}: {
  title: string;
  links: HubLink[];
}) {
  return (
    <div className="border border-[#C5D0D8] border-l-[3px] border-l-[#C43B2C] bg-[#DCE5EA]/40 p-4 sm:p-6">
      <h3 className="font-display font-semibold text-[#0E2433]">{title}</h3>
      <ul className="mt-4 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-[44px] max-w-full items-center break-words py-2 text-sm text-[#1F6B5C] hover:text-[#C43B2C] hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
