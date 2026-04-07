import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurMission from "@/components/about/OurMission";
import WhatWeOffer from "@/components/about/WhatWeOffer";
import Testimonials from "@/components/home/Testimonials";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Us | Property Vault",
  description:
    "Learn about Property Vault — Nigeria's most trusted property discovery and investment platform. Built on trust, driven by results.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <OurMission />
      <WhatWeOffer />
      <Testimonials />
      <AboutCTA />
    </main>
  );
}
