"use client";

import { useState } from "react";

const specializations = [
  "All types",
  "Residential",
  "Commercial",
  "Land",
  "Shortlet",
  "Luxury",
  "Investment",
];

const locations = [
  "Choose preferred location",
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
  "Kano",
  "Enugu",
  "Lekki",
  "Victoria Island",
  "Ikoyi",
  "Maitama",
];

const experienceLevels = [
  "Select years of experience",
  "0–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];

// ─── Dropdown ─────────────────────────────────────────────────────────────────

function FilterDropdown({
  icon,
  value,
  options,
  onChange,
}: {
  icon: React.ReactNode;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex-1 min-w-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-2 text-sm font-medium text-[#1a1f3c] hover:text-[#F5A623] transition-colors py-1"
      >
        <span className="flex-shrink-0 text-gray-400">{icon}</span>
        <span className="truncate">{value}</span>
        <svg
          width="16" height="16" viewBox="0 0 16 16" fill="none"
          className={`flex-shrink-0 ml-auto transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M4 6l4 4 4-4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-30 overflow-hidden">
          <div className="max-h-52 overflow-y-auto">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full px-4 py-2.5 text-left text-sm font-medium hover:bg-amber-50 transition-colors
                  ${value === opt ? "text-[#F5A623] bg-amber-50" : "text-[#1a1f3c]"}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AgentsHero() {
  const [specialization, setSpecialization] = useState("All types");
  const [location, setLocation] = useState("Choose preferred location");
  const [experience, setExperience] = useState("Select years of experience");

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/agents/agents-hero.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0d1230]/65" />

      {/* ── Floating tag pills ── */}
      {/* Professional — left */}
      <div className="absolute left-[8%] top-[38%] flex items-center gap-2 z-10">
        <span className="bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-4 py-2 rounded-full">
          Professional
        </span>
        <div className="flex items-center gap-1">
          <div className="w-8 h-px bg-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </div>
      </div>

      {/* Reliable — right */}
      <div className="absolute right-[8%] top-[30%] flex items-center gap-2 z-10">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
          <div className="w-8 h-px bg-white/30" />
        </div>
        <span className="bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-4 py-2 rounded-full">
          Reliable
        </span>
      </div>

      {/* Verified — bottom right of text */}
      <div className="absolute right-[20%] top-[60%] flex items-center gap-2 z-10 hidden lg:flex">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
          <div className="w-8 h-px bg-white/30" />
        </div>
        <span className="bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-4 py-2 rounded-full">
          Verified
        </span>
      </div>

      {/* ── Main text content ── */}
      <div className="relative z-10 text-center px-4 pb-10 pt-32">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
          Find a <span className="text-[#F5A623]">Verified</span>
          <br />
          Agent You Can Trust
        </h1>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Every agent on Property Vault is NIN-verified, manually reviewed, and
          rated by real buyers. Search by location, specialisation, or name to find
          your perfect match.
        </p>
      </div>

      {/* ── Search bar card ── */}
      <div className="relative z-10 mx-4 mb-0">
        <div className="max-w-5xl mx-auto bg-[#f5f5f0] rounded-2xl px-6 sm:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">

            {/* Specialization */}
            <div className="flex-1">
              <p className="text-xs font-bold text-[#1a1f3c] mb-2">Specialization</p>
              <FilterDropdown
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                }
                value={specialization}
                options={specializations}
                onChange={setSpecialization}
              />
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-gray-300 self-end mb-1" />

            {/* Location */}
            <div className="flex-1">
              <p className="text-xs font-bold text-[#1a1f3c] mb-2">Location</p>
              <FilterDropdown
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                }
                value={location}
                options={locations}
                onChange={setLocation}
              />
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-gray-300 self-end mb-1" />

            {/* Experience level */}
            <div className="flex-1">
              <p className="text-xs font-bold text-[#1a1f3c] mb-2">Experience level</p>
              <FilterDropdown
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                value={experience}
                options={experienceLevels}
                onChange={setExperience}
              />
            </div>

            {/* Find agent button */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-sm font-bold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex-shrink-0 sm:self-end"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="1.8" />
                <path d="M21 21l-4.35-4.35" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Find agent
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
