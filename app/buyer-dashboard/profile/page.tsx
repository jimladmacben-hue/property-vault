"use client";

import { useState, useRef } from "react";

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe", "Imo",
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa",
  "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
  "Yobe", "Zamfara",
];

const PROPERTY_INTERESTS = [
  "Residential (Buy)", "Residential (Rent)", "Commercial", "Land", "Investment",
  "Short-let / Airbnb", "Diaspora Investment",
];

const BUDGET_RANGES = [
  "Under ₦5M", "₦5M – ₦20M", "₦20M – ₦50M", "₦50M – ₦100M",
  "₦100M – ₦500M", "₦500M+",
];

export default function BuyerProfilePage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const [form, setForm] = useState({
    firstName: "Adaeze",
    lastName: "Okonkwo",
    email: "adaeze.okonkwo@gmail.com",
    phone: "+234 812 345 6789",
    state: "Lagos",
    city: "Lekki",
    bio: "Looking for a comfortable family home in Lagos or Abuja.",
    interests: ["Residential (Buy)", "Land"],
    budget: "₦50M – ₦100M",
    preferredLocations: "Lekki, Victoria Island, Ikoyi",
    occupation: "Business Owner",
    nationality: "Nigerian",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setSaved(false);
  };

  const toggleInterest = (interest: string) => {
    setSaved(false);
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(interest)
        ? f.interests.filter((i) => i !== interest)
        : [...f.interests, interest],
    }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAvatarPreview(url);
    setSaved(false);
  };

  const handleSave = () => {
    // Production: POST to API
    setSaved(true);
  };

  const initials = `${form.firstName[0] || ""}${form.lastName[0] || ""}`;

  return (
    <div className="min-h-full" style={{ background: "#f5f5f0" }}>
      <div className="px-8 pt-8 pb-12 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="text-2xl font-bold mb-1"
            style={{ color: "#1a1f3c", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            My Profile
          </h1>
          <p className="text-sm" style={{ color: "#6b7280" }}>
            Keep your profile up to date so agents can reach you easily
          </p>
        </div>

        {/* Avatar */}
        <div
          className="rounded-2xl p-6 mb-6 flex items-center gap-6"
          style={{ background: "#fff", border: "1px solid #e5e7eb" }}
        >
          <div className="relative">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="avatar"
                className="w-20 h-20 rounded-full object-cover"
              />
            ) : (
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                style={{ background: "#1a1f3c" }}
              >
                {initials}
              </div>
            )}
            <button
              onClick={() => fileRef.current?.click()}
              className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-white shadow"
              style={{ background: "#F5A623" }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
          </div>
          <div>
            <p className="font-bold text-lg" style={{ color: "#1a1f3c" }}>
              {form.firstName} {form.lastName}
            </p>
            <p className="text-sm" style={{ color: "#6b7280" }}>
              {form.email}
            </p>
            <p className="text-xs mt-1 font-semibold" style={{ color: "#F5A623" }}>
              Verified Buyer
            </p>
          </div>
        </div>

        {/* Personal Info */}
        <Section title="Personal Information">
          <div className="grid grid-cols-2 gap-4">
            <Field label="First Name">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="input-field"
              />
            </Field>
            <Field label="Last Name">
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="input-field"
              />
            </Field>
            <Field label="Email Address">
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="input-field"
              />
            </Field>
            <Field label="Phone Number">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="input-field"
              />
            </Field>
            <Field label="Occupation">
              <input
                name="occupation"
                value={form.occupation}
                onChange={handleChange}
                className="input-field"
              />
            </Field>
            <Field label="Nationality">
              <input
                name="nationality"
                value={form.nationality}
                onChange={handleChange}
                className="input-field"
              />
            </Field>
          </div>
          <Field label="About You" className="mt-4">
            <textarea
              name="bio"
              rows={3}
              value={form.bio}
              onChange={handleChange}
              className="input-field resize-none"
              placeholder="Tell agents a little about yourself and what you're looking for..."
            />
          </Field>
        </Section>

        {/* Location */}
        <Section title="Location">
          <div className="grid grid-cols-2 gap-4">
            <Field label="State">
              <select name="state" value={form.state} onChange={handleChange} className="input-field">
                {NIGERIAN_STATES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </Field>
            <Field label="City / Area">
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                className="input-field"
              />
            </Field>
          </div>
        </Section>

        {/* Property Preferences */}
        <Section title="Property Preferences">
          <Field label="What are you looking for?">
            <div className="flex flex-wrap gap-2 mt-1">
              {PROPERTY_INTERESTS.map((interest) => {
                const active = form.interests.includes(interest);
                return (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className="px-3 py-1.5 rounded-full text-sm font-semibold transition-all"
                    style={
                      active
                        ? { background: "#1a1f3c", color: "#fff" }
                        : { background: "#f3f4f6", color: "#6b7280", border: "1px solid #e5e7eb" }
                    }
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </Field>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Field label="Budget Range">
              <select name="budget" value={form.budget} onChange={handleChange} className="input-field">
                {BUDGET_RANGES.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </Field>
            <Field label="Preferred Locations">
              <input
                name="preferredLocations"
                value={form.preferredLocations}
                onChange={handleChange}
                placeholder="e.g. Lekki, VI, Abuja"
                className="input-field"
              />
            </Field>
          </div>
        </Section>

        {/* Save */}
        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={handleSave}
            className="px-8 py-3 rounded-full text-white font-bold text-sm transition-opacity hover:opacity-90"
            style={{ background: "#1a1f3c" }}
          >
            Save Changes
          </button>
          {saved && (
            <span className="text-sm font-semibold" style={{ color: "#065f46" }}>
              ✓ Profile saved successfully
            </span>
          )}
        </div>
      </div>

      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          font-size: 14px;
          color: #1a1f3c;
          background: #f9fafb;
          font-family: 'Nunito Sans', sans-serif;
          outline: none;
          transition: border-color 0.15s;
        }
        .input-field:focus {
          border-color: #F5A623;
        }
      `}</style>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl p-6 mb-5"
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

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        className="block text-xs font-bold mb-1.5"
        style={{ color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
