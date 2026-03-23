const cities = [
  {
    name: "Lagos",
    state: "Lagos state",
    listings: "20,400+",
    image: "https://images.unsplash.com/photo-1618505948889-5a9eb3b8b5b8?w=400&q=80",
    active: true,
  },
  {
    name: "Abuja",
    state: "FCT",
    listings: "3,600+",
    image: "https://images.unsplash.com/photo-1580745294621-59c518a3a0a9?w=400&q=80",
    active: false,
  },
  {
    name: "Port Harcourt",
    state: "Rivers state",
    listings: "15,000+",
    image: "https://images.unsplash.com/photo-1574710435472-1f66ec8ab5eb?w=400&q=80",
    active: false,
  },
  {
    name: "Enugu",
    state: "Enugu state",
    listings: "22,900+",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    active: false,
  },
  {
    name: "Uyo",
    state: "Akwaiborn state",
    listings: "3,000+",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=400&q=80",
    active: false,
  },
  {
    name: "Ibadan",
    state: "Oyo state",
    listings: "460+",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80",
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
              className={`relative rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer group transition-all duration-300 ${
                city.active
                  ? "w-[200px] h-[600px]"
                  : "w-[200px] h-[590px]"
              }`}
            >
              {/* Background image */}
              <img
                src={city.image}
                alt={city.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              

              {/* City info bottom */}
              
              <div className="absolute bottom-0 left-0 right-0 p-3">
              <span className="bg-[#916816] text-[#F1AE25] text-[14px] font-normal px-2 py-1 rounded-md border border-[#916816] inline-block mb-1.5">
    {city.listings} listings
  </span>
                <p className="text-white font-normal text-[25px] leading-tight">
                  {city.name}
                </p>
                <p className="text-white/70 text-[14px] mb-2">{city.state}</p>
                {city.active && (
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white text-[11px] font-normal px-3 py-1.5 rounded-full transition-colors"
                  >
                    Browse now <span>→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="border border-[#1a1f3c] text-[#1a1f3c] text-[13.5px] font-normal px-7 py-3 rounded-full hover:bg-[#1a1f3c] hover:text-white transition-all flex items-center gap-2 bg-white"
          >
            View all locations <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
