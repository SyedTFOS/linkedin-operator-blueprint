import Hero from "@/components/Hero";
import BlueOceanReveal from "@/components/BlueOceanReveal";
import ComparisonSection from "@/components/ComparisonSection";
import MarketOpportunityStats from "@/components/MarketOpportunityStats";
import ExperimentSection from "@/components/ExperimentSection";
import ExploringSection from "@/components/ExploringSection";
import WhopWidget from "@/components/WhopWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BlueOceanReveal />
      <MarketOpportunityStats />
      <ComparisonSection />
      <ExperimentSection />
      <ExploringSection />
      <WhopWidget />
    </div>
  );
};

export default Index;
