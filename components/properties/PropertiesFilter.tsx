"use client";

const tabs = ["All", "Buy", "Sell", "Land", "Commercial", "Shortlet"];

interface FilterState {
  location: string;
  priceRange: string;
  bedrooms: string;
  propertyType: string;
  size: string;
  isVerifiedOnly: boolean;
}

interface PropertiesFilterProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  filters: FilterState;
  setFilters: (filters: FilterState | ((prev: FilterState) => FilterState)) => void;
}

export default function PropertiesFilter({ activeTab, setActiveTab, filters, setFilters }: PropertiesFilterProps) {
  
  const toggleVerified = () => {
    setFilters((prev: FilterState) => ({ ...prev, isVerifiedOnly: !prev.isVerifiedOnly }));
  };

  const activeFilterPills = [
    { label: filters.location, key: "location" },
    { label: filters.priceRange, key: "priceRange" },
    { label: filters.bedrooms, key: "bedrooms" },
    { label: filters.propertyType, key: "propertyType" },
    { label: filters.size, key: "size" },
    { label: "Verified only", key: "isVerifiedOnly", highlight: true, active: filters.isVerifiedOnly },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-100 px-6 md:px-10 py-4">
      <div className="flex flex-col gap-3">

        {/* Row 1: Type tabs + Sort by */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#1a1f3c] text-white"
                    : "text-gray-500 hover:text-[#1a1f3c] hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Sort by */}
          <div className="flex items-center gap-2">
            <span className="text-[13px] text-gray-400">Sort by</span>
            <button className="border border-gray-200 text-[#1a1f3c] text-[13px] font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5 hover:border-gray-400 transition-colors">
              Newest first
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="#1a1f3c" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Row 2: Active filter pills */}
        <div className="flex items-center gap-2 flex-wrap">
          {activeFilterPills.map((filter) => (
            <button
              key={filter.key}
              onClick={filter.key === "isVerifiedOnly" ? toggleVerified : undefined}
              className={`px-3 py-1.5 rounded-full text-[12px] font-medium border transition-all flex items-center gap-1 ${
                filter.highlight && filter.active
                  ? "border-[#F5A623] text-[#F5A623] bg-amber-50"
                  : filter.highlight
                  ? "border-gray-200 text-gray-400 hover:border-[#F5A623] hover:text-[#F5A623]"
                  : "border-gray-200 text-gray-600 hover:border-gray-400"
              }`}
            >
              {filter.label}
              {!filter.highlight && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          ))}

          {/* More filters */}
          <button className="px-3 py-1.5 rounded-full text-[12px] font-medium border border-gray-200 text-gray-600 hover:border-gray-400 flex items-center gap-1 transition-all">
            More filters
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
