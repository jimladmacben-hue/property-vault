import InvestHero from "@/components/invest/InvestHero";
import InvestWhyChooseUs from "@/components/invest/InvestWhyChooseUs";
import FeaturedInvestments from "@/components/invest/FeaturedInvestments";
import MarketInsights from "@/components/invest/MarketInsights";
import DiasporaSection from "@/components/invest/DiasporaSection";

export const metadata = {
  title: "Invest | Property Vault",
  description:
    "Grow your wealth with Nigerian real estate. Verified listings, transparent ROI data, and trusted agents across Lagos, Abuja, and Port Harcourt.",
};

export default function InvestPage() {
  return (
    <main>
      <InvestHero />
      <InvestWhyChooseUs />
      <FeaturedInvestments />
      <MarketInsights />
      <DiasporaSection />
    </main>
  );
}
