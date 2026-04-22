"use client";

import { useState } from "react";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "₦5,000",
    features: [
      { label: "5 active listings", included: true },
      { label: "Verified agent badge", included: true },
      { label: "Enquiry messaging", included: true },
      { label: "Analytics dashboard", included: false },
      { label: "Featured placement", included: false },
    ],
    badge: null,
    current: false,
    cta: "Downgrade",
    ctaStyle: "bg-[#1a1f3c] hover:bg-[#2a3060] text-white",
  },
  {
    id: "professional",
    name: "Professional",
    price: "₦15,000",
    features: [
      { label: "30 active listings", included: true },
      { label: "Verified agent badge", included: true },
      { label: "Enquiry messaging", included: true },
      { label: "Analytics dashboard", included: true },
      { label: "Featured placement", included: false },
    ],
    badge: "Current plan",
    badgeStyle: "bg-[#1a1f3c] text-white",
    current: true,
    cta: "Current plan",
    ctaStyle: "bg-gray-100 text-gray-400 cursor-not-allowed",
  },
  {
    id: "premium",
    name: "Premium",
    price: "₦35,000",
    features: [
      { label: "30 active listings", included: true },
      { label: "Verified agent badge", included: true },
      { label: "Enquiry messaging", included: true },
      { label: "Analytics dashboard", included: true },
      { label: "Featured placement", included: true },
    ],
    badge: "Most popular",
    badgeStyle: "bg-[#F5A623] text-white",
    current: false,
    cta: "Upgrade to premium",
    ctaStyle: "bg-[#F5A623] hover:bg-[#e09510] text-white",
  },
];

const billingHistory = [
  { date: "1 Apr 2026", plan: "Professional", amount: "₦15,000", status: "Paid" },
  { date: "1 Mar 2026", plan: "Professional", amount: "₦15,000", status: "Paid" },
  { date: "1 Feb 2026", plan: "Professional", amount: "₦15,000", status: "Paid" },
  { date: "1 Jan 2026", plan: "Professional", amount: "₦15,000", status: "Paid" },
];

export default function SubscriptionPage() {
  const [billingOpen, setBillingOpen] = useState(false);

  const listingsUsed = 12;
  const listingsTotal = 30;
  const listingsPercent = (listingsUsed / listingsTotal) * 100;

  return (
    <div className="p-6 sm:p-8 space-y-6">

      {/* ── Top bar ── */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-black text-[#1a1f3c]">Subscription</h1>
          <p className="text-sm text-gray-400 mt-0.5">Manage your plan and billing</p>
        </div>
        <button className="relative w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-gray-300 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">3</span>
        </button>
      </div>

      {/* ── Current plan card ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">Current plan</h2>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div className="flex-1">
            {/* Plan name + badge */}
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-2xl font-black text-[#1a1f3c]">Professional</h3>
              <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Active
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-5">
              Renews on 1 May 2026 · Auto-renew is on
            </p>

            {/* Listings usage */}
            <div>
              <p className="text-xs font-semibold text-[#1a1f3c] mb-2">
                Listings used · {listingsUsed} of {listingsTotal}
              </p>
              <div className="w-64 bg-gray-100 rounded-full h-2.5 overflow-hidden mb-1.5">
                <div
                  className="h-full bg-[#1a1f3c] rounded-full"
                  style={{ width: `${listingsPercent}%` }}
                />
              </div>
              <p className="text-xs text-gray-400">
                {listingsTotal - listingsUsed} listings remaining this month
              </p>
            </div>
          </div>

          {/* Price + actions */}
          <div className="flex flex-col items-end gap-4">
            <div className="text-right">
              <p className="text-3xl font-black text-[#1a1f3c]">₦15,000</p>
              <p className="text-xs text-gray-400">Per month</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-sm font-bold border border-gray-200 text-[#1a1f3c] px-5 py-2.5 rounded-xl hover:border-[#1a1f3c] transition-colors">
                Manage billing
              </button>
              <button className="text-sm font-bold bg-[#F5A623] hover:bg-[#e09510] text-white px-5 py-2.5 rounded-xl transition-colors shadow-md">
                Upgrade to premium
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── All plans ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-base font-black text-[#1a1f3c] mb-1">All plans</h2>
            <p className="text-sm text-gray-400">Access verified listings and exclusive opportunities</p>
          </div>
          <p className="text-xs text-gray-400">Switch or upgrade anytime</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border-2 p-6 flex flex-col ${
                plan.current
                  ? "border-[#1a1f3c]"
                  : "border-gray-100"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${plan.badgeStyle}`}>
                  {plan.badge}
                </span>
              )}

              {/* Plan name + price */}
              <h3 className="text-lg font-black text-[#1a1f3c] mb-2">{plan.name}</h3>
              <p className="text-3xl font-black text-[#1a1f3c] mb-1">{plan.price}</p>
              <p className="text-xs text-gray-400 mb-5">per month</p>

              {/* Features */}
              <ul className="space-y-2.5 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-2.5">
                    {f.included ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7l3 3 6-6" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 3l8 8M11 3L3 11" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                    <span className={`text-sm ${f.included ? "text-[#1a1f3c]" : "text-gray-400"}`}>
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                type="button"
                disabled={plan.current}
                className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom row: Billing history + Payment method ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Billing history */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-black text-[#1a1f3c]">Billing history</h2>
            <button
              type="button"
              onClick={() => setBillingOpen((o) => !o)}
              className="text-xs font-bold border border-gray-200 text-[#1a1f3c] px-3 py-1.5 rounded-full hover:border-[#1a1f3c] transition-colors"
            >
              {billingOpen ? "Hide" : `${billingHistory.length} invoices`}
            </button>
          </div>
          {billingOpen && (
            <div className="space-y-0 divide-y divide-gray-50">
              {billingHistory.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-semibold text-[#1a1f3c]">{item.plan}</p>
                    <p className="text-xs text-gray-400">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#1a1f3c]">{item.amount}</p>
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!billingOpen && (
            <p className="text-sm text-gray-400">Click to view your past invoices.</p>
          )}
        </div>

        {/* Payment method */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-black text-[#1a1f3c]">Payment method</h2>
            <button className="text-xs font-bold border border-gray-200 text-[#1a1f3c] px-3 py-1.5 rounded-full hover:border-[#1a1f3c] transition-colors">
              Update
            </button>
          </div>
          <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
            <div className="w-12 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                <rect width="24" height="16" rx="2" fill="#1a1f3c" />
                <rect x="2" y="5" width="6" height="4" rx="0.5" fill="#F5A623" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-[#1a1f3c]">Bank Transfer</p>
              <p className="text-xs text-gray-400">Auto-debit enabled · Lagos</p>
            </div>
            <span className="ml-auto text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
              Active
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
