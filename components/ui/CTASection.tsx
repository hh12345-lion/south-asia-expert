import Link from "next/link";

export function CTASection({
  title = "Instruct a South Asia Expert Witness",
  description = "Send the essentials — we respond within one business day. Legal Aid compatible rates for major South Asian asylum profiles.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-[#C5D0D8] bg-[#DCE5EA] py-14 sm:py-16">
      <div
        className="pointer-events-none absolute -right-16 top-0 h-full w-1/3 bg-[#0E2433]/5"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        aria-hidden
      />
      <div className="relative mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:px-8">
        <div className="max-w-xl">
          <p className="dossier-label">Next step</p>
          <h2 className="font-display mt-3 text-xl font-semibold text-[#0E2433] sm:text-2xl md:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#2C3A45] sm:text-base">{description}</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center bg-[#C43B2C] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0E2433]"
          >
            Instruct an Expert
          </Link>
          <Link
            href="/how-to-instruct"
            className="inline-flex min-h-[48px] items-center justify-center border border-[#0E2433] px-7 py-3 text-sm font-semibold text-[#0E2433] transition hover:bg-[#0E2433] hover:text-white"
          >
            How to Instruct
          </Link>
        </div>
      </div>
    </section>
  );
}
