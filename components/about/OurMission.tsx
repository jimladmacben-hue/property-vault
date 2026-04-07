import Image from "next/image";
import Link from "next/link";

export default function OurMission() {
  return (
    <section className="bg-[#f5f5f0] py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left — text ── */}
          <div className="flex-1 max-w-lg">
            {/* Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#F5A623]" />
              <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
                Our Mission
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1f3c] leading-snug mb-5">
              Make real estate simple, secure, and transparent for every Nigerian
            </h2>

            {/* Body */}
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              We believe property ownership should be accessible, not
              anxiety-inducing. Our mission is to remove the fear, fraud, and
              friction from Nigerian real estate — and replace it with verified
              information, trusted agents, and confident decisions.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              We aim to build strong relationships between people and trusted
              real estate professionals. That is why we focus on quality,
              transparency, and trust at every step of the journey.
            </p>

            {/* CTA */}
            <Link
              href="/mission"
              className="inline-flex items-center gap-2 bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-sm font-bold px-6 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Read Mission
              <span>→</span>
            </Link>
          </div>

          {/* ── Right — image with amber border frame ── */}
          <div className="flex-1 w-full max-w-xl flex-shrink-0">
            {/* Amber border frame — offset inward on top-left */}
            <div className="relative">
              {/* Amber border behind image */}
              <div className="absolute -top-1 -left-1 w-full h-full rounded-2xl border-2 border-[#F5A623]" />
              {/* Image */}
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/about-mission.jpg"
                  alt="Two women shaking hands in a real estate meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
