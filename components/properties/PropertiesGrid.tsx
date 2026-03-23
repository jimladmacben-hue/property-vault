"use client";

import { useState } from "react";
import Link from "next/link";

const properties = [
  {
    id: 1,
    badge: "TITLE VERIFIED",
    price: "₦45,000,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
    title: "4 Bedroom Detached Duplex",
    location: "Lekki Phase 1, Lagos",
    beds: 4, baths: 3, sqm: 320,
    agent: "Adewale Realty",
  },
  {
    id: 2,
    badge: "TITLE VERIFIED",
    price: "₦655,000,000",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&q=80",
    title: "64 Bedroom Detached Duplex",
    location: "Lekki Phase 1, Lagos",
    beds: 67, baths: 67, sqm: 4320,
    agent: "Lagos Prime",
  },
  {
    id: 3,
    badge: "TITLE VERIFIED",
    price: "₦90,000,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
    title: "7 Bedroom Detached Duplex",
    location: "Lekki Phase 11, Lagos",
    beds: 7, baths: 7, sqm: 900,
    agent: "Capital Homes",
  },
  {
    id: 4,
    badge: "TITLE VERIFIED",
    price: "₦655,000,000",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80",
    title: "64 Bedroom Detached Duplex",
    location: "Lekki Phase 1, Lagos",
    beds: 67, baths: 67, sqm: 4320,
    agent: "Lagos Prime",
  },
];

function PinIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="10" r="3" stroke="#9ca3af" strokeWidth="1.5" />
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        stroke="#9ca3af"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export default function PropertiesGrid() {
  const [activeId, setActiveId] = useState(3);

  return (
    <div className="w-full bg-[#f5f5f0] px-4 md:px-10 py-6">
      <div className="flex flex-col lg:flex-row gap-5  mx-auto">

        {/* Left: Property list */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          {properties.map((p) => (
            <div
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`flex gap-0 cursor-pointer bg-white rounded-xl overflow-hidden transition-all ${
                activeId === p.id
                  ? "border-l-4 border-[#F5A623] shadow-md"
                  : "border-l-4 border-transparent shadow-sm hover:shadow-md"
              }`}
            >
              {/* Image */}
              <div className="relative flex-shrink-0 w-[200px] h-[200px]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                {/* Badge */}
                <span className="absolute top-2 left-2 bg-green-700 text-white text-[8.5px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  {p.badge}
                  <svg width="7" height="7" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {/* Price */}
                <span className="absolute bottom-2 left-2 bg-[#1a1f3c] text-white text-[16px] font-normal px-2 py-0.5 rounded-full">
                  {p.price}
                </span>
                {/* Heart */}
                <button className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="#1a1f3c" strokeWidth="1.5" fill="none" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 px-4 py-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1a1f3c] mb-1">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    <PinIcon />
                    <span className="text-[16px] text-gray-500">{p.location}</span>
                  </div>
                  <div className="flex items-center gap-4 text-[14px] text-gray-500">
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#1a1f3c]">{p.beds}</span>
                      <span>Beds</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#1a1f3c]">{p.baths}</span>
                      <span>Baths</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#1a1f3c]">{p.sqm}</span>
                      <span>sqm</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="8" r="4" stroke="#1a1f3c" strokeWidth="1.5" />
                        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-[14px] text-gray-500">{p.agent}</span>
                  </div>
                  <Link
  href={`/properties/${p.id}`}
  className="text-[14.5px] font-normal text-[#1a1f3c] flex items-center gap-1 hover:text-[#F5A623] transition-colors border border-gray-200 px-3 py-1 rounded-full"
>
  View →
</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Map */}
        <div className="w-full lg:w-1/2 relative rounded-xl overflow-hidden min-h-[520px]">
          {/* Map image placeholder */}
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
            alt="Map"
            className="w-full h-full object-cover"
          />

          {/* Map/Satellite toggle */}
          <div className="absolute top-3 left-3 bg-white rounded-lg shadow flex overflow-hidden">
            <button className="px-4 py-2 text-[12px] font-semibold bg-[#1a1f3c] text-white">
              Map
            </button>
            <button className="px-4 py-2 text-[12px] font-medium text-gray-600 hover:bg-gray-50">
              Satellite
            </button>
          </div>

          {/* Zoom buttons */}
          <div className="absolute top-3 right-3 flex flex-col bg-white rounded-lg shadow overflow-hidden">
            <button className="px-3 py-2 text-[14px] font-bold text-gray-600 hover:bg-gray-50 border-b border-gray-100">
              +
            </button>
            <button className="px-3 py-2 text-[14px] font-bold text-gray-600 hover:bg-gray-50">
              −
            </button>
          </div>

          {/* Price markers */}
          {[
            { label: "₦45m/yr", top: "18%", left: "58%" },
            { label: "₦665m", top: "50%", left: "14%" },
            { label: "₦84m", top: "66%", left: "12%" },
            { label: "₦90m", top: "68%", left: "62%" },
            { label: "₦29", top: "60%", left: "46%" },
          ].map((marker) => (
            <div
              key={marker.label}
              className="absolute bg-[#1a1f3c] text-white text-[10px] font-bold px-2.5 py-1 rounded-full cursor-pointer hover:bg-[#F5A623] hover:text-[#1a0f00] transition-colors shadow"
              style={{ top: marker.top, left: marker.left }}
            >
              {marker.label}
            </div>
          ))}

          {/* Popup card */}
          <div
            className="absolute bg-white rounded-xl shadow-xl p-3 w-[200px]"
            style={{ top: "30%", left: "38%" }}
          >
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&q=80"
              alt="Property"
              className="w-full h-[80px] object-cover rounded-lg mb-2"
            />
            <p className="text-[13px] font-bold text-[#1a1f3c]">
              ₦90,000,000 /yr
            </p>
            <p className="text-[11px] text-gray-500 mb-2">
              7 beds · Lekki Phase 11
            </p>
            <button className="w-full border border-gray-200 text-[#1a1f3c] text-[12px] font-semibold py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
              View listing
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
