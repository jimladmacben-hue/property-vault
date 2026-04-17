"use client";

import { useState } from "react";

type Tab = "notifications" | "privacy" | "security" | "danger";

const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
  {
    key: "notifications",
    label: "Notifications",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
  },
  {
    key: "privacy",
    label: "Privacy",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    key: "security",
    label: "Security",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    key: "danger",
    label: "Danger Zone",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
      style={{ background: checked ? "#1a1f3c" : "#d1d5db" }}
    >
      <span
        className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow"
        style={{ transform: checked ? "translateX(22px)" : "translateX(2px)" }}
      />
    </button>
  );
}

function SettingRow({
  label,
  description,
  children,
}: {
  label: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between py-4" style={{ borderBottom: "1px solid #f3f4f6" }}>
      <div className="flex-1 mr-6">
        <p className="text-sm font-semibold" style={{ color: "#1a1f3c" }}>{label}</p>
        {description && (
          <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>{description}</p>
        )}
      </div>
      {children}
    </div>
  );
}

export default function BuyerSettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("notifications");

  const [notifSettings, setNotifSettings] = useState({
    newListingAlerts: true,
    priceDropAlerts: true,
    agentReplies: true,
    viewingReminders: true,
    marketUpdates: false,
    promotionalEmails: false,
    smsNotifications: true,
    pushNotifications: false,
  });

  const [privacySettings, setPrivacySettings] = useState({
    showProfileToAgents: true,
    showContactToAgents: false,
    allowDataForRecommendations: true,
    allowAnonymousAnalytics: true,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    next: "",
    confirm: "",
  });
  const [pwSaved, setPwSaved] = useState(false);
  const [pwError, setPwError] = useState("");

  const [showDeactivate, setShowDeactivate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const toggleNotif = (key: keyof typeof notifSettings) =>
    setNotifSettings((s) => ({ ...s, [key]: !s[key] }));

  const togglePrivacy = (key: keyof typeof privacySettings) =>
    setPrivacySettings((s) => ({ ...s, [key]: !s[key] }));

  const handlePasswordSave = () => {
    setPwError("");
    if (!passwords.current) return setPwError("Enter your current password.");
    if (passwords.next.length < 8) return setPwError("New password must be at least 8 characters.");
    if (passwords.next !== passwords.confirm) return setPwError("Passwords do not match.");
    setPwSaved(true);
    setPasswords({ current: "", next: "", confirm: "" });
  };

  return (
    <div className="min-h-full" style={{ background: "#f5f5f0" }}>
      <div className="px-8 pt-8 pb-12 max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="text-2xl font-bold mb-1"
            style={{ color: "#1a1f3c", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Settings
          </h1>
          <p className="text-sm" style={{ color: "#6b7280" }}>
            Manage your account preferences and privacy
          </p>
        </div>

        {/* Tab nav */}
        <div className="flex gap-1 mb-6 p-1 rounded-xl" style={{ background: "#fff", border: "1px solid #e5e7eb" }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-all"
              style={
                activeTab === tab.key
                  ? { background: "#1a1f3c", color: "#fff" }
                  : { color: "#6b7280" }
              }
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Notifications */}
        {activeTab === "notifications" && (
          <Card title="Notification Preferences">
            <SettingRow
              label="New listing alerts"
              description="Get notified when new properties matching your alerts are listed"
            >
              <Toggle checked={notifSettings.newListingAlerts} onChange={() => toggleNotif("newListingAlerts")} />
            </SettingRow>
            <SettingRow
              label="Price drop alerts"
              description="Know when prices drop on your saved properties"
            >
              <Toggle checked={notifSettings.priceDropAlerts} onChange={() => toggleNotif("priceDropAlerts")} />
            </SettingRow>
            <SettingRow
              label="Agent replies"
              description="Receive notifications when an agent responds to your enquiry"
            >
              <Toggle checked={notifSettings.agentReplies} onChange={() => toggleNotif("agentReplies")} />
            </SettingRow>
            <SettingRow
              label="Viewing reminders"
              description="Reminders 24hrs and 1hr before a scheduled viewing"
            >
              <Toggle checked={notifSettings.viewingReminders} onChange={() => toggleNotif("viewingReminders")} />
            </SettingRow>
            <SettingRow
              label="Market updates"
              description="Weekly digest of Lagos real estate market trends"
            >
              <Toggle checked={notifSettings.marketUpdates} onChange={() => toggleNotif("marketUpdates")} />
            </SettingRow>
            <SettingRow
              label="Promotional emails"
              description="Offers, features, and Property Vault news"
            >
              <Toggle checked={notifSettings.promotionalEmails} onChange={() => toggleNotif("promotionalEmails")} />
            </SettingRow>
            <SettingRow
              label="SMS notifications"
              description="Text message alerts for urgent updates"
            >
              <Toggle checked={notifSettings.smsNotifications} onChange={() => toggleNotif("smsNotifications")} />
            </SettingRow>
            <SettingRow
              label="Push notifications"
              description="Browser push notifications while using Property Vault"
            >
              <Toggle checked={notifSettings.pushNotifications} onChange={() => toggleNotif("pushNotifications")} />
            </SettingRow>
            <div className="pt-4">
              <button
                className="px-6 py-2.5 rounded-full text-white text-sm font-bold"
                style={{ background: "#1a1f3c" }}
              >
                Save Preferences
              </button>
            </div>
          </Card>
        )}

        {/* Privacy */}
        {activeTab === "privacy" && (
          <Card title="Privacy & Visibility">
            <SettingRow
              label="Show profile to agents"
              description="Agents can see your name and preferences when you enquire"
            >
              <Toggle checked={privacySettings.showProfileToAgents} onChange={() => togglePrivacy("showProfileToAgents")} />
            </SettingRow>
            <SettingRow
              label="Share contact with agents"
              description="Allow agents to see your phone number from your profile"
            >
              <Toggle checked={privacySettings.showContactToAgents} onChange={() => togglePrivacy("showContactToAgents")} />
            </SettingRow>
            <SettingRow
              label="Personalised recommendations"
              description="Allow us to use your search history to improve property suggestions"
            >
              <Toggle checked={privacySettings.allowDataForRecommendations} onChange={() => togglePrivacy("allowDataForRecommendations")} />
            </SettingRow>
            <SettingRow
              label="Anonymous usage analytics"
              description="Help us improve Property Vault with anonymous usage data"
            >
              <Toggle checked={privacySettings.allowAnonymousAnalytics} onChange={() => togglePrivacy("allowAnonymousAnalytics")} />
            </SettingRow>
            <div className="pt-4">
              <button
                className="px-6 py-2.5 rounded-full text-white text-sm font-bold"
                style={{ background: "#1a1f3c" }}
              >
                Save Privacy Settings
              </button>
            </div>
          </Card>
        )}

        {/* Security */}
        {activeTab === "security" && (
          <Card title="Security">
            <div className="mb-6">
              <h3 className="text-sm font-bold mb-4" style={{ color: "#1a1f3c" }}>
                Change Password
              </h3>
              <div className="flex flex-col gap-3">
                <PasswordField
                  label="Current Password"
                  value={passwords.current}
                  onChange={(v) => { setPasswords((p) => ({ ...p, current: v })); setPwSaved(false); }}
                />
                <PasswordField
                  label="New Password"
                  value={passwords.next}
                  onChange={(v) => { setPasswords((p) => ({ ...p, next: v })); setPwSaved(false); }}
                />
                <PasswordField
                  label="Confirm New Password"
                  value={passwords.confirm}
                  onChange={(v) => { setPasswords((p) => ({ ...p, confirm: v })); setPwSaved(false); }}
                />
              </div>
              {pwError && (
                <p className="text-xs mt-2 font-semibold" style={{ color: "#dc2626" }}>{pwError}</p>
              )}
              {pwSaved && (
                <p className="text-xs mt-2 font-semibold" style={{ color: "#065f46" }}>✓ Password updated successfully</p>
              )}
              <button
                onClick={handlePasswordSave}
                className="mt-4 px-6 py-2.5 rounded-full text-white text-sm font-bold"
                style={{ background: "#1a1f3c" }}
              >
                Update Password
              </button>
            </div>

            <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: "24px" }}>
              <h3 className="text-sm font-bold mb-1" style={{ color: "#1a1f3c" }}>
                Active Sessions
              </h3>
              <p className="text-xs mb-4" style={{ color: "#6b7280" }}>
                Devices currently signed into your account
              </p>
              {[
                { device: "Chrome on MacOS", location: "Lagos, Nigeria", current: true, time: "Active now" },
                { device: "Safari on iPhone", location: "Lagos, Nigeria", current: false, time: "2 days ago" },
              ].map((session, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-3"
                  style={{ borderBottom: i < 1 ? "1px solid #f3f4f6" : "none" }}
                >
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#1a1f3c" }}>
                      {session.device}
                      {session.current && (
                        <span
                          className="ml-2 text-xs px-2 py-0.5 rounded-full font-semibold"
                          style={{ background: "#d1fae5", color: "#065f46" }}
                        >
                          This device
                        </span>
                      )}
                    </p>
                    <p className="text-xs" style={{ color: "#9ca3af" }}>
                      {session.location} · {session.time}
                    </p>
                  </div>
                  {!session.current && (
                    <button
                      className="text-xs font-semibold"
                      style={{ color: "#dc2626" }}
                    >
                      Sign out
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Danger Zone */}
        {activeTab === "danger" && (
          <Card title="Danger Zone">
            <div
              className="rounded-xl p-5 mb-4"
              style={{ background: "#fef2f2", border: "1px solid #fecaca" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold" style={{ color: "#991b1b" }}>
                    Deactivate Account
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#b91c1c" }}>
                    Temporarily disable your account. You can reactivate it any time by logging in.
                  </p>
                </div>
                <button
                  onClick={() => setShowDeactivate(!showDeactivate)}
                  className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold"
                  style={{
                    background: showDeactivate ? "#991b1b" : "#fff",
                    color: showDeactivate ? "#fff" : "#991b1b",
                    border: "1px solid #fca5a5",
                  }}
                >
                  {showDeactivate ? "Confirm Deactivation" : "Deactivate"}
                </button>
              </div>
              {showDeactivate && (
                <p className="text-xs mt-3 font-semibold" style={{ color: "#991b1b" }}>
                  Are you sure? Click "Confirm Deactivation" to proceed, or click away to cancel.
                </p>
              )}
            </div>

            <div
              className="rounded-xl p-5"
              style={{ background: "#fef2f2", border: "1px solid #fecaca" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold" style={{ color: "#991b1b" }}>
                    Delete Account
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#b91c1c" }}>
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                </div>
                <button
                  onClick={() => setShowDelete(!showDelete)}
                  className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold text-white"
                  style={{ background: "#dc2626" }}
                >
                  Delete Account
                </button>
              </div>
              {showDelete && (
                <div className="mt-4">
                  <p className="text-xs font-bold mb-2" style={{ color: "#991b1b" }}>
                    Type DELETE to confirm:
                  </p>
                  <input
                    type="text"
                    placeholder="DELETE"
                    className="w-full px-3 py-2 text-sm rounded-lg"
                    style={{
                      border: "1px solid #fca5a5",
                      background: "#fff",
                      color: "#1a1f3c",
                      fontFamily: "'Nunito Sans', sans-serif",
                      outline: "none",
                    }}
                  />
                  <p className="text-xs mt-2" style={{ color: "#9ca3af" }}>
                    All your saved properties, enquiries, and search alerts will be permanently removed.
                  </p>
                </div>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: "#fff", border: "1px solid #e5e7eb" }}
    >
      <h2
        className="text-base font-bold mb-4"
        style={{ color: "#1a1f3c", fontFamily: "'Nunito Sans', sans-serif" }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function PasswordField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <label
        className="block text-xs font-bold mb-1"
        style={{ color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em" }}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2.5 text-sm rounded-xl pr-10"
          style={{
            border: "1px solid #e5e7eb",
            background: "#f9fafb",
            color: "#1a1f3c",
            fontFamily: "'Nunito Sans', sans-serif",
            outline: "none",
          }}
        />
        <button
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          tabIndex={-1}
        >
          {show ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
