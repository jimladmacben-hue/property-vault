"use client";

import { useState, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Step3Data {
  photos: File[];
}

interface Step3Props {
  data: Step3Data;
  onChange: (data: Step3Data) => void;
  onNext: () => void;
  onBack: () => void;
  onSaveDraft?: () => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const MAX_PHOTOS = 10;
const MIN_PHOTOS = 3;

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

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Step3({
  data,
  onChange,
  onNext,
  onBack,
  onSaveDraft,
}: Step3Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState<number | null>(null);

  const photos = data.photos;
  const count = photos.length;
  const remaining = Math.max(0, MIN_PHOTOS - count);
  const canContinue = count >= MIN_PHOTOS;

  // Build 10 slots array
  const slots = Array.from({ length: MAX_PHOTOS });

  const addFiles = (files: FileList | null) => {
    if (!files) return;
    const incoming = Array.from(files).filter((f) => f.type.startsWith("image/"));
    const merged = [...photos, ...incoming].slice(0, MAX_PHOTOS);
    onChange({ ...data, photos: merged });
  };

  const removePhoto = (index: number) => {
    const updated = photos.filter((_, i) => i !== index);
    onChange({ ...data, photos: updated });
  };

  const handleDrop = (e: React.DragEvent, slotIndex: number) => {
    e.preventDefault();
    setDragOver(null);
    if (slotIndex !== 0 && slotIndex >= count) {
      addFiles(e.dataTransfer.files);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex flex-col">
      <main className="flex-1 pt-28 pb-32 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <StepProgressBar currentStep={3} />

          {/* Heading */}
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
              Step 3 of 4
            </p>
            <h1 className="text-3xl sm:text-4xl font-black text-[#1a1f3c] mb-3">
              Photos &amp; Documents
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Show buyers what the property looks like and prove it&apos;s real
            </p>
          </div>

          {/* ── Property Photos Card ── */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-5">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📷</span>
                <h2 className="text-xl font-bold text-[#1a1f3c]">Property photos</h2>
              </div>
              <span className="text-sm font-semibold text-red-400">Min 3 required</span>
            </div>

            {/* Tip Banner */}
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3.5">
              <span className="text-lg mt-0.5">💡</span>
              <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                Listings with 6+ photos get 3× more enquiries. Use natural light, shoot in landscape
                orientation, and include every room — living area, bedrooms, kitchen, bathrooms, and the exterior.
              </p>
            </div>

            {/* Counter + badge */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[#1a1f3c]">
                {count} of {MAX_PHOTOS} photos added
              </p>
              {remaining > 0 ? (
                <span className="text-xs font-bold text-red-500 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                  {remaining} more needed
                </span>
              ) : (
                <span className="text-xs font-bold text-green-600 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
                  ✓ Minimum met
                </span>
              )}
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-3 gap-3">
              {slots.map((_, i) => {
                const isFirst = i === 0;
                const hasPhoto = i < count;
                const photo = hasPhoto ? photos[i] : null;
                const preview = photo ? URL.createObjectURL(photo) : null;

                if (hasPhoto && preview) {
                  return (
                    <div
                      key={i}
                      className={`relative rounded-xl overflow-hidden bg-gray-100 ${isFirst ? "col-span-3 h-52 sm:h-64" : "h-28"}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={preview}
                        alt={`Photo ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {isFirst && (
                        <span className="absolute top-2 left-2 text-xs font-bold bg-[#F5A623] text-white px-2.5 py-1 rounded-full">
                          Cover photo
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={() => removePhoto(i)}
                        className="absolute top-2 right-2 w-7 h-7 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M1 1l10 10M11 1L1 11" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  );
                }

                // Empty slot
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    onDragOver={(e) => { e.preventDefault(); setDragOver(i); }}
                    onDragLeave={() => setDragOver(null)}
                    onDrop={(e) => handleDrop(e, i)}
                    className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all duration-200
                      ${isFirst ? "col-span-3 h-52 sm:h-64" : "h-28"}
                      ${dragOver === i
                        ? "border-[#F5A623] bg-amber-50"
                        : "border-gray-300 bg-[#f9f9f6] hover:border-[#F5A623] hover:bg-amber-50/30"
                      }`}
                  >
                    {isFirst ? (
                      <div className="flex flex-col items-center gap-3">
                        {/* Image illustration */}
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                          <rect x="8" y="16" width="56" height="42" rx="4" fill="#c8a44a" opacity="0.15" stroke="#c8a44a" strokeWidth="2" />
                          <rect x="10" y="18" width="52" height="38" rx="3" fill="#e8c96a" opacity="0.3" />
                          <circle cx="22" cy="28" r="5" fill="#F5A623" opacity="0.8" />
                          <path d="M8 46l16-14 12 10 10-8 18 14" fill="#4ade80" opacity="0.5" />
                          <path d="M8 46l16-14 12 10 10-8 18 14V56a2 2 0 01-2 2H10a2 2 0 01-2-2V46z" fill="#22c55e" opacity="0.3" />
                        </svg>
                        <div className="text-center">
                          <p className="text-sm font-bold text-[#1a1f3c]">
                            Click to upload cover photo
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            JPG, PNG or WEBP · Max 10MB each
                          </p>
                        </div>
                      </div>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Hidden file input */}
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => addFiles(e.target.files)}
            />

            {count < MAX_PHOTOS && (
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="w-full py-3 rounded-xl border-2 border-dashed border-gray-300 text-sm font-semibold text-gray-500 hover:border-[#F5A623] hover:text-[#F5A623] transition-all duration-200"
              >
                + Add more photos
              </button>
            )}
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
              Continue to Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
