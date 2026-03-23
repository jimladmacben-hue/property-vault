const testimonials = [
  {
    id: 1,
    name: "Tunde Adeyemi",
    city: "Lagos",
    role: "Buyer",
    roleColor: "bg-blue-50 text-blue-600 border-blue-200",
    avatarBg: "bg-[#1a1f3c]",
    initials: "TA",
    stars: 5,
    highlight: false,
    review:
      "I had been searching for a property in Lekki for months without success. Within two weeks on Property Vault, I found a verified 4-bedroom that matched everything I wanted. The verification process gave me the confidence to go ahead with the purchase.",
  },
  {
    id: 2,
    name: "Ibrahim Musa",
    city: "Ibadan",
    role: "Investor",
    roleColor: "bg-amber-50 text-amber-600 border-amber-200",
    avatarBg: "bg-[#4a5568]",
    initials: "IM",
    stars: 5,
    highlight: true,
    review:
      "As a diaspora investor based in the UK, I was worried about being scammed buying land in Nigeria. Property Vault's title verification system completely changed that. I purchased two plots in Abuja with full confidence, all done remotely.",
  },
  {
    id: 3,
    name: "Emeka Nwosu",
    city: "Enugu",
    role: "Tenant",
    roleColor: "bg-green-50 text-green-600 border-green-200",
    avatarBg: "bg-[#2d6a4f]",
    initials: "EN",
    stars: 5,
    highlight: false,
    review:
      "I had been searching for a property in Lekki for months without success. Within two weeks on Property Vault, I found a verified 4-bedroom that matched everything I wanted. The verification process gave me the confidence to go ahead with the purchase.",
  },
  {
    id: 4,
    name: "Sola Ogunleye",
    city: "Abuja",
    role: "Investor",
    roleColor: "bg-amber-50 text-amber-600 border-amber-200",
    avatarBg: "bg-[#744210]",
    initials: "SO",
    stars: 5,
    highlight: false,
    review:
      "I had been searching for a property in Lekki for months without success. Within two weeks on Property Vault, I found a verified 4-bedroom that matched everything I wanted. The verification process gave me the confidence to go ahead with the purchase.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 mb-3">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={s <= count ? "#F5A623" : "#e5e7eb"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-[#080d28] py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[10.5px] font-bold tracking-[0.22em] text-[#F5A623] uppercase mb-3">
            What Our Users Say
          </p>
          <h2 className="text-[30px] md:text-[36px] font-normal text-white leading-tight mb-3">
            Real People.{" "}
            <span className="text-[#F5A623]">Real Results</span>
          </h2>
          <p className="text-[13.5px] text-white/50">
            Verified professionals with proven track records across Nigeria
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-5 flex flex-col relative min-h-[420px]"
            >
              {/* Most helpful badge */}
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5A623] text-[#1a0f00] text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  Most helpful
                </span>
              )}

              {/* Quote mark */}
              <div className="mb-3">
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                  <path
                    d="M0 18V11.4C0 8.4 0.7 5.9 2.1 3.9C3.5 1.9 5.6 0.6 8.4 0L9.6 2.4C7.8 2.9 6.4 3.8 5.4 5.1C4.4 6.4 3.9 7.9 3.9 9.6H7.8V18H0ZM14.4 18V11.4C14.4 8.4 15.1 5.9 16.5 3.9C17.9 1.9 20 0.6 22.8 0L24 2.4C22.2 2.9 20.8 3.8 19.8 5.1C18.8 6.4 18.3 7.9 18.3 9.6H22.2V18H14.4Z"
                    fill="#1a1f3c"
                    opacity="0.15"
                  />
                </svg>
              </div>

              {/* Stars */}
              <Stars count={t.stars} />

              {/* Review text */}
              <p className="text-[14px] text-gray-500 leading-relaxed flex-1 mb-5 flex">
                {t.review}
              </p>

              {/* Reviewer */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2.5 mb-2">
                  <div
                    className={`w-9 h-9 rounded-full ${t.avatarBg} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white text-[11px] font-bold">
                      {t.initials}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12.5px] font-bold text-[#1a1f3c] leading-tight truncate">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-gray-400">{t.city}</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <span
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${t.roleColor}`}
                  >
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read all reviews button */}
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="border border-white/30 text-white text-[13.5px] font-medium px-7 py-3 rounded-full hover:border-white hover:bg-white/10 transition-all flex items-center gap-2"
          >
            Read all reviews <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
