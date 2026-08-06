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
    <section className="surface-grain relative overflow-hidden bg-[#0E2433] py-12 sm:py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 40%, rgba(196,59,44,0.12) 100%), radial-gradient(ellipse at 80% 20%, rgba(31,107,92,0.25), transparent 50%)",
        }}
        aria-hidden
      />
      <div className="relative z-[2] mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <div className="h-0.5 w-16 origin-left bg-[#C43B2C] accent-rule" aria-hidden />
        <h1 className="font-display mt-5 break-words text-2xl font-semibold tracking-tight text-white min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
