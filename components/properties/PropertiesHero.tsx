"use client";
 
export default function PropertiesHero() {
  return (
    <div className="relative w-full h-[340px] overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
        alt="Properties"
        className="w-full h-full object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
 
      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-20 pb-6">
        <div className="bg-[#1a1f3c]/90 backdrop-blur-sm rounded-lg mx-0 md:mx-4 p-8 flex flex-col gap-4">
 
          {/* Breadcrumb + result count */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[16px] text-white/70">
              <span>Home</span>
              <span className="text-white/40">›</span>
              <span className="text-white font-normal">Properties</span>
            </div>
            <p className="text-[16px] text-white/80">
              <span className="text-[#F5A623] font-normal">2,847 properties</span>{" "}
              found across Nigeria
            </p>
          </div>
 
          {/* Search bar */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="flex items-center px-4 py-4">
 
              {/* Type */}
              <div className="flex-1 flex flex-col px-3 border-r border-gray-200">
                <span className="text-[10px] font-bold text-[#1a1f3c] uppercase tracking-wide mb-1">
                  Type
                </span>
                <div className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="7" height="7" rx="1" stroke="#aaa" strokeWidth="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1" stroke="#aaa" strokeWidth="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1" stroke="#aaa" strokeWidth="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1" stroke="#aaa" strokeWidth="1.5" />
                  </svg>
                  <span>All types</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-auto">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
 
              {/* Location */}
              <div className="flex-1 flex flex-col px-3 border-r border-gray-200">
                <span className="text-[10px] font-bold text-[#1a1f3c] uppercase tracking-wide mb-1">
                  Location
                </span>
                <div className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="10" r="3" stroke="#aaa" strokeWidth="1.5" />
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#aaa" strokeWidth="1.5" fill="none" />
                  </svg>
                  <span>Choose preferred location</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-auto">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
 
              {/* Price */}
              <div className="flex-1 flex flex-col px-3">
                <span className="text-[10px] font-bold text-[#1a1f3c] uppercase tracking-wide mb-1">
                  Price
                </span>
                <div className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span>Select price range</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-auto">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
 
              {/* Search button */}
              <div className="pl-4">
                <button className="bg-[#1a1f3c] hover:bg-[#2d3561] text-white text-sm font-semibold px-5 py-3 rounded-xl flex items-center gap-2 whitespace-nowrap transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2" />
                    <path d="M21 21l-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Search property
                </button>
              </div>
            </div>
          </div>
 
          {/* Updated time */}
          <div className="flex justify-end">
            <p className="text-[11.5px] text-white/50">Updated 5 minutes ago</p>
          </div>
 
        </div>
      </div>
    </div>
  );
}