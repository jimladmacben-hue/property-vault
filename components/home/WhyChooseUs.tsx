const features = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L4 5v6c0 5.25 3.5 10.15 8 11.35C16.5 21.15 20 16.25 20 11V5l-8-3z"
          fill="white"
          opacity="0.9"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="#F5A623"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Property Verified",
    description:
      "Every property undergoes a rigorous 3-point title verification process.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C8.5 2 6 4.5 6 7.5c0 1.5.5 2.8 1.5 3.8L6 19h12l-1.5-7.7C17.5 10.3 18 9 18 7.5 18 4.5 15.5 2 12 2z"
          fill="white"
          opacity="0.85"
        />
        <ellipse cx="9" cy="8" rx="1.5" ry="2" fill="#F5A623" opacity="0.7" />
        <ellipse cx="15" cy="8" rx="1.5" ry="2" fill="#F5A623" opacity="0.7" />
        <rect x="8" y="18" width="8" height="2" rx="1" fill="white" opacity="0.6" />
      </svg>
    ),
    title: "Verified Agents",
    description:
      "Connect exclusively with licensed, background-checked real estate professionals.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="13" rx="2" fill="white" opacity="0.85" />
        <path d="M3 10h18" stroke="#F5A623" strokeWidth="1.5" />
        <circle cx="12" cy="15" r="2.5" stroke="#F5A623" strokeWidth="1.5" fill="none" />
        <path
          d="M12 13.5v1M12 16.5v1M13.5 15h-1M10.5 15h-1"
          stroke="#F5A623"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Escrow Protected",
    description:
      "Secure your transactions with our integrated, legal-grade escrow services.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <p className="text-center text-[10.5px] font-normal tracking-[0.25em] text-gray-900 uppercase mb-14">
          Why Choose Property Vault
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center px-4"
            >
              {/* Icon Circle */}
              <div className="w-[60px] h-[60px] rounded-full bg-[#F5A623] flex items-center justify-center mb-5 shadow-sm">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-[25px] font-normal text-[#1a1f3c] mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-gray-500 leading-relaxed max-w-[220px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
