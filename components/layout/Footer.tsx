"use client";

import { useState } from "react";

const footerLinks = {
  Company: ["About us", "How it works", "Blog", "Careers", "Press", "Contact us"],
  Property: ["Buy property", "Rent property", "Land for sale", "Commercial", "Shortlet", "Investment"],
  Agents: ["Register as agent", "Agent Login", "Subscription plans", "Verify my account", "Agent directory", "List a Property"],
  Support: ["Help centre", "FAQ", "Report a listing", "Trust & Safety", "Privacy policy", "Terms of service"],
};

const socialIcons = [
  {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    label: "LinkedIn",
    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
  },
  {
    label: "Twitter",
    path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
  },
  {
    label: "Instagram",
    path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11A1.5 1.5 0 0119 8v8a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 015 16V8a1.5 1.5 0 011.5-1.5z",
  },
  {
    label: "YouTube",
    path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full bg-[#0d1230] text-white">
      <div className="max-w-8xl mx-auto px-6 pt-16 pb-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Col 1 — Brand */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7.5V16.5L12 22L21 16.5V7.5L12 2Z" stroke="white" strokeWidth="1.5" fill="none" />
                  <path d="M12 7L8 9.5V14.5L12 17L16 14.5V9.5L12 7Z" fill="white" opacity="0.7" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-bold text-white tracking-widest uppercase">Property</span>
                <span className="text-[10px] font-bold text-white tracking-widest uppercase">Vault</span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-[12.5px] text-white/50 leading-relaxed mb-5 max-w-[180px]">
              Nigeria's most trusted property discovery and investment platform.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 mb-7">
              {socialIcons.map((icon) => (
                <a
                  key={icon.label}
                  href="#"
                  aria-label={icon.label}
                  className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <p className="text-[11.5px] text-white/60 mb-3 leading-relaxed">
              Stay updated with our services
            </p>
            <div className="flex items-center gap-0 bg-white/10 rounded-md overflow-hidden pl-3 border border-white/10">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-[12px] text-white placeholder:text-white/35 flex-1 outline-none py-2.5"
              />
              <button className="bg-[#F5A623] text-[#1a0f00] text-[12px] font-bold px-4 py-2.5 flex-shrink-0 hover:bg-[#e09615] transition-colors h-full">
                Subscribe
              </button>
            </div>
          </div>

          {/* Cols 2-5 — Nav Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[13.5px] font-bold text-white mb-5">{heading}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[12.5px] text-white/50 hover:text-white transition-colors leading-snug"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11.5px] text-white/35">
            © 2025 Property Vault Nigeria Ltd. All rights reserved.
          </p>

          {/* Verified badge */}
          <div className="flex items-center gap-1.5 text-white/35 text-[11.5px]">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4 5v6c0 5.25 3.5 10.15 8 11.35C16.5 21.15 20 16.25 20 11V5l-8-3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All listings verified by Property vault
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-4">
            {["Privacy", "Terms", "Cookies", "Sitemaps"].map((item) => (
              <a key={item} href="#" className="text-[11.5px] text-white/35 hover:text-white/70 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
