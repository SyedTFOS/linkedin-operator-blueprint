import { useState, useEffect, useRef } from "react";
import { Hash, Target, Megaphone, Headphones, TrendingUp, Briefcase } from "lucide-react";

const MarketOpportunityStats = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("marketing");
  const [isVisible, setIsVisible] = useState({
    hero: false,
    platform: false,
    gap: false,
    math: false,
    closing: false
  });

  const industries = [
    { id: "research", label: "Research", icon: Target, marketSize: "$18B–$25B", companies: "120K–350K", avgSpend: "$42K" },
    { id: "marketing", label: "Marketing", icon: Megaphone, marketSize: "$12B–$120B", companies: "500K–2M", avgSpend: "$36K" },
    { id: "support", label: "Support", icon: Headphones, marketSize: "$8B–$15B", companies: "200K–450K", avgSpend: "$28K" },
    { id: "sales", label: "Sales", icon: TrendingUp, marketSize: "$22B–$85B", companies: "800K–1.8M", avgSpend: "$32K" },
    { id: "operations", label: "Operations", icon: Briefcase, marketSize: "$10B–$20B", companies: "300K–600K", avgSpend: "$30K" },
  ];

  const currentIndustry = industries.find(i => i.id === selectedIndustry) || industries[1];

  const heroRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const gapRef = useRef<HTMLDivElement>(null);
  const mathRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target.getAttribute('data-section');
          if (target) {
            setIsVisible(prev => ({ ...prev, [target]: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [
      { ref: heroRef, name: 'hero' },
      { ref: platformRef, name: 'platform' },
      { ref: gapRef, name: 'gap' },
      { ref: mathRef, name: 'math' },
      { ref: closingRef, name: 'closing' }
    ];

    refs.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-32 md:py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        
        {/* The Numbers Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <Hash className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              <span className="text-primary mr-1.5">iii.</span>The Numbers
            </span>
          </div>
        </div>

        {/* Hero Statement */}
        <div 
          ref={heroRef}
          data-section="hero"
          className={`mb-32 md:mb-48 transition-all duration-1000 ${
            isVisible.hero 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-[0.95] tracking-tight">
              A $120 billion
              <br />
              <span className="text-primary">blue ocean.</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              And you're one of the first 1,000 people to know about it.
            </p>
          </div>
        </div>

        {/* The Platform - Flowing Stats */}
        <div 
          ref={platformRef}
          data-section="platform"
          className="mb-48 grid md:grid-cols-3 gap-16 md:gap-24"
        >
          {[
            { num: '1.2B', label: 'Users', desc: 'Record engagement. Every industry. Every market.', delay: 0 },
            { num: '960M', label: 'Decision-Makers', desc: '4 in 5 have budget authority and can sign contracts.', delay: 200 },
            { num: '60M', label: 'Companies', desc: 'All looking for LinkedIn expertise.', delay: 400 }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className={`space-y-4 transition-all duration-1000 ${
                isVisible.platform 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <div className={`text-7xl md:text-8xl font-bold text-foreground tracking-tight transition-all duration-700 ${
                isVisible.platform ? 'scale-100' : 'scale-90'
              }`}>
                {stat.num}
              </div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                {stat.label}
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* The Gap - Editorial Layout */}
        <div 
          ref={gapRef}
          data-section="gap"
          className="mb-48"
        >
          <div className={`max-w-3xl mb-20 transition-all duration-1000 ${
            isVisible.gap 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              The gap is staggering.
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              While 1.2 billion professionals are on LinkedIn, less than 1% post weekly. 
              Almost no one is targeting Fortune 500s correctly. The market hasn't caught on yet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 border-t border-border pt-16">
            {[
              { num: '<1%', desc: 'Only 12 million out of 1.2 billion users create content consistently.', delay: 0 },
              { num: '0', desc: 'Virtually zero competition targeting high-value enterprise clients correctly.', delay: 300 }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className={`transition-all duration-1000 ${
                  isVisible.gap 
                    ? 'opacity-100 translate-x-0' 
                    : `opacity-0 ${idx === 0 ? '-translate-x-8' : 'translate-x-8'}`
                }`}
                style={{ transitionDelay: `${stat.delay}ms` }}
              >
                <div className={`text-6xl md:text-7xl font-bold text-primary mb-6 transition-all duration-700 ${
                  isVisible.gap ? 'scale-100' : 'scale-75'
                }`}
                style={{ transitionDelay: `${stat.delay + 200}ms` }}>
                  {stat.num}
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Math - Clean Callout with Industry Tabs */}
        <div 
          ref={mathRef}
          data-section="math"
          className={`mb-48 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-3xl p-8 md:p-16 border border-orange-200/50 transition-all duration-1000 ${
            isVisible.math 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          <div className="max-w-3xl">
            {/* Industry Selector */}
            <div className={`mb-8 flex flex-wrap gap-2 justify-center transition-all duration-1000 ${
              isVisible.math ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      selectedIndustry === industry.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-background/60 text-foreground hover:bg-background/80'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {industry.label}
                  </button>
                );
              })}
            </div>

            <div className="mb-12">
              <div className={`text-6xl md:text-8xl font-bold text-foreground mb-4 tracking-tight transition-all duration-500 ${
                isVisible.math ? 'scale-100' : 'scale-90'
              }`}
              style={{ transitionDelay: '200ms' }}
              key={currentIndustry.marketSize}>
                {currentIndustry.marketSize}
              </div>
              <div className="text-xl text-muted-foreground">
                Conservative to aggressive market estimate for {currentIndustry.label.toLowerCase()}
              </div>
            </div>

            <div className={`space-y-8 text-lg text-foreground/80 leading-relaxed transition-all duration-1000 ${
              isVisible.math ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
            key={currentIndustry.id}>
              <p>
                <span className="font-semibold text-foreground">{currentIndustry.companies} companies</span> need LinkedIn growth services in {currentIndustry.label.toLowerCase()} right now.
              </p>
              <p>
                <span className="font-semibold text-foreground">Average annual spend:</span> {currentIndustry.avgSpend} on strategy, content, ghostwriting, and positioning.
              </p>
              <p>
                <span className="font-semibold text-foreground">Total serviceable market:</span> {currentIndustry.marketSize} in demand for {currentIndustry.label.toLowerCase()}.
              </p>
              <p className="text-base text-muted-foreground pt-4 border-t border-orange-200">
                For context: LinkedIn's total revenue in 2024 was $16B. This is a completely separate services layer on top of the platform.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div 
          ref={closingRef}
          data-section="closing"
          className={`transition-all duration-1000 ${
            isVisible.closing 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-2xl md:text-3xl text-center text-foreground font-light leading-relaxed max-w-3xl mx-auto">
            The window is open. <span className="font-semibold text-primary">But it won't be forever.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunityStats;
