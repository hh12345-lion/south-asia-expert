import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { servicesPageGraph } from "@/lib/schema";
import { services } from "@/data/services";

export const metadata = createMetadata({
  title: "South Asia Expert Witness Services | Asylum & Immigration Tribunals",
  description:
    "South Asia expert witness services: Bangladesh, India, Sri Lanka, Nepal, Bhutan country reports, CPIN challenge, internal relocation, post-August 2024 Bangladesh, and oral evidence.",
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <JsonLd
        data={servicesPageGraph(
          services.map((s) => ({ id: s.id, name: s.title, description: s.description }))
        )}
      />
      <PageShell
        title="South Asia Expert Witness Services"
        subtitle="CPR Part 35 and Immigration Tribunal Practice Direction compliant reports for all major South Asian asylum profiles."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#3A4250] leading-relaxed">
          SouthAsiaExpert provides eight specialist expert witness services for UK immigration solicitors, law firms, and
          Legal Aid practitioners. All reports are prepared by qualified South Asia country experts with current CPIN
          knowledge, country guidance expertise, and field research experience across Bangladesh, India, Sri Lanka,
          Nepal, and Bhutan.
        </p>
        <CardGrid
          items={services.map((s) => ({
            id: s.id,
            title: s.title,
            description: s.description,
          }))}
        />
        <p className="mt-8 text-[#3A4250]">
          Questions about instructing an expert? See{" "}
          <Link href="/how-to-instruct" className="font-semibold text-[#7C6C4F] hover:underline">
            how matching works
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold text-[#7C6C4F] hover:underline">
            brief an expert
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
