import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Use | SouthAsiaExpert",
  description: "Terms of use for SouthAsiaExpert.com",
  path: "/terms",
  noindex: true,
  follow: true,
});

export default function TermsPage() {
  return (
    <PageShell title="Terms of Use" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}>
      <p className="text-[#3A4250] leading-relaxed">
        SouthAsiaExpert.com is an expert witness matching service for UK immigration solicitors. We are not a law firm
        and do not provide legal advice. Expert witnesses instructed through this service provide independent evidence
        to tribunals; their duty is to the tribunal, not to either party.
      </p>
      <p className="mt-4 text-[#3A4250] leading-relaxed">
        SouthAsiaExpert is politically neutral. We are not a diaspora organisation, lobby group, or campaign for any
        South Asian government, opposition movement, or regional interest. Information on this site covers multiple
        countries and opposing claim profiles so that solicitors can instruct experts for any meritorious case. Nothing
        on the site should be read as endorsement of any political, religious, or ethnic position.
      </p>
      <p className="mt-4 text-[#3A4250] leading-relaxed">
        By using this website you agree to use it for legitimate instruction enquiries only. We reserve the right to
        decline instructions that fall outside our scope or expertise. Content on this site is for general information
        and does not constitute legal advice.
      </p>
    </PageShell>
  );
}
