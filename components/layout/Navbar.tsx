"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-10 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between border border-white rounded-[50px] px-6 py-2 bg-white/10">
        {/* Logo */}
        <div className="flex items-center gap-2">
        <img
    src="/images/logo.png"
    alt="Property Vault Logo"
    className="w-full h-full object-contain"
  />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-20">
          {["Property", "Invest", "Agents", "About", "Contact us"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-[#1a1f3c] text-sm font-medium hover:text-[#F5A623] transition-colors flex items-center gap-1"
              >
                {item}
                {item === "Property" && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="mt-0.5"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="#1a1f3c"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>
            )
          )}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-[#1a1f3c] text-sm font-medium hover:text-[#F5A623] transition-colors"
          >
            Log in
          </a>
          <a
            href="#"
            className="bg-[#1a1f3c] text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-1.5 hover:bg-[#2d3561] transition-colors"
          >
            <span className="text-base leading-none">+</span> List property
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#1a1f3c]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-white rounded-xl shadow-lg p-4 flex flex-col gap-3">
          {["Property", "Invest", "Agents", "About", "Contact us"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-[#1a1f3c] text-sm font-medium py-1 border-b border-gray-100"
              >
                {item}
              </a>
            )
          )}
          <div className="flex gap-3 pt-1">
            <a href="#" className="text-[#1a1f3c] text-sm font-medium">
              Log in
            </a>
            <a
              href="#"
              className="bg-[#1a1f3c] text-white text-sm font-medium px-4 py-1.5 rounded-full"
            >
              + List property
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
