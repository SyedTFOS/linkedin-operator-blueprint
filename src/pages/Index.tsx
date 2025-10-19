import Hero from "@/components/Hero";
import BlueOceanReveal from "@/components/BlueOceanReveal";
import ComparisonSection from "@/components/ComparisonSection";
import MarketOpportunityStats from "@/components/MarketOpportunityStats";
import WhopWidget from "@/components/WhopWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BlueOceanReveal />
      <ComparisonSection />
      <MarketOpportunityStats />
      <WhopWidget />
    </div>
  );
};

export default Index;
