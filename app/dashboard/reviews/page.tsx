"use client";

import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const ratingBreakdown = [
  { stars: 5, count: 112 },
  { stars: 4, count: 11 },
  { stars: 3, count: 4 },
  { stars: 2, count: 9 },
  { stars: 1, count: 1 },
];
const totalReviews = ratingBreakdown.reduce((s, r) => s + r.count, 0);

const reviews = [
  {
    id: 1, initials: "TO", color: "bg-[#1a1f3c]",
    name: "Tunde Okafor", role: "Buyer", date: "December, 2025", rating: 5,
    text: "Adewale was incredibly professional throughout the entire process. He responded within minutes, arranged the inspection within 2 days, and handled all the documentation smoothly. The property was exactly as listed.",
    property: "4 Bed Detached, Lekki Phase 1 · ₦45M",
    response: "Thank you so much Tunde, it was a pleasure working with you. Wishing you all the best in your new home.",
  },
  {
    id: 2, initials: "AE", color: "bg-green-700",
    name: "Amaka Eze", role: "Buyer", date: "November, 2025", rating: 5,
    text: "I was buying from the UK and was nervous about the whole process. Adewale made it seamless — video calls, virtual tour, all documents shared digitally. The C of O was genuine and verified. Completed the purchase without stepping foot in Nigeria.",
    property: "600sqm Land, Ajah · ₦18M",
    response: "It was a pleasure Amaka. Diaspora transactions are something I take very seriously and I am glad we made it work across the distance.",
  },
  {
    id: 3, initials: "TO", color: "bg-[#1a1f3c]",
    name: "Tunde Okafor", role: "Buyer", date: "October, 2025", rating: 5,
    text: "Great experience from start to finish. Highly recommended agent for anyone looking in the Lekki area.",
    property: "3 Bed Flat, Victoria Island · ₦85M",
    response: null,
  },
  {
    id: 4, initials: "KA", color: "bg-purple-700",
    name: "Kemi Adeyemi", role: "Buyer", date: "September, 2025", rating: 4,
    text: "Very responsive and knowledgeable about the area. The process was smooth and transparent. Minor delays with document processing but overall a great agent.",
    property: "4 Bed Detached, Lekki Phase 1 · ₦45M",
    response: "Thank you Kemi! Apologies for the document delays — we have since improved our process. Hope you are enjoying the new home!",
  },
];

const sortOptions = ["Most recent", "Highest rated", "Lowest rated"];

// ─── Star display ─────────────────────────────────────────────────────────────

function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width={size} height={size} viewBox="0 0 24 24">
          <path
            d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"
            fill={s <= rating ? "#F5A623" : "#e5e7eb"}
          />
        </svg>
      ))}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ReviewsPage() {
  const [sortBy, setSortBy] = useState("Most recent");
  const [sortOpen, setSortOpen] = useState(false);

  const sorted = [...reviews].sort((a, b) => {
    if (sortBy === "Highest rated") return b.rating - a.rating;
    if (sortBy === "Lowest rated") return a.rating - b.rating;
    return b.id - a.id;
  });

  return (
    <div className="p-6 sm:p-8 space-y-6">

      {/* ── Top bar ── */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-black text-[#1a1f3c]">Reviews</h1>
          <p className="text-sm text-gray-400 mt-0.5">What buyers say about working with you</p>
        </div>
        <button className="relative w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-gray-300 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">3</span>
        </button>
      </div>

      {/* ── Summary card ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row items-stretch gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">

          {/* Overall rating */}
          <div className="flex flex-col items-center justify-center px-8 py-4 sm:py-0 gap-2">
            <p className="text-6xl font-black text-[#1a1f3c]">4.9</p>
            <Stars rating={5} size={18} />
            <p className="text-xs text-gray-400 font-medium">{totalReviews} Reviews</p>
          </div>

          {/* Star breakdown */}
          <div className="flex-1 px-8 py-4 sm:py-0 flex flex-col justify-center gap-2">
            {ratingBreakdown.map((r) => (
              <div key={r.stars} className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-400 w-6">{r.stars}★</span>
                <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-full bg-[#F5A623] rounded-full"
                    style={{ width: `${(r.count / totalReviews) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-gray-500 w-6 text-right">{r.count}</span>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className="flex flex-row sm:flex-col gap-3 px-8 py-4 sm:py-0 justify-center">
            <div className="flex-1 border border-gray-100 rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-[#1a1f3c]">Top 5%</p>
              <p className="text-xs text-gray-400 mt-0.5">of all agents</p>
            </div>
            <div className="flex-1 border border-gray-100 rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-[#1a1f3c]">96%</p>
              <p className="text-xs text-gray-400 mt-0.5">would recommend</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── All reviews ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-base font-black text-[#1a1f3c] mb-1">All reviews</h2>
            <div className="relative inline-block">
              <button
                type="button"
                onClick={() => setSortOpen((o) => !o)}
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#1a1f3c] transition-colors"
              >
                Sorted by {sortBy}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${sortOpen ? "rotate-180" : ""}`}>
                  <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {sortOpen && (
                <div className="absolute top-full left-0 mt-1 w-36 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => { setSortBy(opt); setSortOpen(false); }}
                      className={`w-full px-4 py-2.5 text-left text-xs font-semibold hover:bg-amber-50 transition-colors ${sortBy === opt ? "text-[#F5A623]" : "text-[#1a1f3c]"}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <span className="text-xs font-bold border border-gray-200 text-[#1a1f3c] px-4 py-2 rounded-full">
            {totalReviews} reviews
          </span>
        </div>

        {/* Review list */}
        <div className="space-y-8">
          {sorted.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
              {/* Reviewer header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 ${review.color}`}>
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1a1f3c]">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Stars rating={review.rating} />
                  <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                </div>
              </div>

              {/* Review text */}
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{review.text}</p>

              {/* Property tag */}
              <div className="flex items-center gap-1.5 mb-4">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-lg">
                  🏠 {review.property}
                </span>
              </div>

              {/* Agent response */}
              {review.response && (
                <div className="border-l-2 border-gray-200 pl-4 py-1">
                  <p className="text-xs font-bold text-[#1a1f3c] mb-1">Your response</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{review.response}</p>
                </div>
              )}

              {/* Reply button if no response */}
              {!review.response && (
                <button className="text-xs font-bold text-[#F5A623] hover:underline transition-colors">
                  + Add a response
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
