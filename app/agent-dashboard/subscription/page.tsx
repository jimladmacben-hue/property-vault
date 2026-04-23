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
  const [extendModal, setExtendModal] = useState(false);
  const [tokenModal, setTokenModal] = useState(false);
  const [upgradeModal, setUpgradeModal] = useState<string | null>(null);
  const [extendDays, setExtendDays] = useState(30);
  const [buyAmount, setBuyAmount] = useState(500);

  const tokenBalance = 1250;

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

      {/* ── Extend Modal ── */}
      {extendModal && (
        <div className="fixed inset-0 bg-[#1a1f3c]/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] p-8 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-[#1a1f3c] mb-2">Extend Plan</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Add more days to your current Professional plan to avoid interruption.
            </p>
            
            <div className="mb-8">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Days to add</label>
              <div className="grid grid-cols-3 gap-2">
                {[30, 90, 365].map(d => (
                  <button 
                    key={d}
                    onClick={() => setExtendDays(d)}
                    className={`py-3 rounded-xl text-sm font-bold border transition-all ${extendDays === d ? "bg-[#1a1f3c] text-white border-[#1a1f3c]" : "bg-white text-gray-500 border-gray-100 hover:border-gray-300"}`}
                  >
                    {d === 365 ? "1 Year" : `${d} Days`}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setExtendModal(false)}
                className="flex-1 px-6 py-3 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setExtendModal(false)}
                className="flex-1 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#1a1f3c] hover:bg-[#2a3060] shadow-lg shadow-blue-500/10 transition-all"
              >
                Extend Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Token Modal ── */}
      {tokenModal && (
        <div className="fixed inset-0 bg-[#1a1f3c]/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] p-8 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[#F5A623] flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-[#1a1f3c] mb-2">Buy Tokens</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Promotion tokens allow you to boost your listings above others in search results.
            </p>
            
            <div className="mb-8">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Select Package</label>
              <div className="space-y-2">
                {[
                  { amount: 500, price: "₦5,000" },
                  { amount: 1500, price: "₦12,000" },
                  { amount: 5000, price: "₦35,000" },
                ].map(p => (
                  <button 
                    key={p.amount}
                    onClick={() => setBuyAmount(p.amount)}
                    className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-sm font-bold border transition-all ${buyAmount === p.amount ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-white text-[#1a1f3c] border-gray-100 hover:border-gray-300"}`}
                  >
                    <span>{p.amount} Tokens</span>
                    <span className="text-xs font-black opacity-60">{p.price}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setTokenModal(false)}
                className="flex-1 px-6 py-3 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setTokenModal(false)}
                className="flex-1 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#F5A623] hover:bg-[#e09510] shadow-lg shadow-amber-500/20 transition-all"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Upgrade Modal ── */}
      {upgradeModal && (
        <div className="fixed inset-0 bg-[#1a1f3c]/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] p-8 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-200">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${upgradeModal === 'premium' ? 'bg-amber-50 text-[#F5A623]' : 'bg-blue-50 text-blue-600'}`}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-[#1a1f3c] mb-2">Switch to {upgradeModal.charAt(0).toUpperCase() + upgradeModal.slice(1)}?</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              Confirm your change to the {upgradeModal} plan. Your new listing limits and features will be available immediately.
            </p>
            
            <div className="flex gap-3">
              <button
                onClick={() => setUpgradeModal(null)}
                className="flex-1 px-6 py-3 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setUpgradeModal(null)}
                className={`flex-1 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all shadow-lg ${upgradeModal === 'premium' ? 'bg-[#F5A623] hover:bg-[#e09510] shadow-amber-500/20' : 'bg-[#1a1f3c] hover:bg-[#2a3060] shadow-blue-500/10'}`}
              >
                Confirm Plan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Current plan card ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wide">Current plan</h2>
          <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-xl border border-amber-100">
            <span className="text-lg">⚡</span>
            <div>
              <p className="text-[10px] font-black text-amber-700 uppercase tracking-widest leading-none mb-0.5">Token Balance</p>
              <p className="text-sm font-black text-amber-900 leading-none">{tokenBalance.toLocaleString()}</p>
            </div>
            <button 
              onClick={() => setTokenModal(true)}
              className="ml-2 w-6 h-6 bg-amber-200 text-amber-700 rounded-lg flex items-center justify-center hover:bg-amber-300 transition-colors"
            >
              +
            </button>
          </div>
        </div>
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
              <button 
                onClick={() => setExtendModal(true)}
                className="text-sm font-bold border border-gray-200 text-[#1a1f3c] px-5 py-2.5 rounded-xl hover:border-[#1a1f3c] transition-colors"
              >
                Extend plan
              </button>
              <button 
                onClick={() => setUpgradeModal('premium')}
                className="text-sm font-bold bg-[#F5A623] hover:bg-[#e09510] text-white px-5 py-2.5 rounded-xl transition-colors shadow-md"
              >
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
                onClick={() => setUpgradeModal(plan.id)}
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
