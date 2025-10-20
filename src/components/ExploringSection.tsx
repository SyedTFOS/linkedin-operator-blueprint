import { Route, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExploringSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <Route className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              <span className="text-primary mr-1.5">vi.</span>Your Next Step
            </span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-center">
          Choose Your Path
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-16 text-center">
          Whether you're building your own LinkedIn agency or scaling your business on LinkedIn—we have the exact roadmap for you.
        </p>

        {/* Two Path Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto">
          {/* Card 1 - LinkedIn Agency */}
          <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
            {/* Header */}
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-4">
                <span className="text-xs font-bold text-primary uppercase tracking-wide">LinkedIn Agency</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                "I want to build & scale a LinkedIn Agency"
              </h3>
            </div>

            {/* What You Need */}
            <div className="mb-6">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-4">You need:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-foreground">The complete LinkedIn Operator framework</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-foreground">Templates, SOPs, and positioning strategies</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-foreground">Client acquisition systems that work</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-foreground">Community + coaching to go from $5K to $50K+/mo</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-6 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">Results you can expect:</p>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">First client in 30-60 days</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">$10K-$50K/month within 90-180 days</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Real companies, real budgets, real authority</span>
                </div>
              </div>
            </div>

            {/* Best For */}
            <div className="mb-6">
              <p className="text-sm font-bold text-foreground mb-2">Best For:</p>
              <p className="text-sm text-muted-foreground">Beginners, agency owners, industry experts, founders</p>
            </div>

            {/* CTA */}
            <Button size="lg" className="w-full text-base font-bold group">
              Explore LIA Programs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Trusted By */}
            <div className="mt-6 pt-6 border-t">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">Trusted By:</p>
              <p className="text-sm text-foreground">Ethan C, Walter C, Sam B, Aryan S, Komail G, Vasilije S</p>
            </div>
          </div>

          {/* Card 2 - Business & Founders */}
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 relative hover:border-primary transition-all duration-300 shadow-lg">
            {/* Premium Badge */}
            <div className="absolute top-6 right-6">
              <div className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wide">
                Premium
              </div>
            </div>

            {/* Header */}
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-4">
                <span className="text-xs font-bold text-primary uppercase tracking-wide">For Businesses & Founders</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 pr-20">
                "I want LinkedIn to turn me into the GO-TO authority in my niche & drive pipeline for my business"
              </h3>
            </div>

            {/* What You Need */}
            <div className="mb-6">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-4">You need:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-foreground">Done-for-you content creation</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-foreground">Content that books sales calls & drives leads</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-foreground">A system that turns LinkedIn into your top acquisition channel</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-6 p-4 bg-primary/5 border border-primary/10 rounded-lg">
              <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">Results You Can Expect:</p>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Forbes-level positioning</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Inbound pipeline from decision-makers</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Partnership & funding opportunities</span>
                </div>
              </div>
            </div>

            {/* Best For */}
            <div className="mb-6">
              <p className="text-sm font-bold text-foreground mb-2">Best For:</p>
              <p className="text-sm text-muted-foreground">SaaS, AI, B2B service companies, consultants, executives</p>
            </div>

            {/* CTA */}
            <Button size="lg" className="w-full text-base font-bold group">
              Explore B2B Programs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Trusted By */}
            <div className="mt-6 pt-6 border-t">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">Trusted By:</p>
              <p className="text-sm text-foreground">Lunivate, Markapolo AI, DiversyFund, Arami AI, Creator Coach</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-lg text-muted-foreground">
          Not sure which path?{" "}
          <a href="#" className="text-primary hover:underline font-bold transition-colors">
            Chat with us in our Whop →
          </a>
        </p>
      </div>
    </section>
  );
};

export default ExploringSection;
