"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import EnquiryForm from "./EnquiryForm";

const PropertyDetailMap = dynamic(() => import("./PropertyDetailMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[280px] rounded-xl bg-gray-100 animate-pulse" />
  ),
});

const amenities = [
  "Infinity pool",
  "Home cinema",
  "Private gym",
  "Solar free",
  "Smart home",
  "Water treatment",
  "Backup generator",
  "Gated compound",
  "Boys' quarters",
];

const safetyTips = [
  "Never pay before a physical inspection",
  "Verify title documents with a lawyer",
  "Only pay through traceable bank transfers",
  "Report suspicious listings immediately",
];

export default function PropertyDetail({ id }: { id: string }) {
  const [expanded, setExpanded] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "7 Bedroom Detached Duplex",
      text: "Check out this property in Lekki Phase 11, Lagos",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="w-full bg-[#f5f5f0] min-h-screen" style={{ paddingTop: "80px" }}>

      {/* Breadcrumb bar */}
      <div className="w-full bg-[#1a1f3c] px-6 md:px-10 py-3">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-[12px] text-white/60">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>›</span>
          <a href="/properties" className="hover:text-white transition-colors">Properties</a>
          <span>›</span>
          <span className="text-white/60">Lagos</span>
          <span>›</span>
          <span className="text-white/60">Lekki phase 11</span>
          <span>›</span>
          <span className="text-white">4 bed detached duplex</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">

        {/* Badge pills */}
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-green-700 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
            TITLE VERIFIED
            <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-3 py-1 rounded-full border border-amber-200">
            AGENT ✓
          </span>
          <span className="bg-[#1a1f3c] text-white text-[10px] font-bold px-3 py-1 rounded-full">
            PREMIUM LISTING
          </span>
        </div>

        {/* Title row */}
        <div className="flex items-start justify-between mb-1">
          <div>
            <h1 className="text-[26px] md:text-[30px] font-extrabold text-[#1a1f3c] leading-tight">
              7 Bedroom Detached Duplex
            </h1>
            <div className="flex items-center gap-1 mt-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="10" r="3" stroke="#9ca3af" strokeWidth="1.5" />
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#9ca3af" strokeWidth="1.5" fill="none" />
              </svg>
              <span className="text-[13px] text-gray-500">Lekki Phase 11, Lagos</span>
            </div>
          </div>
          {/* Share + Save */}
          <div className="flex items-center gap-2 flex-shrink-0 mt-1">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 border border-gray-300 text-[#1a1f3c] text-[13px] font-medium px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Share
            </button>
            <button
              onClick={handleSave}
              className={`flex items-center gap-1.5 border ${isSaved ? "border-[#F5A623] bg-amber-50" : "border-gray-300"} text-[#1a1f3c] text-[13px] font-medium px-4 py-2 rounded-full hover:bg-gray-100 transition-colors`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill={isSaved ? "#F5A623" : "none"}>
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" stroke={isSaved ? "#F5A623" : "#1a1f3c"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {isSaved ? "Saved" : "Save"}
            </button>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="flex gap-3 mt-5 h-[340px]">
          {/* Main large image */}
          <div className="relative flex-1 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
              alt="Main"
              className="w-full h-full object-cover"
            />
            {/* Price overlay */}
            <div className="absolute top-4 left-4 bg-[#1a1f3c]/80 backdrop-blur-sm text-white text-[13px] font-bold px-3 py-1.5 rounded-full">
              ₦90,000,000 /yr
            </div>
            <button
              onClick={handleSave}
              className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:scale-105 transition-transform"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill={isSaved ? "#F5A623" : "none"}>
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke={isSaved ? "#F5A623" : "#1a1f3c"} strokeWidth="1.5" />
              </svg>
            </button>
            {/* View more photos */}
            <button className="absolute bottom-4 left-4 bg-white text-[#1a1f3c] text-[12px] font-semibold px-3 py-1.5 rounded-full shadow hover:bg-gray-50 transition-colors">
              View more photos
            </button>
          </div>

          {/* Right stacked images */}
          <div className="flex flex-col gap-3 w-[45%]">
            <div className="flex-1 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80"
                alt="Bedroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                alt="Kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Specs bar */}
        <div className="bg-white rounded-2xl shadow-sm mt-5 px-6 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {[
            { icon: "🛏", label: "Bedrooms", value: "7 beds" },
            { icon: "🚿", label: "Bathrooms", value: "7 baths" },
            { icon: "📐", label: "Total area", value: "6,500 sqft" },
            { icon: "🚗", label: "Parking lot", value: "3 garages" },
          ].map((spec) => (
            <div key={spec.label} className="flex items-center gap-3 px-4 first:pl-0 last:pr-0">
              <span className="text-2xl">{spec.icon}</span>
              <div>
                <p className="text-[11px] text-gray-400">{spec.label}</p>
                <p className="text-[13.5px] font-bold text-[#1a1f3c]">{spec.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* About */}
        <div className="bg-white rounded-2xl shadow-sm mt-5 p-6">
          <h2 className="text-[17px] font-bold text-[#1a1f3c] mb-3">About this property</h2>
          <p className={`text-[13.5px] text-gray-600 leading-relaxed ${!expanded ? "line-clamp-3" : ""}`}>
            This stunning 4-bedroom detached duplex sits in the heart of Lekki Phase 11, one of Lagos's
            most sought-after residential neighbourhoods. The property features a spacious open-plan living
            and dining area, a fully fitted kitchen, and a private swimming pool. All bedrooms are en-suite
            with built-in wardrobes. The compound is gated with 24/7 security and backup generator.
            The property also includes a boys' quarters, a 3-car garage, and beautiful landscaped gardens.
            Perfect for families or investors looking for premium rental income.
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[13px] font-semibold text-[#1a1f3c] mt-2 flex items-center gap-1 hover:text-[#F5A623] transition-colors"
          >
            {expanded ? "Read less ↑" : "Read more ↓"}
          </button>
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-2xl shadow-sm mt-5 p-6">
          <h2 className="text-[17px] font-bold text-[#1a1f3c] mb-4">Key Features & Amenities</h2>
          <div className="flex flex-wrap gap-2">
            {amenities.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-[12.5px] text-gray-700 border border-gray-200 px-3 py-1.5 rounded-full"
              >
                <span className="w-2 h-2 rounded-full bg-[#F5A623] flex-shrink-0" />
                {item}
              </span>
            ))}
            <span className="text-[12.5px] text-gray-400 px-3 py-1.5">and more...</span>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-2xl shadow-sm mt-5 p-6">
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-[17px] font-bold text-[#1a1f3c]">Location</h2>
            <div className="flex flex-col items-end gap-1.5">
              <span className="text-[12px] text-gray-400">Exact address shown after enquiry</span>
              <button
                onClick={() => setIsEnquiryModalOpen(true)}
                className="border border-gray-200 text-[#1a1f3c] text-[12px] font-semibold px-3 py-1.5 rounded-full hover:bg-gray-50 transition-colors"
              >
                Get enquiry form
              </button>
            </div>
          </div>
          <div className="flex items-center gap-1 mb-3">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="10" r="3" stroke="#9ca3af" strokeWidth="1.5" />
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#9ca3af" strokeWidth="1.5" fill="none" />
            </svg>
            <span className="text-[13px] text-gray-500">Lekki Phase 11, Lagos, Nigeria</span>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden h-[280px]">
            <PropertyDetailMap />
          </div>

          {/* Open in Google Maps */}
          <div className="flex items-center justify-between mt-3">
            <a
              href="https://maps.google.com/?q=Lekki+Phase+11+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-semibold text-[#1a1f3c] flex items-center gap-1 hover:text-[#F5A623] transition-colors"
            >
              Open in Google Maps ↗
            </a>
            <span className="text-[12px] text-gray-400">
              Lekki Phase 1 · avg ₦38M–₦75M for similar properties
            </span>
          </div>
        </div>

        {/* Agent card + Safety tips */}
        <div className="flex flex-col gap-8 mt-8 mb-12">
          {/* Agent section title */}
          <div>
            <h2 className="text-[22px] font-bold text-[#1a1f3c]">Want to speak to Agent?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Agent card */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col md:flex-row">
              {/* Left Column: Agent Info */}
              <div className="flex-[1.5] p-8 flex flex-row items-center gap-2 justify-start border-b md:border-b-0 md:border-r border-gray-200">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border border-gray-100 flex items-center justify-center bg-[#050b2c] text-white text-4xl font-bold shadow-lg">
                    AO
                  </div>
                  <div className="absolute bottom-1 right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-start text-left">
                  <h5 className="text-[18px] font-bold text-[#1a1f3c] mb-1">Adewale Okon</h5>
                  <p className="text-[#9d9d9d] text-[14px] mb-4">Lagos Prime Realty</p>
                  <div className="bg-[#e8f5ed] text-[#2e7d32] text-[12px] font-bold px-4 py-2 rounded-lg border border-[#c8e6c9]">
                    Verified agent
                  </div>
                </div>
              </div>

              {/* Right Column: Stats & Rating */}
              <div className="flex-[1.5] p-8 flex flex-col justify-between">
                <div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    {[
                      { value: "84", label: "listings" },
                      { value: "7yrs", label: "experience" },
                      { value: "99%", label: "response" },
                      { value: "2hrs", label: "Avg response" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-[#fdfbf7] border border-gray-100 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                        <span className="text-xl font-bold text-[#1a1f3c]">{stat.value}</span>
                        <span className="text-[11px] text-gray-500 uppercase tracking-wider mt-1">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} width="20" height="20" viewBox="0 0 24 24" fill="#c48e1a">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-lg font-bold text-[#1a1f3c]">5.0</span>
                        <span className="text-sm text-gray-400">(180 reviews)</span>
                      </div>
                    </div>

                    <button className="border-2 border-[#1a1f3c] text-[#1a1f3c] px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#1a1f3c] hover:text-white transition-all whitespace-nowrap self-end sm:self-auto">
                      View agent profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety tips */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-[#1a1f3c] mb-6 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Safety Tips
              </h3>
              <ul className="flex flex-col gap-4">
                {safetyTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] mt-2 flex-shrink-0" />
                    <span className="text-[13.5px] text-gray-600 leading-snug">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      <EnquiryForm
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        agentName="Adewale Okon"
      />
    </div>
  );
}
