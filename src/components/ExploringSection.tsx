import { Route, ArrowRight } from "lucide-react";
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
          <Card className="text-left">
            <CardContent className="p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold text-muted-foreground mb-3">For: LinkedIn Agency</p>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  "I want to build & scale a LinkedIn Agency"
                </h3>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-foreground mb-3">You need:</p>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>The complete LinkedIn Operator framework</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Templates, SOPs, and positioning strategies</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Client acquisition systems that work</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Community + coaching to go from $5K to $50K+/mo</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-foreground mb-3">Results you can expect:</p>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">-</span>
                    <span>First client in 30-60 days</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">-</span>
                    <span>$10K-$50K/month within 90-180 days</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">-</span>
                    <span>Real companies, real budgets, real authority</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-foreground mb-2">Best For:</p>
                <p className="text-muted-foreground">Beginners, agency owners, industry experts, founders</p>
              </div>

              <Button className="w-full mb-6 group">
                Explore LIA Programs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Trusted By:</p>
                <p className="text-sm text-muted-foreground">Ethan C, Walter C, Sam B, Aryan S, Komail G, Vasilije S</p>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 - Businesses & Founders */}
          <Card className="text-left">
            <CardContent className="p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold text-muted-foreground mb-3">🏢 For Businesses & Founders</p>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  "I want LinkedIn to turn me into the GO-TO authority in my niche & drive pipeline for my business"
                </h3>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-foreground mb-3">You need:</p>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Done-for-you content creation</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Content that books sales calls & drives leads</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>A system that turns LinkedIn into your top acquisition channel</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-foreground mb-3">Results You Can Expect:</p>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">-</span>
                    <span>Forbes-level positioning</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">-</span>
                    <span>Inbound pipeline from decision-makers</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">-</span>
                    <span>Partnership & funding opportunities</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-foreground mb-2">Best For:</p>
                <p className="text-muted-foreground">SaaS, AI, B2B service companies, consultants, executives</p>
              </div>

              <Button className="w-full mb-6 group">
                Explore B2B Programs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Trusted By:</p>
                <p className="text-sm text-muted-foreground">Lunivate, Markapolo AI, DiversyFund, Arami AI, Creator Coach</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <p className="text-muted-foreground">
          Not sure which path?{" "}
          <a href="#" className="text-primary hover:underline font-semibold">
            Chat with us in our Whop →
          </a>
        </p>
      </div>
    </section>
  );
};

export default ExploringSection;
