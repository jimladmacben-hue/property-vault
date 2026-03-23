"use client";

import { useState } from "react";

const tabs = ["Sell", "Buy", "Commercial", "Lands"];

const stats = [
  { value: "12000+", label: "listings" },
  { value: "5,400+", label: "trusted agents" },
  { value: "₦ 80B+", label: "in transactions" },
  { value: "98%", label: "verified properties" },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Commercial");

  return (
    <section className="relative w-full min-h-[620px] md:min-h-[700px] flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Replace src with your actual hero image */}
        <img
  src="/images/hero-bg.jpg"
  alt="Modern house"
  className="w-full h-full object-cover object-center"
/>
        {/* Subtle dark overlay at top for navbar readability */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Bottom fade for stats bar */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-28 pb-6 px-4">
        {/* Floating Badges */}
        <div className="relative w-full max-w-3xl">
          {/* Secured badge */}
          <div className="absolute -left-4 top-[-10px] md:left-0 text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white bg-white/10 backdrop-blur-md">
  Secured
</div>

          {/* Verified badge */}
          <div className="absolute right-0 top-[-30px] md:-right-4 text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white bg-white/10 backdrop-blur-md">
          
              <path
                d="M8 1L10.5 3H14V6.5L16 8L14 9.5V13H10.5L8 15L5.5 13H2V9.5L0 8L2 6.5V3H5.5L8 1Z"
                fill="#1a1f3c"
                opacity="0.15"
              />
              <path
                d="M5 8L7 10L11 6"
                stroke="#1a1f3c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            
            Verified
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#000000] text-center leading-tight mt-6">
          Find Your Next
          <br />
          Property in{" "}
          <span className="text-[#F5A623]">Nigeria</span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-[15px] md:text-base text-[#353940]/80 text-center leading-relaxed">
          Search thousands of verified listings across Lagos, Abuja, Port Harcourt
          <br className="hidden md:block" />
          and beyond. From homes to high-yield investments
        </p>

        {/* Reliable badge (floating right of subtext) */}
        <div className="text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white bg-white/10 backdrop-blur-md mt-3 self-end mr-8 md:mr-24">
  Reliable
</div>

   {/* Search Card */}
   <div className="mt-6 w-full max-w-7xl bg-white shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex gap-0 px-6 pt-4 pb-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium transition-all mr-2 border-b-2 ${
                  activeTab === tab
                    ? "border-[#1a1f3c] text-[#1a1f3c] font-semibold"
                    : "border-transparent text-gray-400 hover:text-[#1a1f3c]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-5 mt-0 border-t border-gray-100" />

          {/* Search Fields */}
          <div className="flex items-center px-4 py-4">
            {/* Type */}
            <div className="flex-1 flex flex-col px-3 border-r border-gray-200">
              <span className="text-[11px] font-semibold text-[#1a1f3c] uppercase tracking-wide mb-1">
                Type
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="#aaa" strokeWidth="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="#aaa" strokeWidth="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="#aaa" strokeWidth="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="#aaa" strokeWidth="1.5" />
                </svg>
                <span>All types</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-auto">
                  <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Location */}
            <div className="flex-1 flex flex-col px-3 border-r border-gray-200">
              <span className="text-[11px] font-semibold text-[#1a1f3c] uppercase tracking-wide mb-1">
                Location
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="10" r="3" stroke="#aaa" strokeWidth="1.5" />
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#aaa" strokeWidth="1.5" fill="none" />
                </svg>
                <span>Choose preferred location</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-auto">
                  <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Price */}
            <div className="flex-1 flex flex-col px-3">
              <span className="text-[11px] font-semibold text-[#1a1f3c] uppercase tracking-wide mb-1">
                Price
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>Select price range</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-auto">
                  <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Search Button */}
            <div className="pl-4">
              <button className="bg-[#1a1f3c] hover:bg-[#2d3561] text-white text-sm font-semibold px-5 py-3 rounded-xl flex items-center gap-2 whitespace-nowrap transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2" />
                  <path d="M21 21l-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Search property
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 w-full border-t border-white/40">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center py-4 px-4"
            >
              <span className="text-white text-xl md:text-2xl font-extrabold leading-tight">
                {stat.value}
              </span>
              <span className="text-white/70 text-xs md:text-sm mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}