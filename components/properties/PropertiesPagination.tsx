"use client";

import { useState } from "react";

export default function PropertiesPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const total = 2847;
  const pages = [1, 2, 3, 4, "...", 90];

  return (
    <>
      {/* Pagination bar */}
      <div className="w-full bg-[#1a1f3c] px-6 md:px-10 py-4 flex items-center justify-between flex-wrap gap-3">
        {/* Left: showing count */}
        <p className="text-[13px] text-white/70">
          Showing{" "}
          <span className="text-white font-semibold">
            1–{perPage} of {total.toLocaleString()}
          </span>{" "}
          properties
        </p>

        {/* Center: page numbers */}
        <div className="flex items-center gap-1">
          {/* Prev */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 3L5 7L9 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {pages.map((page, i) => (
            <button
              key={i}
              onClick={() => typeof page === "number" && setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-[13px] font-medium transition-colors ${
                currentPage === page
                  ? "bg-white text-[#1a1f3c] font-bold"
                  : "text-white/70 hover:bg-white/10 border border-white/20"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3L9 7L5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Right: per page */}
        <div className="flex items-center gap-2">
          <span className="text-[13px] text-white/70">Show</span>
          <select
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
            className="bg-white/10 border border-white/20 text-white text-[13px] font-semibold px-3 py-1.5 rounded-lg outline-none cursor-pointer"
          >
            {[10, 20, 50, 100].map((n) => (
              <option key={n} value={n} className="text-[#1a1f3c] bg-white">
                {n}
              </option>
            ))}
          </select>
          <span className="text-[13px] text-white/70">per page</span>
        </div>
      </div>

      {/* Bottom CTA */}
<div className="w-full bg-[#0d1230] py-10 flex flex-col items-center gap-4">
  <p className="text-[14px] text-white/70">
    Can't find what you're looking for?
  </p>
  <div className="flex items-center gap-3">
    <button className="border border-white/30 text-white text-[13.5px] font-medium px-6 py-2.5 rounded-full hover:bg-white hover:text-[#0d1230] transition-all">
      Set a Search Alert
    </button>
    <button className="border border-white/30 text-white text-[13.5px] font-medium px-6 py-2.5 rounded-full hover:bg-white hover:text-[#0d1230] transition-all">
      Talk to an Agent
    </button>
  </div>
</div>
    </>
  );
}
