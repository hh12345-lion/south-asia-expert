"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import { postSubmitLead } from "@/lib/submit-lead";
import { COUNTRIES } from "@/data/contact-options";

const inputClass =
  "w-full min-w-0 border-0 border-b border-[#C5D0D8] bg-transparent px-0 py-3 text-base text-[#2C3A45] placeholder:text-[#2C3A45]/40 focus:border-[#C43B2C] focus:outline-none focus:ring-0 min-h-[44px]";
const labelClass = "dossier-label mb-2 block";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: String(data.get("name") ?? "").trim(),
      organisation: String(data.get("law_firm") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: "",
      caseProfile: "",
      region: String(data.get("country") ?? "").trim(),
      proceedings: "",
      funding: "",
      deadline: "",
      urgency: "",
      summary: String(data.get("summary") ?? "").trim(),
    };

    const ok = await postSubmitLead(payload);
    if (ok) router.push("/thank-you");
    else setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 space-y-8">
      <div className="min-w-0">
        <label className={labelClass} htmlFor="name">
          Full name *
        </label>
        <input id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Your name" />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="law_firm">
          Law firm *
        </label>
        <input
          id="law_firm"
          name="law_firm"
          required
          autoComplete="organization"
          className={inputClass}
          placeholder="Firm name"
        />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className={inputClass}
          placeholder="you@firm.co.uk"
        />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="country">
          Country of claim
        </label>
        <select id="country" name="country" className={`${inputClass} cursor-pointer`}>
          <option value="">Select if known</option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="summary">
          Brief note *
        </label>
        <textarea
          id="summary"
          name="summary"
          required
          rows={3}
          placeholder="Hearing date, profile, and anything urgent — a few lines is enough."
          className={`${inputClass} min-h-[96px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-[48px] w-full items-center justify-center bg-[#C43B2C] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#0E2433] disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
