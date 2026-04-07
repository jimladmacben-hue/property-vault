"use client";

import { useState } from "react";

// ─── Bar chart data ───────────────────────────────────────────────────────────

const yieldData = [
  { location: "Ikoyi", value: 9.2, max: 12 },
  { location: "Lekki Ph1", value: 8.4, max: 12 },
  { location: "Eko Atlantic", value: 11.4, max: 12 },
  { location: "Maitama", value: 8.6, max: 12 },
  { location: "Asokoro", value: 7.8, max: 12 },
  { location: "GRA PH", value: 6.2, max: 12 },
];

// ─── City market data ─────────────────────────────────────────────────────────

const cityData: Record<string, {
  name: string;
  type: string;
  badge: string;
  badgeColor: string;
  rows: { label: string; value: string; highlight?: "green" | "bold" }[];
}[]> = {
  All: [
    {
      name: "Lagos",
      type: "Residential",
      badge: "↑ Strong demand",
      badgeColor: "bg-[#F5A623]/20 text-[#F5A623]",
      rows: [
        { label: "Avg price per sqm", value: "₦285,000" },
        { label: "YoY price growth", value: "+14.2%", highlight: "green" },
        { label: "Avg rental yield", value: "8.4%", highlight: "green" },
        { label: "Days on market", value: "38 days avg", highlight: "bold" },
        { label: "Most active area", value: "Lekki Phase 1", highlight: "bold" },
      ],
    },
    {
      name: "Abuja",
      type: "Residential",
      badge: "↑ Steady growth",
      badgeColor: "bg-[#F5A623]/20 text-[#F5A623]",
      rows: [
        { label: "Avg price per sqm", value: "₦210,000" },
        { label: "YoY price growth", value: "+10.8%", highlight: "green" },
        { label: "Avg rental yield", value: "8.6%", highlight: "green" },
        { label: "Days on market", value: "44 days avg", highlight: "bold" },
        { label: "Most active area", value: "Maitama", highlight: "bold" },
      ],
    },
  ],
  Lagos: [
    {
      name: "Lagos",
      type: "Residential",
      badge: "↑ Strong demand",
      badgeColor: "bg-[#F5A623]/20 text-[#F5A623]",
      rows: [
        { label: "Avg price per sqm", value: "₦285,000" },
        { label: "YoY price growth", value: "+14.2%", highlight: "green" },
        { label: "Avg rental yield", value: "8.4%", highlight: "green" },
        { label: "Days on market", value: "38 days avg", highlight: "bold" },
        { label: "Most active area", value: "Lekki Phase 1", highlight: "bold" },
      ],
    },
    {
      name: "Lagos",
      type: "Commercial",
      badge: "↑ High ROI",
      badgeColor: "bg-green-500/20 text-green-400",
      rows: [
        { label: "Avg price per sqm", value: "₦420,000" },
        { label: "YoY price growth", value: "+17.5%", highlight: "green" },
        { label: "Avg rental yield", value: "10.2%", highlight: "green" },
        { label: "Days on market", value: "25 days avg", highlight: "bold" },
        { label: "Most active area", value: "Victoria Island", highlight: "bold" },
      ],
    },
  ],
  Abuja: [
    {
      name: "Abuja",
      type: "Residential",
      badge: "↑ Steady growth",
      badgeColor: "bg-[#F5A623]/20 text-[#F5A623]",
      rows: [
        { label: "Avg price per sqm", value: "₦210,000" },
        { label: "YoY price growth", value: "+10.8%", highlight: "green" },
        { label: "Avg rental yield", value: "8.6%", highlight: "green" },
        { label: "Days on market", value: "44 days avg", highlight: "bold" },
        { label: "Most active area", value: "Maitama", highlight: "bold" },
      ],
    },
    {
      name: "Abuja",
      type: "Commercial",
      badge: "↑ Rising fast",
      badgeColor: "bg-green-500/20 text-green-400",
      rows: [
        { label: "Avg price per sqm", value: "₦310,000" },
        { label: "YoY price growth", value: "+12.1%", highlight: "green" },
        { label: "Avg rental yield", value: "9.1%", highlight: "green" },
        { label: "Days on market", value: "30 days avg", highlight: "bold" },
        { label: "Most active area", value: "Wuse 2", highlight: "bold" },
      ],
    },
  ],
};

