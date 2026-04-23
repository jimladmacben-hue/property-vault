"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate backend response with user role
    setTimeout(() => {
      // In a real app, this would come from the backend API response
      // For demonstration, we'll simulate an Agent role by default or based on email
      const email = (e.target as any).email.value;
      const role = email.includes("agent") ? "agent" : "buyer";
      
      window.location.href = role === "buyer" ? "/buyer-dashboard" : "/agent-dashboard";
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-[#1a1f3c]">Welcome back</h2>
          <p className="text-gray-400">Please enter your credentials to sign in</p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#1a1f3c] uppercase tracking-wider">Email Address</label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all"
                placeholder="name@company.com"
              />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#1a1f3c] uppercase tracking-wider">Password</label>
                <Link href="/forgot-password" className="text-xs font-bold text-[#1a1f3c] hover:underline">Forgot password?</Link>
              </div>
              <input
                name="password"
                type="password"
                required
                className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1a1f3c] focus:ring-1 focus:ring-[#1a1f3c] outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#1a1f3c] text-white py-4 rounded-2xl font-bold text-sm hover:bg-[#2a3060] transition-all shadow-xl shadow-[#1a1f3c]/10 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Sign In"
            )}
          </button>

          <p className="text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-[#1a1f3c] font-bold hover:underline">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
