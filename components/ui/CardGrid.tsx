import Link from "next/link";

type CardItem = { id?: string; title: string; description: string; href?: string };

function RowContent({ item, index }: { item: CardItem; index: number }) {
  return (
    <>
      <span className="font-display text-xs tabular-nums text-[#C43B2C]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0">
        <h3 className="font-display break-words text-base font-semibold text-[#0E2433] group-hover:text-[#C43B2C] sm:text-lg">
          {item.title}
        </h3>
        <p className="prose-safe mt-2 text-sm leading-relaxed text-[#2C3A45]">{item.description}</p>
        {item.href && (
          <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-[#1F6B5C]">
            Open →
          </span>
        )}
      </div>
    </>
  );
}

/** Editorial dossier rows — deliberately not a card grid */
export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="divide-y divide-[#C5D0D8] border-y border-[#C5D0D8]">
      {items.map((item, index) =>
        item.href ? (
          <Link
            key={item.href}
            href={item.href}
            className="group grid min-h-[44px] min-w-0 grid-cols-[auto_1fr] gap-4 px-1 py-5 transition hover:bg-[#DCE5EA]/40 sm:gap-6 sm:px-3 sm:py-6"
          >
            <RowContent item={item} index={index} />
          </Link>
        ) : (
          <div
            key={item.id ?? item.title}
            id={item.id}
            className="scroll-mt-24 grid grid-cols-[auto_1fr] gap-4 px-1 py-5 sm:gap-6 sm:px-3 sm:py-6"
          >
            <RowContent item={item} index={index} />
          </div>
        )
      )}
    </div>
  );
}
