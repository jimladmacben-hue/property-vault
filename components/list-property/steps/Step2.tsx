"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Step2Data {
  state: string;
  lga: string;
  cityNeighbourhood: string;
  streetAddress: string;
  nearestLandmark: string;
}

interface Step2Props {
  data: Step2Data;
  onChange: (data: Step2Data) => void;
  onNext: () => void;
  onBack: () => void;
  onSaveDraft?: () => void;
}

// ─── Nigerian States & LGAs ───────────────────────────────────────────────────

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT",
  "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
  "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
  "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

const lgasByState: Record<string, string[]> = {
  Lagos: [
    "Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa",
    "Badagry", "Epe", "Eti-Osa", "Ibeju-Lekki", "Ifako-Ijaiye",
    "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland",
    "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere",
  ],
  FCT: [
    "Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council",
  ],
  Rivers: [
    "Bonny", "Degema", "Eleme", "Emohua", "Etche", "Gokana", "Ikwerre",
    "Khana", "Obio-Akpor", "Ogba-Egbema-Ndoni", "Ogu-Bolo", "Okrika",
    "Omuma", "Opobo-Nkoro", "Oyigbo", "Port Harcourt", "Tai",
  ],
  Abuja: ["Municipal Area Council"],
};

const getDefaultLga = () => ["Select LGA"];

// ─── Progress Bar ─────────────────────────────────────────────────────────────

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
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300
                  ${isActive || isCompleted
                    ? "bg-[#1a1f3c] border-[#1a1f3c] text-white"
                    : "bg-white border-gray-300 text-gray-400"
                  }`}
              >
                {isCompleted ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  step.number
                )}
              </div>
              <span
                className={`text-xs font-semibold tracking-wide ${
                  isActive || isCompleted ? "text-[#1a1f3c]" : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>
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

// ─── Custom Dropdown ──────────────────────────────────────────────────────────

function Dropdown({
  value,
  options,
  placeholder,
  onChange,
}: {
  value: string;
  options: string[];
  placeholder: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#f9f9f6] text-sm font-medium text-left flex items-center justify-between focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 transition-all duration-200"
      >
        <span className={value ? "text-[#1a1f3c]" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          <div className="max-h-52 overflow-y-auto">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full px-4 py-3 text-left text-sm font-medium hover:bg-[#FFF8EC] transition-colors duration-150
                  ${value === opt ? "text-[#F5A623] bg-[#FFF8EC]" : "text-[#1a1f3c]"}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Step2({
  data,
  onChange,
  onNext,
  onBack,
  onSaveDraft,
}: Step2Props) {
  const update = (fields: Partial<Step2Data>) => onChange({ ...data, ...fields });

  const lgas = lgasByState[data.state] ?? getDefaultLga();

  const canContinue =
    data.state !== "" &&
    data.lga !== "" &&
    data.cityNeighbourhood.trim() !== "";

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex flex-col">
      <main className="flex-1 pt-28 pb-32 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <StepProgressBar currentStep={2} />

          {/* Heading */}
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
              Step 2 of 4
            </p>
            <h1 className="text-3xl sm:text-4xl font-black text-[#1a1f3c] mb-3">
              Where is this Property?
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Help buyers find and verify the location before they enquire
            </p>
          </div>

          {/* ── Address Card ── */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">
            {/* Card Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <span className="text-2xl">📍</span>
              <h2 className="text-xl font-bold text-[#1a1f3c]">Address</h2>
            </div>

            {/* State + LGA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-[#1a1f3c] mb-2">
                  State <span className="text-[#F5A623]">*</span>
                </label>
                <Dropdown
                  value={data.state}
                  options={nigerianStates}
                  placeholder="Select state"
                  onChange={(v) => update({ state: v, lga: "" })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1a1f3c] mb-2">
                  LGA <span className="text-[#F5A623]">*</span>
                </label>
                <Dropdown
                  value={data.lga}
                  options={lgas}
                  placeholder="Select LGA"
                  onChange={(v) => update({ lga: v })}
                />
              </div>
            </div>

            {/* City / Neighbourhood + Street address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-[#1a1f3c] mb-2">
                  City / Neighbourhood <span className="text-[#F5A623]">*</span>
                </label>
                <input
                  type="text"
                  value={data.cityNeighbourhood}
                  onChange={(e) => update({ cityNeighbourhood: e.target.value })}
                  placeholder="e.g. Lekki Phase 1"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#f9f9f6] text-[#1a1f3c] placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 transition-all duration-200"
                />
                <p className="mt-1.5 text-xs text-gray-400">
                  This is shown publicly on the listing
                </p>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1a1f3c] mb-2">
                  Street address
                </label>
                <input
                  type="text"
                  value={data.streetAddress}
                  onChange={(e) => update({ streetAddress: e.target.value })}
                  placeholder="e.g. 14 Admiralty Way"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#f9f9f6] text-[#1a1f3c] placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 transition-all duration-200"
                />
                <p className="mt-1.5 text-xs text-gray-400">
                  Only revealed to buyers after they enquire
                </p>
              </div>
            </div>

            {/* Nearest Landmark */}
            <div>
              <label className="block text-sm font-bold text-[#1a1f3c] mb-2">
                Nearest landmark{" "}
                <span className="text-sm font-normal text-[#F5A623]">
                  (optional)
                </span>
              </label>
              <input
                type="text"
                value={data.nearestLandmark}
                onChange={(e) => update({ nearestLandmark: e.target.value })}
                placeholder="e.g. 2 minutes from Lekki Toll Gate"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#f9f9f6] text-[#1a1f3c] placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 transition-all duration-200"
              />
              <p className="mt-1.5 text-xs text-gray-400">
                Helps buyers who know the area navigate quickly
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* ── Bottom Navigation Bar ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 z-30">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-[#1a1f3c] hover:text-[#F5A623] transition-colors duration-200"
          >
            <span className="text-lg">←</span>
            Go back
          </button>
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
                ${canContinue
                  ? "bg-[#1a1f3c] text-white hover:bg-[#2a3060] shadow-md hover:shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
            >
              Continue to Media
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
