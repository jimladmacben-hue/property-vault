"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const enquiries = [
  {
    id: 1, initials: "TO", color: "bg-[#1a1f3c]",
    name: "Tunde Okafor", property: "4 Bed Detached, Lekki Phase 1",
    preview: "I am interested and would like to arrange...",
    time: "2hrs ago", status: "New",
    messages: [
      { text: "Hello, I am interested in this property and would like to arrange a viewing this weekend if possible. I have been looking for a 4-bedroom in Lekki for a while and this one looks exactly right.", time: "2:14pm · via Property Vault" },
      { text: "Also, is the price negotiable at all? My budget is slightly under the listed price.", time: "2:16pm" },
    ],
    propertyTitle: "4 Bedroom Detached Duplex with Pool, Lekki Phase 1",
    propertyPrice: "₦45,000,000",
    propertyMeta: "For Sale · Listed 14 days ago",
    propertyImage: "/images/invest-prop-1.jpg",
    firstEnquiry: true,
    replied: false,
  },
  {
    id: 2, initials: "AE", color: "bg-green-700",
    name: "Amaka Eze", property: "600sqm Land, Ajah",
    preview: "What documents are available? I'm buy....",
    time: "4hrs ago", status: "New",
    messages: [
      { text: "What documents are available for this land? I'm buying from UK and want to be sure everything is in order before I proceed.", time: "10:05am · via Property Vault" },
    ],
    propertyTitle: "600sqm Land, Ajah",
    propertyPrice: "₦28,000,000",
    propertyMeta: "For Sale · Listed 3 days ago",
    propertyImage: "/images/invest-prop-2.jpg",
    firstEnquiry: true,
    replied: false,
  },
  {
    id: 3, initials: "KA", color: "bg-purple-700",
    name: "Kemi Adeyemi", property: "3 Bed Flat, Victoria Island",
    preview: "Is the price negotiable? Looking to move in...",
    time: "8hrs ago", status: "New",
    messages: [
      { text: "Is the price negotiable? Looking to move in by end of the month if terms are right.", time: "8:30am · via Property Vault" },
    ],
    propertyTitle: "3 Bed Flat, Victoria Island",
    propertyPrice: "₦85,000,000",
    propertyMeta: "For Sale · Listed 7 days ago",
    propertyImage: "/images/invest-prop-3.jpg",
    firstEnquiry: false,
    replied: false,
  },
  {
    id: 4, initials: "BO", color: "bg-gray-600",
    name: "Blessing Obi", property: "4 Bed Detached, Lekki Phase 1",
    preview: "I am interested and would like to arrange...",
    time: "Yesterday", status: "New",
    messages: [
      { text: "I am interested and would like to arrange a viewing as soon as possible.", time: "Yesterday · via Property Vault" },
    ],
    propertyTitle: "4 Bedroom Detached Duplex with Pool, Lekki Phase 1",
    propertyPrice: "₦45,000,000",
    propertyMeta: "For Sale · Listed 14 days ago",
    propertyImage: "/images/invest-prop-1.jpg",
    firstEnquiry: false,
    replied: false,
  },
  {
    id: 5, initials: "MO", color: "bg-teal-700",
    name: "Musa Okoro", property: "4 Bed Detached, Lekki Phase 1",
    preview: "I am interested and would like to arrange...",
    time: "2 days ago", status: "Replied",
    messages: [
      { text: "I am interested and would like to arrange a viewing this week.", time: "2 days ago · via Property Vault" },
    ],
    propertyTitle: "4 Bedroom Detached Duplex with Pool, Lekki Phase 1",
    propertyPrice: "₦45,000,000",
    propertyMeta: "For Sale · Listed 14 days ago",
    propertyImage: "/images/invest-prop-1.jpg",
    firstEnquiry: false,
    replied: true,
  },
  {
    id: 6, initials: "FN", color: "bg-rose-700",
    name: "Fatima Nwosu", property: "4 Bed Detached, Lekki Phase 1",
    preview: "I am interested and would like to arrange...",
    time: "3 days ago", status: "Replied",
    messages: [
      { text: "I am interested and would like to arrange a viewing.", time: "3 days ago · via Property Vault" },
    ],
    propertyTitle: "4 Bedroom Detached Duplex with Pool, Lekki Phase 1",
    propertyPrice: "₦45,000,000",
    propertyMeta: "For Sale · Listed 14 days ago",
    propertyImage: "/images/invest-prop-1.jpg",
    firstEnquiry: false,
    replied: true,
  },
];

const tabs = ["All", "Unread", "Replied", "Scheduled"];

