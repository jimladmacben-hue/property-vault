"use client";

import { useState } from "react";
import Link from "next/link";

const agents = [
  {
    id: 1,
    name: "Adewale Okon",
    company: "Lagos Prime Realty",
    image: "/images/agent-1.jpg",
    verified: true,
    specialty: "Luxury Duplexes",
    listings: 24,
    rating: 4.9,
    location: "Lekki, Lagos",
  },
  {
    id: 2,
    name: "Blessing Udoh",
    company: "Capital Homes",
    image: "/images/agent-2.jpg",
    verified: true,
    specialty: "Commercial Spaces",
    listings: 18,
    rating: 4.8,
    location: "Victoria Island, Lagos",
  },
  {
    id: 3,
    name: "Tunde Bakare",
    company: "Oakwood Estates",
    image: "/images/agent-3.jpg",
    verified: false,
    specialty: "Residential Land",
    listings: 12,
    rating: 4.7,
    location: "Abuja, FCT",
  },
  {
    id: 4,
    name: "Sarah Williams",
    company: "BlueChip Properties",
    image: "/images/agent-1.jpg",
    verified: true,
    specialty: "Serviced Apartments",
    listings: 31,
    rating: 5.0,
    location: "Ikoyi, Lagos",
  },
  {
    id: 5,
    name: "Chidi Okafor",
    company: "Heritage Realty",
    image: "/images/agent-2.jpg",
    verified: true,
    specialty: "Shortlets & Airbnb",
    listings: 9,
    rating: 4.6,
    location: "Enugu, EN",
  },
  {
    id: 6,
    name: "Aisha Yusuf",
    company: "Northern Homes",
    image: "/images/agent-3.jpg",
    verified: true,
    specialty: "Massive Estates",
    listings: 42,
    rating: 4.9,
    location: "Kano, KN",
  },
];

export default function AgentsPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* ── Header ── */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-[#1a1f3c] rounded-[100%] -translate-y-1/2 -z-10" />
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Find Your <span className="text-[#F5A623]">Perfect Partner</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Work with Nigeria&apos;s most trusted and verified real estate professionals. 
            All agents are vetted for title verification and property authenticity.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative group">
            <input
              type="text"
              placeholder="Search by name, company, or specialty..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white rounded-full py-5 pl-14 pr-6 text-sm font-semibold shadow-2xl focus:ring-4 focus:ring-[#F5A623]/20 transition-all outline-none"
            />
            <svg className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
          </div>
        </div>
      </div>

      {/* ── Agents Grid ── */}
      <div className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="group bg-white rounded-[40px] border border-gray-100 p-8 hover:shadow-[0_40px_80px_rgba(26,31,60,0.1)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-3xl overflow-hidden bg-gray-100 mx-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={agent.image} alt={agent.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                {agent.verified && (
                  <div className="absolute -bottom-2 right-1/2 translate-x-12 bg-white p-1.5 rounded-xl shadow-lg border border-gray-50">
                    <div className="bg-green-500 text-white p-1 rounded-lg">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-black text-[#1a1f3c] mb-1">{agent.name}</h3>
                <p className="text-xs font-bold text-[#F5A623] uppercase tracking-widest mb-3">{agent.company}</p>
                <div className="flex items-center justify-center gap-1.5 bg-gray-50 w-fit mx-auto px-3 py-1 rounded-full border border-gray-100">
                  <span className="text-[#1a1f3c] text-xs font-black">{agent.rating}</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill={s <= Math.round(agent.rating) ? "#F5A623" : "#d1d5db"}>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-gray-50">
                <div className="text-center">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Listings</p>
                  <p className="text-base font-black text-[#1a1f3c]">{agent.listings}</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Focus</p>
                  <p className="text-sm font-black text-[#1a1f3c] truncate px-1">{agent.specialty.split(' ')[0]}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href={`/agents/${agent.id}`}
                  className="flex-1 bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-xs font-bold py-4 rounded-2xl text-center transition-all shadow-lg shadow-blue-900/10"
                >
                  View Profile
                </Link>
                <button className="w-12 h-12 bg-gray-50 border border-gray-100 text-[#1a1f3c] rounded-2xl flex items-center justify-center hover:bg-[#1a1f3c] hover:text-white transition-all group/btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA Section ── */}
      <div className="bg-[#1a1f3c] py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#F5A623]/20 rounded-full blur-[100px]" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Are you a Professional Agent?</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Join the vault and get access to verified buyers, automated lead management, and premium analytics.
          </p>
          <Link
            href="/register?role=agent"
            className="inline-flex items-center gap-3 bg-[#F5A623] hover:bg-[#e09510] text-white font-black px-10 py-5 rounded-full transition-all shadow-[0_20px_40px_rgba(245,166,35,0.2)]"
          >
            Become a Verified Agent
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
