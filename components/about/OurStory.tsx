import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "12,000+", label: "Verified listings" },
  { value: "12yrs", label: "In real estate" },
  { value: "4,500+", label: "Trusted agents" },
  { value: "80B+", label: "In transactions" },
  { value: "100%", label: "Listings verified" },
];

export default function OurStory() {
  return (
    <section className="bg-[#f5f5f0] py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ── Top: images + text ── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">

          {/* Left — stacked photos */}
          <div className="relative w-full max-w-sm lg:max-w-none lg:w-[480px] flex-shrink-0 h-80 sm:h-96">
            {/* Back card — top left */}
            <div className="absolute top-0 left-0 w-[62%] h-[58%] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/about-story-1.jpg"
                alt="Couple with property agent"
                fill
                className="object-cover"
              />
            </div>
            {/* Front card — bottom right, overlapping */}
            <div className="absolute bottom-0 right-0 w-[70%] h-[65%] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/about-story-2.jpg"
                alt="Agents reviewing property on tablet"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right — text */}
          <div className="flex-1 max-w-lg">
            {/* Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#F5A623]" />
              <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f3c] leading-tight mb-5">
              Built on Trust.{" "}
              <br />
              Driven by{" "}
              <span className="text-[#F5A623]">Results.</span>
            </h2>

            {/* Body */}
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Since 2013, Property Vault has been connecting buyers, investors,
              and agents through verified, transparent real estate. We started
              with a simple belief — that Nigerians deserve a property platform
              they can actually trust.
            </p>

            {/* CTA */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-sm font-bold px-6 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Read blog
              <span className="text-base">↗</span>
            </Link>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="flex flex-wrap items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-8 py-5 sm:py-0 w-1/2 sm:w-auto sm:flex-1"
            >
              <span className="text-2xl sm:text-3xl font-black text-[#1a1f3c] mb-1">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
