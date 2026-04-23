"use client";

import { use } from "react";
import Link from "next/link";

const agents = [
  {
    id: 1,
    name: "Adewale Okon",
    company: "Lagos Prime Realty",
    image: "/images/agent-1.jpg",
    verified: true,
    specialty: "Luxury Duplexes",
    listingsCount: 24,
    rating: 4.9,
    location: "Lekki, Lagos",
    phone: "+234 812 345 6789",
    email: "adewale@lagosprime.com",
    bio: "With over 10 years of experience in the Lagos luxury market, Adewale has helped hundreds of clients find their dream homes in Lekki and Ikoyi. He specializes in high-end detached duplexes and off-plan investments."
  },
  {
    id: 2,
    name: "Blessing Udoh",
    company: "Capital Homes",
    image: "/images/agent-2.jpg",
    verified: true,
    specialty: "Commercial Spaces",
    listingsCount: 18,
    rating: 4.8,
    location: "Victoria Island, Lagos",
    phone: "+234 703 456 7890",
    email: "blessing@capitalhomes.com",
    bio: "Blessing is a commercial real estate powerhouse. She focuses on office spaces and retail outlets in VI and Marina, providing strategic advice to businesses looking to establish a presence in Lagos."
  }
];

export default function AgentProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const agent = agents.find(a => a.id === Number(resolvedParams.id)) || agents[0];

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* ── Top Bar ── */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/agents" className="flex items-center gap-2 text-sm font-bold text-[#1a1f3c] hover:text-[#F5A623] transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Agents
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1a1f3c] rounded-lg flex items-center justify-center">
            <span className="text-[#F5A623] text-xs font-black italic">PV</span>
          </div>
          <span className="text-lg font-black text-[#1a1f3c]">Vault</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          
          {/* ── Left Column: Content ── */}
          <div className="space-y-8">
            {/* Profile Header Card */}
            <div className="bg-white rounded-[40px] p-8 sm:p-10 border border-gray-100 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-50 rounded-full blur-[80px] -z-10 translate-x-20 -translate-y-20" />
              
              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-[32px] overflow-hidden bg-gray-100 border-4 border-white shadow-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={agent.image} alt={agent.name} className="w-full h-full object-cover" />
                  </div>
                  {agent.verified && (
                    <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-2xl shadow-lg border border-gray-50">
                      <div className="bg-green-500 text-white p-1 rounded-lg">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl font-black text-[#1a1f3c] mb-1">{agent.name}</h1>
                  <p className="text-base font-bold text-[#F5A623] uppercase tracking-widest mb-4">{agent.company}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-2xl border border-gray-100">
                      <span className="text-lg">⭐</span>
                      <span className="text-sm font-black text-[#1a1f3c]">{agent.rating} Rating</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-2xl border border-gray-100">
                      <span className="text-lg">🏠</span>
                      <span className="text-sm font-black text-[#1a1f3c]">{agent.listingsCount} Listings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-black text-[#1a1f3c] mb-4">About the Agent</h2>
              <p className="text-gray-500 leading-relaxed text-lg">
                {agent.bio}
              </p>
            </div>

            {/* Listing Grid Preview */}
            <div className="space-y-6">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-xl font-black text-[#1a1f3c]">Recent Listings</h2>
                <Link href="/properties" className="text-sm font-bold text-[#F5A623] hover:underline">View All →</Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
                    <div className="relative h-48 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/images/invest-prop-${i}.jpg`} alt="Listing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#1a1f3c] text-xs font-black px-3 py-1.5 rounded-full">
                        ₦45,000,000
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-black text-[#1a1f3c] mb-1">4 Bed Detached Duplex</h3>
                      <p className="text-xs text-gray-400 mb-0">Lekki Phase 1, Lagos</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column: Contact Card ── */}
          <div className="space-y-6">
            <div className="bg-[#1a1f3c] rounded-[40px] p-8 text-white sticky top-24 shadow-2xl shadow-blue-900/20">
              <h3 className="text-xl font-black mb-6">Contact Agent</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Phone Number</p>
                    <p className="text-sm font-black">{agent.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</p>
                    <p className="text-sm font-black">{agent.email}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-[#F5A623] hover:bg-[#e09510] text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-amber-500/10">
                  Send Message
                </button>
                <button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold py-4 rounded-2xl transition-all">
                  Contact on WhatsApp
                </button>
              </div>

              <p className="text-center text-[10px] text-gray-400 mt-6 px-4">
                By contacting, you agree to our terms of service and privacy policy.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
