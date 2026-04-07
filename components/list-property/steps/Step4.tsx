"use client";

import { Step1Data } from "@/components/list-property/steps/Step1";
import { Step2Data } from "@/components/list-property/steps/Step2";
import { Step3Data } from "@/components/list-property/steps/Step3";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Step4Data {
  submitted: boolean;
}

interface Step4Props {
  step1: Step1Data;
  step2: Step2Data;
  step3: Step3Data;
  onEditStep: (step: number) => void;
  onSubmit: () => void;
  onSaveDraft?: () => void;
}

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
              <span className={`text-xs font-semibold tracking-wide ${isActive || isCompleted ? "text-[#1a1f3c]" : "text-gray-400"}`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 sm:w-24 h-px mx-2 mb-5 transition-all duration-300 ${isCompleted ? "bg-[#1a1f3c]" : "bg-gray-300"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Review Row ───────────────────────────────────────────────────────────────

function ReviewField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">{label}</p>
      <p className="text-sm font-semibold text-[#1a1f3c]">{value || "—"}</p>
    </div>
  );
}

// ─── Review Card ─────────────────────────────────────────────────────────────

function ReviewCard({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#1a1f3c] flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l2.5 2.5L10 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-base font-bold text-[#1a1f3c]">{title}</h3>
        </div>
        <button
          type="button"
          onClick={onEdit}
          className="text-xs font-semibold border border-gray-300 text-[#1a1f3c] px-4 py-1.5 rounded-full hover:border-[#1a1f3c] transition-all duration-200"
        >
          Edit
        </button>
      </div>
      {children}
    </div>
  );
}

// ─── Listing Preview Card ─────────────────────────────────────────────────────

