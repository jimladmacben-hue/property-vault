import Link from "next/link";
const properties = [
  {
    id: 1,
    badge: "TITLE VERIFIED",
    badgeColor: "bg-green-700",
    price: "₦45,000,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    title: "4 Bedroom Detached Duplex",
    location: "Lekki Phase 1, Lagos",
    specs: [
      { icon: "bed", label: "4", sub: "Beds" },
      { icon: "bath", label: "3", sub: "Baths" },
      { icon: "sqm", label: "320", sub: "sqm" },
    ],
    agent: "Adewale Realty",
  },
  {
    id: 2,
    badge: "C of O",
    badgeColor: "bg-green-700",
    price: "₦125,000,000",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    title: "600 sqm land, GRA",
    location: "GRA Portharcourt",
    specs: [
      { icon: "sqm", label: "320", sub: "sqm" },
      { icon: "type", label: "C of O", sub: "" },
      { icon: "tag", label: "Residential", sub: "" },
    ],
    agent: "PH Properties",
  },
  {
    id: 3,
    badge: "COMMERCIAL VERIFIED",
    badgeColor: "bg-green-700",
    price: "₦5,000,000",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    title: "Office Spaces, Wuse 2",
    location: "Wuse 2, Abuja",
    specs: [
      { icon: "sqm", label: "320", sub: "sqm" },
      { icon: "plan", label: "Open", sub: "Plan" },
      { icon: "park", label: "Big", sub: "Parking" },
    ],
    agent: "Abuja Commercials",
  },
  {
    id: 4,
    badge: "COMMERCIAL VERIFIED",
    badgeColor: "bg-green-700",
    price: "₦6,000,000",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
    title: "Office Spaces, Wuse 2",
    location: "Wuse 2, Abuja",
    specs: [
      { icon: "sqm", label: "320", sub: "sqm" },
      { icon: "plan", label: "Open", sub: "Plan" },
      { icon: "park", label: "Big", sub: "Parking" },
    ],
    agent: "Abuja Commercials",
  },
  {
    id: 5,
    badge: "TITLE VERIFIED",
    badgeColor: "bg-green-700",
    price: "₦45,000,000",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    title: "4 Bedroom Detached Duplex",
    location: "Lekki Phase 1, Lagos",
    specs: [
      { icon: "bed", label: "4", sub: "Beds" },
      { icon: "bath", label: "3", sub: "Baths" },
      { icon: "sqm", label: "320", sub: "sqm" },
    ],
    agent: "Adewale Realty",
  },
  {
    id: 6,
    badge: "C of O",
    badgeColor: "bg-green-700",
    price: "₦125,000,000",
    image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=600&q=80",
    title: "600 sqm land, GRA",
    location: "GRA Portharcourt",
    specs: [
      { icon: "sqm", label: "320", sub: "sqm" },
      { icon: "type", label: "C of O", sub: "" },
      { icon: "tag", label: "Residential", sub: "" },
    ],
    agent: "PH Properties",
  },
];

function BedIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M3 12V19M21 12V19M3 16H21M3 12C3 12 3 8 7 8H17C21 8 21 12 21 12" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 8V6" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function BathIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M4 12H20V15C20 17.21 18.21 19 16 19H8C5.79 19 4 17.21 4 15V12Z" stroke="#6b7280" strokeWidth="1.5"/>
      <path d="M7 12V7C7 5.9 7.9 5 9 5V5C10.1 5 11 5.9 11 7V8" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function SqmIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#6b7280" strokeWidth="1.5"/>
      <path d="M3 9h18M9 3v18" stroke="#6b7280" strokeWidth="1" strokeDasharray="2 2"/>
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="10" r="3" stroke="#6b7280" strokeWidth="1.5"/>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#6b7280" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}
function AgentIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" fill="#1a1f3c" opacity="0.15"/>
      <circle cx="12" cy="8" r="4" stroke="#1a1f3c" strokeWidth="1.2"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#1a1f3c" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function getSpecIcon(type: string) {
  if (type === "bed") return <BedIcon />;
  if (type === "bath") return <BathIcon />;
  return <SqmIcon />;
}

interface Property {
  id: number;
  badge: string;
  badgeColor: string;
  price: string;
  image: string;
  title: string;
  location: string;
  specs: { icon: string; label: string; sub: string }[];
  agent: string;
}

function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <Link href={`/properties/${property.id}`} className="block relative overflow-hidden group">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badge top-left */}
        <span className={`absolute top-3 left-3 ${property.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 z-10`}>
          {property.badge}
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        {/* Price bottom-right */}
        <span className="absolute bottom-3 right-3 bg-white text-[#1a1f3c] text-[11px] font-bold px-2.5 py-1 rounded-full shadow z-10">
          {property.price}
        </span>
      </Link>

      {/* Body */}
      <div className="p-4">
        <Link href={`/properties/${property.id}`}>
          <h3 className="text-[14px] font-bold text-[#1a1f3c] mb-1 hover:text-[#F5A623] transition-colors cursor-pointer">
            {property.title}
          </h3>
        </Link>

        {/* Location */}
        <div className="flex items-center gap-1 mb-3">
          <PinIcon />
          <span className="text-[12px] text-gray-500">{property.location}</span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-3 mb-4 border-t border-gray-100 pt-3">
          {property.specs.map((spec, i) => (
            <div key={i} className="flex items-center gap-1">
              {getSpecIcon(spec.icon)}
              <span className="text-[11px] text-gray-500">
                <span className="font-semibold text-[#1a1f3c]">{spec.label}</span>
                {spec.sub && ` ${spec.sub}`}
              </span>
            </div>
          ))}
        </div>

        {/* Agent + Details */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              <AgentIcon />
            </div>
            <span className="text-[11px] text-gray-500">{property.agent}</span>
          </div>
          <Link
            href={`/properties/${property.id}`}
            className="text-[11px] font-semibold text-[#1a1f3c] flex items-center gap-1 hover:text-[#F5A623] transition-colors"
          >
            Details <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProperties() {
  return (
    <section className="w-full bg-[#f5f5f0] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[10.5px] font-bold tracking-[0.2em] text-[#F5A623] uppercase mb-2">
            Handpicked For You
          </p>
          <h2 className="text-[32px] font-normal text-[#1a1f3c] mb-2">
            Featured Properties
          </h2>
          <p className="text-[13.5px] text-gray-500">
            Verified listings across Nigeria's top locations
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Browse Button */}
        <div className="flex justify-center mt-10">
          <a
            href="/properties"
            className="border border-[#1a1f3c] text-[#1a1f3c] text-[13.5px] font-medium px-7 py-3 rounded-full hover:bg-[#1a1f3c] hover:text-white transition-all flex items-center gap-2"
          >
            Browse all properties <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
