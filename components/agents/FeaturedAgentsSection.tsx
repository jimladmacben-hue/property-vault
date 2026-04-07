"use client";

import Link from "next/link"; 

const agents = [
  {
    id: 1,
    initials: "AO",
    image: "/images/agent-adewale.jpg",
    name: "Adewale Okonkwo",
    agency: "Lagos Prime Realty",
    location: "Lagos",
    listings: 84,
    responseRate: "99%",
    rating: 4.9,
    experience: "6yrs",
    reviews: 200,
    repliesIn: "2hrs",
    areas: ["Lekki Ph1", "Victoria Island", "Ikoyi"],
  },
  {
    id: 2,
    initials: "CU",
    image: "/images/agent-chidi.jpg",
    name: "Chidi Ugwu",
    agency: "Abuja Homes & Estates",
    location: "Abuja",
    listings: 84,
    responseRate: "99%",
    rating: 4.9,
    experience: "6yrs",
    reviews: 200,
    repliesIn: "4hrs",
    areas: ["Maitama", "Asokoro", "Wuse 2"],
  },
  {
    id: 3,
    initials: "FN",
    image: "/images/agent-fatima.jpg",
    name: "Fatima Nwosu",
    agency: "PH Properties",
    location: "Port Harcourt",
    listings: 84,
    responseRate: "99%",
    rating: 4.9,
    experience: "6yrs",
    reviews: 200,
    repliesIn: "3hrs",
    areas: ["GRA Phase 2", "Trans Amadi", "Old GRA"],
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="14" height="14" viewBox="0 0 24 24">
          <path
            d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"
            fill={star <= Math.floor(rating) ? "#F5A623" : "#e5e7eb"}
          />
        </svg>
      ))}
    </div>
  );
}

function AgentCard({ agent }: { agent: (typeof agents)[0] }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">

      {/* ── Dark header ── */}
      <div className="bg-[#080d28] px-5 py-5">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gray-600 overflow-hidden flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement!.classList.add("show-initials");
                }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-white font-black text-lg opacity-0 peer-[.show-initials]:opacity-100">
                {agent.initials}
              </span>
            </div>
            {/* Verified tick */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#080d28]">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Name + agency */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-white font-black text-base leading-tight">{agent.name}</h3>
              <span className="flex items-center gap-1 bg-[#F5A623] text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0">
                ★ Top agent
              </span>
            </div>
            <p className="text-white/50 text-xs">
              {agent.agency} · {agent.location}
            </p>
            {/* Verified + NIN badges */}
            <div className="flex items-center gap-2 mt-2.5">
              <span className="flex items-center gap-1 bg-green-500/20 text-green-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-green-500/30">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2 2 4-4" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Verified
              </span>
              <span className="flex items-center gap-1 bg-white/10 text-white/60 text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                NIN
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats row ── */}
      <div className="grid grid-cols-4 divide-x divide-gray-100 border-b border-gray-100">
        {[
          { value: agent.listings, label: "listings" },
          { value: agent.responseRate, label: "response rate" },
          { value: agent.rating, label: "rating" },
          { value: agent.experience, label: "experience" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center py-3 px-2">
            <span className="text-base font-black text-[#1a1f3c]">{stat.value}</span>
            <span className="text-[10px] text-gray-400 font-medium text-center leading-tight mt-0.5">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* ── Reviews + reply time ── */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <StarRating rating={agent.rating} />
          <span className="text-xs font-bold text-[#1a1f3c]">{agent.rating}</span>
          <span className="text-xs text-gray-400">({agent.reviews} reviews)</span>
        </div>
        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
          Replies in {agent.repliesIn}
        </span>
      </div>

      {/* ── Area tags ── */}
      <div className="flex flex-wrap gap-2 px-5 py-3 border-b border-gray-100">
        {agent.areas.map((area) => (
          <span
            key={area}
            className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
          >
            {area}
          </span>
        ))}
      </div>

      {/* ── Actions ── */}
      <div className="flex gap-3 px-5 py-4">
        <button
          type="button"
          className="flex-1 bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-sm font-bold py-2.5 rounded-xl transition-colors duration-200"
        >
          Contact agent
        </button>
        <Link
          href={`/agents/${agent.id}`}
          className="flex-1 border-2 border-gray-200 hover:border-[#1a1f3c] text-[#1a1f3c] text-sm font-bold py-2.5 rounded-xl text-center transition-colors duration-200"
        >
          View profile
        </Link>
      </div>
    </div>
  );
}

export default function FeaturedAgentsSection() {
  return (
    <section className="bg-[#f5f5f0] py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#F5A623]" />
              <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
                Top Rated This Month
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f3c] mb-2">
              Featured Agents
            </h2>
            <p className="text-gray-500 text-sm">
              Hand-picked based on response rate, reviews, and listing quality
            </p>
          </div>
          <span className="flex items-center gap-2 self-start bg-amber-100 text-amber-700 text-sm font-bold px-4 py-2 rounded-full flex-shrink-0">
            ★ Featured
          </span>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

      </div>
    </section>
  );
}
