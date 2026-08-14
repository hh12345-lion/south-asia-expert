import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { countries } from "@/data/countries";

export const metadata = createMetadata({
  title: "South Asia Country Expert Witnesses UK | Bangladesh, India, Sri Lanka, Nepal & Bhutan",
  description:
    "Country expert witness pages for Bangladesh, India, Sri Lanka, Nepal, and Bhutan. Dedicated asylum report specialists for UK immigration tribunals.",
  path: "/countries",
});

export default function CountriesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Countries" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="South Asia Country Expert Witnesses"
        subtitle="Dedicated country pages for the five South Asian nations with significant UK asylum claim volumes."
        breadcrumbs={crumbs}
      >
        <p className="text-[#3A4250] leading-relaxed">
          SouthAsiaExpert provides dedicated country expert witness pages for Bangladesh, India, Sri Lanka, Nepal, and
          Bhutan. Each country page targets specific search queries such as &quot;Bangladesh expert witness UK&quot;
          and &quot;India asylum expert UK&quot;, providing profile-specific risk analysis for UK immigration
          tribunals. Pakistan is covered separately at pakistancountryexpert.com.
        </p>
        <p className="mt-4 text-[#3A4250] leading-relaxed">
          No country page promotes one community or political position over another. Content is structured for UK
          solicitors instructing experts in tribunal proceedings and describes the full range of asylum profiles seen in
          each jurisdiction, analysed on an impartial basis.
        </p>
        <div className="mt-10">
          <CardGrid
            items={countries.map((c) => ({
              title: c.title,
              description: `${c.claimVolume} claim volume. Key profiles: ${c.keyProfiles}. Country guidance: ${c.countryGuidance}.`,
              href: `/countries/${c.slug}`,
            }))}
          />
        </div>
      </PageShell>
    </>
  );
}
