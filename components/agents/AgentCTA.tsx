import Link from "next/link";

export default function AgentCTA() {
  return (
    <section className="relative w-full py-28 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/agents/agents-cta.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
          Can&apos;t find the right agent?
        </h2>
        <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-10">
          Tell us what you need and we&apos;ll match you with a verified agent in your area.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-white text-[#1a1f3c] text-sm font-bold hover:bg-gray-100 transition-all duration-200 shadow-md"
          >
            Request an Agent Match
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full border-2 border-white text-white text-sm font-bold hover:bg-white hover:text-[#1a1f3c] transition-all duration-200"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
