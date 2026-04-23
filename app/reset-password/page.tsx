"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col items-center justify-center p-6">
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-100/30 rounded-full blur-[120px] -z-10" />
      
      <div className="w-full max-w-[440px]">
        <Link href="/" className="flex items-center gap-2 mb-12 justify-center">
          <div className="w-10 h-10 bg-[#1a1f3c] rounded-xl flex items-center justify-center">
            <span className="text-[#F5A623] text-xl font-black italic">PV</span>
          </div>
          <span className="text-2xl font-black text-[#1a1f3c] tracking-tight">PropertyVault</span>
        </Link>

        <div className="bg-white rounded-[40px] p-10 shadow-[0_20px_50px_rgba(26,31,60,0.05)] border border-gray-50 backdrop-blur-xl relative">
          {showSuccess && (
            <div className="absolute inset-0 bg-white/95 rounded-[40px] z-50 flex flex-col items-center justify-center p-10 text-center animate-in fade-in duration-300">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-[#1a1f3c] mb-2">Password Reset!</h3>
              <p className="text-sm text-gray-400">Redirecting you to login...</p>
            </div>
          )}

          <div className="mb-8">
            <h1 className="text-3xl font-black text-[#1a1f3c] mb-3">New Password</h1>
            <p className="text-sm text-gray-400 leading-relaxed">
              Create a strong password that you can remember. Security first!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2.5 ml-1">New Password</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-semibold text-[#1a1f3c] placeholder-gray-400 focus:ring-2 focus:ring-[#F5A623] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2.5 ml-1">Confirm Password</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </span>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat new password"
                  className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-semibold text-[#1a1f3c] placeholder-gray-400 focus:ring-2 focus:ring-[#F5A623] transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1a1f3c] hover:bg-[#2a3060] text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-900/10 transition-all"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
