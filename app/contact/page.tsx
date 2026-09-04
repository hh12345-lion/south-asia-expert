import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE_EMAIL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Brief an expert",
  description:
    "Send a short brief to match a qualified South Asia expert witness. Legal Aid compatible. Response within one business day.",
  path: "/contact",
  noindex: true,
});

export default function ContactPage() {
  return (
    <PageShell
      title="Brief a South Asia country expert"
      subtitle="Four fields. Confidential. Response within one business day."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Brief" }]}
      showCta={false}
    >
      <div className="grid min-w-0 gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
        <div className="min-w-0 max-w-xl">
          <ContactForm />
        </div>
        <aside className="h-fit border-l-4 border-[#7C6C4F] pl-5 sm:pl-6">
          <p className="kicker">Before you write</p>
          <p className="mt-3 text-sm leading-relaxed text-[#3A4250]">
            Impartial matching for UK solicitors — not advocacy, not a law firm. Experts cover Bangladesh, India, Sri
            Lanka, Nepal, and Bhutan.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-[#3A4250]">
            <li>Legal Aid rates available</li>
            <li>Practice Direction compliant</li>
            <li>Post-Aug 2024 Bangladesh & KK [2021] specialists</li>
          </ul>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="mt-6 inline-flex min-h-[44px] items-center text-sm font-semibold text-[#7C6C4F] hover:text-[#1C2541]"
          >
            {SITE_EMAIL}
          </a>
        </aside>
      </div>
    </PageShell>
  );
}
