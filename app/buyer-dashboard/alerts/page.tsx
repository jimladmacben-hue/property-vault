"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const initialAlerts = [
  {
    id: 1,
    title: "3–4 Bed · For Sale · Lekki",
    tags: ["For sale", "Lekki Phase 1", "3-4 bedrooms", "Under ₦50M", "Verified only"],
    newCount: 8,
    lastMatch: "Last match 35 minutes ago · 8 new today",
    active: true,
  },
  {
    id: 2,
    title: "Land · Ajah or Ibeju-Lekki",
    tags: ["For sale", "Lekki Phase 1", "3-4 bedrooms", "Under ₦50M", "Verified only"],
    newCount: 4,
    lastMatch: "Last match 35 minutes ago · 4 new today",
    active: true,
  },
  {
    id: 3,
    title: "2 Bed Flat · For Rent · Abuja",
    tags: ["For sale", "Lekki Phase 1", "3-4 bedrooms", "Under ₦50M", "Verified only"],
    newCount: 2,
    lastMatch: "Last match 35 minutes ago · 2 new today",
    active: true,
  },
  {
    id: 4,
    title: "5 Bed · For Sale · Victoria Island",
    tags: ["For sale", "Lekki Phase 1", "3-4 bedrooms", "Under ₦50M", "Verified only"],
    newCount: 0,
    lastMatch: "Last match 35 minutes ago · 8 new today",
    active: false,
  },
];

const newMatches = [
  { id: 1, image: "/images/invest-prop-1.jpg", title: "4 Bed Detached Duplex, Lekki Phase 1", location: "Lekki Phase 1, Lagos", price: "₦45,000,000", beds: 4, baths: 3, sqm: 320 },
  { id: 2, image: "/images/invest-prop-2.jpg", title: "4 Bed Detached Duplex, Lekki Phase 1", location: "Lekki Phase 1, Lagos", price: "₦45,000,000", beds: 4, baths: 3, sqm: 320 },
  { id: 3, image: "/images/invest-prop-3.jpg", title: "4 Bed Detached Duplex, Lekki Phase 1", location: "Lekki Phase 1, Lagos", price: "₦45,000,000", beds: 4, baths: 3, sqm: 320 },
];

// ─── Toggle ───────────────────────────────────────────────────────────────────