// ─── City Card ────────────────────────────────────────────────────────────────

function CityCard({ card }: { card: (typeof cityData.All)[0] }) {
  return (
    <div className="bg-[#080d28] rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <p className="text-sm font-bold text-white">
          {card.name}{" "}
          <span className="text-white/40 font-normal">— {card.type}</span>
        </p>
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${card.badgeColor}`}>
          {card.badge}
        </span>
      </div>
      {/* Rows */}
      <div className="divide-y divide-white/10">
        {card.rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between px-5 py-3.5">
            <span className="text-sm text-white/50">{row.label}</span>
            <span
              className={`text-sm font-bold ${
                row.highlight === "green"
                  ? "text-green-400"
                  : row.highlight === "bold"
                  ? "text-white"
                  : "text-white"
              }`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function MarketInsights() {
  const [city, setCity] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const cities = ["All", "Lagos", "Abuja"];

  return (
    <section className="bg-[#f5f5f0] py-16 sm:py-20 px-4">
      <div className="max-w-[1700px] mx-auto space-y-10">

        {/* Page heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f3c] mb-3">
            Market Insights
          </h2>
          <p className="text-gray-500 text-base">
            Deep dive into Nigeria&apos;s most lucrative real estate hubs
          </p>
        </div>

        {/* ── Top dark card — yield bar chart ── */}
        <div className="bg-[#080d28] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* Left — text */}
            <div className="lg:w-72 flex-shrink-0 flex flex-col justify-between gap-6">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#F5A623] uppercase mb-4">
                  Market Data
                </p>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-snug mb-4">
                  Where are the best yields right now?
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Average rental yields by location across Nigeria&apos;s top
                  investment markets. Data updated quarterly based on verified
                  transactions on Property Vault.
                </p>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#e09510] text-white text-sm font-bold px-5 py-3 rounded-full transition-colors duration-200 w-fit"
              >
                See full details
                <span>→</span>
              </button>
            </div>

            {/* Right — bar chart */}
            <div className="flex-1 space-y-3.5">
              {yieldData.map((d) => (
                <div key={d.location} className="flex items-center gap-3">
                  <span className="text-sm text-white/70 w-24 flex-shrink-0">
                    {d.location}
                  </span>
                  <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-[#F5A623] rounded-full transition-all duration-700"
                      style={{ width: `${(d.value / d.max) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold text-[#F5A623] w-10 text-right flex-shrink-0">
                    {d.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom section — city cards ── */}
        <div>
          {/* Sub-heading + dropdown */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold tracking-widest text-[#F5A623] uppercase mb-2">
                Market Intelligence
              </p>
              <h3 className="text-2xl font-black text-[#1a1f3c] mb-1">
                Lagos &amp; Abuja Market Insights
              </h3>
              <p className="text-sm text-gray-500">
                Current market snapshot for Nigeria&apos;s two most active investment cities.
              </p>
            </div>

            {/* City dropdown */}
            <div className="relative flex-shrink-0">
              <button
                type="button"
                onClick={() => setDropdownOpen((o) => !o)}
                className="flex items-center gap-2 border border-gray-300 bg-white text-sm font-semibold text-[#1a1f3c] px-4 py-2.5 rounded-xl hover:border-[#1a1f3c] transition-all duration-200"
              >
                Choose city
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                >
                  <path d="M4 6l4 4 4-4" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-10">
                  {cities.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => { setCity(c); setDropdownOpen(false); }}
                      className={`w-full px-4 py-2.5 text-left text-sm font-medium hover:bg-amber-50 transition-colors ${
                        city === c ? "text-[#F5A623] bg-amber-50" : "text-[#1a1f3c]"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* City cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {(cityData[city] ?? cityData.All).map((card, i) => (
              <CityCard key={i} card={card} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
