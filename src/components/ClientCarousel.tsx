import { useState, useEffect } from "react";
import { TrendingUp, MessageCircle, Users, DollarSign, Eye, Award, Rocket, Building2, Tv, Briefcase, ChevronLeft, ChevronRight, Linkedin, ChevronDown } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import robertoLuna from "@/assets/roberto-luna.png";
import robertoLunaLinkedin from "@/assets/roberto-luna-linkedin.png";
import rubaiyatHossain from "@/assets/rubaiyat-hossain.png";
import craigCecilio from "@/assets/craig-cecilio.png";
import samAramiVideo from "@/assets/sam-arami-video.mp4";
import benAlistor from "@/assets/ben-alistor.png";
import jessicaGreen from "@/assets/jessica-green.png";
import lianLim from "@/assets/lian-lim.png";
import aaninMahmodul from "@/assets/aanin-mahmodul.png";
import stevanPetrusic from "@/assets/stevan-petrusic.png";

type TierType = "tier1" | "tier2" | "tier3";

export const ClientCarousel = () => {
  const [activeTier, setActiveTier] = useState<TierType>("tier1");
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1
  });
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  const [showRobertoLinkedIn, setShowRobertoLinkedIn] = useState(false);

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

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (isArrowHovered) return;

    const intervalId = setInterval(() => {
      setActiveTier(prev => {
        if (prev === "tier1") return "tier2";
        if (prev === "tier2") return "tier3";
        return "tier1";
      });
    }, 4000);

    return () => clearInterval(intervalId);
  }, [isArrowHovered]);

  return (
    <div className="mt-24">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Our Client's Across All Industries
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
            Honorary Mentions
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative"
        onMouseEnter={() => setIsArrowHovered(true)}
        onMouseLeave={() => setIsArrowHovered(false)}
      >
        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollNext}
          className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
        </button>

        {/* Embla Carousel */}
        <div className="overflow-hidden px-12 md:px-16" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6 lg:gap-8">
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
                      <p className="text-sm text-muted-foreground">$500K Revenue • 15M+ LinkedIn Views • 120 Days</p>
                    </div>

                    {/* Detailed Results - Show on Hover */}
                    <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-between overflow-y-auto">
                      <div className="space-y-3">
                        {/* Header */}
                        <div className="mb-4">
                          <h4 className="text-xl font-bold text-foreground mb-1">Roberto H. Luna</h4>
                          <p className="text-sm text-primary font-semibold">Lunivate • 120 Days</p>
                        </div>

                        {/* Results */}
                        <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-2">
                          The Results:
                        </p>
                        
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <TrendingUp className="w-3 h-3 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">Featured in Forbes</p>
                              <p className="text-xs text-muted-foreground">Direct result of LinkedIn strategy</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Eye className="w-3 h-3 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">15M+ LinkedIn views</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <MessageCircle className="w-3 h-3 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">100,000+ comments</p>
                              <p className="text-xs text-muted-foreground">Across content</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Users className="w-3 h-3 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">50,000+ followers</p>
                              <p className="text-xs text-muted-foreground">Built from zero</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2 pt-2 border-t border-primary/20">
                            <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <DollarSign className="w-3 h-3 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-base font-bold text-primary">$500,000+ revenue</p>
                              <p className="text-xs text-muted-foreground">In just 120 days</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* LinkedIn Preview Button */}
                      <div className="mt-4 pt-4 border-t border-primary/20">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowRobertoLinkedIn(!showRobertoLinkedIn);
                          }}
                          className="w-full py-2 px-4 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
                        >
                          <Linkedin className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-foreground">
                            {showRobertoLinkedIn ? "Hide" : "Preview"} LinkedIn Profile
                          </span>
                          <ChevronDown className={`w-4 h-4 text-primary transition-transform ${showRobertoLinkedIn ? "rotate-180" : ""}`} />
                        </button>
                        
                        {showRobertoLinkedIn && (
                          <div className="mt-3 animate-in slide-in-from-top-2">
                            <div className="rounded-lg overflow-hidden border-2 border-primary/30">
                              <img 
                                src={robertoLunaLinkedin} 
                                alt="Roberto Luna LinkedIn Profile"
                                className="w-full h-auto"
                              />
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open('https://www.linkedin.com/in/roberto-luna-linkedinforgrowth/', '_blank');
                              }}
                              className="mt-2 w-full py-2 px-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
                            >
                              <Linkedin className="w-4 h-4" />
                              <span className="text-sm font-semibold">View Full Profile</span>
                            </button>
                          </div>
                        )}
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
                      <p className="text-sm text-muted-foreground">Forbes 30 Under 30 • $7.7M+ Revenue</p>
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
                      <p className="text-sm text-muted-foreground">$1B+ Raised • 40,000+ Investors • Real Estate Empire</p>
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
                {/* Card 1 - Sam Arami */}
                <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-22px)]">
                  <div className="group relative overflow-hidden rounded-2xl h-[500px] w-full">
                    {/* Background Video */}
                    <video 
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={samAramiVideo} type="video/mp4" />
                    </video>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                    
                    {/* Major Win Badge */}
                    <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                      <TrendingUp className="w-4 h-4 text-primary-foreground" />
                      <span className="text-sm font-bold text-primary-foreground">7-Figure Agency</span>
                    </div>
                    
                    {/* Basic Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-2xl font-bold text-foreground mb-1">Sam Arami</h4>
                      <p className="text-base text-primary font-semibold mb-2">Arami AI</p>
                      <p className="text-sm text-muted-foreground">AI Voice Agents Platform • 2x Exited Founder</p>
                    </div>

                    {/* Detailed Results - Show on Hover */}
                    <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-foreground mb-1">Sam Arami</h4>
                          <p className="text-sm text-primary font-semibold">Arami AI • 2x Exited Founder</p>
                        </div>

                        <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">
                          The Sprint:
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Rocket className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">3,000+ waitlist signups</p>
                              <p className="text-xs text-muted-foreground">In just 21 days</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <TrendingUp className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">800 → 7,000 LinkedIn followers</p>
                              <p className="text-xs text-muted-foreground">21 days growth</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Users className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">60,000+ Instagram followers</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Briefcase className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">Pivoted to LinkedIn Agency</p>
                              <p className="text-xs text-muted-foreground">For AI companies</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 pt-2 border-t border-primary/20">
                            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <DollarSign className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-base font-bold text-primary">Multiple 7-figures/year</p>
                              <p className="text-xs text-muted-foreground">LinkedIn agency revenue</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Ben Alistor */}
                <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-22px)]">
                  <div className="group relative overflow-hidden rounded-2xl h-[500px] w-full">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${benAlistor})` }}
                    >
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                    
                    {/* Major Win Badge */}
                    <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                      <DollarSign className="w-4 h-4 text-primary-foreground" />
                      <span className="text-sm font-bold text-primary-foreground">7-Figure Business</span>
                    </div>
                    
                    {/* Basic Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-2xl font-bold text-foreground mb-1">Ben Alistor</h4>
                      <p className="text-base text-primary font-semibold mb-2">Creator Coach</p>
                      <p className="text-sm text-muted-foreground">Creator Coaching • 58,000+ Instagram Following</p>
                    </div>

                    {/* Detailed Results - Show on Hover */}
                    <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-foreground mb-1">Ben Alistor</h4>
                          <p className="text-sm text-primary font-semibold">Creator Coach • Instagram → LinkedIn</p>
                        </div>

                        <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">
                          The Pivot:
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Users className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">58,000+ Instagram followers</p>
                              <p className="text-xs text-muted-foreground">Pre-LinkedIn platform</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <TrendingUp className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">2,700 LinkedIn followers</p>
                              <p className="text-xs text-muted-foreground">Started from scratch with us</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Rocket className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">30-50 leads/month on autopilot</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Award className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">Blue ocean pioneer</p>
                              <p className="text-xs text-muted-foreground">Recognized LinkedIn's potential early</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 pt-2 border-t border-primary/20">
                            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <DollarSign className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-base font-bold text-primary">7-figure+ creator coaching business</p>
                              <p className="text-xs text-muted-foreground">Built via LinkedIn</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Jessica M. Green */}
                <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-22px)]">
                  <div className="group relative overflow-hidden rounded-2xl h-[500px] w-full">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${jessicaGreen})` }}
                    >
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                    
                    {/* Major Win Badge */}
                    <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                      <DollarSign className="w-4 h-4 text-primary-foreground" />
                      <span className="text-sm font-bold text-primary-foreground">$100K/Month</span>
                    </div>
                    
                    {/* Basic Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-2xl font-bold text-foreground mb-1">Jessica M. Green</h4>
                      <p className="text-base text-primary font-semibold mb-2">Simply Done Resume</p>
                      <p className="text-sm text-muted-foreground">$2.5M+ Pipeline Value</p>
                    </div>

                    {/* Detailed Results - Show on Hover */}
                    <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-foreground mb-1">Jessica M. Green</h4>
                          <p className="text-sm text-primary font-semibold">Simply Done Resume</p>
                        </div>

                        <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">
                          The Results:
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <DollarSign className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">$2.5M+ pipeline value</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <DollarSign className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">$300K+ closed</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Users className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">7,700+ followers added</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <TrendingUp className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">30K+ likes, 5K+ comments</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 pt-2 border-t border-primary/20">
                            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <DollarSign className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-base font-bold text-primary">$100K/month on autopilot</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* TIER 3 CARDS - Honorary Mentions */}
            {activeTier === "tier3" && (
              <>
                {/* Lian Lim */}
                <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-22px)]">
                  <div className="group relative overflow-hidden rounded-2xl h-[500px] w-full">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${lianLim})` }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                    
                    {/* Major Win Badge */}
                    <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                      <DollarSign className="w-4 h-4 text-primary-foreground" />
                      <span className="text-sm font-bold text-primary-foreground">$300K+ Pipeline</span>
                    </div>
                    
                    {/* Basic Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-2xl font-bold text-foreground mb-1">Lian Lim</h4>
                      <p className="text-base text-primary font-semibold mb-2">Dashboard Lim</p>
                      <p className="text-sm text-muted-foreground">$300K+ Pipeline • 7.7K+ LinkedIn • 19K+ X Followers</p>
                    </div>

                    {/* Detailed Results - Show on Hover */}
                    <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-foreground mb-1">Lian Lim</h4>
                          <p className="text-sm text-primary font-semibold">Dashboard Lim</p>
                        </div>

                        <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">
                          The Results:
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <DollarSign className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">$300K+ Pipeline Added</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Users className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">7.7K+ LinkedIn Followers Added</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 pt-2 border-t border-primary/20">
                            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <TrendingUp className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-base font-bold text-primary">19K+ X Followers</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Aanin Mahmodul */}
                <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-22px)]">
                  <div className="group relative overflow-hidden rounded-2xl h-[500px] w-full">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${aaninMahmodul})` }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                    
                    {/* Major Win Badge */}
                    <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                      <Award className="w-4 h-4 text-primary-foreground" />
                      <span className="text-sm font-bold text-primary-foreground">Royal Backed 👑</span>
                    </div>
                    
                    {/* Basic Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-2xl font-bold text-foreground mb-1">Aanin Mahmodul</h4>
                      <p className="text-base text-primary font-semibold mb-2">RoyalXCode & AIDevelop</p>
                      <p className="text-sm text-muted-foreground">Royal Backed 👑 • Created HeyGen ($30M+ ARR) • 200+ Dev Team</p>
                    </div>

                    {/* Detailed Results - Show on Hover */}
                    <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-foreground mb-1">Aanin Mahmodul</h4>
                          <p className="text-sm text-primary font-semibold">RoyalXCode & AIDevelop</p>
                        </div>

                        <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">
                          The Achievements:
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Award className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">Royal Family Backed 👑</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Building2 className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">200+ Person Dev Company</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Users className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">Sourced 1000+ Employee Companies</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 pt-2 border-t border-primary/20">
                            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <Rocket className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-base font-bold text-primary">Created HeyGen ($30M+ ARR)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stevan Petrusic */}
                <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-22px)]">
                  <div className="group relative overflow-hidden rounded-2xl h-[500px] w-full">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${stevanPetrusic})` }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                    
                    {/* Major Win Badge */}
                    <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                      <Briefcase className="w-4 h-4 text-primary-foreground" />
                      <span className="text-sm font-bold text-primary-foreground">Creative Co-op 🎮</span>
                    </div>
                    
                    {/* Basic Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-2xl font-bold text-foreground mb-1">Stevan Petrusic</h4>
                      <p className="text-base text-primary font-semibold mb-2">PLAYERTWO</p>
                      <p className="text-sm text-muted-foreground">Creative Collective • Brand Strategy & Storytelling</p>
                    </div>

                    {/* Detailed Results - Show on Hover */}
                    <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-foreground mb-1">Stevan Petrusic</h4>
                          <p className="text-sm text-primary font-semibold">PLAYERTWO</p>
                        </div>

                        <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">
                          The Company:
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Briefcase className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground">Creative collective built on Curiosity, Creativity, Collaboration, Passion & Authenticity</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 pt-2 border-t border-primary/20">
                            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <Building2 className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-base font-bold text-primary">Founded 2018 • Worked with Stubbes Precast, Dominos Canada, TruLocal, Crumby & Metalex</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
