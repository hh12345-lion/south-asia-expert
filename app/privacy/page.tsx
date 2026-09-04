import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How SouthAsiaExpert.com collects, uses, and protects personal data from contact form submissions, cookie preferences, and your rights under UK GDPR.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}>
      <p className="text-[#3A4250] leading-relaxed">
        SouthAsiaExpert.com is operated to connect UK solicitors with qualified South Asia expert witnesses. We collect
        personal data submitted through our contact form (name, law firm, email, phone, and case details) solely to
        respond to instruction requests and match appropriate experts.
      </p>
      <p className="mt-4 text-[#3A4250] leading-relaxed">
        Contact form submissions are stored securely and retained only as long as necessary to fulfil your request.
        We do not sell personal data. You may request deletion by emailing {SITE_EMAIL}. Non-essential tracking
        scripts load only after you grant consent via our cookie banner. See our{" "}
        <a href="/cookie-policy" className="font-semibold text-[#7C6C4F] hover:underline">
          Cookie Policy
        </a>
        .
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#1C2541]">Your Rights (GDPR)</h2>
      <p className="mt-4 text-[#3A4250] leading-relaxed">
        You have the right to access, rectify, erase, restrict processing, and port your personal data. You may
        withdraw consent for non-essential cookies at any time via Cookie Settings in the footer. To exercise your
        rights, contact {SITE_EMAIL}.
      </p>
    </PageShell>
  );
}
