import { X, Check } from "lucide-react";

const ComparisonSection = () => {
  const redOceanPoints = [
    "Fighting for $500/month local businesses",
    "Clients constantly churn",
    "Price wars with 1,000 competitors",
    'Associated with "online money" scams',
    "No real credibility or authority",
    'Stuck pitching broke "aspiring entrepreneurs"'
  ];

  const blueOceanPoints = [
    "Fortune 500s with $50K+ budgets",
    "Long-term, high-value partnerships",
    "Less than 1% of users posting = zero competition",
    "Real business positioning & credibility",
    "Authority that opens doors to Forbes, YC, etc.",
    "Access to decision-makers in ANY industry"
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header with Red Arrow */}
        <div className="relative mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-foreground">
            While Everyone Else Is Stuck Here...
          </h2>
          
          {/* Red Arrow from "Here..." to Red Ocean */}
          <svg 
            className="absolute top-16 left-[45%] md:left-[48%] w-48 md:w-64 h-32 md:h-40 hidden lg:block pointer-events-none"
            viewBox="0 0 200 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M180 10 Q150 40, 120 70 Q90 100, 50 130"
              stroke="#ef4444"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M50 130 L65 125 M50 130 L55 115"
              stroke="#ef4444"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Split Screen Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 max-w-7xl mx-auto mb-16 relative">
          {/* LEFT SIDE - Red Ocean */}
          <div className="relative overflow-hidden rounded-3xl lg:rounded-r-none bg-gradient-to-br from-red-950 via-red-900 to-gray-900 border-2 border-red-800/50 p-8 md:p-12">
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
                  SMMA / Dropshipping / AI Agencies / Guru Space
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
          <div className="relative overflow-visible rounded-3xl lg:rounded-l-none bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 p-8 md:p-12 transform transition-all duration-500 hover:scale-[1.02] lg:hover:scale-105 hover:z-10">
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
                  LinkedIn Agency (LIA)
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

            {/* Orange Arrow from Blue Ocean to CTA */}
            <svg 
              className="absolute -bottom-20 right-12 md:right-24 w-48 md:w-56 h-32 md:h-36 hidden lg:block pointer-events-none z-20"
              viewBox="0 0 220 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M200 10 Q180 40, 150 70 Q120 100, 80 125"
                stroke="#f97316"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M80 125 L95 122 M80 125 L83 110"
                stroke="#f97316"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-3xl mx-auto relative">
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
