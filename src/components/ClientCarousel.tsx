import { useState } from "react";
import { TrendingUp, MessageCircle, Users, DollarSign, Eye, Award, Rocket, Building2, Tv, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import robertoLuna from "@/assets/roberto-luna.png";

type TierType = "tier1" | "tier2" | "tier3";

export const ClientCarousel = () => {
  const [activeTier, setActiveTier] = useState<TierType>("tier1");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

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
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${robertoLuna})` }}
                    >
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                      <TrendingUp className="w-4 h-4 text-primary-foreground" />
                      <span className="text-sm font-bold text-primary-foreground">Featured in Forbes</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-2xl font-bold text-foreground mb-1">Roberto H. Luna</h4>
                      <p className="text-base text-primary font-semibold mb-2">Lunivate</p>
                      <p className="text-sm text-muted-foreground">Business Consulting</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Rubaiyat */}
                <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-22px)]">
                  <div className="group relative overflow-hidden rounded-2xl h-[500px] w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-primary/30 to-accent/20">
                      <div className="w-full h-full flex items-center justify-center">
                        <Award className="w-32 h-32 text-primary/30" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                      <Award className="w-4 h-4 text-primary-foreground" />
                      <span className="text-sm font-bold text-primary-foreground">Forbes 30 Under 30</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-2xl font-bold text-foreground mb-1">Rubaiyat Hossain</h4>
                      <p className="text-base text-primary font-semibold mb-2">MarkaPolo AI</p>
                      <p className="text-sm text-muted-foreground">AI Marketing Platform</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Craig */}
                <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-22px)]">
                  <div className="group relative overflow-hidden rounded-2xl h-[500px] w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/30 to-accent/30">
                      <div className="w-full h-full flex items-center justify-center">
                        <Building2 className="w-32 h-32 text-primary/30" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                      <DollarSign className="w-4 h-4 text-primary-foreground" />
                      <span className="text-sm font-bold text-primary-foreground">$1B+ Raised</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-2xl font-bold text-foreground mb-1">Craig Cecilio</h4>
                      <p className="text-base text-primary font-semibold mb-2">DiversyFund</p>
                      <p className="text-sm text-muted-foreground">Real Estate Investment</p>
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
