"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col items-center justify-center p-6">
      {/* Background Orbs */}
      <div className="fixed top-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-100/50 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px] -z-10" />

      <div className="w-full max-w-[440px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mb-12 justify-center">
          <div className="w-10 h-10 bg-[#1a1f3c] rounded-xl flex items-center justify-center">
            <span className="text-[#F5A623] text-xl font-black italic">PV</span>
          </div>
          <span className="text-2xl font-black text-[#1a1f3c] tracking-tight">PropertyVault</span>
        </Link>

        <div className="bg-white rounded-[40px] p-10 shadow-[0_20px_50px_rgba(26,31,60,0.05)] border border-gray-50 backdrop-blur-xl relative overflow-hidden">
          {/* Progress Line */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-50">
            <div className={`h-full bg-[#F5A623] transition-all duration-700 ${isSent ? 'w-full' : 'w-1/3'}`} />
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-black text-[#1a1f3c] mb-3">Forgot password?</h1>
            <p className="text-sm text-gray-400 leading-relaxed">
              No worries! Enter your email address below and we&apos;ll send you a code to reset it.
            </p>
          </div>

          {!isSent ? (
            <form onSubmit={(e) => { e.preventDefault(); setIsSent(true); }} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2.5 ml-1">Email Address</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. tunde@example.com"
                    className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-semibold text-[#1a1f3c] placeholder-gray-400 focus:ring-2 focus:ring-[#F5A623] transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a1f3c] hover:bg-[#2a3060] text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-900/10 transition-all flex items-center justify-center gap-2 group"
              >
                Send Reset Code
                <svg className="group-hover:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          ) : (
            <div className="text-center animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-sm font-bold text-[#1a1f3c] mb-2">Check your inbox!</p>
              <p className="text-xs text-gray-400 leading-relaxed mb-8">
                We&apos;ve sent a password reset code to <br />
                <span className="text-[#1a1f3c] font-bold">{email}</span>
              </p>
              <Link
                href="/verify-otp"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#F5A623] hover:text-[#e09510] transition-colors"
              >
                Enter OTP Code →
              </Link>
            </div>
          )}
        </div>

        <p className="text-center mt-10 text-sm text-gray-400">
          Remember your password?{" "}
          <Link href="/login" className="text-[#1a1f3c] font-bold hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}
