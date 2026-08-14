"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import { postSubmitLead } from "@/lib/submit-lead";

const inputClass =
  "w-full min-w-0 border border-[#D8D4CC] border-l-4 border-l-[#7C6C4F] bg-white px-3 py-3 text-base text-[#3A4250] placeholder:text-[#5A6472]/60 focus:border-[#1C2541] focus:border-l-[#7C6C4F] focus:outline-none min-h-[44px]";
const labelClass = "mb-2 block text-sm font-semibold text-[#1C2541]";

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
      region: "",
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
    <form onSubmit={handleSubmit} className="min-w-0 space-y-6">
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
        <label className={labelClass} htmlFor="summary">
          Case note *
        </label>
        <textarea
          id="summary"
          name="summary"
          required
          rows={4}
          placeholder="Country, profile, hearing date, and anything urgent."
          className={`${inputClass} min-h-[112px] resize-y`}
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
        className="inline-flex min-h-[48px] w-full items-center justify-center bg-[#7C6C4F] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#1C2541] disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Submit brief"}
      </button>
    </form>
  );
}
