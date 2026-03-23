const features = [
  {
    icon: (
      <img
        src="/icons/verified.png"
        alt="Property Verified"
        className="w-8 h-8 object-contain"
      />
    ),
    title: "Property Verified",
    description: "Every property undergoes a rigorous 3-point title verification process.",
  },
  {
    icon: (
      <img
        src="/icons/agents.png"
        alt="Verified Agents"
        className="w-8 h-8 object-contain"
      />
    ),
    title: "Verified Agents",
    description: "Connect exclusively with licensed, background-checked real estate professionals.",
  },
  {
    icon: (
      <img
        src="/icons/escrow.png"
        alt="Escrow Protected"
        className="w-8 h-8 object-contain"
      />
    ),
    title: "Escrow Protected",
    description: "Secure your transactions with our integrated, legal-grade escrow services.",
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
