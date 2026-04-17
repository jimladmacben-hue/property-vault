import Link from "next/link";
const steps = [
  {
    bold: "Agent submits listing",
    rest: " with title documents and property photos",
  },
  {
    bold: "Our team reviews",
    rest: " every detail ; location, price, documents, photos",
  },
  {
    bold: "Verified badge awarded.",
    rest: " Only then does the listing go live",
  },
];

export default function VerificationSection() {
  return (
    <section className="w-full bg-[#080d28] py-24 px-6 relative overflow-hidden">
      {/* Floating badge LEFT */}
      <div className="hidden lg:flex absolute left-12 top-1/2 -translate-y-1/2 items-center gap-3">
        <div className="border border-white/20 rounded-full px-4 py-2 text-center">
          <p className="text-white text-[13px] font-bold leading-tight">100%</p>
          <p className="text-white/50 text-[10px] leading-tight">Percent listings manually reviewed</p>
        </div>
        {/* connector dots */}
        <div className="flex items-center gap-[3px]">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-white/30 inline-block" />
          ))}
        </div>
      </div>

      {/* Floating badge RIGHT */}
      <div className="hidden lg:flex absolute right-12 top-[38%] items-center gap-3">
        {/* connector dots */}
        <div className="flex items-center gap-[3px]">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-white/30 inline-block" />
          ))}
        </div>
        <div className="border border-white/20 rounded-full px-4 py-2 text-center">
          <p className="text-white text-[13px] font-bold leading-tight">48hrs</p>
          <p className="text-white/50 text-[10px] leading-tight">Average reviewer never</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow */}
        <p className="text-[10.5px] font-bold tracking-[0.22em] text-[#F5A623] uppercase mb-5">
          Verified &amp; Approved
        </p>

        {/* Heading */}
        <h2 className="text-[34px] md:text-[40px] font-normal text-white leading-tight mb-1">
          Every Listing is Checked
        </h2>
        <h2 className="text-[34px] md:text-[40px] font-normal text-[#F5A623] leading-tight mb-5">
          Before You See It
        </h2>

        {/* Subtext */}
        <p className="text-[13.5px] text-white/50 leading-relaxed max-w-md mb-10">
          We manually review every property submission before it goes live. No fake listings.
          No unverified agents. Just real, trusted properties you can act on with confidence.
        </p>

        {/* Steps */}
<div className="w-full max-w-xl flex flex-col gap-3 mb-10 flex items-center justify-center">
  {steps.map((step, i) => (
    <div key={i} className="flex items-start gap-4">
      {/* Amber circle bullet */}
      <div className="w-8 h-8 rounded-full bg-[#F5A623] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-amber-900/30">
      <img
          src="/icons/bullet.png"
          alt="bullet point"
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-[14px] text-white/90 leading-relaxed pt-1">
        <span className="font-normal text-white">{step.bold}</span>
        {step.rest}
      </p>
    </div>
  ))}
</div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-3 w-full">
          <a
            href="/properties"
            className="bg-[#F5A623] hover:bg-[#e09615] text-[#1a0f00] font-bold text-[14px] px-8 py-3.5 rounded-full flex items-center gap-2 transition-colors w-fit"
          >
            Browse Verified Properties
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L11 3M11 3H5M11 3V9" stroke="#1a0f00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#"
            className="border border-white/25 hover:border-white/50 text-white text-[14px] font-medium px-8 py-3.5 rounded-full transition-colors w-fit"
          >
            How it works
          </a>
        </div>
      </div>
    </section>
  );
}
