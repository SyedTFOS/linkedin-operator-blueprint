const MarketOpportunityStats = () => {
  return (
    <section className="relative py-32 md:py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        
        {/* Hero Statement */}
        <div className="mb-32 md:mb-48">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-[0.95] tracking-tight">
              A $120 billion
              <br />
              <span className="text-orange-500">blue ocean.</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              And you're one of the first 1,000 people to know about it.
            </p>
          </div>
        </div>

        {/* The Platform - Flowing Stats */}
        <div className="mb-48 grid md:grid-cols-3 gap-16 md:gap-24">
          <div className="space-y-4">
            <div className="text-7xl md:text-8xl font-bold text-foreground tracking-tight">1.2B</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Users</div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Record engagement. Every industry. Every market.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="text-7xl md:text-8xl font-bold text-foreground tracking-tight">960M</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Decision-Makers</div>
            <p className="text-base text-muted-foreground leading-relaxed">
              4 in 5 have budget authority and can sign contracts.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="text-7xl md:text-8xl font-bold text-foreground tracking-tight">60M</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Companies</div>
            <p className="text-base text-muted-foreground leading-relaxed">
              All looking for LinkedIn expertise.
            </p>
          </div>
        </div>

        {/* The Gap - Editorial Layout */}
        <div className="mb-48">
          <div className="max-w-3xl mb-20">
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              The gap is staggering.
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              While 1.2 billion professionals are on LinkedIn, less than 1% post weekly. 
              Almost no one is targeting Fortune 500s correctly. The market hasn't caught on yet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 border-t border-border pt-16">
            <div>
              <div className="text-6xl md:text-7xl font-bold text-orange-500 mb-6">&lt;1%</div>
              <p className="text-lg text-foreground leading-relaxed">
                Only 12 million out of 1.2 billion users create content consistently.
              </p>
            </div>
            
            <div>
              <div className="text-6xl md:text-7xl font-bold text-orange-500 mb-6">0</div>
              <p className="text-lg text-foreground leading-relaxed">
                Virtually zero competition targeting high-value enterprise clients correctly.
              </p>
            </div>
          </div>
        </div>

        {/* The Math - Clean Callout */}
        <div className="mb-48 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-3xl p-12 md:p-16 border border-orange-200/50">
          <div className="max-w-3xl">
            <div className="mb-12">
              <div className="text-6xl md:text-8xl font-bold text-foreground mb-4 tracking-tight">
                $12B–$120B
              </div>
              <div className="text-xl text-muted-foreground">
                Conservative to aggressive market estimate
              </div>
            </div>

            <div className="space-y-8 text-lg text-foreground/80 leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">500K–2M companies</span> need LinkedIn growth services right now.
              </p>
              <p>
                <span className="font-semibold text-foreground">Average annual spend:</span> $36K on strategy, content, ghostwriting, and positioning.
              </p>
              <p>
                <span className="font-semibold text-foreground">Total serviceable market:</span> Between $12B and $120B in demand.
              </p>
              <p className="text-base text-muted-foreground pt-4 border-t border-orange-200">
                For context: LinkedIn's total revenue in 2024 was $16B. This is a completely separate services layer on top of the platform.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-32 pt-16 border-t border-border">
          <p className="text-2xl md:text-3xl text-center text-foreground font-light leading-relaxed max-w-3xl mx-auto">
            The window is open. <span className="font-semibold text-orange-500">But it won't be forever.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunityStats;
