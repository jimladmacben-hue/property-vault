"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Property", href: "/properties" },
  { label: "Invest", href: "/invest" },
  { label: "Agents", href: "/agents" },
  { label: "About", href: "/about" },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-10 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between border border-white rounded-[50px] px-6 py-2 bg-white/10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/images/logo-white.png"
            alt="Property Vault Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#ffffff] text-sm font-medium hover:text-[#F5A623] transition-colors flex items-center gap-1"
            >
              {item.label}
              {item.label === "Property" && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <Link
            href="/login"
            className="text-[#ffffff] text-sm font-medium hover:text-[#F5A623] transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/list-property"
            className="bg-[#1a1f3c] text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-1.5 hover:bg-[#2d3561] transition-colors"
          >
            <span className="text-base leading-none">+</span> List property
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#1a1f3c]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-white rounded-xl shadow-lg p-4 flex flex-col gap-3">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#1a1f3c] text-sm font-medium py-2 border-b border-gray-100 hover:text-[#F5A623] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-1">
            <Link
              href="/login"
              className="text-[#1a1f3c] text-sm font-medium hover:text-[#F5A623] transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/list-property"
              className="bg-[#1a1f3c] text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-[#2d3561] transition-colors"
            >
              + List property
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
