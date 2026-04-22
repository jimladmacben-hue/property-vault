"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Property", href: "/properties" },
  { label: "Invest", href: "/invest" },
  { label: "Agents", href: "/agents" },
  { label: "About", href: "/about" },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Determine if we should use the "light" navbar (dark text on light/white background)
  // Most pages except the home page (which has a dark hero) should use this.
  // Home page also uses light navbar when scrolled.
  const isLight = pathname !== "/" || scrolled;

  const textColor = isLight ? "text-[#1a1f3c]" : "text-white";
  const logoSrc = isLight ? "/images/logo.png" : "/images/logo-white.png";
  const pillBg = isLight ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white/10 backdrop-blur-sm";
  const pillBorder = isLight ? "border-gray-200" : "border-white/20";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-10 py-5 transition-all duration-300">
      <div className={`max-w-7xl mx-auto flex items-center justify-between border ${pillBorder} rounded-[50px] px-6 py-2.5 ${pillBg} transition-all duration-300`}>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <img
            src={logoSrc}
            alt="Property Vault Logo"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${textColor} text-[14.5px] font-medium hover:text-[#F5A623] transition-colors flex items-center gap-1`}
            >
              {item.label}
              {item.label === "Property" && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5 opacity-60">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6 flex-shrink-0">
          <Link
            href="/login"
            className={`${textColor} text-[14.5px] font-medium hover:text-[#F5A623] transition-colors`}
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="bg-[#050b2c] text-white text-[14.5px] font-semibold px-6 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-[#0a1242] transition-all shadow-sm"
          >
            <span className="text-lg leading-none">+</span> List property
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden ${textColor}`}
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
        <div className="md:hidden mt-3 bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 border border-gray-100 animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#1a1f3c] text-base font-bold py-2 border-b border-gray-50 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            <Link
              href="/login"
              className="text-[#1a1f3c] text-base font-bold py-2"
              onClick={() => setMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="bg-[#050b2c] text-white text-center py-4 rounded-xl font-bold"
              onClick={() => setMenuOpen(false)}
            >
              List property
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
