import { useState } from "react";
import { X, Check, Scale, Briefcase, TrendingUp } from "lucide-react";

const ComparisonSection = () => {
  const [activePath, setActivePath] = useState<'lia' | 'b2b'>('lia');

  // LIA (Building An Agency) content
  const liaContent = {
    redOcean: [
      "Fighting for $500/month local businesses",
      "Clients constantly churn",
      "Price wars with 1,000 competitors",
      'Associated with "online money" scams',
      "No real credibility or authority",
      'Stuck pitching broke "aspiring entrepreneurs"',
      "Competing with 10,000 SMMA clones",
      "Building agencies that feel like a grind"
    ],
    blueOcean: [
      "Fortune 500s with $50K+ budgets",
      "Long-term, high-value partnerships",
      "Less than 1% of users posting = zero competition",
      "Real business positioning & credibility",
      "Authority that opens doors to Forbes, YC, etc.",
      "Access to decision-makers in ANY industry",
      "Signing $36K/year retainers with Fortune 500s"
    ],
    subtitle: "LinkedIn Operator Academy (LIA)",
    redOceanTitle: "SMMA / Dropshipping / AI Agencies / Guru Space"
  };

  // B2B (Growing My Business) content
  const b2bContent = {
    redOcean: [
      "Posting random content that goes nowhere",
      "No strategy, just hoping for engagement",
      "Can't figure out LinkedIn algorithm",
      "Profile looks like everyone else's",
      "Wasting time on content that doesn't convert",
      "No system for consistent lead generation",
      "Networking feels awkward and forced",
      "LinkedIn feels like a waste of time"
    ],
    blueOcean: [
      "Strategic content that positions you as THE authority",
      "Predictable inbound leads from decision-makers",
      "Algorithm mastery = consistent reach",
      "Profile optimized for conversion",
      "Content that builds brand equity & drives sales",
      "Systematic approach to qualified meetings",
      "Natural networking through value-first positioning",
      "LinkedIn becomes your #1 revenue channel"
    ],
    subtitle: "LinkedIn Founder (B2B)",
    redOceanTitle: "Random Posting / No Strategy / Generic Advice"
  };

  const content = activePath === 'lia' ? liaContent : b2bContent;
  const redOceanPoints = content.redOcean;
  const blueOceanPoints = content.blueOcean;

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Comparison Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <Scale className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              <span className="text-primary mr-1.5">iiii.</span>Comparison
            </span>
          </div>
        </div>

        {/* Header */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-12">
          While Everyone Else Is...
        </h2>

        {/* Path Selector Tabs */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 bg-card/50 rounded-xl border border-border/50">
            <button
              onClick={() => setActivePath('lia')}
              className={`px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activePath === 'lia'
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Briefcase className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm font-bold">Building An Agency</div>
                  <div className="text-xs opacity-80">(LIA)</div>
                </div>
              </div>
            </button>
            <button
              onClick={() => setActivePath('b2b')}
              className={`px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activePath === 'b2b'
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm font-bold">Growing My Business</div>
                  <div className="text-xs opacity-80">(B2B)</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Split Screen Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 max-w-7xl mx-auto mb-16 mt-12">
          {/* LEFT SIDE - Red Ocean */}
          <div className="relative overflow-visible rounded-3xl lg:rounded-r-none bg-gradient-to-br from-red-950 via-red-900 to-gray-900 border-2 border-red-800/50 p-8 md:p-12 pt-16 md:pt-20">
            {/* Stuck Here Label */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-red-500 px-8 py-3 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.8)] border-2 border-red-400">
                <span className="text-white font-bold text-lg md:text-xl">Stuck Here</span>
              </div>
            </div>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }} />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-red-400 mb-2">
                  The Saturated Red Ocean
                </h3>
                <p className="text-white/80 text-sm md:text-base font-medium">
                  {content.redOceanTitle}
                </p>
              </div>

              {/* Points */}
              <div className="space-y-4">
                {redOceanPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/40 flex items-center justify-center mt-0.5">
                      <X className="w-3.5 h-3.5 text-red-300" strokeWidth={3} />
                    </div>
                    <p className="text-white text-sm md:text-base leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Blue Ocean */}
          <div className="relative overflow-visible rounded-3xl lg:rounded-l-none bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 p-8 md:p-12 pb-16 md:pb-20 transform transition-all duration-500 hover:scale-[1.02] lg:hover:scale-105 hover:z-10">
            {/* Animated Glowing Border */}
            <div className="absolute inset-0 rounded-3xl lg:rounded-l-none">
              <div className="absolute inset-0 rounded-3xl lg:rounded-l-none border-4 border-orange-500/60 animate-pulse"></div>
              <div className="absolute inset-0 rounded-3xl lg:rounded-l-none border-2 border-orange-400"></div>
            </div>

            {/* Pulsing Glow Effects */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 rounded-3xl lg:rounded-l-none blur-xl opacity-40 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }} />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-2 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]">
                  The LinkedIn Blue Ocean
                </h3>
                <p className="text-orange-300 text-sm md:text-base font-medium">
                  {content.subtitle}
                </p>
              </div>

              {/* Points */}
              <div className="space-y-4">
                {blueOceanPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 group/item">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500/60 flex items-center justify-center mt-0.5 shadow-[0_0_10px_rgba(249,115,22,0.5)]">
                      <Check className="w-3.5 h-3.5 text-orange-200" strokeWidth={3} />
                    </div>
                    <p className="text-white text-sm md:text-base leading-relaxed font-medium group-hover/item:text-orange-50 transition-colors">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enter the Blue Ocean Label */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-10 py-4 rounded-full shadow-[0_0_40px_rgba(249,115,22,0.9)] border-2 border-orange-300 animate-pulse">
                <span className="text-white font-bold text-lg md:text-2xl whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Enter the blue ocean</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed">
            <span className="text-foreground">The choice is simple.</span>{" "}
            <span className="text-muted-foreground">Stop fighting for scraps.</span>{" "}
            <span className="text-orange-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]">Enter the blue ocean.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
