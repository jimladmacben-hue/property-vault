"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const allProperties = [
  { id: 1, image: "/images/invest-prop-1.jpg", title: "4 Bedroom Detached Duplex", location: "Lekki Phase 1, Lagos", price: "₦45,000,000", beds: 4, baths: 3, sqm: 320, type: "For Sale", priceDrop: false },
  { id: 2, image: "/images/invest-prop-2.jpg", title: "4 Bedroom Detached Duplex", location: "Lekki Phase 1, Lagos", price: "₦45,000,000", beds: 4, baths: 3, sqm: 320, type: "For Sale", priceDrop: true },
  { id: 3, image: "/images/invest-prop-3.jpg", title: "4 Bedroom Detached Duplex", location: "Lekki Phase 1, Lagos", price: "₦45,000,000", beds: 4, baths: 3, sqm: 320, type: "For Sale", priceDrop: false },
  { id: 4, image: "/images/invest-prop-1.jpg", title: "3 Bed Apartment, Maitama", location: "Maitama, Abuja", price: "₦2,500,000/yr", beds: 3, baths: 2, sqm: 180, type: "For Rent", priceDrop: false },
  { id: 5, image: "/images/invest-prop-2.jpg", title: "2 Bed Flat, Victoria Island", location: "Victoria Island, Lagos", price: "₦3,200,000/yr", beds: 2, baths: 2, sqm: 120, type: "For Rent", priceDrop: true },
  { id: 6, image: "/images/invest-prop-3.jpg", title: "600sqm Land, Ajah", location: "Ajah, Lagos", price: "₦18,000,000", beds: 0, baths: 0, sqm: 600, type: "Land", priceDrop: false },
  { id: 7, image: "/images/invest-prop-1.jpg", title: "4 Bedroom Detached Duplex", location: "Ikoyi, Lagos", price: "₦85,000,000", beds: 4, baths: 4, sqm: 420, type: "For Sale", priceDrop: false },
  { id: 8, image: "/images/invest-prop-2.jpg", title: "5 Bed Smart Home, Lekki", location: "Lekki Phase 1, Lagos", price: "₦120,000,000", beds: 5, baths: 5, sqm: 500, type: "For Sale", priceDrop: false },
];

const filterTabs = [
  { label: "All", value: "All" },
  { label: "For Sale (5)", value: "For Sale" },
  { label: "For Rent (2)", value: "For Rent" },
  { label: "Land (1)", value: "Land" },
  { label: "Price drops (2)", value: "Price drops" },
];

const sortOptions = ["Date saved", "Price: Low to High", "Price: High to Low", "Most recent"];

// ─── Property Card ────────────────────────────────────────────────────────────

function PropertyCard({
  property,
  onRemove,
}: {
  property: (typeof allProperties)[0];
  onRemove: (id: number) => void;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative h-52">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />

        {/* Title Verified badge */}
        <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-green-600 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-full">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          TITLE VERIFIED
        </span>

        {/* Price drop badge */}
        {property.priceDrop && (
          <span className="absolute top-3 right-3 text-[10px] font-bold bg-amber-500 text-white px-2.5 py-1 rounded-full">
            Price drop
          </span>
        )}

        {/* Price overlay */}
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
          {property.price}
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-sm font-black text-[#1a1f3c] leading-snug mb-1">{property.title}</h3>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#9ca3af" strokeWidth="1.5" />
              <circle cx="12" cy="10" r="3" stroke="#9ca3af" strokeWidth="1.5" />
            </svg>
            {property.location}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          {property.beds > 0 && (
            <span className="flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="#9ca3af" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M9 21V12h6v9" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-semibold text-[#1a1f3c]">{property.beds}</span> Beds
            </span>
          )}
          {property.baths > 0 && (
            <span className="flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M4 12h16v4a4 4 0 01-4 4H8a4 4 0 01-4-4v-4zM6 12V6a2 2 0 012-2h1a2 2 0 012 2" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="font-semibold text-[#1a1f3c]">{property.baths}</span> Baths
            </span>
          )}
          <span className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="1" stroke="#9ca3af" strokeWidth="1.5" />
            </svg>
            <span className="font-semibold text-[#1a1f3c]">{property.sqm}</span> sqm
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-1">
          <button className="flex-1 bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-xs font-bold py-2.5 rounded-xl transition-colors">
            Send enquiry
          </button>
          <Link
            href={`/properties/${property.id}`}
            className="flex-1 border-2 border-gray-200 hover:border-[#1a1f3c] text-[#1a1f3c] text-xs font-bold py-2.5 rounded-xl text-center transition-colors"
          >
            View
          </Link>
          <button
            type="button"
            onClick={() => onRemove(property.id)}
            className="w-9 h-9 flex items-center justify-center border-2 border-red-100 hover:border-red-300 hover:bg-red-50 rounded-xl transition-colors flex-shrink-0"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function SavedPropertiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Date saved");
  const [sortOpen, setSortOpen] = useState(false);
  const [properties, setProperties] = useState(allProperties);

  const handleRemove = (id: number) =>
    setProperties((prev) => prev.filter((p) => p.id !== id));

  const filtered = properties.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Price drops") return p.priceDrop;
    return p.type === activeFilter;
  });

  const priceDrop2 = properties.filter((p) => p.priceDrop).length;

  return (
    <div className="p-6 sm:p-8">

      {/* ── Top bar ── */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#1a1f3c]">Saved Properties</h1>
          <p className="text-sm text-gray-400 mt-0.5">
            {properties.length} properties saved · {priceDrop2} price drops since you last visited
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-gray-300 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">2</span>
          </button>
          <Link
            href="/properties"
            className="flex items-center gap-2 bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shadow-md"
          >
            + Browse More Properties
          </Link>
        </div>
      </div>

      {/* ── 4 stat cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { value: properties.length.toString(), label: "Properties saved", color: "text-[#1a1f3c]" },
          { value: priceDrop2.toString(), label: "Price drops", color: "text-red-500" },
          { value: "8", label: "Enquiries sent", color: "text-[#1a1f3c]" },
          { value: "1", label: "Viewing scheduled", color: "text-[#1a1f3c]" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
            <p className={`text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* ── All Saved section ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-black text-[#1a1f3c]">All Saved</h2>
          <div className="relative flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-400">Sort by</span>
            <button
              type="button"
              onClick={() => setSortOpen((o) => !o)}
              className="flex items-center gap-2 border border-gray-200 bg-white text-xs font-semibold text-[#1a1f3c] px-3.5 py-2 rounded-xl hover:border-gray-300 transition-all"
            >
              {sortBy}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                className={`transition-transform ${sortOpen ? "rotate-180" : ""}`}>
                <path d="M3 5l4 4 4-4" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 w-44 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
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

        {/* Filter pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveFilter(tab.value)}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200
                ${activeFilter === tab.value
                  ? tab.value === "Price drops"
                    ? "bg-amber-100 border-amber-300 text-amber-700"
                    : "bg-[#1a1f3c] border-[#1a1f3c] text-white"
                  : tab.value === "Price drops"
                  ? "border-amber-200 text-amber-600 hover:bg-amber-50"
                  : "border-gray-200 text-gray-500 hover:border-gray-300"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Property grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} onRemove={handleRemove} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-gray-400 font-medium text-sm">
            No properties match this filter.
          </div>
        )}
      </div>
    </div>
  );
}
