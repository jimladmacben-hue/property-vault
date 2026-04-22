"use client";
import Link from "next/link";

const agents = [
  {
    id: 1,
    initials: "AO",
    avatarBg: "bg-[#1a1f3c]",
    name: "Adewale Okon",
    agency: "Lagos Prime Realty",
    location: "Lagos Island",
    rating: 5.0,
    reviews: 180,
    fullStars: 5,
    stats: [
      { value: "84", label: "listings" },
      { value: "7yrs", label: "experience" },
      { value: "99", label: "response" },
    ],
  },
  {
    id: 2,
    initials: "TA",
    avatarBg: "bg-[#4a5568]",
    name: "Tunde Adeyemi",
    agency: "Lagos Prime Realty",
    location: "Lagos Island",
    rating: 5.0,
    reviews: 200,
    fullStars: 5,
    stats: [
      { value: "68", label: "listings" },
      { value: "4yrs", label: "experience" },
      { value: "40", label: "response" },
    ],
  },
  {
    id: 3,
    initials: "ET",
    avatarBg: "bg-[#2d3748]",
    name: "Ebiere Tamuno",
    agency: "Lagos Prime Realty",
    location: "Lagos Island",
    rating: 5.0,
    reviews: 110,
    fullStars: 5,
    stats: [
      { value: "56", label: "listings" },
      { value: "9yrs", label: "experience" },
      { value: "80", label: "response" },
    ],
  },
  {
    id: 4,
    initials: "CO",
    avatarBg: "bg-[#744210]",
    name: "Chinedu Okafor",
    agency: "Lagos Prime Realty",
    location: "Lagos Island",
    rating: 5.0,
    reviews: 80,
    fullStars: 3,
    stats: [
      { value: "72", label: "listings" },
      { value: "9yrs", label: "experience" },
      { value: "70", label: "response" },
    ],
  },
];

function StarRating({ full }: { full: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= full ? "#F5A623" : "#e5e7eb"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

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

export default function FeaturedAgents() {
  return (
    <section className="w-full bg-[#f5f5f0] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[10.5px] font-bold tracking-[0.22em] text-[#F5A623] uppercase mb-2">
            The People Behind The Listing
          </p>
          <h2 className="text-[30px] md:text-[34px] font-normal text-[#1a1f3c] mb-2">
            Meet Our Featured Agents
          </h2>
          <p className="text-[13.5px] text-gray-500">
            Verified professionals with proven track records across Nigeria
          </p>
        </div>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <Link href={`/agents/${agent.id}`} className="relative mb-3 block group">
                <div
                  className={`w-16 h-16 rounded-full ${agent.avatarBg} flex items-center justify-center transition-transform group-hover:scale-105`}
                >
                  <span className="text-white font-bold text-lg">
                    {agent.initials}
                  </span>
                </div>
                {/* Verified checkmark badge */}
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white z-10">
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l2.5 2.5L10 3.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>

              {/* Name + Agency */}
              <Link href={`/agents/${agent.id}`}>
                <h3 className="text-[14px] font-bold text-[#1a1f3c] leading-tight hover:text-[#F5A623] transition-colors cursor-pointer">
                  {agent.name}
                </h3>
              </Link>
              <p className="text-[12px] text-gray-400 mt-0.5 mb-1.5">
                {agent.agency}
              </p>

              {/* Location */}
              <div className="flex items-center gap-1 mb-3">
                <PinIcon />
                <span className="text-[11.5px] text-gray-400">
                  {agent.location}
                </span>
              </div>

              {/* Verified badge */}
              <span className="bg-green-50 text-green-700 text-[11px] font-semibold px-3 py-1 rounded-full border border-green-200 mb-3">
                Verified agent
              </span>

              {/* Stars + rating */}
              <div className="flex items-center gap-1.5 mb-4">
                <StarRating full={agent.fullStars} />
                <span className="text-[12px] font-bold text-[#1a1f3c]">
                  {agent.rating.toFixed(1)}
                </span>
                <span className="text-[11px] text-gray-400">
                  ({agent.reviews} reviews)
                </span>
              </div>

              {/* Stats row */}
              <div className="w-full grid grid-cols-3 divide-x divide-gray-100 border-t border-b border-gray-100 py-3 mb-4">
                {agent.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center">
                    <span className="text-[13px] font-bold text-[#1a1f3c]">
                      {stat.value}
                    </span>
                    <span className="text-[10.5px] text-gray-400">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2 w-full">
                <Link
                  href={`/agents/${agent.id}`}
                  className="flex-1 text-center text-[12px] font-semibold text-[#1a1f3c] border border-[#1a1f3c] px-3 py-2 rounded-full hover:bg-[#1a1f3c] hover:text-white transition-colors"
                >
                  View profile
                </Link>
                <a
                  href="#"
                  className="flex-1 text-center text-[12px] font-medium text-gray-500 border border-gray-200 px-3 py-2 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Send message
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Browse all button */}
        <div className="flex justify-center mt-10">
          <a
            href="/agents"
            className="border border-[#1a1f3c] text-[#1a1f3c] text-[13.5px] font-medium px-7 py-3 rounded-full hover:bg-[#1a1f3c] hover:text-white transition-all flex items-center gap-2"
          >
            Browse all Agents <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
