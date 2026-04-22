"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [role, setRole] = useState<"buyer" | "agent" | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate delay
    setTimeout(() => {
      window.location.href = role === "buyer" ? "/buyer-dashboard" : "/agent-dashboard";
    }, 1000);
  };

  if (!role) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-[#1a1f3c]">Join Property Vault</h2>
            <p className="text-gray-400">First, tell us how you&apos;ll be using the platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Buyer Card */}
            <button
              onClick={() => setRole("buyer")}
              className="group p-8 rounded-3xl border-2 border-gray-100 hover:border-[#F5A623] hover:bg-[#F5A623]/5 transition-all text-left flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-white transition-colors">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a1f3c]">I&apos;m a Buyer</h3>
                <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                  Search verified properties, track prices, and find your dream home or investment.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-bold text-[#F5A623] opacity-0 group-hover:opacity-100 transition-opacity">
                Create buyer account <span>→</span>
              </div>
            </button>

            {/* Agent Card */}
            <button
              onClick={() => setRole("agent")}
              className="group p-8 rounded-3xl border-2 border-gray-100 hover:border-[#1a1f3c] hover:bg-[#1a1f3c]/5 transition-all text-left flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1a1f3c]/10 flex items-center justify-center text-[#1a1f3c] group-hover:bg-[#1a1f3c] group-hover:text-white transition-colors">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a1f3c]">I&apos;m an Agent</h3>
                <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                  List properties, manage enquiries, and reach thousands of verified buyers.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-bold text-[#1a1f3c] opacity-0 group-hover:opacity-100 transition-opacity">
                Create agent account <span>→</span>
              </div>
            </button>
          </div>

          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-[#1a1f3c] font-bold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Header */}
        <div className="text-center">
          <button
            onClick={() => setRole(null)}
            className="text-xs font-bold text-gray-400 hover:text-[#1a1f3c] transition-colors mb-4 inline-flex items-center gap-1"
          >
            <span>←</span> Back to role selection
          </button>
          <h2 className="text-2xl font-black text-[#1a1f3c]">
            {role === "buyer" ? "Buyer Registration" : "Agent Registration"}
          </h2>
          <p className="mt-2 text-sm text-gray-400">Join Property Vault as {role === "buyer" ? "a buyer" : "an agent"}</p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleRegister}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#1a1f3c] uppercase tracking-wider">First Name</label>
              <input
                type="text"
                required
                className="w-full px-5 py-3 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all"
                placeholder="Jane"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#1a1f3c] uppercase tracking-wider">Last Name</label>
              <input
                type="text"
                required
                className="w-full px-5 py-3 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#1a1f3c] uppercase tracking-wider">Email Address</label>
            <input
              type="email"
              required
              className="w-full px-5 py-3 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all"
              placeholder="jane@example.com"
            />
          </div>

          {role === "agent" && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#1a1f3c] uppercase tracking-wider">Company Name</label>
              <input
                type="text"
                required
                className="w-full px-5 py-3 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all"
                placeholder="Lagos Prime Realty"
              />
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#1a1f3c] uppercase tracking-wider">Password</label>
            <input
              type="password"
              required
              className="w-full px-5 py-3 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-start gap-2 py-2">
            <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-gray-300 text-[#1a1f3c] focus:ring-[#1a1f3c]" />
            <label className="text-xs text-gray-400 leading-relaxed">
              I agree to the <Link href="#" className="text-[#1a1f3c] font-bold">Terms of Service</Link> and <Link href="#" className="text-[#1a1f3c] font-bold">Privacy Policy</Link>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#1a1f3c] text-white py-4 rounded-2xl font-bold text-sm hover:bg-[#2a3060] transition-all shadow-xl shadow-[#1a1f3c]/10 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Create Account"
            )}
          </button>

          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-[#1a1f3c] font-bold hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
