import AgentsHero from "@/components/agents/AgentsHero";
import FeaturedAgentsSection from "@/components/agents/FeaturedAgentsSection";
import AllVerifiedAgents from "@/components/agents/AllVerifiedAgents";
import AgentCTA from "@/components/agents/AgentCTA";

export const metadata = {
  title: "Agents | Property Vault",
  description:
    "Find NIN-verified, trusted real estate agents across Nigeria. Search by location, specialisation, or experience level.",
};

export default function AgentsPage() {
  return (
    <main>
      <AgentsHero />
      <FeaturedAgentsSection />
      <AllVerifiedAgents />
      <AgentCTA />
    </main>
  );
}