function ListingPreview({ step1, step2, step3 }: { step1: Step1Data; step2: Step2Data; step3: Step3Data }) {
  const coverPhoto = step3.photos[0] ? URL.createObjectURL(step3.photos[0]) : null;
  const location = [step2.cityNeighbourhood, step2.state].filter(Boolean).join(", ");

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Image */}
      <div className="relative h-44 bg-gray-100">
        {coverPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={coverPhoto} alt="Cover" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="4" y="10" width="40" height="30" rx="3" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1.5" />
              <circle cx="16" cy="20" r="4" fill="#9ca3af" />
              <path d="M4 34l12-10 8 7 8-6 12 9" fill="#d1d5db" />
            </svg>
          </div>
        )}
        {/* Title Verified badge */}
        <span className="absolute top-2 left-2 flex items-center gap-1 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded-full">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          TITLE VERIFIED
        </span>
      </div>

      {/* Details */}
      <div className="p-4 space-y-2">
        <h4 className="text-sm font-bold text-[#1a1f3c] leading-snug">
          {step1.listingHeadline || "Your listing headline"}
        </h4>
        {location && (
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1C4.067 1 2.5 2.567 2.5 4.5c0 2.5 3.5 6.5 3.5 6.5s3.5-4 3.5-6.5C9.5 2.567 7.933 1 6 1z" stroke="#9ca3af" strokeWidth="1.2" />
              <circle cx="6" cy="4.5" r="1" fill="#9ca3af" />
            </svg>
            {location}
          </div>
        )}
        <div className="flex items-center gap-3 text-xs text-gray-500 pt-1">
          <span className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 9V5.5L6 2l5 3.5V9a1 1 0 01-1 1H2a1 1 0 01-1-1z" stroke="#9ca3af" strokeWidth="1.2" />
              <path d="M4 10V7h4v3" stroke="#9ca3af" strokeWidth="1.2" />
            </svg>
            — Beds
          </span>
          <span className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M1 6V4a1 1 0 011-1h4V6M8 6V5h2v1" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M1 6v2a1 1 0 001 1h8a1 1 0 001-1V6" stroke="#9ca3af" strokeWidth="1.2" />
            </svg>
            — Baths
          </span>
          <span>— sqm</span>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-200" />
            <span className="text-xs text-gray-500">Your Agency</span>
          </div>
          <span className="text-xs font-semibold text-[#F5A623]">Details →</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Step4({
  step1,
  step2,
  step3,
  onEditStep,
  onSubmit,
  onSaveDraft,
}: Step4Props) {
  const purposeLabel =
    step1.listingPurpose === "for-sale" ? "For Sale"
    : step1.listingPurpose === "for-rent" ? "For Rent"
    : step1.listingPurpose === "shortlet" ? "Shortlet"
    : step1.listingPurpose === "land" ? "Land"
    : "—";

  return (
    <div className="min-h-screen bg-[#f5f5f0] pb-16">
      <div className="pt-28 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <StepProgressBar currentStep={4} />

          {/* Heading */}
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
              Step 4 of 4
            </p>
            <h1 className="text-3xl sm:text-4xl font-black text-[#1a1f3c] mb-3">
              Almost there!
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Review your listing before it goes to our team
            </p>
          </div>

          {/* ── Two-column layout on lg ── */}
          <div className="flex flex-col lg:flex-row gap-6 items-start">

            {/* Left col — review cards */}
            <div className="flex-1 space-y-4">

              {/* Property Info */}
              <ReviewCard title="Property Info" onEdit={() => onEditStep(1)}>
                <div className="grid grid-cols-3 gap-x-4 gap-y-4">
                  <ReviewField label="Purpose" value={purposeLabel} />
                  <ReviewField label="Price" value="—" />
                  <ReviewField label="Negotiable" value="—" />
                  <ReviewField label="Type" value={step1.propertyType} />
                  <ReviewField label="Bedrooms" value="—" />
                  <ReviewField label="Bathrooms" value="—" />
                  <ReviewField label="Size" value="—" />
                  <ReviewField label="Furnishing" value="—" />
                  <ReviewField label="Amenities" value="—" />
                </div>
                {step1.listingHeadline && (
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <ReviewField label="Headline" value={step1.listingHeadline} />
                  </div>
                )}
              </ReviewCard>

              {/* Location */}
              <ReviewCard title="Location" onEdit={() => onEditStep(2)}>
                <div className="grid grid-cols-3 gap-x-4 gap-y-4">
                  <ReviewField label="State" value={step2.state} />
                  <ReviewField label="City" value={step2.cityNeighbourhood} />
                  <ReviewField label="Area" value={step2.lga} />
                  <ReviewField label="Address" value={step2.streetAddress ? "Hidden" : "—"} />
                  <ReviewField label="Landmark" value={step2.nearestLandmark || "Nil"} />
                  <ReviewField label="Map Pin" value="Confirmed" />
                </div>
              </ReviewCard>

              {/* Photos */}
              <ReviewCard title="Photos" onEdit={() => onEditStep(3)}>
                {step3.photos.length === 0 ? (
                  <p className="text-sm text-gray-400">No photos uploaded yet.</p>
                ) : (
                  <div className="grid grid-cols-4 gap-2">
                    {step3.photos.slice(0, 8).map((photo, i) => {
                      const url = URL.createObjectURL(photo);
                      return (
                        <div key={i} className={`relative rounded-lg overflow-hidden bg-gray-100 ${i === 0 ? "col-span-2 row-span-2 h-32" : "h-14"}`}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={url} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                          {i === 0 && (
                            <span className="absolute bottom-1 left-1 text-[9px] font-bold bg-[#F5A623] text-white px-1.5 py-0.5 rounded-full">
                              Cover
                            </span>
                          )}
                          {i === 7 && step3.photos.length > 8 && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">+{step3.photos.length - 8}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
                <p className="text-xs text-gray-400 mt-3">
                  {step3.photos.length} photo{step3.photos.length !== 1 ? "s" : ""} uploaded
                </p>
              </ReviewCard>

              {/* Ready to Submit */}
              <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 text-center space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-[#1a1f3c] mb-2">Ready to Submit?</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Our team will review your listing within 24–48 hours. You&apos;ll
                    <br className="hidden sm:block" />
                    be notified by email and in-app when it goes live.
                  </p>
                </div>
                <div className="flex flex-col gap-3 max-w-xs mx-auto">
                  <button
                    type="button"
                    onClick={onSubmit}
                    className="w-full bg-[#1a1f3c] hover:bg-[#2a3060] text-white font-bold py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Submit for review
                  </button>
                  <button
                    type="button"
                    onClick={onSaveDraft}
                    className="w-full border-2 border-gray-300 hover:border-[#1a1f3c] text-[#1a1f3c] font-bold py-3.5 rounded-full transition-all duration-200"
                  >
                    Save as draft
                  </button>
                </div>
              </div>
            </div>

            {/* Right col — live preview */}
            <div className="w-full lg:w-64 xl:w-72 lg:sticky lg:top-28">
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3 text-center lg:text-left">
                Listing preview
              </p>
              <ListingPreview step1={step1} step2={step2} step3={step3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
