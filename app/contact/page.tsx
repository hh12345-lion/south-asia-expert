import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE_EMAIL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Instruct a South Asia Expert Witness | SouthAsiaExpert UK",
  description:
    "Submit your case details to instruct a qualified South Asia expert witness. Legal Aid compatible. Response within 1 business day.",
  path: "/contact",
  noindex: true,
});

export default function ContactPage() {
  return (
    <PageShell
      title="Instruct a South Asia country expert"
      subtitle="Five fields. Confidential. Response within one business day."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    >
      <div className="grid min-w-0 gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
        <div className="min-w-0 max-w-xl">
          <ContactForm />
        </div>
        <aside className="h-fit border-l-[3px] border-[#1F6B5C] pl-5 sm:pl-6">
          <p className="dossier-label">Before you write</p>
          <p className="mt-3 text-sm leading-relaxed text-[#2C3A45]">
            Impartial matching for UK solicitors — not advocacy, not a law firm. Experts cover Bangladesh, India, Sri
            Lanka, Nepal, and Bhutan.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-[#2C3A45]">
            <li>Legal Aid rates available</li>
            <li>Practice Direction compliant</li>
            <li>Post-Aug 2024 Bangladesh & KK [2021] specialists</li>
          </ul>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="mt-6 inline-flex min-h-[44px] items-center text-sm font-semibold text-[#C43B2C] hover:text-[#0E2433]"
          >
            {SITE_EMAIL}
          </a>
        </aside>
      </div>
    </PageShell>
  );
}
