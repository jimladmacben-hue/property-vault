import Link from "next/link";
const cities = [
  {
    name: "Lagos",
    state: "Lagos state",
    listings: "20,400+",
    image: "/images/cities/lagos.jpg",
    active: true,
  },
  {
    name: "Abuja",
    state: "FCT",
    listings: "3,600+",
    image: "/images/cities/abuja.jpg",
    active: false,
  },
  {
    name: "Port Harcourt",
    state: "Rivers state",
    listings: "15,000+",
    image: "/images/cities/port-harcourt.jpg",
    active: false,
  },
  {
    name: "Enugu",
    state: "Enugu state",
    listings: "22,900+",
    image: "/images/cities/enugu.jpg",
    active: false,
  },
  {
    name: "Uyo",
    state: "Akwaiborn state",
    listings: "3,000+",
    image: "/images/cities/uyo.jpg",
    active: false,
  },
  {
    name: "Ibadan",
    state: "Oyo state",
    listings: "460+",
    image: "/images/cities/ibadan.jpg",
    active: false,
  },
];

export default function BrowseByCity() {
  return (
    <section className="w-full bg-[#f5f5f0] py-20 px-4">
      <div className="max-w-full px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[10.5px] font-normal tracking-[0.22em] text-[#F5A623] uppercase mb-2">
            Explore By Location
          </p>
          <h2 className="text-[30px] md:text-[34px] font-normal text-[#1a1f3c] mb-2">
            Browse Properties by Cities
          </h2>
          <p className="text-[13.5px] text-gray-500 max-w-xs mx-auto leading-relaxed">
            Search verified listings across Nigeria's most active property markets
          </p>
        </div>

        {/* City Cards Row */}
        <div className="flex gap-4 items-end justify-center overflow-x-auto pb-2">
        {cities.map((city) => (
  <div
    key={city.name}
    className={`relative rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer group transition-all duration-300 border border-[#916816] ${
      city.active ? "w-[156px] h-[436px]" : "w-[156px] h-[436px]"
    }`}
  >
    <img
      src={city.image}
      alt={city.name}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    <div className="absolute bottom-0 left-0 right-0 p-3">
      <span className="bg-[#916816] text-[#F1AE25] text-[9.5px] font-bold px-2 py-1 rounded-md border border-[#F1AE25] inline-block mb-1.5">
        {city.listings} listings
      </span>
      <p className="text-white font-extrabold text-[16px] leading-tight">
        {city.name}
      </p>
      <p className="text-white/70 text-[11px] mb-2">{city.state}</p>

      {/* Button visible only on hover */}
      <Link
        href={`/properties?city=${city.name}`}
        className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300"
      >
        Browse now <span>→</span>
      </Link>
    </div>
  </div>
))}
        </div>

        {/* View all button */}
        <div className="flex justify-center mt-10">
          <a
            href="/properties"
            className="border border-[#1a1f3c] text-[#1a1f3c] text-[13.5px] font-normal px-7 py-3 rounded-full hover:bg-[#1a1f3c] hover:text-white transition-all flex items-center gap-2 bg-white"
          >
            View all locations <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
