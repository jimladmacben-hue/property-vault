"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does listing verification take?",
    answer:
      "Our team reviews all submitted listings within 24–48 hours. You'll be notified by email and in-app when your listing is approved or if any changes are needed.",
  },
  {
    question: "How do I verify my agent account?",
    answer:
      "Go to your dashboard and click Verify Account. You'll need your NIN, a valid phone number, and your business registration documents if applicable.",
  },
  {
    question: "Is the exact property address shown publicly?",
    answer:
      "No. Only the area and neighbourhood are shown publicly. The full street address is revealed only to buyers who send an enquiry, protecting both parties.",
  },
  {
    question: "How can I contact an agent about a property?",
    answer:
      "Contact an agent directly from the property page. Each listing includes a contact option to send a message or reach the agent quickly to ask questions or schedule a viewing.",
  },
  {
    question: "How do I report a suspicious listing?",
    answer:
      "Click the Report button on any listing detail page, or contact us directly at hello@propertyvault.ng. We investigate all reports within 24 hours.",
  },
  {
    question: "Can I schedule a property viewing on the platform?",
    answer:
      "Yes. Once you find a property you are interested in, you can contact the agent from the listing page to arrange a physical or virtual viewing at a convenient time.",
  },
  {
    question: "How do I know if a property is still available?",
    answer:
      "Listings are updated regularly, but availability can change quickly. The best way is to contact the agent listed on the property to confirm current status and next steps.",
  },
  {
    question: "Are there fees to use Property Vault?",
    answer:
      "Browsing properties on Property Vault is free for users. If you decide to move forward with a property, any related costs will be discussed directly with the agent or property owner.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="text-sm font-bold text-[#1a1f3c] leading-snug">
          {question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={`flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="#F5A623"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Answer — animated expand/collapse */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-6 text-sm text-gray-500 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function ContactFAQ() {
  return (
    <section className="bg-[#f5f5f0] py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#F5A623]" />
            <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
              FAQs
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1f3c] mb-3">
            Frequently Asked{" "}
            <span className="text-[#F5A623]">Questions</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md">
            Find quick answers to common questions about listings, agents,
            and how Property Vault works.
          </p>
        </div>

        {/* 2-column accordion grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
    </section>
  );
}
