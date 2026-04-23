"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const isComplete = otp.every((v) => v !== "");

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col items-center justify-center p-6">
      <div className="fixed top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px] -z-10" />
      
      <div className="w-full max-w-[440px]">
        <Link href="/" className="flex items-center gap-2 mb-12 justify-center">
          <div className="w-10 h-10 bg-[#1a1f3c] rounded-xl flex items-center justify-center">
            <span className="text-[#F5A623] text-xl font-black italic">PV</span>
          </div>
          <span className="text-2xl font-black text-[#1a1f3c] tracking-tight">PropertyVault</span>
        </Link>

        <div className="bg-white rounded-[40px] p-10 shadow-[0_20px_50px_rgba(26,31,60,0.05)] border border-gray-50 backdrop-blur-xl relative">
          <div className="mb-10">
            <h1 className="text-3xl font-black text-[#1a1f3c] mb-3 text-center">Verify Identity</h1>
            <p className="text-sm text-gray-400 leading-relaxed text-center px-4">
              We&apos;ve sent a 6-digit verification code to your email. Enter it below to proceed.
            </p>
          </div>

          <div className="flex justify-between gap-2 mb-10">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => { inputs.current[index] = el; }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-black text-[#1a1f3c] bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#F5A623] focus:bg-white focus:ring-4 focus:ring-[#F5A623]/10 transition-all outline-none"
              />
            ))}
          </div>

          <button
            onClick={() => router.push("/reset-password")}
            disabled={!isComplete}
            className={`w-full font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg ${
              isComplete 
                ? "bg-[#1a1f3c] hover:bg-[#2a3060] text-white shadow-blue-900/10" 
                : "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"
            }`}
          >
            Verify Code
          </button>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              Didn&apos;t receive the code?{" "}
              <button className="text-[#1a1f3c] font-bold hover:underline">
                Resend in 0:59
              </button>
            </p>
          </div>
        </div>

        <Link href="/forgot-password" className="flex items-center justify-center gap-2 mt-10 text-sm font-bold text-gray-400 hover:text-[#1a1f3c] transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Email
        </Link>
      </div>
    </div>
  );
}
