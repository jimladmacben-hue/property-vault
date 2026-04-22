"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewListingPage() {
  const [step, setStep] = useState(1);
  const [listingType, setListingType] = useState("For sale");

  const steps = [
    { id: 1, label: "Basic Info", icon: "🏠" },
    { id: 2, label: "Media & Photos", icon: "🖼️" },
    { id: 3, label: "Location", icon: "📍" },
    { id: 4, label: "Review & Publish", icon: "🚀" },
  ];

  const listingTypes = [
    { id: "For sale", label: "For sale", icon: "💰" },
    { id: "For rent", label: "For rent", icon: "🔑" },
    { id: "Shortlet", label: "Shortlet", icon: "🛌" },
    { id: "Land", label: "Land", icon: "🌳" },
  ];

  return (
    <div className="max-w-5xl mx-auto pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-10 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-[#1a1f3c]">Create New Listing</h1>
          <p className="text-sm text-gray-400 mt-1">Fill in the details to reach verified buyers</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors">Save Draft</button>
          <Link
            href="/agent-dashboard/listings"
            className="text-sm font-bold text-red-500 bg-red-50 px-4 py-2 rounded-xl hover:bg-red-100 transition-all"
          >
            Cancel
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        {/* Sidebar Steps */}
        <div className="space-y-2">
          {steps.map((s) => (
            <div
              key={s.id}
              className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                step === s.id
                  ? "bg-[#1a1f3c] text-white shadow-lg shadow-[#1a1f3c]/20"
                  : step > s.id
                  ? "bg-green-50 text-green-600"
                  : "bg-white text-gray-400 border border-gray-50"
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                step === s.id ? "bg-white/20" : step > s.id ? "bg-green-100" : "bg-gray-100"
              }`}>
                {step > s.id ? "✓" : s.id}
              </div>
              <span className="text-sm font-bold">{s.label}</span>
            </div>
          ))}

          <div className="mt-10 p-6 bg-amber-50 rounded-3xl border border-amber-100">
            <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">Pro Tip</p>
            <p className="text-xs text-amber-700 leading-relaxed">
              Properties with at least 5 high-quality photos get 4x more enquiries.
            </p>
          </div>
        </div>

        {/* Form Area */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
          {/* Step Content */}
          <div className="p-8 min-h-[400px]">
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-4">
                  <label className="text-sm font-bold text-[#1a1f3c] uppercase tracking-widest">What are you listing?</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {listingTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setListingType(type.id)}
                        className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                          listingType === type.id
                            ? "border-[#F5A623] bg-amber-50 text-[#F5A623]"
                            : "border-gray-100 hover:border-gray-200 text-gray-400"
                        }`}
                      >
                        <span className="text-2xl">{type.icon}</span>
                        <span className="text-xs font-bold">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1a1f3c]">Listing Title</label>
                    <input
                      type="text"
                      placeholder="e.g. 4 Bed Detached Duplex"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1a1f3c]">Price (₦)</label>
                    <input
                      type="text"
                      placeholder="e.g. 45,000,000"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1a1f3c]">Description</label>
                  <textarea
                    rows={4}
                    placeholder="Describe the property's key features, amenities, and unique selling points..."
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all resize-none"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="border-2 border-dashed border-gray-200 rounded-[32px] p-12 text-center space-y-4 hover:border-[#1a1f3c] transition-colors cursor-pointer group">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-[#1a1f3c]/5 transition-colors">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 group-hover:text-[#1a1f3c]">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[#1a1f3c]">Upload Property Photos</p>
                    <p className="text-sm text-gray-400">Drag and drop or click to browse (Max 10MB per photo)</p>
                  </div>
                  <button className="bg-[#1a1f3c] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-[#1a1f3c]/10">
                    Select Files
                  </button>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square bg-gray-50 rounded-2xl border border-gray-100 relative group overflow-hidden">
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                        <button className="bg-red-500 text-white p-2 rounded-lg text-xs font-bold">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1a1f3c]">State</label>
                    <select className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all appearance-none">
                      <option>Lagos</option>
                      <option>Abuja (FCT)</option>
                      <option>Ogun</option>
                      <option>Rivers</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1a1f3c]">LGA / Area</label>
                    <input
                      type="text"
                      placeholder="e.g. Lekki Phase 1"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1a1f3c]">Full Address</label>
                  <input
                    type="text"
                    placeholder="Enter the full street address"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all"
                  />
                </div>
                <div className="h-64 bg-gray-100 rounded-[32px] flex items-center justify-center border border-gray-200">
                  <p className="text-sm font-bold text-gray-400">Map Preview Implementation</p>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-green-50 border border-green-100 p-6 rounded-[32px] flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">✓</div>
                  <div>
                    <p className="text-sm font-bold text-green-800">Your listing is ready!</p>
                    <p className="text-xs text-green-700 mt-1">Review the details below. Once published, our team will verify it within 24 hours.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-50 pb-4">
                    <span className="text-sm text-gray-400">Property Type</span>
                    <span className="text-sm font-bold text-[#1a1f3c]">{listingType}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-4">
                    <span className="text-sm text-gray-400">Price</span>
                    <span className="text-sm font-bold text-[#1a1f3c]">₦45,000,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-4">
                    <span className="text-sm text-gray-400">Location</span>
                    <span className="text-sm font-bold text-[#1a1f3c]">Lekki Phase 1, Lagos</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-8 bg-gray-50 flex items-center justify-between border-t border-gray-100">
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className={`text-sm font-bold px-8 py-3 rounded-xl transition-all ${
                step === 1 ? "text-gray-300 cursor-not-allowed" : "text-[#1a1f3c] hover:bg-white"
              }`}
            >
              Back
            </button>
            <button
              onClick={() => {
                if (step < 4) setStep(step + 1);
                else window.location.href = "/agent-dashboard/listings";
              }}
              className="bg-[#1a1f3c] text-white px-10 py-3 rounded-xl font-bold text-sm hover:bg-[#2a3060] transition-all shadow-xl shadow-[#1a1f3c]/10"
            >
              {step === 4 ? "Publish Listing" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
