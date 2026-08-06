import type { FAQ } from "@/lib/schema";

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="py-8 sm:py-12">
      <p className="dossier-label mb-2">FAQ</p>
      <h2 className="font-display mb-6 break-words text-xl font-semibold text-[#0E2433] sm:mb-8 sm:text-2xl">
        {title}
      </h2>
      <div className="divide-y divide-[#C5D0D8] border-y border-[#C5D0D8]">
        {faqs.map((faq, i) => (
          <div key={faq.question} className="py-5 sm:py-6">
            <h3 className="flex gap-3 break-words text-base font-semibold text-[#0E2433] sm:text-lg">
              <span className="font-display shrink-0 text-xs tabular-nums text-[#C43B2C]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{faq.question}</span>
            </h3>
            <p className="prose-safe mt-3 pl-8 text-sm leading-relaxed text-[#2C3A45] sm:text-base">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
