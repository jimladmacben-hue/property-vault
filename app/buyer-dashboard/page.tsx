import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const enquiries = [
  {
    id: 1,
    dot: "bg-green-500",
    title: "4 Bed Detached Duplex, Lekki Phase 1",
    meta: "₦45,000,000 · For Sale",
    status: "Agent Replied",
    statusColor: "text-green-600 bg-green-50 border-green-200",
    reply: "\"Hello Tunde, thank you for your enquiry. I can arrange a viewing this Saturday at 10am. Please confirm if this works for you.\"",
    agent: "Adewale Okon · Lagos Prime Realty · 2hrs ago",
    showActions: true,
  },
  {
    id: 2,
    dot: "bg-amber-400",
    title: "3 Bed Apartment, Maitama",
    meta: "₦2,500,000/yr · For Rent",
    status: "Awaiting reply",
    statusColor: "text-amber-600 bg-amber-50 border-amber-200",
    reply: "Enquiry sent · Waiting for agent response",
    agent: "Sent yesterday · Agent usually replies in 3hrs",
    showActions: false,
  },
  {
    id: 3,
    dot: "bg-gray-400",
    title: "600sqm Land, Ajah",
    meta: "₦18,000,000 · Land",
    status: "Viewing Scheduled",
    statusColor: "text-gray-500 bg-gray-100 border-gray-200",
    reply: "Saturday 5 April · 2:00pm",
    agent: "Confirmed by agent · 1 day ago",
    showActions: false,
  },
];

const savedProperties = [
  { id: 1, image: "/images/invest-prop-1.jpg", title: "4 Bed Detached, Lekki Phase 1", location: "Lekki Phase 1, Lagos", price: "₦45,000,000", priceDrop: false },
  { id: 2, image: "/images/invest-prop-2.jpg", title: "4 Bed Detached, Lekki Phase 1", location: "Lekki Phase 1, Lagos", price: "₦45,000,000", priceDrop: true },
  { id: 3, image: "/images/invest-prop-3.jpg", title: "600sqm Land, Ajah", location: "Ajah, Lagos", price: "₦15,000,000", priceDrop: false },
];

const searchAlerts = [
  { id: 1, title: "3–4 Bed · For Sale · Lekki", sub: "Under ₦50M · Verified only", newCount: 8, active: true },
  { id: 2, title: "Land · Ajah or Ibeju-Lekki", sub: "C of O only · Any price", newCount: 4, active: true },
  { id: 3, title: "2 Bed Flat · For Rent · Abuja", sub: "Under ₦2M/yr · Furnished", newCount: 2, active: true },
];

// ─── Toggle ───────────────────────────────────────────────────────────────────

function Toggle({ active }: { active: boolean }) {
  return (
    <div className={`relative w-11 h-6 rounded-full flex-shrink-0 ${active ? "bg-[#1a1f3c]" : "bg-gray-200"}`}>
      <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${active ? "translate-x-5" : "translate-x-0.5"}`} />
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function BuyerOverviewPage() {
  return (
    <div className="p-6 sm:p-8">

      {/* ── Top bar ── */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#1a1f3c]">Welcome back, Tunde 🤝</h1>
          <p className="text-sm text-gray-400 mt-0.5">
            Thursday, 2 April 2026 · You have 2 agent replies waiting
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-gray-300 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">2</span>
          </button>
          <Link href="/properties"
            className="flex items-center gap-2 bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shadow-md">
            + Browse Properties
          </Link>
        </div>
      </div>

      {/* ── Alert banner ── */}
      <div className="flex items-center justify-between gap-4 bg-green-50 border border-green-200 rounded-2xl px-5 py-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-sm text-green-800 font-medium">
            <strong>2 agents</strong> have replied to your enquiries. Check their responses and arrange viewings.
          </p>
        </div>
        <button className="flex-shrink-0 text-sm font-bold text-[#1a1f3c] border border-gray-300 px-4 py-2 rounded-xl hover:border-[#1a1f3c] transition-colors whitespace-nowrap">
          Reply now →
        </button>
      </div>

      {/* ── 3 stat cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[
          { label: "SAVED PROPERTIES", icon: "❤️", value: "9", suffix: "saved properties", badge: "↓ 2 price drops", badgeColor: "text-amber-600" },
          { label: "MY ENQUIRIES", icon: "💬", value: "4", suffix: "active enquiries", badge: "+2 new replies", badgeColor: "text-green-600" },
          { label: "ALERTS", icon: "🔔", value: "3", suffix: "active search alerts", badge: "+14 new", badgeColor: "text-green-600" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">{stat.label}</p>
              <span className="text-base">{stat.icon}</span>
            </div>
            <p className="text-3xl font-black text-[#1a1f3c] mb-0.5">
              {stat.value}
              <span className="text-[#F5A623] text-xl font-black"> {stat.suffix}</span>
            </p>
            <p className={`text-xs font-semibold ${stat.badgeColor}`}>{stat.badge}</p>
          </div>
        ))}
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
          <p className="text-xs text-gray-400 mb-5">Track your conversations with agents</p>

          <div className="space-y-5">
            {enquiries.map((e) => (
              <div key={e.id} className="flex items-start gap-3">
                {/* Status dot */}
                <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${e.dot}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-[#1a1f3c] mb-0.5">{e.title}</p>
                  <p className="text-xs text-gray-400 mb-2">{e.meta}</p>
                  <span className={`inline-flex text-[10px] font-bold px-2.5 py-1 rounded-full border mb-3 ${e.statusColor}`}>
                    {e.status}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed mb-1">{e.reply}</p>
                  <p className="text-xs text-gray-400 mb-3">{e.agent}</p>
                  {e.showActions && (
                    <div className="flex gap-2">
                      <button className="bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-colors">
                        Reply
                      </button>
                      <button className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-colors">
                        Whatsapp
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 space-y-5">

          {/* Saved Properties */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-base font-black text-[#1a1f3c]">Saved Properties</h2>
              <button className="text-xs font-bold text-[#1a1f3c] border border-gray-200 px-3 py-1.5 rounded-full hover:border-[#1a1f3c] transition-colors">
                View all
              </button>
            </div>
            <p className="text-xs text-gray-400 mb-4">8 saved · 2 price drops</p>

            <div className="space-y-4">
              {savedProperties.map((p) => (
                <div key={p.id} className="flex items-center gap-3">
                  <div className="w-14 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[#1a1f3c] truncate">{p.title}</p>
                    <p className="text-xs text-gray-400 truncate">{p.location}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <p className="text-xs font-bold text-[#1a1f3c]">{p.price}</p>
                      {p.priceDrop && (
                        <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-full">
                          Price drop
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 flex-shrink-0">
                    <button className="bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors">
                      Enquire
                    </button>
                    <button className="text-[10px] font-semibold text-gray-400 hover:text-red-500 transition-colors text-center">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search Alerts */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-base font-black text-[#1a1f3c]">Search Alert</h2>
              <button className="text-xs font-bold text-[#1a1f3c] border border-gray-200 px-3 py-1.5 rounded-full hover:border-[#1a1f3c] transition-colors">
                View all
              </button>
            </div>
            <p className="text-xs text-gray-400 mb-4">14 new matching listings today</p>

            <div className="space-y-3">
              {searchAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[#1a1f3c] truncate">{alert.title}</p>
                    <p className="text-[10px] text-gray-400 truncate">{alert.sub}</p>
                  </div>
                  <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex-shrink-0">
                    {alert.newCount} new
                  </span>
                  <Toggle active={alert.active} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
