import PropertyDetail from "@/components/properties/PropertyDetail";

export const metadata = {
  title: "7 Bedroom Detached Duplex — Property Vault",
  description: "Lekki Phase 11, Lagos. ₦90,000,000/yr",
};

export default function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <PropertyDetail id={params.id} />;
}
