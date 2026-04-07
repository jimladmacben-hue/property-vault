import Link from "next/link";
import Image from "next/image";

const properties = [
  {
    image: "/images/invest-prop-1.jpg",
    badge: "Featured",
    badgeStyle: "bg-[#F5A623] text-white",
    badgeIcon: "★",
    price: "₦85,000,000",
    title: "5 Bed Smart Home, Ikoyi",
    location: "Ikoyi, Lagos Island",
    title_doc: "C of O",
    rentalYield: "9.2%",
    appreciation: "+18%",
  },
  {
    image: "/images/invest-prop-2.jpg",
    badge: "Verified",
    badgeStyle: "bg-green-600 text-white",
    badgeIcon: "✓",
    price: "₦85,000,000",
    title: "5 Bed Smart Home, Ikoyi",
    location: "Ikoyi, Lagos Island",
    title_doc: "C of O",
    rentalYield: "9.2%",
    appreciation: "+18%",
  },
  {
    image: "/images/invest-prop-3.jpg",
    badge: "Verified",
    badgeStyle: "bg-green-600 text-white",
    badgeIcon: "✓",
    price: "₦85,000,000",
    title: "5 Bed Smart Home, Ikoyi",
    location: "Ikoyi, Lagos Island",
    title_doc: "C of O",
    rentalYield: "9.2%",
    appreciation: "+18%",
  },
];

function PropertyCard({
  image,
  badge,
  badgeStyle,
  badgeIcon,
  price,
  title,
  location,
  title_doc,
  rentalYield,
  appreciation,
}: (typeof properties)[0]) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative h-56 sm:h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        {/* Badge */}
        <span
          className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${badgeStyle}`}
        >
          <span>{badgeIcon}</span>
          {badge}
        </span>
      </div>

      {/* Card body */}
      <div className="p-5 space-y-3">
        {/* Price */}
        <p className="text-2xl font-black text-[#1a1f3c]">{price}</p>

        {/* Title + location */}
        <div>
          <p className="text-sm font-bold text-[#1a1f3c]">{title}</p>
          <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#9ca3af" strokeWidth="1.5" />
              <circle cx="12" cy="10" r="3" stroke="#9ca3af" strokeWidth="1.5" />
            </svg>
            {location}
          </div>
        </div>

        {/* Stats pills */}
        <div className="flex items-center gap-2">
          <div className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-center">
            <p className="text-[10px] text-gray-400 font-medium mb-0.5">Title</p>
            <div className="flex items-center justify-center gap-1">
              <p className="text-xs font-bold text-[#1a1f3c]">{title_doc}</p>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="#9ca3af" />
              </svg>
            </div>
          </div>
          <div className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-center">
            <p className="text-[10px] text-gray-400 font-medium mb-0.5">Rental yield</p>
            <p className="text-xs font-bold text-green-600">{rentalYield}</p>
          </div>
          <div className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-center">
            <p className="text-[10px] text-gray-400 font-medium mb-0.5">Appreciation</p>
            <p className="text-xs font-bold text-green-600">{appreciation}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-1">
          <Link
            href="/properties/1"
            className="flex-1 bg-[#1a1f3c] hover:bg-[#2a3060] text-white text-sm font-bold py-2.5 rounded-xl text-center transition-colors duration-200"
          >
            View Details
          </Link>
          <button
            type="button"
            className="flex-1 border-2 border-gray-200 hover:border-[#1a1f3c] text-[#1a1f3c] text-sm font-bold py-2.5 rounded-xl transition-colors duration-200"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedInvestments() {
  return (
    <section className="bg-[#f5f5f0] py-16 sm:py-20 px-4">
      <div className="max-w-[1300px]
 mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#F5A623]" />
            <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
              Curated for Investors
            </span>
            <div className="w-8 h-px bg-[#F5A623]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f3c] mb-4">
            Featured Investment Properties
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Handpicked high-yield properties with verified titles, rental history, and
            transparent ROI projections.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {properties.map((p, i) => (
            <PropertyCard key={i} {...p} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="flex justify-center">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 border-2 border-[#1a1f3c] text-[#1a1f3c] text-sm font-bold px-8 py-3.5 rounded-full hover:bg-[#1a1f3c] hover:text-white transition-all duration-200"
          >
            View all 346+ investments
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
