import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative w-full py-32 px-4 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about/about-cta.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
          Ready to find your next property?
        </h2>
        <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-10">
          Join thousands of verified buyers and agents to find verified listings,
          connect with trusted agents, and move with confidence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/properties"
            className="px-8 py-3.5 rounded-full bg-white text-[#1a1f3c] text-sm font-bold hover:bg-gray-100 transition-all duration-200 shadow-md"
          >
            Browse Properties
          </Link>
          <Link
            href="/list-property"
            className="px-8 py-3.5 rounded-full border-2 border-white text-white text-sm font-bold hover:bg-white hover:text-[#1a1f3c] transition-all duration-200"
          >
            List a property
          </Link>
        </div>
      </div>
    </section>
  );
}
