"use client";

import { useState } from "react";
import Link from "next/link";
import { Property } from "@/lib/data";

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

interface PropertiesGridProps {
  properties: Property[];
}

export default function PropertiesGrid({ properties }: PropertiesGridProps) {
  const [activeId, setActiveId] = useState<number | null>(properties[0]?.id || null);

  return (
    <div className="w-full bg-[#f5f5f0] px-4 md:px-10 py-6 overflow-y-auto">
      <div className="flex flex-col lg:flex-row gap-5 mx-auto h-full">

        {/* Left: Property list */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3 overflow-y-auto pr-2">
          {properties.length > 0 ? (
            properties.map((p) => (
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
                <Link href={`/properties/${p.id}`} className="relative flex-shrink-0 w-[200px] h-[200px] block group overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Badge */}
                  <span className="absolute top-2 left-2 bg-green-700 text-white text-[8.5px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 z-10">
                    {p.badge}
                    <svg width="7" height="7" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {/* Price */}
                  <span className="absolute bottom-2 left-2 bg-[#1a1f3c] text-white text-[16px] font-normal px-2 py-0.5 rounded-full z-10">
                    {p.price}
                  </span>
                  {/* Heart */}
                  <button 
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow z-20"
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="#1a1f3c" strokeWidth="1.5" fill="none" />
                    </svg>
                  </button>
                </Link>

                {/* Content */}
                <div className="flex-1 px-4 py-3 flex flex-col justify-between">
                  <div>
                    <Link href={`/properties/${p.id}`}>
                      <h3 className="text-[20px] font-semibold text-[#1a1f3c] mb-1 hover:text-[#F5A623] transition-colors">
                        {p.title}
                      </h3>
                    </Link>
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
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-400 font-medium">No properties found matching your criteria.</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 text-[#1a1f3c] font-bold text-sm underline"
              >
                Clear all filters
              </button>
            </div>
          )}
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

          {/* Price markers (just placeholders for now, could be dynamic based on properties) */}
          {properties.slice(0, 5).map((p, idx) => (
            <div
              key={p.id}
              className={`absolute bg-[#1a1f3c] text-white text-[10px] font-bold px-2.5 py-1 rounded-full cursor-pointer hover:bg-[#F5A623] hover:text-[#1a0f00] transition-colors shadow ${activeId === p.id ? "ring-2 ring-[#F5A623]" : ""}`}
              style={{ 
                top: `${20 + idx * 15}%`, 
                left: `${15 + (idx % 3) * 20}%` 
              }}
              onClick={() => setActiveId(p.id)}
            >
              {p.price.split(' ')[0]}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
