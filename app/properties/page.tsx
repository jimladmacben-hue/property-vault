import PropertiesHero from "@/components/properties/PropertiesHero";
import PropertiesFilter from "@/components/properties/PropertiesFilter";
import PropertiesGrid from "@/components/properties/PropertiesGrid";
import PropertiesPagination from "@/components/properties/PropertiesPagination";

export const metadata = {
  title: "Properties — Property Vault",
  description: "Browse verified property listings across Nigeria.",
};

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero + search */}
      <PropertiesHero />

      {/* Filter tabs */}
      <PropertiesFilter />

      {/* Property list + map */}
      <div className="flex flex-1 overflow-hidden" style={{ height: "calc(100vh - 340px)" }}>
        <PropertiesGrid />
      </div>

      {/* Pagination + CTA */}
      <PropertiesPagination />
    </div>
  );
}
