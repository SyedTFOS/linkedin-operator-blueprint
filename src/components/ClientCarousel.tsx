import { useState } from "react";
import { TrendingUp, MessageCircle, Users, DollarSign, Eye, Award, Rocket, Building2, Tv, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import robertoLuna from "@/assets/roberto-luna.png";
import rubaiyatHossain from "@/assets/rubaiyat-hossain.png";
import craigCecilio from "@/assets/craig-cecilio.png";

type TierType = "tier1" | "tier2" | "tier3";

export const ClientCarousel = () => {
  const [activeTier, setActiveTier] = useState<TierType>("tier1");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  const scrollPrev = () => {
    setActiveTier(prev => {
      if (prev === "tier1") return "tier3";
      if (prev === "tier2") return "tier1";
      return "tier2";
    });
  };
  
  const scrollNext = () => {
    setActiveTier(prev => {
      if (prev === "tier1") return "tier2";
      if (prev === "tier2") return "tier3";
      return "tier1";
    });
  };

  return (
    <div className="mt-24">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Our Client Results Across All Tiers
        </h3>

        {/* Tier Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTier("tier1")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTier === "tier1"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-accent/10 text-foreground hover:bg-accent/20"
            }`}
          >
            Tier 1: Whales
          </button>
          <button
            onClick={() => setActiveTier("tier2")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTier === "tier2"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-accent/10 text-foreground hover:bg-accent/20"
            }`}
          >
            Tier 2: SMBs
          </button>
          <button
            onClick={() => setActiveTier("tier3")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTier === "tier3"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-accent/10 text-foreground hover:bg-accent/20"
            }`}
          >
            Tier 3: Enterprise
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-primary-foreground" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-primary-foreground" />
        </button>

        {/* Embla Carousel */}
        <div className="overflow-hidden px-16" ref={emblaRef}>
          <div className="flex gap-8">
            {/* TIER 1 CARDS */}
            {activeTier === "tier1" && (
              <>
                {/* Card 1 - Roberto */}
                <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-22px)]">
                  <div className="group relative overflow-hidden rounded-2xl h-[500px] w-full">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${robertoLuna})` }}
                    >
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                    
                    {/* Major Win Badge - Always Visible */}
                    <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                      <TrendingUp className="w-4 h-4 text-primary-foreground" />
                      <span className="text-sm font-bold text-primary-foreground">Featured in Forbes</span>
                    </div>
                    
                    {/* Basic Info - Always Visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-2xl font-bold text-foreground mb-1">Roberto H. Luna</h4>
                      <p className="text-base text-primary font-semibold mb-2">Lunivate</p>
                      <p className="text-sm text-muted-foreground">Business Consulting</p>
                    </div>

                    {/* Detailed Results - Show on Hover */}
                    <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-foreground mb-1">Roberto H. Luna</h4>
                          <p className="text-sm text-primary font-semibold">Lunivate • 120 Days</p>
                        </div>

                        {/* Results */}
                        <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">
                          The Results:
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <TrendingUp className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">Featured in Forbes</p>
                              <p className="text-xs text-muted-foreground">Direct result of LinkedIn strategy</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Eye className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">15M+ LinkedIn views</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <MessageCircle className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">100,000+ comments</p>
                              <p className="text-xs text-muted-foreground">Across content</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Users className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">50,000+ followers</p>
                              <p className="text-xs text-muted-foreground">Built from zero</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 pt-2 border-t border-primary/20">
                            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <DollarSign className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-base font-bold text-primary">$500,000+ revenue</p>
                              <p className="text-xs text-muted-foreground">In just 120 days</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Rubaiyat */}
                <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-22px)]">
                  <div className="group relative overflow-hidden rounded-2xl h-[500px] w-full">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${rubaiyatHossain})` }}
                    >
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                    
                    {/* Major Win Badge */}
                    <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                      <Award className="w-4 h-4 text-primary-foreground" />
                      <span className="text-sm font-bold text-primary-foreground">Forbes 30 Under 30</span>
                    </div>
                    
                    {/* Basic Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-2xl font-bold text-foreground mb-1">Rubaiyat Hossain</h4>
                      <p className="text-base text-primary font-semibold mb-2">MarkaPolo AI</p>
                      <p className="text-sm text-muted-foreground">AI Marketing Platform</p>
                    </div>

                    {/* Detailed Results - Show on Hover */}
                    <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-foreground mb-1">Rubaiyat Hossain</h4>
                          <p className="text-sm text-primary font-semibold">MarkaPolo AI</p>
                        </div>

                        <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">
                          The Credentials:
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Award className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">Forbes 30 Under 30 Asia</p>
                              <p className="text-xs text-muted-foreground">Recognition award</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <DollarSign className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">$7.7M+ annual revenue</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Rocket className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">Backed by top accelerators</p>
                              <p className="text-xs text-muted-foreground">Google For Startups, NTDP, Taqadam</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 pt-2 border-t border-primary/20">
                            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <TrendingUp className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-base font-bold text-primary">Enterprise pipeline fueled</p>
                              <p className="text-xs text-muted-foreground">By LinkedIn strategy</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Craig */}
                <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-22px)]">
                  <div className="group relative overflow-hidden rounded-2xl h-[500px] w-full">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${craigCecilio})` }}
                    >
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                    
                    {/* Major Win Badge */}
                    <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                      <DollarSign className="w-4 h-4 text-primary-foreground" />
                      <span className="text-sm font-bold text-primary-foreground">$1B+ Raised</span>
                    </div>
                    
                    {/* Basic Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-2xl font-bold text-foreground mb-1">Craig Cecilio</h4>
                      <p className="text-base text-primary font-semibold mb-2">DiversyFund</p>
                      <p className="text-sm text-muted-foreground">Real Estate Investment</p>
                    </div>

                    {/* Detailed Results - Show on Hover */}
                    <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-foreground mb-1">Craig Cecilio</h4>
                          <p className="text-sm text-primary font-semibold">DiversyFund • Fortune 500 Level</p>
                        </div>

                        <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">
                          The Empire:
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <DollarSign className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">$1 Billion+ capital raised</p>
                              <p className="text-xs text-muted-foreground">From 40,000+ investors</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Users className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">500,000+ participants</p>
                              <p className="text-xs text-muted-foreground">30,000+ active users</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <TrendingUp className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">300% annual growth</p>
                              <p className="text-xs text-muted-foreground">Over 3 years</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Tv className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">Forbes, CNBC, Bloomberg</p>
                              <p className="text-xs text-muted-foreground">Major media features</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 pt-2 border-t border-primary/20">
                            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <MessageCircle className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-base font-bold text-primary">143,000+ social following</p>
                              <p className="text-xs text-muted-foreground">27K LinkedIn + 116K Instagram</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* TIER 2 CARDS */}
            {activeTier === "tier2" && (
              <>
                {[1, 2, 3].map((i) => (
                  <div key={`tier2-${i}`} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-22px)]">
                    <div className="group relative overflow-hidden rounded-2xl h-[500px] w-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-primary/20 to-accent/10">
                        <div className="w-full h-full flex items-center justify-center">
                          <Building2 className="w-32 h-32 text-primary/20" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h4 className="text-2xl font-bold text-foreground mb-1">SMB Client {i}</h4>
                        <p className="text-base text-primary font-semibold mb-2">Coming Soon</p>
                        <p className="text-sm text-muted-foreground">Success story placeholder</p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* TIER 3 CARDS */}
            {activeTier === "tier3" && (
              <>
                {[1, 2, 3].map((i) => (
                  <div key={`tier3-${i}`} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-22px)]">
                    <div className="group relative overflow-hidden rounded-2xl h-[500px] w-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/20 to-primary/10">
                        <div className="w-full h-full flex items-center justify-center">
                          <Briefcase className="w-32 h-32 text-primary/20" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h4 className="text-2xl font-bold text-foreground mb-1">Enterprise Client {i}</h4>
                        <p className="text-base text-primary font-semibold mb-2">Coming Soon</p>
                        <p className="text-sm text-muted-foreground">Success story placeholder</p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
