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
    <div className="border border-[#D8D4CC] border-l-4 border-l-[#7C6C4F] bg-white p-4 sm:p-6">
      <h3 className="font-display font-semibold text-[#1C2541]">{title}</h3>
      <ul className="mt-4 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-[44px] max-w-full items-center break-words py-2 text-sm text-[#3D5A80] hover:text-[#7C6C4F] hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
