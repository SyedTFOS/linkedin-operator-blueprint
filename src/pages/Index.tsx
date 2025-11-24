import Hero from "@/components/Hero";
import LinkedInAgencySection from "@/components/LinkedInAgencySection";
import BlueOceanReveal from "@/components/BlueOceanReveal";
import MarketOpportunityStats from "@/components/MarketOpportunityStats";
import ExperimentSection from "@/components/ExperimentSection";
import WhatsInsideSection from "@/components/WhatsInsideSection";
import ExploringSection from "@/components/ExploringSection";
import WhopWidget from "@/components/WhopWidget";
import { FloatingNav } from "@/components/FloatingNav";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo-main.png";

const Index = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Desktop Header with Logo and Nav - Sticky across entire page */}
      <div className="hidden md:block sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-6">
          {/* Logo - hides on scroll */}
          {!scrolled && (
            <div className="py-4 flex items-center justify-center border-b border-border/30">
              <img src={logo} alt="LinkedIn Operator" className="h-12 md:h-14 lg:h-16" loading="eager" />
            </div>
          )}
          
          {/* Navigation Bar - always visible and sticks */}
          <div className="py-3">
            <FloatingNav centered />
          </div>
        </div>
      </div>

      {/* Mobile - Keep FloatingNav as floating */}
      <div className="md:hidden">
        <FloatingNav />
      </div>

      <div>
        <div id="about-linkedin-operator">
          <Hero />
        </div>
        <div id="what-is-linkedin-agency">
          <LinkedInAgencySection />
        </div>
        <div id="discovery">
          <BlueOceanReveal />
        </div>
        <div id="numbers">
          <MarketOpportunityStats />
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

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 LinkedIn Operator</p>
            <div className="flex gap-6">
              <button onClick={() => navigate('/terms')} className="hover:text-foreground transition-colors">
                Terms & Conditions
              </button>
              <button onClick={() => navigate('/privacy')} className="hover:text-foreground transition-colors">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
