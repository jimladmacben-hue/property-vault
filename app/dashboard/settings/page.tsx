"use client";

import { useState } from "react";

// ─── Tab definitions ──────────────────────────────────────────────────────────

const tabs = [
  "Profile",
  "Notifications",
  "Verification",
  "Areas covered",
  "Security",
  "Danger zone",
];

// ─── Reusable input ───────────────────────────────────────────────────────────

function Field({
  label, value, onChange, placeholder, disabled, hint, type = "text",
}: {
  label: string; value: string; onChange?: (v: string) => void;
  placeholder?: string; disabled?: boolean; hint?: string; type?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-gray-500">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-3 border rounded-xl text-sm font-medium transition-all
          ${disabled
            ? "bg-gray-50 border-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white border-gray-200 text-[#1a1f3c] focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20"
          }`}
      />
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );
}

// ─── Profile tab ──────────────────────────────────────────────────────────────

function ProfileTab() {
  const [form, setForm] = useState({
    firstName: "Adewale",
    lastName: "Okonkwo",
    phone: "08012345678",
    whatsapp: "08012345678",
    agency: "Lagos Prime Realty",
    bio: "Senior property consultant with 6+ years specialising in Lekki, Victoria Island, and Ikoyi. All listings personally inspected and title documents verified before listing.",
    email: "adewale@lagosprime.ng",
    experience: "6 years",
  });

  const [expOpen, setExpOpen] = useState(false);
  const expOptions = ["1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10+ years"];

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100">
        <h2 className="text-base font-black text-[#1a1f3c] mb-0.5">Profile Information</h2>
        <p className="text-xs text-gray-400">This is what buyers see on your profile</p>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Avatar + name */}
        <div className="flex items-center gap-4">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/agent-adewale.jpg" alt="Agent" className="w-full h-full object-cover" />
            </div>
            <button className="absolute -bottom-0.5 -right-0.5 w-6 h-6 bg-[#1a1f3c] rounded-full flex items-center justify-center border-2 border-white">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div>
            <p className="text-base font-black text-[#1a1f3c]">{form.firstName} {form.lastName}</p>
            <p className="text-xs text-gray-400 mb-2">{form.email}</p>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 4l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Verified agent
              </span>
              <span className="text-[10px] font-bold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">
                NIN verified
              </span>
            </div>
          </div>
        </div>

        {/* Form fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="First Name" value={form.firstName} onChange={(v) => update("firstName", v)} />
          <Field label="Last Name" value={form.lastName} onChange={(v) => update("lastName", v)} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Phone Number" value={form.phone} onChange={(v) => update("phone", v)} type="tel" />
          <Field
            label="Whatsapp Number" value={form.whatsapp}
            onChange={(v) => update("whatsapp", v)} type="tel"
            hint="Buyers use this to contact you directly"
          />
        </div>

        <Field label="Agency / Company Name" value={form.agency} onChange={(v) => update("agency", v)} />

        {/* Bio */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500">Bio</label>
          <textarea
            value={form.bio}
            onChange={(e) => update("bio", e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium text-[#1a1f3c] focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 transition-all resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            label="Email Address" value={form.email} disabled
            hint="Contact support to change email"
          />
          {/* Experience dropdown */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500">Years of Experience</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setExpOpen((o) => !o)}
                className="w-full flex items-center justify-between px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium text-[#1a1f3c] bg-white focus:outline-none hover:border-gray-300 transition-all"
              >
                {form.experience}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform ${expOpen ? "rotate-180" : ""}`}>
                  <path d="M4 6l4 4 4-4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {expOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden max-h-48 overflow-y-auto">
                  {expOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => { update("experience", opt); setExpOpen(false); }}
                      className={`w-full px-4 py-2.5 text-left text-sm font-medium hover:bg-amber-50 transition-colors ${form.experience === opt ? "text-[#F5A623]" : "text-[#1a1f3c]"}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
        <p className="text-xs text-gray-400">Changes are visible to buyers immediately</p>
        <button className="bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-colors shadow-md">
          Save Changes
        </button>
      </div>
    </div>
  );
}

// ─── Notifications tab ────────────────────────────────────────────────────────

const notifSettings = [
  { label: "New enquiry received", sub: "Get notified when a buyer sends you a message", key: "newEnquiry" },
  { label: "Listing approved", sub: "When Property Vault approves your listing", key: "listingApproved" },
  { label: "Review received", sub: "When a buyer leaves you a review", key: "reviewReceived" },
  { label: "Viewing scheduled", sub: "When a buyer confirms a viewing", key: "viewingScheduled" },
  { label: "Weekly performance report", sub: "A weekly summary of your listing performance", key: "weeklyReport" },
];

function NotificationsTab() {
  const [settings, setSettings] = useState<Record<string, boolean>>({
    newEnquiry: true, listingApproved: true, reviewReceived: true,
    viewingScheduled: false, weeklyReport: true,
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100">
        <h2 className="text-base font-black text-[#1a1f3c] mb-0.5">Notification Preferences</h2>
        <p className="text-xs text-gray-400">Choose what you want to be notified about</p>
      </div>
      <div className="divide-y divide-gray-50">
        {notifSettings.map((n) => (
          <div key={n.key} className="flex items-center justify-between px-6 py-4">
            <div>
              <p className="text-sm font-bold text-[#1a1f3c]">{n.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{n.sub}</p>
            </div>
            <button
              type="button"
              onClick={() => setSettings((p) => ({ ...p, [n.key]: !p[n.key] }))}
              className={`relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0 ${settings[n.key] ? "bg-[#1a1f3c]" : "bg-gray-200"}`}
            >
              <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${settings[n.key] ? "translate-x-5" : "translate-x-0.5"}`} />
            </button>
          </div>
        ))}
      </div>
      <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
        <button className="bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-colors shadow-md">
          Save Preferences
        </button>
      </div>
    </div>
  );
}

