"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const listings = [
  { id: 1, image: "/images/invest-prop-1.jpg", title: "4 Bed Detached Duplex", location: "Lekki Phase 1, Lagos", price: "₦45,000,000", status: "Active", views: 601, enquiries: 2 },
  { id: 2, image: "/images/invest-prop-2.jpg", title: "4 Bedroom flat", location: "Lekki Phase 1, Lagos", price: "₦145,000,000", status: "Sold", views: 1269, enquiries: 14 },
  { id: 3, image: "/images/invest-prop-3.jpg", title: "4 Bedroom flat", location: "Lekki Phase 1, Lagos", price: "₦145,000,000", status: "Under offer", views: 400, enquiries: 30 },
  { id: 4, image: "/images/invest-prop-1.jpg", title: "4 Bedroom flat", location: "Lekki Phase 1, Lagos", price: "₦145,000,000", status: "Active", views: 1269, enquiries: 4 },
  { id: 5, image: "/images/invest-prop-2.jpg", title: "4 Bedroom flat", location: "Lekki Phase 1, Lagos", price: "₦145,000,000", status: "Active", views: 1269, enquiries: 4 },
];

const statusColors: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Sold: "bg-amber-100 text-amber-700",
  "Under offer": "bg-orange-100 text-orange-700",
  Pending: "bg-blue-100 text-blue-700",
  Draft: "bg-gray-100 text-gray-500",
};

// ─── Dropdown ─────────────────────────────────────────────────────────────────

