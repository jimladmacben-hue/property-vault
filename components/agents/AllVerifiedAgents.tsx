"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const allAgents = [
  { id: 1, initials: "TA", image: "/images/agent-tunde.jpg", name: "Tunde Adeyemi", agency: "Lagos Prime Realty", areas: "Lekki · VI · Ikoyi", city: "Lagos", type: "Residential", rating: 5.0, reviews: 200, listings: 68, experience: "6yrs", response: 40 },
  { id: 2, initials: "ET", image: "/images/agent-ebiere.jpg", name: "Ebiere Tamuno", agency: "Abuja Homes", areas: "Maitama · Asokoro", city: "Abuja", type: "Residential", rating: 4.5, reviews: 110, listings: 56, experience: "9yrs", response: 80 },
  { id: 3, initials: "CO", image: "/images/agent-chinedu.jpg", name: "Chinedu Okafor", agency: "PH Properties", areas: "GRA · Trans Amadi", city: "Port Harcourt", type: "Commercial", rating: 3.0, reviews: 90, listings: 54, experience: "7yrs", response: 70 },
  { id: 4, initials: "FJ", image: "/images/agent-friday.jpg", name: "Friday Jonas", agency: "Capital Homes", areas: "Wuse 2 · Gwarinpa", city: "Abuja", type: "Residential", rating: 4.0, reviews: 99, listings: 72, experience: "8yrs", response: 64 },
  { id: 5, initials: "CO", image: "/images/agent-chinedu2.jpg", name: "Chinedu Okafor", agency: "PH Properties", areas: "GRA · Trans Amadi", city: "Port Harcourt", type: "Land", rating: 3.0, reviews: 90, listings: 54, experience: "7yrs", response: 70 },
  { id: 6, initials: "TA", image: "/images/agent-tunde2.jpg", name: "Tunde Adeyemi", agency: "Lagos Prime Realty", areas: "Lekki · VI · Ikoyi", city: "Lagos", type: "Residential", rating: 5.0, reviews: 200, listings: 68, experience: "6yrs", response: 40 },
  { id: 7, initials: "ET", image: "/images/agent-ebiere2.jpg", name: "Ebiere Tamuno", agency: "Abuja Homes", areas: "Maitama · Asokoro", city: "Abuja", type: "Commercial", rating: 4.5, reviews: 110, listings: 56, experience: "9yrs", response: 80 },
  { id: 8, initials: "UN", image: "/images/agent-uche.jpg", name: "Uche Nwosu", agency: "Elite Realty Group", areas: "Victoria Island · Lekki Phase 1", city: "Lagos", type: "Residential", rating: 4.8, reviews: 150, listings: 45, experience: "5yrs", response: 75 },
  { id: 9, initials: "ET", image: "/images/agent-ebiere3.jpg", name: "Ebiere Tamuno", agency: "Abuja Homes", areas: "Maitama · Asokoro", city: "Abuja", type: "Residential", rating: 4.5, reviews: 110, listings: 56, experience: "9yrs", response: 80 },
  { id: 10, initials: "TA", image: "/images/agent-tunde3.jpg", name: "Tunde Adeyemi", agency: "Lagos Prime Realty", areas: "Lekki · VI · Ikoyi", city: "Lagos", type: "Residential", rating: 5.0, reviews: 200, listings: 68, experience: "6yrs", response: 40 },
  { id: 11, initials: "CO", image: "/images/agent-chinedu3.jpg", name: "Chinedu Okafor", agency: "PH Properties", areas: "GRA · Trans Amadi", city: "Port Harcourt", type: "Commercial", rating: 3.0, reviews: 90, listings: 54, experience: "7yrs", response: 70 },
  { id: 12, initials: "SA", image: "/images/agent-seyi.jpg", name: "Seyi Adebola", agency: "Nigeria Estates", areas: "Ikeja · Ogba", city: "Lagos", type: "Land", rating: 4.2, reviews: 120, listings: 62, experience: "8yrs", response: 65 },
];

const cityFilters = ["All cities", "Lagos", "Abuja", "Port Harcourt", "Ibadan"];
const typeFilters = ["Residential", "Commercial", "Land"];
const sortOptions = ["Highest rated", "Most listings", "Most experienced", "Fastest reply"];

// ─── Star Rating ──────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="13" height="13" viewBox="0 0 24 24">
          <path
            d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"
            fill={star <= Math.round(rating) ? "#F5A623" : "#e5e7eb"}
          />
        </svg>
      ))}
    </div>
  );
}

// ─── Agent Card ───────────────────────────────────────────────────────────────

