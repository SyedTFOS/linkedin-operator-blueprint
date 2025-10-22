import Hero from "@/components/Hero";
import BlueOceanReveal from "@/components/BlueOceanReveal";
import ComparisonSection from "@/components/ComparisonSection";
import MarketOpportunityStats from "@/components/MarketOpportunityStats";
import ExperimentSection from "@/components/ExperimentSection";
import WhatsInsideSection from "@/components/WhatsInsideSection";
import ExploringSection from "@/components/ExploringSection";
import WhopWidget from "@/components/WhopWidget";
import { NavigationSidebar } from "@/components/NavigationSidebar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationSidebar />
      <div className="lg:ml-64">
        <div id="about-linkedin-operator">
          <Hero />
        </div>
        <div id="discovery">
          <BlueOceanReveal />
        </div>
        <div id="numbers">
          <MarketOpportunityStats />
        </div>
        <div id="comparison">
          <ComparisonSection />
        </div>
        <div id="experiment">
          <ExperimentSection />
        </div>
        <div id="about-programs" className="pt-12">
          <WhatsInsideSection />
        </div>
        <div id="next-step">
          <ExploringSection />
        </div>
        <div id="chat-leo">
          <WhopWidget />
        </div>
      </div>
    </div>
  );
};

export default Index;
