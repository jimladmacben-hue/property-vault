"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Star, 
  CreditCard, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";

const navSections = [
  {
    label: "MAIN",
    items: [
      {
        label: "Overview",
        href: "/agent-dashboard",
        icon: <LayoutDashboard size={18} />,
      },
      {
        label: "My listings",
        href: "/agent-dashboard/listings",
        badge: 9,
        badgeColor: "bg-red-500",
        icon: <FileText size={18} />,
      },
      {
        label: "Enquiries",
        href: "/agent-dashboard/enquiries",
        badge: 4,
        badgeColor: "bg-red-500",
        icon: <MessageSquare size={18} />,
      },
    ],
  },
  {
    label: "PERFORMANCE",
    items: [
      {
        label: "Analytics",
        href: "/agent-dashboard/analytics",
        icon: <BarChart3 size={18} />,
      },
      {
        label: "Reviews",
        href: "/agent-dashboard/reviews",
        icon: <Star size={18} />,
      },
    ],
  },
  {
    label: "ACTIVITY",
    items: [
      {
        label: "Subscription",
        href: "/agent-dashboard/subscription",
        icon: <CreditCard size={18} />,
      },
      {
        label: "Settings",
        href: "/agent-dashboard/settings",
        icon: <Settings size={18} />,
      },
    ],
  },
];

export default function AgentDashboardSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Burger Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2.5 bg-[#080d28] text-white rounded-xl shadow-lg border border-white/10 active:scale-95 transition-all"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`fixed top-0 left-0 h-screen w-64 bg-[#080d28] flex flex-col z-40 transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        {/* Logo */}
        <div className="px-6 py-5 border-b border-white/10">
          <p className="text-white font-black text-lg leading-tight">Property Vault</p>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-0.5">Agent Dashboard</p>
        </div>

        {/* Profile Section */}
        <div className="px-6 py-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-600/20 border border-amber-500/30 overflow-hidden flex-shrink-0 flex items-center justify-center text-amber-400 font-black">
              AO
            </div>

            <div className="min-w-0">
              <p className="text-white text-sm font-bold truncate">Adewale Okonkwo</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                <p className="text-white/40 text-[10px] font-bold truncate uppercase tracking-wider">Verified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-8 scrollbar-hide">
          {navSections.map((section) => (
            <div key={section.label}>
              <p className="text-white/20 text-[10px] font-black tracking-[0.2em] uppercase px-3 mb-4">
                {section.label}
              </p>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group
                        ${isActive
                          ? "bg-[#F5A623]/15 text-[#F5A623]"
                          : "text-white/50 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`${isActive ? "text-[#F5A623]" : "text-white/30 group-hover:text-white/60"} transition-colors`}>
                          {item.icon}
                        </span>
                        <span className="text-xs font-bold">{item.label}</span>
                      </div>

                      {item.badge && !isActive && (
                        <span className={`text-[9px] font-black text-white w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-red-500 shadow-sm`}>
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

        {/* Bottom Actions */}
        <div className="px-4 py-6 border-t border-white/10">
          <button
            type="button"
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-white/40 hover:text-white hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 group"
          >
            <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
            <span className="text-xs font-bold">Sign out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
