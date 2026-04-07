"use client";

import { useState } from "react";
import {
  Home,
  KeyRound,
  CalendarDays,
  Layers,
  ChevronDown,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Step1Data {
  listingPurpose: "for-sale" | "for-rent" | "shortlet" | "land" | "";
  listingHeadline: string;
  propertyType: string;
}

interface Step1Props {
  data: Step1Data;
  onChange: (data: Step1Data) => void;
  onNext: () => void;
  onBack: () => void;
  onSaveDraft?: () => void;
}

// ─── Progress Indicator ───────────────────────────────────────────────────────

const steps = [
  { number: 1, label: "Info" },
  { number: 2, label: "Location" },
  { number: 3, label: "Media" },
  { number: 4, label: "Review" },
];

function StepProgressBar({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((step, index) => {
        const isActive = step.number === currentStep;
        const isCompleted = step.number < currentStep;

        return (
          <div key={step.number} className="flex items-center">
            {/* Circle + Label */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#1a1f3c] border-[#1a1f3c] text-white"
                      : isCompleted
                      ? "bg-[#1a1f3c] border-[#1a1f3c] text-white"
                      : "bg-white border-gray-300 text-gray-400"
                  }`}
              >
                {step.number}
              </div>
              <span
                className={`text-xs font-semibold tracking-wide ${
                  isActive
                    ? "text-[#1a1f3c]"
                    : isCompleted
                    ? "text-[#1a1f3c]"
                    : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={`w-16 sm:w-24 h-px mx-2 mb-5 transition-all duration-300 ${
                  isCompleted ? "bg-[#1a1f3c]" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Listing Purpose Card ─────────────────────────────────────────────────────

const purposeOptions = [
  {
    value: "for-sale",
    label: "For sale",
    icon: <Home size={28} className="text-[#F5A623]" />,
  },
  {
    value: "for-rent",
    label: "For rent",
    icon: <KeyRound size={28} className="text-[#F5A623]" />,
  },
  {
    value: "shortlet",
    label: "Shortlet",
    icon: <CalendarDays size={28} className="text-[#F5A623]" />,
  },
  {
    value: "land",
    label: "Land",
    icon: <Layers size={28} className="text-[#F5A623]" />,
  },
] as const;

// ─── Property Type Options ────────────────────────────────────────────────────

const propertyTypes = [
  "Apartment / Flat",
  "Detached House",
  "Semi-Detached House",
  "Terraced House",
  "Duplex",
  "Bungalow",
  "Mansion",
  "Penthouse",
  "Studio",
  "Commercial Property",
  "Warehouse",
  "Office Space",
  "Land",
  "Other",
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Step1({
  data,
  onChange,
  onNext,
  onBack,
  onSaveDraft,
}: Step1Props) {
  const [typeOpen, setTypeOpen] = useState(false);

  const update = (fields: Partial<Step1Data>) =>
    onChange({ ...data, ...fields });

  const canContinue =
    data.listingPurpose !== "" &&
    data.listingHeadline.trim().length > 0 &&
    data.propertyType !== "";

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex flex-col">
      {/* ── Main Content ── */}
      <main className="flex-1 pt-28 pb-32 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <StepProgressBar currentStep={1} />

          {/* Heading */}
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
              Step 1 of 4
            </p>
            <h1 className="text-3xl sm:text-4xl font-black text-[#1a1f3c] mb-3">
              Property Basics
            </h1>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Let&apos;s begin by defining the core identity of your listing.
              <br className="hidden sm:block" />
              High-end accuracy starts here.
            </p>
          </div>

          {/* ── Listing Details Card ── */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-8">
            {/* Card Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <span className="text-2xl">📋</span>
              <h2 className="text-xl font-bold text-[#1a1f3c]">
                Listing details
              </h2>
            </div>

            {/* ── Listing Purpose ── */}
            <div>
              <label className="block text-sm font-bold text-[#1a1f3c] mb-3">
                Listing purpose{" "}
                <span className="text-[#F5A623]">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {purposeOptions.map((opt) => {
                  const isSelected = data.listingPurpose === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() =>
                        update({ listingPurpose: opt.value as Step1Data["listingPurpose"] })
                      }
                      className={`flex flex-col items-center justify-center gap-2.5 py-5 px-3 rounded-xl border-2 transition-all duration-200 cursor-pointer
                        ${
                          isSelected
                            ? "border-[#F5A623] bg-[#FFF8EC] shadow-sm"
                            : "border-gray-200 bg-[#f9f9f6] hover:border-gray-300 hover:bg-gray-50"
                        }`}
                    >
                      {opt.icon}
                      <span
                        className={`text-xs font-semibold ${
                          isSelected ? "text-[#1a1f3c]" : "text-gray-500"
                        }`}
                      >
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Listing Headline ── */}
            <div>
              <label className="block text-sm font-bold text-[#1a1f3c] mb-3">
                Listing headline{" "}
                <span className="text-[#F5A623]">*</span>
              </label>
              <input
                type="text"
                value={data.listingHeadline}
                onChange={(e) =>
                  update({ listingHeadline: e.target.value })
                }
                placeholder="eg; 7 Bedroom Detached Duplex"
                maxLength={100}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#f9f9f6] text-[#1a1f3c] placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 transition-all duration-200"
              />
              <p className="mt-2 text-xs text-gray-400">
                A compelling title increases engagement by up to 30%
              </p>
            </div>

            {/* ── Property Type ── */}
            <div>
              <label className="block text-sm font-bold text-[#1a1f3c] mb-3">
                Property type
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setTypeOpen((o) => !o)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#f9f9f6] text-sm font-medium text-left flex items-center justify-between focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 transition-all duration-200"
                >
                  <span
                    className={
                      data.propertyType ? "text-[#1a1f3c]" : "text-gray-400"
                    }
                  >
                    {data.propertyType || "Apartment / Flat"}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 transition-transform duration-200 ${
                      typeOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {typeOpen && (
                  <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                    <div className="max-h-52 overflow-y-auto">
                      {propertyTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => {
                            update({ propertyType: type });
                            setTypeOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left text-sm font-medium hover:bg-[#FFF8EC] transition-colors duration-150
                            ${
                              data.propertyType === type
                                ? "text-[#F5A623] bg-[#FFF8EC]"
                                : "text-[#1a1f3c]"
                            }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── Bottom Navigation Bar ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 z-30">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          {/* Go back */}
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-[#1a1f3c] hover:text-[#F5A623] transition-colors duration-200"
          >
            <span className="text-lg">←</span>
            Go back
          </button>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onSaveDraft}
              className="px-5 py-2.5 rounded-full border-2 border-gray-300 text-sm font-semibold text-[#1a1f3c] hover:border-[#1a1f3c] transition-all duration-200"
            >
              Save as draft
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={!canContinue}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200
                ${
                  canContinue
                    ? "bg-[#1a1f3c] text-white hover:bg-[#2a3060] shadow-md hover:shadow-lg"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
            >
              Continue to Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