function AgentCard({ agent }: { agent: (typeof allAgents)[0] }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col items-center text-center">
      {/* Avatar */}
      <div className="relative mb-3">
        <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={agent.image}
            alt={agent.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              t.style.display = "none";
              const parent = t.parentElement!;
              parent.classList.add("bg-[#1a1f3c]");
              const span = document.createElement("span");
              span.className = "text-white font-black text-lg absolute inset-0 flex items-center justify-center";
              span.textContent = agent.initials;
              parent.appendChild(span);
            }}
          />
        </div>
        {/* Verified tick */}
        <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Name + agency */}
      <h3 className="text-sm font-black text-[#1a1f3c] leading-tight mb-0.5">{agent.name}</h3>
      <p className="text-xs text-gray-400 mb-1">{agent.agency}</p>
      <div className="flex items-center justify-center gap-1 text-xs text-gray-400 mb-2">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#9ca3af" strokeWidth="1.5" />
          <circle cx="12" cy="10" r="3" stroke="#9ca3af" strokeWidth="1.5" />
        </svg>
        {agent.areas}
      </div>

      {/* Stars + reviews */}
      <div className="flex items-center justify-center gap-1.5 mb-3">
        <StarRating rating={agent.rating} />
        <span className="text-xs font-bold text-[#1a1f3c]">{agent.rating.toFixed(1)}</span>
        <span className="text-xs text-gray-400">({agent.reviews} reviews)</span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 w-full border border-gray-100 rounded-xl overflow-hidden mb-4">
        {[
          { value: agent.listings, label: "listings" },
          { value: agent.experience, label: "experience" },
          { value: agent.response, label: "response" },
        ].map((stat, i) => (
          <div key={stat.label} className={`flex flex-col items-center py-2.5 ${i < 2 ? "border-r border-gray-100" : ""}`}>
            <span className="text-sm font-black text-[#1a1f3c]">{stat.value}</span>
            <span className="text-[10px] text-gray-400 font-medium">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* View profile */}
      <Link
        href={`/agents/${agent.id}`}
        className="w-full bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-sm font-bold py-2.5 rounded-xl text-center transition-colors duration-200"
      >
        View profile
      </Link>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AllVerifiedAgents() {
  const [activeCity, setActiveCity] = useState("All cities");
  const [activeTypes, setActiveTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Highest rated");
  const [sortOpen, setSortOpen] = useState(false);

  const toggleType = (type: string) =>
    setActiveTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );

  const filtered = allAgents
    .filter((a) => activeCity === "All cities" || a.city === activeCity)
    .filter((a) => activeTypes.length === 0 || activeTypes.includes(a.type))
    .sort((a, b) => {
      if (sortBy === "Highest rated") return b.rating - a.rating;
      if (sortBy === "Most listings") return b.listings - a.listings;
      if (sortBy === "Most experienced") return parseInt(b.experience) - parseInt(a.experience);
      if (sortBy === "Fastest reply") return a.response - b.response;
      return 0;
    });

  return (
    <section className="bg-[#f5f5f0] py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#F5A623]" />
            <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
              Top Rated This Month
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f3c] mb-1">
            All Verified Agents
          </h2>
          <p className="text-gray-500 text-sm">
            5,400+ agents across Nigeria · All NIN-verified
          </p>
        </div>

        {/* ── Filter bar ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white rounded-2xl px-5 py-4 shadow-sm mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-gray-400 mr-1">Filter by</span>

            {/* City pills */}
            {cityFilters.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setActiveCity(city)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-200
                  ${activeCity === city
                    ? "bg-amber-100 border-[#F5A623] text-[#c17d0a]"
                    : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
              >
                {city}
              </button>
            ))}

            {/* Divider */}
            <div className="w-px h-5 bg-gray-200 mx-1" />

            {/* Type pills */}
            {typeFilters.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => toggleType(type)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-200
                  ${activeTypes.includes(type)
                    ? "bg-[#1a1f3c] border-[#1a1f3c] text-white"
                    : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Sort by */}
          <div className="relative flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-400">Sort by</span>
              <button
                type="button"
                onClick={() => setSortOpen((o) => !o)}
                className="flex items-center gap-2 border border-gray-200 bg-white text-xs font-semibold text-[#1a1f3c] px-3.5 py-1.5 rounded-full hover:border-gray-300 transition-all"
              >
                {sortBy}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                  className={`transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`}>
                  <path d="M3 5l4 4 4-4" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            {sortOpen && (
              <div className="absolute right-0 mt-1 w-44 bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-hidden">
                {sortOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => { setSortBy(opt); setSortOpen(false); }}
                    className={`w-full px-4 py-2.5 text-left text-xs font-semibold hover:bg-amber-50 transition-colors
                      ${sortBy === opt ? "text-[#F5A623] bg-amber-50" : "text-[#1a1f3c]"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── 4-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {filtered.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-4 text-center py-16 text-gray-400 font-medium">
              No agents found for the selected filters.
            </div>
          )}
        </div>

        {/* View all CTA */}
        <div className="flex justify-center">
          <Link
            href="/agents"
            className="inline-flex items-center gap-2 border-2 border-[#1a1f3c] text-[#1a1f3c] text-sm font-bold px-8 py-3.5 rounded-full hover:bg-[#1a1f3c] hover:text-white transition-all duration-200"
          >
            View all 346+ agents
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
