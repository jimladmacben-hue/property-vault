"use client";

import { useState, useMemo } from "react";
import PropertiesHero from "@/components/properties/PropertiesHero";
import PropertiesFilter from "@/components/properties/PropertiesFilter";
import PropertiesGrid from "@/components/properties/PropertiesGrid";
import PropertiesPagination from "@/components/properties/PropertiesPagination";
import { properties, Property } from "@/lib/data";

export default function PropertiesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [filters, setFilters] = useState({
    location: "Lagos",
    priceRange: "Any",
    bedrooms: "Any",
    propertyType: "Any",
    size: "Any",
    isVerifiedOnly: false,
  });

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      // Filter by tab (Type)
      if (activeTab !== "All" && p.type !== activeTab) return false;

      // Filter by location
      if (filters.location !== "All" && !p.location.includes(filters.location)) return false;

      // Filter by verified
      if (filters.isVerifiedOnly && !p.isVerified) return false;

      // Add more filters as needed (price, bedrooms, etc.)
      
      return true;
    });
  }, [activeTab, filters]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero + search */}
      <PropertiesHero />

      {/* Filter tabs */}
      <PropertiesFilter 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        filters={filters}
        setFilters={setFilters}
      />

      {/* Property list + map */}
      <div className="flex flex-1 overflow-hidden" style={{ height: "calc(100vh - 340px)" }}>
        <PropertiesGrid properties={filteredProperties} />
      </div>

      {/* Pagination + CTA */}
      <PropertiesPagination total={filteredProperties.length} />
    </div>
  );
}
