import Link from "next/link";

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  suffix,
  sub,
  badge,
  dark,
}: {
  label: string;
  value: string;
  suffix?: string;
  sub?: string;
  badge?: string;
  dark?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-5 flex flex-col gap-3 ${dark ? "bg-[#080d28]" : "bg-white border border-gray-100"}`}>
      <div className="flex items-center justify-between">
        <p className={`text-xs font-bold tracking-widest uppercase ${dark ? "text-white/40" : "text-gray-400"}`}>
          {label}
        </p>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke={dark ? "rgba(255,255,255,0.2)" : "#d1d5db"} strokeWidth="1.5" />
          <path d="M12 8v4M12 16h.01" stroke={dark ? "rgba(255,255,255,0.3)" : "#9ca3af"} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <p className={`text-3xl font-black ${dark ? "text-white" : "text-[#1a1f3c]"}`}>
          {value}
          {suffix && <span className="text-[#F5A623] text-2xl">{suffix}</span>}
        </p>
        {sub && <p className={`text-xs mt-1 ${dark ? "text-white/40" : "text-gray-400"}`}>{sub}</p>}
      </div>
      {badge && (
        <span className="inline-flex items-center gap-1 text-xs font-bold text-green-400 bg-green-400/10 px-3 py-1 rounded-full w-fit">
          {badge}
        </span>
      )}
    </div>
  );
}

// ─── Enquiry Item ─────────────────────────────────────────────────────────────

function EnquiryItem({
  initials,
  color,
  name,
  property,
  time,
  status,
  message,
}: {
  initials: string;
  color: string;
  name: string;
  property: string;
  time: string;
  status: "New" | "Replied";
  message: string;
}) {
  return (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <div className="flex items-start gap-3">
        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 ${color}`}>
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-0.5">
            <p className="text-sm font-bold text-[#1a1f3c]">{name}</p>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xs text-gray-400">{time}</span>
              <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                status === "New"
                  ? "border-gray-300 text-gray-500"
                  : "border-green-300 text-green-600 bg-green-50"
              }`}>
                {status}
              </span>
            </div>
          </div>
          <p className="text-xs text-gray-400 mb-1">{property}</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">{message}</p>
          <div className="flex gap-2">
            <button className="bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-colors">
              Reply
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-colors">
              Whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function DashboardOverview() {
  return (
    <div className="p-6 sm:p-8">

      {/* ── Top bar ── */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#1a1f3c]">
            Good morning, Adewale 🤝
          </h1>
          <p className="text-sm text-gray-400 mt-0.5">
            Thursday, 2 April 2026 · Here&apos;s what needs your attention today
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-gray-300 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">3</span>
          </button>
          <Link
            href="/dashboard/listings/new"
            className="flex items-center gap-2 bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shadow-md"
          >
            <span className="text-base leading-none">+</span>
            New listing
          </Link>
        </div>
      </div>

      {/* ── Alert banner ── */}
      <div className="flex items-center justify-between gap-4 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 mb-6">
        <div className="flex items-start gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#F5A623" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M12 9v4M12 17h.01" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p className="text-sm text-amber-800 leading-relaxed">
            You have <strong>5 new enquiries</strong> waiting for a response. Agents who reply within 2 hours get 3× more conversions.
          </p>
        </div>
        <button className="flex-shrink-0 text-sm font-bold text-[#1a1f3c] border border-gray-300 px-4 py-2 rounded-xl hover:border-[#1a1f3c] transition-colors whitespace-nowrap">
          Reply now →
        </button>
      </div>

      {/* ── 4 stat cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          dark
          label="Total Listings"
          value="9"
          sub="active listings"
          badge="↑ +2 new"
        />
        <StatCard
          label="My Enquiries"
          value="12"
          suffix=" total enquiries"
          badge="↑ +5 unread messages"
        />
        <StatCard
          label="Total Views"
          value="1567"
          suffix=" views"
          sub="Listing views this month"
        />
        <StatCard
          label="My Ratings"
          value="4.9"
          suffix=" avg. rating"
          sub="+128 reviews"
        />
      </div>

      {/* ── Two-column layout ── */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Left — Recent Enquiries */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-base font-black text-[#1a1f3c]">Recent Enquiries</h2>
            <button className="text-xs font-bold text-[#1a1f3c] border border-gray-200 px-3 py-1.5 rounded-full hover:border-[#1a1f3c] transition-colors">
              View all
            </button>
          </div>
          <p className="text-xs text-gray-400 mb-4">5 unread · Reply to stay visible</p>

          <EnquiryItem
            initials="TO" color="bg-[#1a1f3c]"
            name="Tunde Okafor" property="4 Bed Detached, Lekki Phase 1"
            time="2 hrs ago" status="New"
            message="I am interested and would like to arrange a viewing this weekend..."
          />
          <EnquiryItem
            initials="AE" color="bg-green-700"
            name="Amaka Eze" property="600sqm Land, Ajah"
            time="5 hrs ago" status="New"
            message="What documents are available for this land? I'm buying from UK..."
          />
          <EnquiryItem
            initials="BI" color="bg-gray-600"
            name="Blessing Igwe" property="3 Bed Flat, Victoria Island"
            time="Yesterday" status="Replied"
            message="Is the price negotiable? Can we schedule a visit tomorrow?"
          />
        </div>

        {/* Right column */}
        <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 space-y-5">

          {/* Viewing Schedules */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <h2 className="text-base font-black text-[#1a1f3c] mb-4">Upcoming Viewing Schedules</h2>
            <table className="w-full text-xs">
              <thead>
                <tr className="text-gray-400 border-b border-gray-100">
                  <th className="text-left pb-2 font-semibold">Time</th>
                  <th className="text-left pb-2 font-semibold">Name</th>
                  <th className="text-left pb-2 font-semibold">Property/location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { time: "2:00pm", name: "Name Surname", property: "4 bedroom detached, Lekki" },
                  { time: "4:00pm", name: "Name Surname", property: "4 bedroom detached, Lekki" },
                  { time: "9:00pm", name: "Name Surname", property: "4 bedroom detached, Lekki" },
                ].map((v, i) => (
                  <tr key={i}>
                    <td className="py-2.5 font-semibold text-[#1a1f3c]">{v.time}</td>
                    <td className="py-2.5 text-gray-500">{v.name}</td>
                    <td className="py-2.5 text-gray-500">{v.property}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Hottest Property Insight */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <h2 className="text-base font-black text-[#1a1f3c] mb-4">
              Hottest Property insight
            </h2>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/invest-prop-1.jpg" alt="Property" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#1a1f3c] leading-snug mb-1">
                  4 Bed Detached, Lekki Phase 1
                </p>
                <p className="text-xs text-gray-400">Most views this week : <span className="font-bold text-[#1a1f3c]">1245</span></p>
                <p className="text-xs text-gray-400">Hottest lead count : <span className="font-bold text-[#1a1f3c]">10</span></p>
              </div>
            </div>
            <button className="w-full bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-xs font-bold py-2.5 rounded-xl transition-colors">
              See listing
            </button>
          </div>

          {/* Tip banner */}
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl px-4 py-3.5">
            <span className="text-lg flex-shrink-0">💡</span>
            <p className="text-xs text-amber-800 leading-relaxed">
              Your Saturday listings get 2× more views. Consider scheduling new listings to go live on Friday evenings for maximum exposure.
            </p>
          </div>
        </div>

      </div>

      {/* ── My Listings preview ── */}
      <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-base font-black text-[#1a1f3c]">My listings</h2>
          <Link
            href="/dashboard/listings/new"
            className="flex items-center gap-1.5 bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
          >
            <span>+</span> New listing
          </Link>
        </div>
        <p className="text-xs text-gray-400">12 active · 2 pending · 1 draft</p>
      </div>

    </div>
  );
}
