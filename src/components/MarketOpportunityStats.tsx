import { Globe, Briefcase, Building2, BarChart3, Target, Zap, X, Check } from "lucide-react";

const MarketOpportunityStats = () => {
  const platformCards = [
    {
      icon: Globe,
      stat: "1.2 Billion Users",
      description: "Record engagement. Every industry. Every market."
    },
    {
      icon: Briefcase,
      stat: "960M Decision-Makers",
      description: "4 in 5 have budget authority and can sign contracts"
    },
    {
      icon: Building2,
      stat: "60 Million Companies",
      description: "SaaS, fintech, healthcare, consulting, B2B—all looking for LinkedIn expertise"
    }
  ];

  const gapCards = [
    {
      icon: BarChart3,
      stat: "<1% Post Weekly",
      description: "1.2 billion users. Only ~12 million creating content consistently."
    },
    {
      icon: Target,
      stat: "Zero Competition",
      description: "Almost no one is targeting Fortune 500s and decision-makers correctly"
    },
    {
      icon: Zap,
      stat: "First-Mover Window",
      description: "The market hasn't caught on yet. You're early."
    }
  ];

  const redOceanPoints = [
    "Fighting for $500/month local clients",
    "Competing with 10,000 SMMA clones",
    "Building agencies that feel like a grind"
  ];

  const blueOceanPoints = [
    "Signing $36K/year retainers with Fortune 500s",
    "Working with Y Combinator startups and venture-backed companies",
    "Building real authority in a blue ocean with almost zero competition"
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Headline Area */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-tight tracking-tight">
            A $120 Billion Blue Ocean
          </h2>
          <p className="text-lg md:text-2xl font-medium text-muted-foreground">
            And You're One of the First 1,000 People to Know About It
          </p>
        </div>

        {/* Row 1: Platform Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {platformCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <card.icon className="w-12 h-12 text-orange-500 mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 leading-tight">
                {card.stat}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2: Gap Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {gapCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <card.icon className="w-12 h-12 text-orange-500 mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 leading-tight">
                {card.stat}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Row 3: Large Opportunity Box */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-500 rounded-2xl p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <div className="text-5xl md:text-7xl font-black text-orange-500 mb-4 leading-none">
              $12B–$120B
            </div>
            <div className="text-xl md:text-2xl font-semibold text-foreground mb-8">
              Conservative to Aggressive Market Estimate
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-foreground mb-4">
              Here's the math:
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                <span className="text-base text-gray-700 leading-relaxed">
                  500K–2M companies need LinkedIn growth services
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                <span className="text-base text-gray-700 leading-relaxed">
                  Average spend: $36K/year on strategy, content, ghostwriting, positioning
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                <span className="text-base text-gray-700 leading-relaxed">
                  Market size: $12B–$120B in serviceable demand
                </span>
              </li>
            </ul>
            <p className="text-sm italic text-gray-600 leading-relaxed">
              (For context: LinkedIn's total revenue in 2024 was $16B—this is a SEPARATE services layer)
            </p>
          </div>
        </div>

        {/* Bottom Contrast Section */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-10">
            {/* Left Column */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-6">
                While everyone else is stuck in the 'online money' space:
              </h3>
              <ul className="space-y-4">
                {redOceanPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-base text-gray-300 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-6">
                You could be here:
              </h3>
              <ul className="space-y-4">
                {blueOceanPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-base text-gray-300 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Closing Line */}
          <p className="text-lg md:text-xl font-semibold text-orange-500 text-center">
            The window is open. But it won't be forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunityStats;