const quickReplies = [
  { icon: "📅", label: "Propose viewing time" },
  { icon: "🤝", label: "Discuss price" },
  { icon: "📋", label: "Share documents" },
  { icon: "✓", label: "Property is available" },
];

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function EnquiriesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(1);
  const [reply, setReply] = useState("");

  const filtered = enquiries.filter((e) => {
    const matchTab = activeTab === "All" || (activeTab === "Unread" && !e.replied) || (activeTab === "Replied" && e.replied);
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) || e.property.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  const active = enquiries.find((e) => e.id === selectedId)!;

  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f5f0]">

      {/* ── Left panel ── */}
      <div className="w-[340px] flex-shrink-0 bg-white border-r border-gray-100 flex flex-col h-full">

        {/* Header */}
        <div className="px-5 pt-6 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-xl font-black text-[#1a1f3c]">Enquiries</h1>
            <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">
              5 unread
            </span>
          </div>
          {/* Search */}
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search by name or property..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-[#F5A623] transition-all"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 px-4 py-3 border-b border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${
                activeTab === tab
                  ? "bg-[#1a1f3c] text-white"
                  : "text-gray-500 hover:text-[#1a1f3c]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Enquiry list */}
        <div className="flex-1 overflow-y-auto">
          {filtered.map((e) => (
            <button
              key={e.id}
              type="button"
              onClick={() => setSelectedId(e.id)}
              className={`w-full text-left px-4 py-4 border-b border-gray-50 transition-colors relative ${
                selectedId === e.id ? "bg-amber-50" : "hover:bg-gray-50"
              }`}
            >
              {/* Unread dot */}
              {!e.replied && (
                <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
              )}
              <div className="flex items-start gap-3 pl-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 ${e.color}`}>
                  {e.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-sm font-bold text-[#1a1f3c] truncate">{e.name}</p>
                    <span className="text-[10px] text-gray-400 flex-shrink-0 ml-2">{e.time}</span>
                  </div>
                  <p className="text-xs text-gray-400 truncate mb-1">{e.property}</p>
                  <p className="text-xs text-gray-500 truncate mb-2">{e.preview}</p>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                    e.status === "New"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-green-100 text-green-700"
                  }`}>
                    {e.status}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Right panel — chat view ── */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">

        {/* Chat header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black flex-shrink-0 ${active.color}`}>
              {active.initials}
            </div>
            <div>
              <h2 className="text-base font-black text-[#1a1f3c]">{active.name}</h2>
              <p className="text-xs text-gray-400">
                {active.firstEnquiry ? "First enquiry" : "Returning enquiry"} · Sent {active.time} · {active.replied ? "Replied" : "Not yet replied"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* WhatsApp */}
            <button className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </button>
            {/* Phone */}
            <button className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:border-gray-300 flex items-center justify-center transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.22 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#1a1f3c" strokeWidth="1.5" />
              </svg>
            </button>
            {/* More */}
            <button className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:border-gray-300 flex items-center justify-center transition-colors text-gray-500 font-bold">
              ···
            </button>
          </div>
        </div>

        {/* Property card */}
        <div className="px-6 py-4 bg-white border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={active.propertyImage} alt={active.propertyTitle} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-black text-[#1a1f3c] leading-snug mb-1">{active.propertyTitle}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-gray-500">{active.propertyPrice} · {active.propertyMeta}</span>
                <span className="flex items-center gap-1 text-xs font-semibold text-green-600">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Verified
                </span>
              </div>
            </div>
            <Link
              href="/properties/1"
              className="flex-shrink-0 flex items-center gap-1.5 border border-gray-200 text-sm font-bold text-[#1a1f3c] px-4 py-2 rounded-xl hover:border-[#1a1f3c] transition-colors"
            >
              View listing →
            </Link>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {/* Date divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs font-semibold text-gray-400">Today</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Buyer messages */}
          {active.messages.map((msg, i) => (
            <div key={i} className="flex items-end gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 ${active.color}`}>
                {active.initials}
              </div>
              <div className="max-w-lg bg-white rounded-2xl rounded-bl-sm shadow-sm px-4 py-3">
                <p className="text-sm text-[#1a1f3c] leading-relaxed">{msg.text}</p>
                <p className="text-[10px] text-gray-400 mt-1.5">{msg.time}</p>
              </div>
            </div>
          ))}

          {/* No reply warning */}
          {!active.replied && (
            <div className="flex justify-center">
              <span className="flex items-center gap-2 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-4 py-2 rounded-full">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#b45309" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                You haven&apos;t replied yet · Buyers expect a response within 2 hours
              </span>
            </div>
          )}
        </div>

        {/* Reply area */}
        <div className="px-6 py-4 bg-white border-t border-gray-100 flex-shrink-0 space-y-3">
          {/* Quick reply chips */}
          <div className="flex flex-wrap gap-2">
            {quickReplies.map((qr) => (
              <button
                key={qr.label}
                type="button"
                onClick={() => setReply(qr.label)}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#1a1f3c] border border-gray-200 px-3.5 py-2 rounded-full hover:border-[#1a1f3c] hover:bg-gray-50 transition-all"
              >
                <span>{qr.icon}</span>
                {qr.label}
              </button>
            ))}
          </div>

          {/* Text input + send */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder={`Type your reply to ${active.name.split(" ")[0]}...`}
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && reply.trim()) setReply(""); }}
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm text-[#1a1f3c] placeholder-gray-400 focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 transition-all"
            />
            <button
              type="button"
              onClick={() => setReply("")}
              className="bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors shadow-md"
            >
              Send reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
