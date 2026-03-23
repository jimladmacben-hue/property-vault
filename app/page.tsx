import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import VerificationSection from "@/components/home/VerificationSection";
import BrowseByCity from "@/components/home/BrowseByCity";
import FeaturedAgents from "@/components/home/FeaturedAgents";
import Testimonials from "@/components/home/Testimonials";
import LatestListings from "@/components/home/LatestListings";
import PricingSection from "@/components/home/PricingSection";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <WhyChooseUs />
      <FeaturedProperties />
      <VerificationSection />
      <BrowseByCity />
      <LatestListings />
      <FeaturedAgents />
      <Testimonials />
      <PricingSection />
    </main>
  );
}