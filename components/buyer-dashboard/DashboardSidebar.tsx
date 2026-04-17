"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navSections = [
  {
    label: "MAIN",
    items: [
      {
        label: "Overview",
        href: "/buyer-dashboard",
        badge: null,
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        label: "My listings",
        href: "/buyer-dashboard/listings",
        badge: 9,
        badgeColor: "bg-red-500",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M14 2v6h6M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Enquiries",
        href: "/buyer-dashboard/enquiries",
        badge: 4,
        badgeColor: "bg-red-500",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
  {
    label: "PERFORMANCE",
    items: [
      {
        label: "Analytics",
        href: "/buyer-dashboard/analytics",
        badge: null,
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Reviews",
        href: "/buyer-dashboard/reviews",
        badge: null,
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
  {
    label: "ACTIVITY",
    items: [
      {
        label: "Subscription",
        href: "/buyer-dashboard/subscription",
        badge: null,
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        label: "Settings",
        href: "/buyer-dashboard/settings",
        badge: null,
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        ),
      },
    ],
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-[#080d28] flex flex-col z-40">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/10">
        <p className="text-white font-black text-lg leading-tight">Property Vault</p>
        <p className="text-white/40 text-xs font-medium mt-0.5">Buyer Dashboard</p>
      </div>

      {/* Buyer profile */}
      <div className="px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/agent-adewale.jpg"
              alt="Agent"
              className="w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </div>
          <div className="min-w-0">
            <p className="text-white text-sm font-bold truncate">Adewale Okonkwo</p>
            <p className="text-white/40 text-xs truncate">Verified Buyer · Lagos Prime</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navSections.map((section) => (
          <div key={section.label}>
            <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase px-3 mb-2">
              {section.label}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                      ${isActive
                        ? "bg-[#F5A623]/15 text-[#F5A623]"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? "text-[#F5A623]" : ""}>{item.icon}</span>
                      <span className="text-sm font-semibold">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[10px] font-bold text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Sign out */}
      <div className="px-3 py-4 border-t border-white/10">
        <button
          type="button"
          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-sm font-semibold">Sign out</span>
        </button>
      </div>
    </aside>
  );
}
