"use client";

import Link from "next/link";

const benefits = [
  "Takes about 7 minutes",
  "Your draft saves automatically",
  "We review within 24-48 hours",
  "You'll be notified when live",
];

const listingTypes = [
  {
    id: "For sale",
    label: "For sale",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" fill="#F5A623" opacity="0.2" stroke="#F5A623" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 21V12h6v9" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "For rent",
    label: "For rent",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" stroke="#9b6f1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "Shortlet",
    label: "Shortlet",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#6b7280" strokeWidth="1.5" fill="none" />
        <path d="M8 12h8M12 8v8" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "Land",
    label: "Land",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8 2 5 5.5 5 9c0 2.5 1.5 5 3 7l4 5 4-5c1.5-2 3-4.5 3-7 0-3.5-3-7-7-7z" fill="#16a34a" opacity="0.2" stroke="#16a34a" strokeWidth="1.5" />
        <path d="M12 7c0 2-2 4-2 4s2-1 2 1 2-3 2-5-2-2-2-2z" fill="#16a34a" opacity="0.6" />
      </svg>
    ),
  },
];

interface GetStartedProps {
  listingType: string;
  setListingType: (type: string) => void;
  onGetStarted: () => void;
}

export default function GetStarted({
  listingType,
  setListingType,
  onGetStarted,
}: GetStartedProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Card */}
      <div className="w-full max-w-[480px] bg-white rounded-2xl p-8 shadow-sm">

        {/* House icon */}
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" fill="#F5A623" opacity="0.3" stroke="#F5A623" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M9 21V12h6v9" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="10" y="15" width="4" height="6" rx="0.5" fill="#F5A623" opacity="0.4" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-[28px] font-extrabold text-[#1a1f3c] text-center mb-2">
          List your Property
        </h1>
        <p className="text-[14px] text-gray-500 text-center leading-relaxed mb-6">
          Reach thousands of verified buyers and investors across Nigeria.
        </p>

        {/* Benefits */}
        <div className="flex flex-col gap-3 mb-7">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-2.5"
            >
              <div className="w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l2.5 2.5L10 3.5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[13.5px] text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>

        {/* What are you listing */}
        <p className="text-[12.5px] text-gray-500 text-center mb-3">
          What are you listing?
        </p>
        <div className="flex items-center justify-center gap-3 mb-6">
          {listingTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setListingType(type.id)}
              className={`flex flex-col items-center gap-1.5 w-[90px] py-3 px-2 rounded-xl border-2 transition-all ${
                listingType === type.id
                  ? "border-[#F5A623] bg-amber-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {type.icon}
              <span className="text-[11.5px] font-medium text-gray-700">
                {type.label}
              </span>
            </button>
          ))}
        </div>

        {/* Get started button */}
        <button
          onClick={onGetStarted}
          className="w-full bg-[#1a1f3c] hover:bg-[#2d3561] text-white text-[15px] font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mb-3"
        >
          Get started →
        </button>

        {/* Continue draft */}
        <p className="text-center text-[13px] text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
          Continue a saved draft instead
        </p>
      </div>

      {/* Go back */}
      <div className="mt-8 self-start w-full max-w-[480px]">
        <Link
          href="/"
          className="flex items-center gap-2 text-[13.5px] font-medium text-gray-600 hover:text-[#1a1f3c] transition-colors"
        >
          ← Go back
        </Link>
      </div>
    </div>
  );
}
