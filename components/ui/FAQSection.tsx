import type { FAQ } from "@/lib/schema";

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="py-8 sm:py-12">
      <p className="kicker mb-2">FAQ</p>
      <h2 className="font-display mb-6 break-words text-xl font-semibold text-[#1C2541] sm:mb-8 sm:text-2xl">
        {title}
      </h2>
      <div className="space-y-0">
        {faqs.map((faq) => (
          <div key={faq.question} className="border-l-4 border-[#D8D4CC] py-5 pl-4 sm:py-6">
            <h3 className="break-words text-base font-semibold text-[#1C2541] sm:text-lg">{faq.question}</h3>
            <p className="prose-safe mt-3 text-sm leading-relaxed text-[#3A4250] sm:text-base">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