function Toggle({ active, onChange }: { active: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`relative w-11 h-6 rounded-full flex-shrink-0 transition-colors duration-200 ${active ? "bg-[#1a1f3c]" : "bg-gray-200"}`}
    >
      <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${active ? "translate-x-5" : "translate-x-0.5"}`} />
    </button>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function SearchAlertsPage() {
  const [alerts, setAlerts] = useState(initialAlerts);

  const toggleAlert = (id: number) =>
    setAlerts((prev) => prev.map((a) => a.id === id ? { ...a, active: !a.active } : a));

  const deleteAlert = (id: number) =>
    setAlerts((prev) => prev.filter((a) => a.id !== id));

  const activeCount = alerts.filter((a) => a.active).length;
  const totalNew = alerts.reduce((s, a) => s + a.newCount, 0);

  return (
    <div className="p-6 sm:p-8 space-y-6">

      {/* ── Top bar ── */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-black text-[#1a1f3c]">Search Alerts</h1>
          <p className="text-sm text-gray-400 mt-0.5">
            {activeCount} active alerts · {totalNew} new matching listings today
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-gray-300 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">3</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shadow-md"
          >
            + New Alerts
          </button>
        </div>
      </div>

      {/* ── Your Alerts card ── */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {/* Card header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <h2 className="text-base font-black text-[#1a1f3c]">Your Alert</h2>
            <p className="text-xs text-gray-400 mt-0.5">We check for new matches every hour</p>
          </div>
          <button className="text-xs font-bold text-[#1a1f3c] border border-gray-200 px-3 py-1.5 rounded-full hover:border-[#1a1f3c] transition-colors">
            View all
          </button>
        </div>

        {/* Alert rows */}
        <div className="divide-y divide-gray-50">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-center gap-4 px-6 py-5">
              {/* Bell icon */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${alert.active ? "bg-amber-100" : "bg-gray-100"}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
                    stroke={alert.active ? "#F5A623" : "#9ca3af"}
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Alert info */}
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-bold mb-1.5 ${alert.active ? "text-[#1a1f3c]" : "text-gray-400"}`}>
                  {alert.title}
                </p>
                {/* Tag pills */}
                <div className="flex flex-wrap gap-1.5 mb-1.5">
                  {alert.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-gray-400">{alert.lastMatch}</p>
              </div>

              {/* Right controls */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {/* New count or Paused */}
                {alert.active && alert.newCount > 0 ? (
                  <span className="text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {alert.newCount} new
                  </span>
                ) : !alert.active ? (
                  <span className="text-[10px] font-semibold text-gray-400 whitespace-nowrap">Paused</span>
                ) : null}

                {/* Toggle */}
                <Toggle active={alert.active} onChange={() => toggleAlert(alert.id)} />

                {/* Edit */}
                <button className="text-xs font-bold text-[#1a1f3c] border border-gray-200 px-3.5 py-2 rounded-xl hover:border-[#1a1f3c] transition-colors">
                  Edit
                </button>

                {/* Delete */}
                <button
                  type="button"
                  onClick={() => deleteAlert(alert.id)}
                  className="text-xs font-bold text-red-500 border border-red-200 px-3.5 py-2 rounded-xl hover:bg-red-50 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Set new alert CTA row */}
        <div className="mx-6 mb-6 mt-2">
          <button
            type="button"
            className="w-full flex items-center justify-between gap-4 border-2 border-dashed border-gray-200 hover:border-[#F5A623] rounded-2xl px-5 py-4 transition-all duration-200 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-[#F5A623] flex items-center justify-center transition-colors flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2v10M2 7h10" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" className="group-hover:stroke-[#F5A623] transition-colors" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-[#1a1f3c]">Set a new search alert</p>
                <p className="text-xs text-gray-400">Tell us what you&apos;re looking for and we&apos;ll notify you the moment it&apos;s listed</p>
              </div>
            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 8h8M9 5l3 3-3 3" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── New matches section ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-base font-black text-[#1a1f3c]">
            New matches for &ldquo;3–4 Bed · For Sale · Lekki&rdquo;
          </h2>
          <button className="text-xs font-bold text-[#1a1f3c] border border-gray-200 px-3 py-1.5 rounded-full hover:border-[#1a1f3c] transition-colors">
            View all
          </button>
        </div>
        <p className="text-xs text-gray-400 mb-5">We check for new matches every hour</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {newMatches.map((p) => (
            <div key={p.id} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative h-36">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 flex items-center gap-1 bg-green-600 text-white text-[9px] font-bold px-2 py-1 rounded-full">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  TITLE VERIFIED
                </span>
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {p.price}
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-bold text-[#1a1f3c] truncate mb-0.5">{p.title}</p>
                <p className="text-[10px] text-gray-400 mb-2">{p.location}</p>
                <div className="flex items-center gap-3 text-[10px] text-gray-500 mb-3">
                  <span><strong className="text-[#1a1f3c]">{p.beds}</strong> Beds</span>
                  <span><strong className="text-[#1a1f3c]">{p.baths}</strong> Baths</span>
                  <span><strong className="text-[#1a1f3c]">{p.sqm}</strong> sqm</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-[10px] font-bold py-2 rounded-lg transition-colors">
                    Enquire
                  </button>
                  <Link href={`/properties/${p.id}`} className="flex-1 border border-gray-200 hover:border-[#1a1f3c] text-[#1a1f3c] text-[10px] font-bold py-2 rounded-lg text-center transition-colors">
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
