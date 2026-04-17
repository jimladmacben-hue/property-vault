"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "Browse verified listings remotely",
    body: "Every listing verified. Photos, documents, and location data are accurate before you see them.",
  },
  {
    number: 2,
    title: "Request a live video walkthrough",
    body: "Agents conduct live video tours so you can inspect every room without leaving your city.",
  },
  {
    number: 3,
    title: "Verify title documents digitally",
    body: "Title documents scanned and verified. You see the original document before committing.",
  },
  {
    number: 4,
    title: "Complete transaction securely",
    body: "Bank transfer with full paper trail. We guide you through every legal requirement.",
  },
  {
    number: 5,
    title: "Earn and compound",
    body: "Receive rental income payouts directly to you every quarter. Watch your portfolio value grow as the property appreciates.",
  },
];

export default function DiasporaSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-[#f5f5f0] py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ── Centred heading ── */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#F5A623]" />
            <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
              For Diaspora Investors
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f3c] leading-tight mb-5">
            Buy Nigerian Property From
            <br />
            <span className="text-[#F5A623]">Anywhere</span> in the World
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
            Over 40% of Property Vault investment enquiries come from Nigerians in
            the UK, US, and Canada. We built the platform to make remote buying
            safe, simple, and transparent.
          </p>z
        </div>

        {/* ── Two-column: video + steps ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Left — video + CTA */}
          <div className="w-full lg:w-[420px] flex-shrink-0 space-y-5">
            {/* Video thumbnail with amber border */}
            <div className="relative">
              {/* Amber border frame */}
              <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-[#F5A623]" />

              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-gray-800">
                {playing ? (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Diaspora investment guide"
                    allow="autoplay; fullscreen"
                  />
                ) : (
                  <>
                    {/* Thumbnail */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/diaspora-video-thumb.jpg"
                      alt="Diaspora investment guide"
                      className="w-full h-full object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Play button */}
                    <button
                      type="button"
                      onClick={() => setPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center group"
                      aria-label="Play video"
                    >
                      <div className="w-16 h-16 bg-[#F5A623] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7L8 5z" />
                        </svg>
                      </div>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* CTA button */}
            <Link
              href="/contact"
              className="flex items-center justify-between gap-3 bg-[#1a1f3c] hover:bg-[#2a3060] text-white font-bold px-6 py-4 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span className="text-sm">Book a diaspora consultation</span>
              <span className="text-base">↗</span>
            </Link>
          </div>

          {/* Right — numbered steps */}
          <div className="flex-1 relative">
            {/* Vertical dashed connector line */}
            <div className="absolute left-[19px] top-10 bottom-10 w-px border-l-2 border-dashed border-gray-300 z-0" />

            <div className="space-y-8 relative z-10">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5 items-start">
                  {/* Number circle */}
                  <div className="w-10 h-10 rounded-full bg-[#1a1f3c] flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-sm font-black text-white">{step.number}</span>
                  </div>

                  {/* Text */}
                  <div className="pt-1.5">
                    <h4 className="text-base font-bold text-[#1a1f3c] mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
