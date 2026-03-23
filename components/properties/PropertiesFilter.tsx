"use client";

import { useState } from "react";

const tabs = ["All", "Buy", "Sell", "Land", "Commercial", "Shortlet"];

const activeFilters = [
  { label: "Lagos" },
  { label: "₦10m - ₦20m" },
  { label: "Bedrooms" },
  { label: "Property type" },
  { label: "Size" },
  { label: "Verified only", highlight: true },
];

export default function PropertiesFilter() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="w-full bg-white border-b border-gray-100 px-6 md:px-10 py-4">
      <div className="flex flex-col gap-3">

        {/* Row 1: Type tabs + Sort by */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#1a1f3c] text-white"
                    : "text-gray-500 hover:text-[#1a1f3c] hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Sort by */}
          <div className="flex items-center gap-2">
            <span className="text-[13px] text-gray-400">Sort by</span>
            <button className="border border-gray-200 text-[#1a1f3c] text-[13px] font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5 hover:border-gray-400 transition-colors">
              Newest first
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Row 2: Active filter pills */}
        <div className="flex items-center gap-2 flex-wrap">
          {activeFilters.map((filter) => (
            <button
              key={filter.label}
              className={`px-3 py-1.5 rounded-full text-[12px] font-medium border transition-all flex items-center gap-1 ${
                filter.highlight
                  ? "border-[#F5A623] text-[#F5A623] bg-amber-50"
                  : "border-gray-200 text-gray-600 hover:border-gray-400"
              }`}
            >
              {filter.label}
              {!filter.highlight && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          ))}

          {/* More filters */}
          <button className="px-3 py-1.5 rounded-full text-[12px] font-medium border border-gray-200 text-gray-600 hover:border-gray-400 flex items-center gap-1 transition-all">
            More filters
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
