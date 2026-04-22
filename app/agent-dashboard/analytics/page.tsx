"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const statsByPeriod: Record<string, {
  views: number; viewsDelta: string;
  enquiries: number; enquiriesDelta: string;
  conversion: string; conversionNote: string;
  responseTime: string; responseNote: string;
}> = {
  "7 days": { views: 312, viewsDelta: "+8 vs last week", enquiries: 5, enquiriesDelta: "+1 more than last week", conversion: "1.6%", conversionNote: "Platform avg: 1.2%", responseTime: "2hrs", responseNote: "Top 5% of agents" },
  "This month": { views: 1246, viewsDelta: "+12 vs last month", enquiries: 18, enquiriesDelta: "+3 more than last month", conversion: "1.4%", conversionNote: "Platform avg: 1.2%", responseTime: "2hrs", responseNote: "Top 5% of agents" },
  "3 months": { views: 3891, viewsDelta: "+24 vs last quarter", enquiries: 54, enquiriesDelta: "+11 more than last quarter", conversion: "1.4%", conversionNote: "Platform avg: 1.2%", responseTime: "2hrs", responseNote: "Top 5% of agents" },
};

const listings = [
  { id: 1, image: "/images/invest-prop-1.jpg", title: "4 Bed Detached Duplex, Lek...", meta: "Listed 14 days ago · ₦45,000,000", views: 684, maxViews: 700, enquiries: 7, maxEnquiries: 20, conversion: "1.0%", label: "Good", labelColor: "text-green-600" },
  { id: 2, image: "/images/invest-prop-2.jpg", title: "5 Bed Smart Home, Ikoyi", meta: "Listed 3 days ago · ₦85,000,000", views: 60, maxViews: 700, enquiries: 6, maxEnquiries: 20, conversion: "15%", label: "New", labelColor: "text-blue-600", labelIcon: "⚡" },
  { id: 3, image: "/images/invest-prop-3.jpg", title: "3 Bed Flat, Victoria Island", meta: "Listed 8 days ago · ₦3,500,000/year", views: 412, maxViews: 700, enquiries: 4, maxEnquiries: 20, conversion: "1.0%", label: "Good", labelColor: "text-green-600" },
  { id: 4, image: "/images/invest-prop-1.jpg", title: "600sqm Land, C of O — Ajah", meta: "Listed 21 days ago · ₦18,000,000", views: 141, maxViews: 700, enquiries: 1, maxEnquiries: 20, conversion: "0.7%", label: "Slow", labelColor: "text-red-500", labelIcon: "↓" },
];

// bar chart data — last 30 days (weekly buckets)
const chartData = [
  { label: "W1", views: 85, enquiries: 12 },
  { label: "W2", views: 42, enquiries: 6 },
  { label: "W3", views: 110, enquiries: 8 },
  { label: "W4", views: 38, enquiries: 4 },
  { label: "W5", views: 95, enquiries: 14 },
  { label: "W6", views: 60, enquiries: 9 },
  { label: "W7", views: 130, enquiries: 18 },
  { label: "W8", views: 48, enquiries: 5 },
  { label: "W9", views: 105, enquiries: 11 },
  { label: "W10", views: 80, enquiries: 10 },
];
const maxChart = Math.max(...chartData.map((d) => d.views));