function FilterSelect({ value, options, onChange }: { value: string; options: string[]; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 border border-gray-200 bg-white text-sm font-semibold text-[#1a1f3c] px-3.5 py-2 rounded-xl hover:border-gray-300 transition-all"
      >
        {value}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M3 5l4 4 4-4" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full px-4 py-2.5 text-left text-sm font-medium hover:bg-amber-50 transition-colors ${value === opt ? "text-[#F5A623]" : "text-[#1a1f3c]"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function MyListingsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("Active");
  const [propertyType, setPropertyType] = useState("Residential");
  const [location, setLocation] = useState("Lagos");
  const [sortBy, setSortBy] = useState("Newest");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selected, setSelected] = useState<number[]>([]);
  const [actionOpen, setActionOpen] = useState<number | null>(null);
  const [confirmModal, setConfirmModal] = useState<{ type: "Delete" | "Pause", id: number } | null>(null);
  const [promoteModal, setPromoteModal] = useState<number | null>(null);
  const [tokenAmount, setTokenAmount] = useState(100);

  const toggleSelect = (id: number) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);

  const toggleAll = () =>
    setSelected(selected.length === listings.length ? [] : listings.map((l) => l.id));

  const filtered = listings.filter((l) => {
    const matchSearch = l.title.toLowerCase().includes(search.toLowerCase()) || l.location.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === "All" || l.status === status;
    return matchSearch && matchStatus;
  });

  return (
    <div className="p-6 sm:p-8 relative">

      {/* ── Confirm Modal ── */}
      {confirmModal && (
        <div className="fixed inset-0 bg-[#1a1f3c]/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] p-8 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-200">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${confirmModal.type === "Delete" ? "bg-red-50 text-red-500" : "bg-amber-50 text-amber-500"}`}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {confirmModal.type === "Delete" ? (
                  <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                ) : (
                  <path d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                )}
              </svg>
            </div>
            <h3 className="text-xl font-black text-[#1a1f3c] mb-2">{confirmModal.type} Listing?</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              Are you sure you want to {confirmModal.type.toLowerCase()} this listing? This action {confirmModal.type === "Delete" ? "cannot be undone" : "can be reversed later"}.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmModal(null)}
                className="flex-1 px-6 py-3 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setConfirmModal(null)}
                className={`flex-1 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all ${confirmModal.type === "Delete" ? "bg-red-500 hover:bg-red-600 shadow-red-500/20" : "bg-[#1a1f3c] hover:bg-[#2a3060]"} shadow-lg`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ── Promote Modal ── */}
      {promoteModal && (
        <div className="fixed inset-0 bg-[#1a1f3c]/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] p-8 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[#F5A623] flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-[#1a1f3c] mb-2">Promote Listing</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Use your tokens to boost this listing to the top of search results. The more tokens you use, the higher your priority.
            </p>
            
            <div className="mb-8">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Tokens to spend</label>
              <div className="flex items-center gap-4">
                <input 
                  type="number" 
                  value={tokenAmount}
                  onChange={(e) => setTokenAmount(Number(e.target.value))}
                  className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-lg font-black text-[#1a1f3c] focus:outline-none focus:border-[#F5A623]"
                />
                <span className="text-sm font-bold text-gray-400">Tokens</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setPromoteModal(null)}
                className="flex-1 px-6 py-3 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setPromoteModal(null)}
                className="flex-1 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#F5A623] hover:bg-[#e09510] shadow-lg shadow-amber-500/20 transition-all"
              >
                Boost Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Top bar ── */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#1a1f3c]">Good morning, Adewale 🤝</h1>
          <p className="text-sm text-gray-400 mt-0.5">Thursday, 2 April 2026 · Here&apos;s what needs your attention today</p>
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

      {/* ── Filters ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[240px]">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search by title, location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-[#F5A623] transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-400">Status</span>
            <FilterSelect value={status} options={["All", "Active", "Sold", "Under offer", "Draft"]} onChange={setStatus} />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-400">Type</span>
            <FilterSelect value={propertyType} options={["All", "Residential", "Commercial", "Land"]} onChange={setPropertyType} />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-400">Price Range</span>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-20 px-3 py-2 border border-gray-200 rounded-xl text-sm text-[#1a1f3c] placeholder-gray-400 focus:outline-none focus:border-[#F5A623] transition-all"
              />
              <span className="text-gray-300">-</span>
              <input
                type="text"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-20 px-3 py-2 border border-gray-200 rounded-xl text-sm text-[#1a1f3c] placeholder-gray-400 focus:outline-none focus:border-[#F5A623] transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-400">Location</span>
            <FilterSelect value={location} options={["All", "Lagos", "Abuja", "Port Harcourt"]} onChange={setLocation} />
          </div>

          <div className="flex items-center gap-1.5 ml-auto">
            <span className="text-sm font-semibold text-gray-400">Sort by:</span>
            <FilterSelect value={sortBy} options={["Newest", "Oldest", "Most views", "Most enquiries", "Price: High to Low", "Price: Low to High"]} onChange={setSortBy} />
          </div>
        </div>
      </div>

      {/* ── Listings table ── */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-4">
        {/* Table header */}
        <div className="grid grid-cols-[40px_1fr_160px_120px_120px_120px_40px] items-center px-5 py-3 border-b border-gray-100 bg-gray-50">
          <input
            type="checkbox"
            checked={selected.length === listings.length}
            onChange={toggleAll}
            className="w-4 h-4 rounded accent-[#1a1f3c]"
          />
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Property</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Price</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Status</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Views</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Enquiries</span>
          <span />
        </div>

        {/* Rows */}
        {filtered.map((listing) => (
          <div
            key={listing.id}
            className="grid grid-cols-[40px_1fr_160px_120px_120px_120px_40px] items-center px-5 py-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={selected.includes(listing.id)}
              onChange={() => toggleSelect(listing.id)}
              className="w-4 h-4 rounded accent-[#1a1f3c]"
            />

            {/* Property */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-[#1a1f3c] truncate">{listing.title}</p>
                <p className="text-xs text-gray-400 truncate">{listing.location}</p>
              </div>
            </div>

            {/* Price */}
            <p className="text-sm font-bold text-[#1a1f3c]">{listing.price}</p>

            {/* Status */}
            <span className={`inline-flex text-xs font-bold px-3 py-1 rounded-full w-fit ${statusColors[listing.status]}`}>
              {listing.status}
            </span>

            {/* Views */}
            <p className="text-sm text-gray-500">{listing.views} views</p>

            {/* Enquiries */}
            <p className="text-sm text-gray-500">{listing.enquiries} enquiries</p>

            {/* Actions */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActionOpen(actionOpen === listing.id ? null : listing.id)}
                className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-400"
              >
                ···
              </button>
              {actionOpen === listing.id && (
                <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                  <Link
                    href="/agent-dashboard/listings/edit/1"
                    className="w-full block px-4 py-2.5 text-left text-xs font-semibold hover:bg-gray-50 transition-colors text-[#1a1f3c]"
                  >
                    Edit listing
                  </Link>
                  <Link
                    href="/agent-dashboard/listings/view/1"
                    className="w-full block px-4 py-2.5 text-left text-xs font-semibold hover:bg-gray-50 transition-colors text-[#1a1f3c]"
                  >
                    View listing
                  </Link>
                  <button
                    type="button"
                    onClick={() => { setPromoteModal(listing.id); setActionOpen(null); }}
                    className="w-full px-4 py-2.5 text-left text-xs font-semibold hover:bg-amber-50 transition-colors text-[#F5A623]"
                  >
                    Promote Listing ⚡
                  </button>
                  <button
                    type="button"
                    onClick={() => { setConfirmModal({ type: "Pause", id: listing.id }); setActionOpen(null); }}
                    className="w-full px-4 py-2.5 text-left text-xs font-semibold hover:bg-gray-50 transition-colors text-[#1a1f3c]"
                  >
                    Pause listing
                  </button>
                  <button
                    type="button"
                    onClick={() => { setConfirmModal({ type: "Delete", id: listing.id }); setActionOpen(null); }}
                    className="w-full px-4 py-2.5 text-left text-xs font-semibold hover:bg-gray-50 transition-colors text-red-500"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="py-16 text-center text-gray-400 text-sm font-medium">
            No listings match your filters.
          </div>
        )}
      </div>

      {/* ── Pagination ── */}
      <div className="flex items-center justify-end gap-2">
        <button className="w-9 h-9 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:border-gray-300 transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="w-9 h-9 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:border-gray-300 transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <FilterSelect value="View all" options={["View all", "10 per page", "25 per page", "50 per page"]} onChange={() => {}} />
      </div>

    </div>
  );
}