// ─── Security tab ─────────────────────────────────────────────────────────────

function SecurityTab() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100">
        <h2 className="text-base font-black text-[#1a1f3c] mb-0.5">Security</h2>
        <p className="text-xs text-gray-400">Manage your password and account security</p>
      </div>
      <div className="px-6 py-6 space-y-4">
        <Field label="Current Password" value="" placeholder="••••••••" type="password" onChange={() => {}} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="New Password" value="" placeholder="••••••••" type="password" onChange={() => {}} />
          <Field label="Confirm New Password" value="" placeholder="••••••••" type="password" onChange={() => {}} />
        </div>
      </div>
      <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
        <button className="bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-colors shadow-md">
          Update Password
        </button>
      </div>
    </div>
  );
}

// ─── Danger Zone tab ──────────────────────────────────────────────────────────

function DangerZoneTab() {
  return (
    <div className="bg-white rounded-2xl border border-red-100 overflow-hidden">
      <div className="px-6 py-5 border-b border-red-100">
        <h2 className="text-base font-black text-red-600 mb-0.5">Danger Zone</h2>
        <p className="text-xs text-gray-400">Irreversible actions — proceed with caution</p>
      </div>
      <div className="px-6 py-6 space-y-4">
        <div className="flex items-center justify-between p-4 border border-red-100 rounded-xl">
          <div>
            <p className="text-sm font-bold text-[#1a1f3c]">Deactivate account</p>
            <p className="text-xs text-gray-400 mt-0.5">Your listings will be hidden but your data is preserved</p>
          </div>
          <button className="text-sm font-bold border-2 border-red-200 text-red-500 px-4 py-2 rounded-xl hover:bg-red-50 transition-colors flex-shrink-0">
            Deactivate
          </button>
        </div>
        <div className="flex items-center justify-between p-4 border border-red-100 rounded-xl">
          <div>
            <p className="text-sm font-bold text-[#1a1f3c]">Delete account</p>
            <p className="text-xs text-gray-400 mt-0.5">Permanently deletes your account and all associated data</p>
          </div>
          <button className="text-sm font-bold bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition-colors flex-shrink-0">
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Placeholder tabs ─────────────────────────────────────────────────────────

function PlaceholderTab({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
      <p className="text-base font-black text-[#1a1f3c] mb-2">{title}</p>
      <p className="text-sm text-gray-400">This section is coming soon.</p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="p-6 sm:p-8">

      {/* ── Top bar ── */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#1a1f3c]">Settings</h1>
          <p className="text-sm text-gray-400 mt-0.5">Manage your profile, notifications, and account</p>
        </div>
        <button className="relative w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-gray-300 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">3</span>
        </button>
      </div>

      {/* ── Two-column layout ── */}
      <div className="flex flex-col sm:flex-row gap-6 items-start">

        {/* Left — tab list */}
        <div className="w-full sm:w-52 flex-shrink-0 bg-white rounded-2xl border border-gray-100 overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-5 py-3.5 text-sm font-semibold border-b border-gray-50 last:border-0 transition-colors
                ${activeTab === tab
                  ? "text-[#1a1f3c] font-black bg-gray-50"
                  : tab === "Danger zone"
                  ? "text-red-400 hover:bg-red-50"
                  : "text-gray-500 hover:text-[#1a1f3c] hover:bg-gray-50"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right — tab content */}
        <div className="flex-1 min-w-0">
          {activeTab === "Profile" && <ProfileTab />}
          {activeTab === "Notifications" && <NotificationsTab />}
          {activeTab === "Verification" && <PlaceholderTab title="Verification" />}
          {activeTab === "Areas covered" && <PlaceholderTab title="Areas Covered" />}
          {activeTab === "Security" && <SecurityTab />}
          {activeTab === "Danger zone" && <DangerZoneTab />}
        </div>
      </div>
    </div>
  );
}
