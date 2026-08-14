import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="border-b border-[#D8D4CC] bg-[#EBE6DC] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <h1 className="font-display mt-2 max-w-3xl break-words text-2xl font-semibold tracking-tight text-[#1C2541] min-[375px]:text-3xl sm:text-4xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3A4250] sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
