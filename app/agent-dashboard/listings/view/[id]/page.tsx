"use client";

import Link from "next/link";

export default function AgentPropertyViewPage() {
  // Mock data for a single listing
  const property = {
    id: 1,
    title: "4 Bedroom Detached Duplex with Pool",
    location: "Lekki Phase 1, Lagos",
    price: "₦45,000,000",
    status: "Active",
    type: "Residential",
    views: 601,
    enquiries: 12,
    addedOn: "2 April 2026",
    description: "This stunning 4-bedroom detached duplex offers modern luxury in the heart of Lekki. Featuring high-end finishes, a private pool, and a fully equipped kitchen. Perfect for families looking for comfort and security.",
    images: [
      "/images/invest-prop-1.jpg",
      "/images/invest-prop-2.jpg",
      "/images/invest-prop-3.jpg",
    ],
    features: ["Pool", "24/7 Power", "Security", "Fitted Kitchen", "CCTV", "BQ"],
  };

  return (
    <div className="max-w-5xl mx-auto pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/agent-dashboard/listings" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1f3c" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
          <div>
            <h1 className="text-xl font-black text-[#1a1f3c]">Preview Listing</h1>
            <p className="text-xs text-gray-400">ID: PV-29402 • Added on {property.addedOn}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/agent-dashboard/listings/edit/1"
            className="text-sm font-bold border border-gray-200 text-[#1a1f3c] px-6 py-2.5 rounded-xl hover:border-[#1a1f3c] transition-colors"
          >
            Edit Listing
          </Link>
          <button className="text-sm font-bold bg-[#1a1f3c] text-white px-6 py-2.5 rounded-xl hover:bg-[#2a3060] transition-all">
            Promote Listing
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        <div className="space-y-8">
          {/* Main Image Gallery */}
          <div className="bg-white rounded-[32px] p-4 border border-gray-100 shadow-sm">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-4">
              <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {property.images.map((img, i) => (
                <div key={i} className="aspect-video rounded-xl overflow-hidden bg-gray-100 border border-gray-50">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider">{property.status}</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{property.type}</span>
              </div>
              <h2 className="text-2xl font-black text-[#1a1f3c]">{property.title}</h2>
              <p className="text-gray-400 mt-1">{property.location}</p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-50">
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Price</p>
                <p className="text-lg font-black text-[#1a1f3c]">{property.price}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Views</p>
                <p className="text-lg font-black text-[#1a1f3c]">{property.views}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Enquiries</p>
                <p className="text-lg font-black text-[#1a1f3c]">{property.enquiries}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#1a1f3c] uppercase tracking-widest mb-3">Description</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{property.description}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#1a1f3c] uppercase tracking-widest mb-3">Features</h3>
              <div className="flex flex-wrap gap-2">
                {property.features.map((f) => (
                  <span key={f} className="text-xs font-bold text-gray-600 bg-gray-50 px-4 py-2 rounded-xl">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm">
            <h3 className="text-sm font-black text-[#1a1f3c] mb-4">Performance</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-xs text-blue-600 font-bold mb-1">Click Through Rate</p>
                <p className="text-xl font-black text-blue-900">4.2%</p>
              </div>
              <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                <p className="text-xs text-green-600 font-bold mb-1">Verification Status</p>
                <p className="text-xl font-black text-green-900">Verified</p>
              </div>
            </div>
          </div>

          <div className="bg-[#080d28] rounded-[32px] p-6 text-white overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-lg font-black mb-2">Boost this listing</h3>
              <p className="text-xs text-white/60 mb-6">Get up to 10x more views and enquiries by featuring this property.</p>
              <button className="w-full bg-[#F5A623] text-white py-3 rounded-xl font-bold text-sm shadow-xl shadow-[#F5A623]/20">
                Upgrade to Featured
              </button>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#F5A623]/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
