import Link from "next/link";

type CardItem = { id?: string; title: string; description: string; href?: string };

function RowContent({ item }: { item: CardItem }) {
  return (
    <div className="min-w-0">
      <h3 className="font-display break-words text-base font-semibold text-[#1C2541] group-hover:text-[#7C6C4F] sm:text-lg">
        {item.title}
      </h3>
      <p className="prose-safe mt-2 text-sm leading-relaxed text-[#3A4250]">{item.description}</p>
      {item.href && <span className="mt-3 inline-block text-sm font-semibold text-[#3D5A80]">Open</span>}
    </div>
  );
}

/** Stacked bronze-rule rows — not a card grid or numbered dossier */
export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="space-y-0">
      {items.map((item) =>
        item.href ? (
          <Link
            key={item.href}
            href={item.href}
            className="group block min-h-[44px] min-w-0 border-l-4 border-[#7C6C4F] bg-white px-4 py-5 transition hover:bg-[#EBE6DC] sm:px-5"
          >
            <RowContent item={item} />
          </Link>
        ) : (
          <div
            key={item.id ?? item.title}
            id={item.id}
            className="scroll-mt-24 border-l-4 border-[#D8D4CC] bg-white px-4 py-5 sm:px-5"
          >
            <RowContent item={item} />
          </div>
        )
      )}
    </div>
  );
}
