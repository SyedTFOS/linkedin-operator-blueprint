import { Route, ArrowRight, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ExploringSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto text-center">
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
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Choose Your Path
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
          Whether you're building your own LinkedIn agency or scaling your business on LinkedIn—we have the exact roadmap for you.
        </p>

        {/* Two Path Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Card 1 - LinkedIn Agency */}
          <Card className="text-left relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary"></div>
            
            <CardContent className="p-8">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-foreground">LinkedIn Agency</span>
              </div>

              {/* Main Value Prop */}
              <div className="mb-6 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                  "I want to build & scale a LinkedIn Agency"
                </h3>
              </div>

              {/* You Need Section */}
              <div className="mb-6 p-6 bg-accent/5 rounded-lg">
                <p className="font-bold text-foreground mb-4 text-lg">You need:</p>
                <ul className="space-y-3">
                  <li className="text-foreground flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>The complete LinkedIn Operator framework</span>
                  </li>
                  <li className="text-foreground flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Templates, SOPs, and positioning strategies</span>
                  </li>
                  <li className="text-foreground flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Client acquisition systems that work</span>
                  </li>
                  <li className="text-foreground flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Community + coaching to go from $5K to $50K+/mo</span>
                  </li>
                </ul>
              </div>

              {/* Results Section */}
              <div className="mb-6">
                <p className="font-bold text-foreground mb-4 text-lg">Results you can expect:</p>
                <ul className="space-y-3">
                  <li className="text-foreground flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span><span className="font-semibold">First client in 30-60 days</span></span>
                  </li>
                  <li className="text-foreground flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span><span className="font-semibold">$10K-$50K/month within 90-180 days</span></span>
                  </li>
                  <li className="text-foreground flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span><span className="font-semibold">Real companies, real budgets, real authority</span></span>
                  </li>
                </ul>
              </div>

              {/* Best For */}
              <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                <p className="font-bold text-foreground mb-2">Best For:</p>
                <p className="text-foreground">Beginners, agency owners, industry experts, founders</p>
              </div>

              {/* CTA Button */}
              <Button className="w-full h-14 text-lg font-bold mb-6 group/btn relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore LIA Programs
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </Button>

              {/* Trusted By */}
              <div className="border-t pt-4">
                <p className="text-xs font-semibold text-muted-foreground mb-2">TRUSTED BY:</p>
                <p className="text-sm text-foreground font-medium">Ethan C, Walter C, Sam B, Aryan S, Komail G, Vasilije S</p>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 - Businesses & Founders */}
          <Card className="text-left relative overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group bg-gradient-to-br from-primary/5 to-transparent">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-primary/80"></div>
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                PREMIUM
              </div>
            </div>
            
            <CardContent className="p-8">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg mb-6">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-foreground">For Businesses & Founders</span>
              </div>

              {/* Main Value Prop */}
              <div className="mb-6 p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
                <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                  "I want LinkedIn to turn me into the GO-TO authority in my niche & drive pipeline for my business"
                </h3>
              </div>

              {/* You Need Section */}
              <div className="mb-6 p-6 bg-primary/5 rounded-lg border border-primary/10">
                <p className="font-bold text-foreground mb-4 text-lg">You need:</p>
                <ul className="space-y-3">
                  <li className="text-foreground flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Done-for-you content creation</span>
                  </li>
                  <li className="text-foreground flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Content that books sales calls & drives leads</span>
                  </li>
                  <li className="text-foreground flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>A system that turns LinkedIn into your top acquisition channel</span>
                  </li>
                </ul>
              </div>

              {/* Results Section */}
              <div className="mb-6">
                <p className="font-bold text-foreground mb-4 text-lg">Results You Can Expect:</p>
                <ul className="space-y-3">
                  <li className="text-foreground flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span><span className="font-semibold">Forbes-level positioning</span></span>
                  </li>
                  <li className="text-foreground flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span><span className="font-semibold">Inbound pipeline from decision-makers</span></span>
                  </li>
                  <li className="text-foreground flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span><span className="font-semibold">Partnership & funding opportunities</span></span>
                  </li>
                </ul>
              </div>

              {/* Best For */}
              <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-primary/10">
                <p className="font-bold text-foreground mb-2">Best For:</p>
                <p className="text-foreground">SaaS, AI, B2B service companies, consultants, executives</p>
              </div>

              {/* CTA Button */}
              <Button className="w-full h-14 text-lg font-bold mb-6 group/btn relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore B2B Programs
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </Button>

              {/* Trusted By */}
              <div className="border-t pt-4">
                <p className="text-xs font-semibold text-muted-foreground mb-2">TRUSTED BY:</p>
                <p className="text-sm text-foreground font-medium">Lunivate, Markapolo AI, DiversyFund, Arami AI, Creator Coach</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <p className="text-lg text-muted-foreground">
          Not sure which path?{" "}
          <a href="#" className="text-primary hover:underline font-bold">
            Chat with us in our Whop →
          </a>
        </p>
      </div>
    </section>
  );
};

export default ExploringSection;
