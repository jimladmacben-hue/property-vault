const plans = [
  {
    name: "Basic",
    sub: "Up to 5 listings",
    price: "Free",
    period: "Forever",
    style: "outlined",
  },
  {
    name: "Professional",
    sub: "Up to 30+ listings featured",
    price: "₦15,000",
    period: "/month",
    style: "white",
    popular: true,
  },
  {
    name: "Premium",
    sub: "Unlimited + homepage placement",
    price: "₦35,000",
    period: "/month",
    style: "filled",
  },
];

const benefits = [
  "Reach diaspora investors and serious local buyers",
  "Your listings reviewed and verified by our team",
  "Track views, enquiries, and leads from your dashboard",
  "Verified Agent badge builds instant buyer trust",
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7.5" fill="#F5A623" opacity="0.15" />
      <path
        d="M5 8.5L7 10.5L11 6"
        stroke="#F5A623"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C12 2 7 7 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9 15 6 15 6C15 6 14 9 12 9C10 9 10 7 12 2Z"
        fill="#F5A623"
        opacity="0.8"
      />
      <path
        d="M12 17C12 17 9 15 9 12.5C9 11 10 10 11 10C11 12 13 13 13 15C13 16.1 12.55 17 12 17Z"
        fill="#1a0f00"
        opacity="0.4"
      />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section className="w-full bg-[#f5f5f0] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[10.5px] font-bold tracking-[0.22em] text-[#F5A623] uppercase mb-3">
            For Agents And Developers
          </p>
          <h2 className="text-[32px] md:text-[38px] font-normal text-[#1a1f3c] leading-tight mb-4">
            List Your Property,<br />
            Reach Serious Buyers
          </h2>
          <p className="text-[13.5px] text-gray-500 max-w-md mx-auto leading-relaxed">
            Join thousands of verified agents already using Property Vault to connect with buyers,
            investors, and renters across Nigeria. Start listing in minutes.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Basic */}
          <div className="border-2 border-[#F5A623] rounded-2xl p-5 flex flex-col justify-between bg-white/60">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[16px] font-extrabold text-[#1a1f3c]">Basic</p>
                  <p className="text-[12px] text-gray-500 mt-0.5">Up to 5 listings</p>
                </div>
                <div className="text-right">
                  <p className="text-[20px] font-extrabold text-[#F5A623]">Free</p>
                  <p className="text-[11px] text-gray-400">Forever</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional */}
          <div className="relative border border-gray-200 rounded-2xl p-5 bg-white shadow-md flex flex-col justify-between">
            <span className="absolute -top-3 right-4 bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full">
              Most popular
            </span>
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[16px] font-extrabold text-[#1a1f3c]">Professional</p>
                  <p className="text-[12px] text-gray-500 mt-0.5">Up to 30+ listings featured</p>
                </div>
                <div className="text-right">
                  <p className="text-[20px] font-extrabold text-[#1a1f3c]">₦15,000</p>
                  <p className="text-[11px] text-gray-400">/month</p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium */}
          <div className="rounded-2xl p-5 bg-[#1a1f3c] flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[16px] font-extrabold text-white">Premium</p>
                  <p className="text-[12px] text-white/50 mt-0.5">Unlimited + homepage placement</p>
                </div>
                <div className="text-right">
                  <p className="text-[20px] font-extrabold text-[#F5A623]">₦35,000</p>
                  <p className="text-[11px] text-white/40">/month</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {[0, 1, 2].map((col) => (
            <div key={col}>
              <div className="flex items-center gap-2 mb-4">
                <FlameIcon />
                <span className="text-[14px] font-bold text-[#1a1f3c]">Benefits</span>
              </div>
              <ul className="flex flex-col gap-3">
                {benefits.slice(0, col === 2 ? 4 : 3).map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon />
                    <span className="text-[12.5px] text-gray-600 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-[12px] text-gray-400">No credit card required · Cancel anytime</p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="bg-[#1a1f3c] text-white text-[14px] font-semibold px-7 py-3 rounded-full hover:bg-[#2d3561] transition-colors"
            >
              Get Started Free
            </a>
            <a
              href="#"
              className="border border-[#1a1f3c] text-[#1a1f3c] text-[14px] font-medium px-7 py-3 rounded-full hover:bg-[#1a1f3c] hover:text-white transition-colors"
            >
              View plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