const breakdownTabs = ["Views", "Enquiries", "Conversation"];

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AnalyticsPage() {
  const [period, setPeriod] = useState("This month");
  const [breakdownTab, setBreakdownTab] = useState("Views");
  const stats = statsByPeriod[period];

  return (
    <div className="p-6 sm:p-8 space-y-6">

      {/* ── Top bar ── */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-black text-[#1a1f3c]">Listing Performance</h1>
          <p className="text-sm text-gray-400 mt-0.5">How your listings are performing this month · April 2026</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-gray-300 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">3</span>
          </button>
          <Link
            href="/agent-dashboard/listings/new"
            className="flex items-center gap-2 bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shadow-md"
          >
            <span className="text-base leading-none">+</span> New listing
          </Link>
        </div>
      </div>

      {/* ── This month at a glance ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h2 className="text-base font-black text-[#1a1f3c] mb-1">This month at a glance</h2>
            <p className="text-xs text-gray-400">
              April 1 – April 2, 2026 ·{" "}
              <span className="text-[#F5A623] font-semibold">12 active listings</span>
            </p>
          </div>
          {/* Period toggle */}
          <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
            {Object.keys(statsByPeriod).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPeriod(p)}
                className={`text-xs font-semibold px-4 py-2 transition-all ${
                  period === p
                    ? "bg-gray-100 text-[#1a1f3c]"
                    : "text-gray-400 hover:text-[#1a1f3c]"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 divide-x divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
          {[
            { label: "TOTAL LISTING VIEWS", value: stats.views.toLocaleString(), delta: stats.viewsDelta, deltaColor: "text-green-600" },
            { label: "ENQUIRIES RECEIVED", value: stats.enquiries.toString(), delta: stats.enquiriesDelta, deltaColor: "text-green-600" },
            { label: "ENQUIRIES RECEIVED", value: stats.conversion, delta: stats.conversionNote, deltaColor: "text-amber-600", deltaStyle: "bg-amber-50 px-2 py-0.5 rounded-full" },
            { label: "AVG. RESPONSE TIME", value: stats.responseTime, delta: stats.responseNote, deltaColor: "text-green-600" },
            { label: "AVG. RESPONSE TIME", value: stats.responseTime, delta: stats.responseNote, deltaColor: "text-green-600" },
          ].map((stat, i) => (
            <div key={i} className="p-4 flex flex-col gap-1">
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">{stat.label}</p>
              <p className="text-2xl font-black text-[#1a1f3c]">{stat.value}</p>
              <p className={`text-[11px] font-semibold ${stat.deltaColor} ${stat.deltaStyle ?? ""}`}>
                ↑ {stat.delta}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Per-Listing Breakdown ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="flex items-start justify-between mb-1">
          <div>
            <h2 className="text-base font-black text-[#1a1f3c] mb-1">Per-Listing Breakdown</h2>
            <p className="text-xs text-gray-400">See exactly which listings are working and which need attention</p>
          </div>
          {/* Tab toggle */}
          <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
            {breakdownTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setBreakdownTab(tab)}
                className={`text-xs font-semibold px-4 py-2 transition-all ${
                  breakdownTab === tab
                    ? "bg-[#1a1f3c] text-white"
                    : "text-gray-400 hover:text-[#1a1f3c]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 space-y-5">
          {listings.map((listing) => (
            <div key={listing.id} className="flex items-center gap-4">
              {/* Image */}
              <div className="w-16 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
              </div>

              {/* Title */}
              <div className="w-48 flex-shrink-0">
                <p className="text-sm font-bold text-[#1a1f3c] leading-snug truncate">{listing.title}</p>
                <p className="text-xs text-gray-400 truncate">{listing.meta}</p>
              </div>

              {/* Bars */}
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-gray-400 w-14">Views</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-[#F5A623] rounded-full"
                      style={{ width: `${(listing.views / maxChart) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-[#1a1f3c] w-8 text-right">{listing.views}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-gray-400 w-14">Enquiries</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-[#1a1f3c] rounded-full"
                      style={{ width: `${(listing.enquiries / 20) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-[#1a1f3c] w-8 text-right">{listing.enquiries}</span>
                </div>
              </div>

              {/* Conversion */}
              <div className="w-24 text-right flex-shrink-0">
                <p className="text-sm font-black text-[#1a1f3c]">{listing.conversion} conv..</p>
                <p className={`text-xs font-bold ${listing.labelColor}`}>
                  {listing.labelIcon ?? "↑"} {listing.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Views vs Enquiries bar chart ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-black text-[#1a1f3c]">Views vs Enquiries – Last 30 days</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm bg-[#1a1f3c]" />
              <span className="text-xs font-semibold text-gray-500">Views</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm bg-[#F5A623]" />
              <span className="text-xs font-semibold text-gray-500">Enquiries</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="flex items-end gap-3 h-40">
          {chartData.map((d) => (
            <div key={d.label} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex items-end gap-0.5 h-32">
                {/* Views bar */}
                <div
                  className="flex-1 bg-[#1a1f3c] rounded-t-md transition-all duration-500"
                  style={{ height: `${(d.views / maxChart) * 100}%` }}
                />
                {/* Enquiries bar */}
                <div
                  className="flex-1 bg-[#F5A623] rounded-t-md transition-all duration-500"
                  style={{ height: `${(d.enquiries / maxChart) * 100}%` }}
                />
              </div>
              <span className="text-[9px] text-gray-400 font-medium">{d.label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
