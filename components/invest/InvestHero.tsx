"use client";
import Link from "next/link";

const stats = [
  { value: "8–12%", label: "Rental yield ratings" },
  { value: "₦42M", label: "Avg investment price" },
  { value: "340+", label: "Investment listings" },
  { value: "98%", label: "Titles verified" },
  { value: "5,400+", label: "Investor-ready agents" },
];

export default function InvestHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/invest/invest-hero.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0d1230]/70" />

      {/* ── Main content — vertically centred ── */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-4 pt-40 pb-16">

        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#F5A623]" />
          <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
            Property Investment
          </span>
          <div className="w-8 h-px bg-[#F5A623]" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
          Grow Your Wealth With
          <br />
          <span className="text-[#F5A623]">Nigerian</span>{" "}
          Real Estate
        </h1>

        {/* Body */}
        <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
          Access curated high-yield investment properties across Lagos, Abuja,
          and Port Harcourt. Verified listings, transparent ROI data, and trusted
          agents — everything you need to invest with confidence.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <Link
            href="/properties"
            className="flex items-center gap-2 bg-white text-[#1a1f3c] text-sm font-bold px-7 py-3.5 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-md"
          >
            Browse investments
            <span>→</span>
          </Link>
          <Link
            href="/diaspora"
            className="flex items-center gap-2 border-2 border-white/60 text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Diaspora guide
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-3">
          {/* Stacked avatars */}
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white bg-gray-400 overflow-hidden"
              >
                <img
                  src={`/images/invest/investor-avatar-${i}.jpg`}
                  alt={`Investor ${i}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
          <span className="text-sm font-semibold text-[#F5A623]">
            Joined by 12k+ investors
          </span>
        </div>
      </div>

      {/* ── Stats bar — pinned to bottom ── */}
      <div className="relative w-full bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center px-8 py-3 sm:py-0 w-1/2 sm:w-auto sm:flex-1"
              >
                <span className="text-2xl sm:text-3xl font-black text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-white/60 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
