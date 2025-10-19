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
        {/* Header */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-16 md:mb-24">
          While Everyone Else Is Stuck Here...
        </h2>

        {/* Split Screen Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 max-w-7xl mx-auto mb-16">
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
          <div className="relative overflow-hidden rounded-3xl lg:rounded-l-none bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 border-2 border-blue-700/50 p-8 md:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }} />
            </div>

            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">
                  The LinkedIn Blue Ocean
                </h3>
                <p className="text-orange-300 text-sm md:text-base font-medium">
                  LinkedIn Agency (LIA)
                </p>
              </div>

              {/* Points */}
              <div className="space-y-4">
                {blueOceanPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500/40 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-orange-300" strokeWidth={3} />
                    </div>
                    <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed">
            <span className="text-foreground">The choice is simple.</span>{" "}
            <span className="text-muted-foreground">Stop fighting for scraps.</span>{" "}
            <span className="text-orange-500">Enter the blue ocean.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
