"use client";

import { useState } from "react";

const filterTabs = ["All", "Rent", "Buy", "Commercial", "Land", "Shortlet"];

const listings = [
  {
    id: 1,
    badge: "TITLE VERIFIED",
    price: "₦45,000,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    title: "4 Bedroom Detached Duplex",
    location: "Lekki Phase 1, Lagos",
    specs: [{ label: "4", sub: "Beds" }, { label: "3", sub: "Baths" }, { label: "320", sub: "sqm" }],
    agent: "Adewale Realty",
    specType: "residential",
  },
  {
    id: 2,
    badge: "C of O",
    price: "₦125,000,000",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    title: "600 sqm land, GRA",
    location: "GRA Portharcourt",
    specs: [{ label: "320", sub: "sqm" }, { label: "C of O", sub: "" }, { label: "Residential", sub: "" }],
    agent: "PH Properties",
    specType: "land",
  },
  {
    id: 3,
    badge: "COMMERCIAL VERIFIED",
    price: "₦5,000,000",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    title: "Office Spaces, Wuse 2",
    location: "Wuse 2, Abuja",
    specs: [{ label: "320", sub: "sqm" }, { label: "Open", sub: "Plan" }, { label: "Big", sub: "Parking" }],
    agent: "Abuja Commercials",
    specType: "commercial",
  },
  {
    id: 4,
    badge: "C of O",
    price: "₦125,000,000",
    image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=600&q=80",
    title: "600 sqm land, GRA",
    location: "GRA Portharcourt",
    specs: [{ label: "320", sub: "sqm" }, { label: "C of O", sub: "" }, { label: "Residential", sub: "" }],
    agent: "PH Properties",
    specType: "land",
  },
  {
    id: 5,
    badge: "C of O",
    price: "₦125,000,000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    title: "600 sqm land, GRA",
    location: "GRA Portharcourt",
    specs: [{ label: "320", sub: "sqm" }, { label: "C of O", sub: "" }, { label: "Residential", sub: "" }],
    agent: "PH Properties",
    specType: "land",
  },
  {
    id: 6,
    badge: "COMMERCIAL VERIFIED",
    price: "₦5,000,000",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
    title: "Office Spaces, Wuse 2",
    location: "Wuse 2, Abuja",
    specs: [{ label: "320", sub: "sqm" }, { label: "Open", sub: "Plan" }, { label: "Big", sub: "Parking" }],
    agent: "Abuja Commercials",
    specType: "commercial",
  },
  {
    id: 7,
    badge: "C of O",
    price: "₦125,000,000",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    title: "600 sqm land, GRA",
    location: "GRA Portharcourt",
    specs: [{ label: "320", sub: "sqm" }, { label: "C of O", sub: "" }, { label: "Residential", sub: "" }],
    agent: "PH Properties",
    specType: "land",
  },
  {
    id: 8,
    badge: "TITLE VERIFIED",
    price: "₦45,000,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    title: "4 Bedroom Detached Duplex",
    location: "Lekki Phase 1, Lagos",
    specs: [{ label: "4", sub: "Beds" }, { label: "3", sub: "Baths" }, { label: "320", sub: "sqm" }],
    agent: "Adewale Realty",
    specType: "residential",
  },
];

const CARDS_PER_PAGE = 8;
const TOTAL_PAGES = 3;

function PinIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="10" r="3" stroke="#9ca3af" strokeWidth="1.5" />
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#9ca3af" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

interface Listing {
  id: number;
  badge: string;
  price: string;
  image: string;
  title: string;
  location: string;
  specs: { label: string; sub: string }[];
  agent: string;
  specType: string;
}

function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img src={listing.image} alt={listing.title} className="w-full h-[200px] object-cover" />
        <span className="absolute top-3 left-3 bg-green-700 text-white text-[9.5px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
          {listing.badge}
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="absolute bottom-3 right-3 bg-white text-[#1a1f3c] text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
          {listing.price}
        </span>
      </div>
      <div className="p-3.5">
        <h3 className="text-[13px] font-bold text-[#1a1f3c] mb-1">{listing.title}</h3>
        <div className="flex items-center gap-1 mb-2.5">
          <PinIcon />
          <span className="text-[11px] text-gray-500">{listing.location}</span>
        </div>
        <div className="flex items-center gap-2.5 border-t border-gray-100 pt-2.5 mb-2.5">
          {listing.specs.map((spec, i) => (
            <div key={i} className="flex items-center gap-1">
              <span className="text-[10.5px] text-gray-500">
                <span className="font-semibold text-[#1a1f3c]">{spec.label}</span>
                {spec.sub && ` ${spec.sub}`}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-gray-100 pt-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="#1a1f3c" strokeWidth="1.2" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#1a1f3c" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[10.5px] text-gray-500">{listing.agent}</span>
          </div>
          <a href="#" className="text-[10.5px] font-semibold text-[#1a1f3c] flex items-center gap-1 hover:text-[#F5A623]">
            Details <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function LatestListings() {
  const [activeTab, setActiveTab] = useState("All");
  const [page, setPage] = useState(0);

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-[10.5px] font-bold tracking-[0.22em] text-[#F5A623] uppercase mb-2">
            Fresh On The Market
          </p>
          <h2 className="text-[30px] md:text-[34px] font-normal text-[#1a1f3c] mb-2">
            Latest Listings
          </h2>
          <p className="text-[13.5px] text-gray-500">
            New verified properties added daily across Nigeria
          </p>
        </div>

        {/* Filter Row */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#1a1f3c] text-white shadow-sm"
                    : "text-gray-500 hover:text-[#1a1f3c]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[13px] text-gray-500">Sort by</span>
            <button className="border border-gray-300 text-[#1a1f3c] text-[13px] font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5">
              Newest first <span className="text-xs">↓</span>
            </button>
          </div>
        </div>

        {/* Cards Grid with Carousel Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white border border-gray-200 rounded-full shadow flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setPage((p) => Math.min(TOTAL_PAGES - 1, p + 1))}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white border border-gray-200 rounded-full shadow flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`rounded-full transition-all ${
                i === page ? "w-4 h-2.5 bg-[#1a1f3c]" : "w-2.5 h-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* View all button */}
        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="border border-[#1a1f3c] text-[#1a1f3c] text-[13.5px] font-medium px-7 py-3 rounded-full hover:bg-[#1a1f3c] hover:text-white transition-all flex items-center gap-2"
          >
            View all listings <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
