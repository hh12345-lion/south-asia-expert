import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { FAQSection } from "@/components/ui/FAQSection";
import { faqs } from "@/data/faq";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "FAQ | South Asia Expert Witness UK",
  description:
    "Answers on South Asia expert witnesses for UK asylum tribunals: countries covered, Bangladesh 2024, KK [2021], Legal Aid, and report timelines.",
  path: "/faq",
});

export default function FaqPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "FAQ" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={faqs} />
      <PageShell
        title="Frequently asked questions"
        subtitle="South Asia expert evidence for UK immigration and asylum tribunals."
        breadcrumbs={crumbs}
      >
        <FAQSection faqs={faqs} title="Questions solicitors ask" />
      </PageShell>
    </>
  );
}
