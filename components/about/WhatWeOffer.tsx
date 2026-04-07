import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" fill="#6b7280" stroke="#6b7280" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
    title: "EXCELLENCE",
    body: "High standards in everything — from listings to agent response times.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l7 3.5V11c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6.5L12 3z" stroke="#6b7280" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "RELIABILITY",
    body: "Every listing verified. Every agent vetted. Zero unverified properties.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M9 11l3 3L22 4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "INTEGRITY",
    body: "Transparent transactions, honest information, no hidden agendas.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a7 7 0 017 7c0 2.5-1.5 4.5-3 6l-1 3H9l-1-3C6.5 13.5 5 11.5 5 9a7 7 0 017-7z" stroke="#6b7280" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 21h6M10 17h4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 6v3M10.5 7.5l3 3" stroke="#F5A623" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
    title: "INNOVATION",
    body: "Continuously building better tools for buyers, agents, and investors.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="bg-[#f5f5f0] py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left — image with amber border frame ── */}
          <div className="flex-1 w-full max-w-xl flex-shrink-0">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-[#F5A623]" />
              <div className="relative w-full h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/about-offer.jpg"
                  alt="Family reviewing property details with agent"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* ── Right — text + values grid ── */}
          <div className="flex-1 max-w-lg">
            {/* Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#F5A623]" />
              <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
                What We Offer
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1f3c] leading-snug mb-8">
              The Values Behind Property Vault
            </h2>

            {/* 2×2 Values grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-7 mb-8">
              {values.map((v) => (
                <div key={v.title} className="flex flex-col gap-2">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                    {v.icon}
                  </div>
                  <p className="text-xs font-black tracking-widest text-[#1a1f3c] uppercase">
                    {v.title}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/list-property"
              className="inline-flex items-center gap-2 bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-sm font-bold px-6 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Start listing
              <span>→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
