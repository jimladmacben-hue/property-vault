"use client";

import { useState } from "react";
import Link from "next/link";

export default function EditListingPage() {
  const [step, setStep] = useState(1);
  const [listingType, setListingType] = useState("For sale");

  const steps = [
    { id: 1, label: "Basic Info", icon: "🏠" },
    { id: 2, label: "Media & Photos", icon: "🖼️" },
    { id: 3, label: "Location", icon: "📍" },
    { id: 4, label: "Review & Save", icon: "💾" },
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
          <h1 className="text-2xl font-black text-[#1a1f3c]">Edit Listing</h1>
          <p className="text-sm text-gray-400 mt-1">Update your property details (PV-29402)</p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/agent-dashboard/listings"
            className="text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors"
          >
            Cancel
          </Link>
          <button className="text-sm font-bold bg-[#1a1f3c] text-white px-6 py-2.5 rounded-xl hover:bg-[#2a3060] transition-all">
            Save Changes
          </button>
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
        </div>

        {/* Form Area */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-8 min-h-[400px]">
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-4">
                  <label className="text-sm font-bold text-[#1a1f3c] uppercase tracking-widest">Listing Type</label>
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
                      defaultValue="4 Bed Detached Duplex"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1a1f3c]">Price (₦)</label>
                    <input
                      type="text"
                      defaultValue="45,000,000"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1a1f3c]">Description</label>
                  <textarea
                    rows={6}
                    defaultValue="This stunning 4-bedroom detached duplex offers modern luxury in the heart of Lekki. Featuring high-end finishes, a private pool, and a fully equipped kitchen."
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all resize-none"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square bg-gray-100 rounded-2xl border border-gray-100 relative group overflow-hidden">
                      <img src={`/images/invest-prop-${i}.jpg`} alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                        <button className="bg-red-500 text-white p-2 rounded-lg text-xs font-bold">Remove</button>
                      </div>
                    </div>
                  ))}
                  <div className="aspect-square border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center hover:border-[#1a1f3c] transition-colors cursor-pointer">
                    <span className="text-2xl text-gray-300">+</span>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1a1f3c]">State</label>
                    <input defaultValue="Lagos" className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1a1f3c]">LGA / Area</label>
                    <input defaultValue="Lekki Phase 1" className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all" />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-amber-50 border border-amber-100 p-6 rounded-[32px]">
                  <p className="text-sm font-bold text-amber-800">You are editing an active listing</p>
                  <p className="text-xs text-amber-700 mt-1">Changes will be reflected on the public site immediately after saving.</p>
                </div>
                {/* ... same review summary as NewListing ... */}
                <div className="p-8 bg-gray-50 rounded-3xl">
                   <p className="text-sm text-center text-gray-400">Review your changes and click save.</p>
                </div>
              </div>
            )}
          </div>

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
              {step === 4 ? "Save Changes" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
