"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const ContactMap = dynamic(() => import("@/components/contact/ContactMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-60 rounded-xl bg-gray-100 animate-pulse" />
  ),
});

// ─── Contact info items ───────────────────────────────────────────────────────

const contactItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.22 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Phone",
    primary: "+234 (0) 800 123 4567",
    secondary: "Mon–Fri· 8am–6pm WAT",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22,6 12,13 2,6" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "E-mail",
    primary: "hello@propertyvault.ng",
    secondary: "We reply within 24 hours",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.22 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Whatsapp",
    primary: null,
    secondary: null,
    whatsapp: true,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22,6 12,13 2,6" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "E-mail",
    primary: "hello@propertyvault.ng",
    secondary: "We reply within 24 hours",
  },
];

const businessHours = [
  { day: "Monday - Friday", hours: "8:00am – 6:00pm" },
  { day: "Saturday", hours: "9:00am – 2:00pm" },
  { day: "Sunday", hours: "Closed", closed: true },
];

const topics = [
  "Property enquiry",
  "Agent support",
  "Verification help",
  "Report a listing",
  "Partnership",
  "Other",
];

// ─── Input component ──────────────────────────────────────────────────────────

function Input({
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[#1a1f3c] placeholder-gray-400 font-medium focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 transition-all duration-200"
    />
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ContactHelp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    console.log("Contact form submitted:", form);
    // TODO: POST to API
  };

  return (
    <section className="bg-[#f5f5f0] py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* ── Left column ── */}
          <div className="w-full lg:w-[420px] flex-shrink-0 space-y-8">

            {/* Heading */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-[#F5A623]" />
                <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
                  Get in Touch
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1a1f3c] mb-3">
                We&apos;re Here to Help
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Have a question about a listing, need help verifying a property,
                or want to partner with us? Our team responds within 24 hours.
              </p>
            </div>

            {/* Contact info grid */}
            <div className="grid grid-cols-2 gap-5">
              {contactItems.map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-sm font-bold text-[#1a1f3c]">{item.label}</p>
                  {item.whatsapp ? (
                    <a
                      href="https://wa.me/2348001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-full w-fit transition-colors duration-200"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Chat on WhatsApp
                    </a>
                  ) : (
                    <>
                      <p className="text-sm font-semibold text-[#1a1f3c]">{item.primary}</p>
                      <p className="text-xs text-gray-400">{item.secondary}</p>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* OR divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs font-semibold text-gray-400">OR</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Find us here */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#F5A623" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="3" stroke="#F5A623" strokeWidth="1.5" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-[#1a1f3c]">Find us here</span>
              </div>
              <ContactMap />
            </div>

            {/* Business Hours */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#F5A623" strokeWidth="1.5" />
                    <path d="M12 6v6l4 2" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-[#1a1f3c]">Business Hours</span>
              </div>
              <div className="space-y-2.5">
                {businessHours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{h.day}</span>
                    <span className={`font-semibold ${h.closed ? "text-red-400" : "text-[#1a1f3c]"}`}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column — contact form ── */}
          <div className="flex-1 w-full bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Form header */}
            <div className="bg-[#080d28] px-6 sm:px-8 py-6">
              <h3 className="text-xl font-black text-white mb-1">Send us a message</h3>
              <p className="text-sm text-white/60">We&apos;ll get back to you within 24 hours</p>
            </div>

            {/* Form body */}
            <div className="px-6 sm:px-8 py-8 space-y-5">
              {/* First + Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#1a1f3c] mb-2">
                    First name <span className="text-[#F5A623]">*</span>
                  </label>
                  <Input
                    placeholder="First name"
                    value={form.firstName}
                    onChange={(v) => update("firstName", v)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1a1f3c] mb-2">
                    Last name <span className="text-[#F5A623]">*</span>
                  </label>
                  <Input
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={(v) => update("lastName", v)}
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#1a1f3c] mb-2">
                    Email address <span className="text-[#F5A623]">*</span>
                  </label>
                  <Input
                    placeholder="Email address"
                    type="email"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1a1f3c] mb-2">
                    Phone number <span className="text-[#F5A623]">*</span>
                  </label>
                  <Input
                    placeholder="Phone number"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => update("phone", v)}
                  />
                </div>
              </div>

              {/* Topic selector */}
              <div>
                <label className="block text-sm font-bold text-[#1a1f3c] mb-3">
                  What can we help you with? <span className="text-[#F5A623]">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => update("topic", t)}
                      className={`px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200
                        ${form.topic === t
                          ? "border-[#F5A623] bg-amber-50 text-[#1a1f3c]"
                          : "border-gray-200 text-gray-500 hover:border-gray-300 bg-white"
                        }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-[#1a1f3c] mb-2">
                  Message <span className="text-[#F5A623]">*</span>
                </label>
                <textarea
                  placeholder="I have a question about..."
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[#1a1f3c] placeholder-gray-400 font-medium focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-[#1a1f3c] hover:bg-[#2a3060] text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Send a message
              </button>
              <p className="text-center text-xs text-gray-400">
                We respect your privacy. Your information is never shared with third parties.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
