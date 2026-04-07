const cards = [
  {
    image: "/images/invest/invest-verified.jpg",
    title: "Every title is verified before you see it",
    body: "No C of O, no listing. We check every document manually so you never discover a title problem after you've paid.",
    badge: "100% pre-verified",
  },
  {
    image: "/images/invest/invest-roi.jpg",
    title: "Real Yield Data, Not Developer Projections",
    body: "Our ROI figures come from actual verified transactions on the platform — not estimates from developers trying to sell you something. Real numbers, real deals.",
    badge: "Based on live transactions",
  },
  {
    image: "/images/invest/invest-agents.jpg",
    title: "Agents Accountable by Name and NIN",
    body: "Every agent is NIN-verified and publicly rated. Their response rate, reviews, and transaction history are visible. No anonymous middlemen, no ghost agents.",
    badge: "5,400+ verified agents",
  },
  {
    image: "/images/invest/invest-secure.jpg",
    title: "Your Money Moves Safely Every Time",
    body: "Bank transfers only. Full paper trail on every transaction. We connect you with verified property lawyers in every state so nothing slips through the cracks.",
    badge: "Zero cash transactions",
  },
];

export default function InvestWhyChooseUs() {
  return (
    <section className="bg-[#f5f5f0] py-16 sm:py-20 px-4">
      <div className="max-w-[1600px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#F5A623]" />
            <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
              Why Choose Us
            </span>
            <div className="w-8 h-px bg-[#F5A623]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f3c] mb-4">
            Why Serious Investors Choose Us
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            We built this platform to solve the exact problems that have burned
            Nigerian property investors before.
          </p>
        </div>

        {/* 4-column cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative rounded-2xl overflow-hidden h-64 sm:h-72 lg:h-80 group"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${card.image}')` }}
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-5">
                <h3 className="text-sm font-black text-white leading-snug mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-white/75 leading-relaxed mb-4">
                  {card.body}
                </p>
                {/* Badge */}
                <span className="inline-flex self-start items-center px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[11px] font-semibold">
                  {card.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
