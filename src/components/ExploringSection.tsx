import { Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmbeddedChatbot from "@/components/EmbeddedChatbot";
import { useState } from "react";

const ExploringSection = () => {
  const [selectedPath, setSelectedPath] = useState<'agency' | 'business'>('agency');

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <Route className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              <span className="text-primary mr-1.5">vii.</span>Your Next Step
            </span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-center animate-fade-in">
          Choose Your Path
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-center animate-fade-in">
          Select the program that matches your goals
        </p>

        {/* Path Toggle */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={() => setSelectedPath('agency')}
            className={`flex-1 py-4 px-6 rounded-2xl font-bold text-base transition-all duration-300 ${
              selectedPath === 'agency'
                ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg'
                : 'bg-card border-2 border-border text-muted-foreground hover:border-orange-300'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl">📦</span>
              <div className="text-left">
                <div>Building An Agency</div>
                <div className="text-xs font-normal opacity-80">(LIA)</div>
              </div>
            </div>
          </button>
          
          <button
            onClick={() => setSelectedPath('business')}
            className={`flex-1 py-4 px-6 rounded-2xl font-bold text-base transition-all duration-300 ${
              selectedPath === 'business'
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                : 'bg-card border-2 border-border text-muted-foreground hover:border-blue-300'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl">📈</span>
              <div className="text-left">
                <div>Growing My Business</div>
                <div className="text-xs font-normal opacity-80">(B2B)</div>
              </div>
            </div>
          </button>
        </div>

        {/* Program Options */}
        <div className="space-y-4 mb-8">
          {selectedPath === 'agency' ? (
            <>
              <div className="bg-card border-2 border-orange-200 hover:border-orange-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📚</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">LinkedIn Operator Academy</h3>
                    <p className="text-muted-foreground">Complete framework + 60 days community</p>
                  </div>
                  <div className="text-orange-600 font-bold text-lg">$300-400</div>
                </div>
              </div>

              <div className="bg-card border-2 border-orange-200 hover:border-orange-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">👑</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">LinkedIn Operator Secrets</h3>
                    <p className="text-muted-foreground">Everything + Elite access + Secrets</p>
                  </div>
                  <div className="text-orange-600 font-bold text-lg">$5,000+</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-card border-2 border-blue-200 hover:border-blue-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🎯</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">LinkedIn Founder</h3>
                    <p className="text-muted-foreground">Complete growth framework + 60 days community</p>
                  </div>
                  <div className="text-blue-600 font-bold text-lg">$997</div>
                </div>
              </div>

              <div className="bg-card border-2 border-blue-200 hover:border-blue-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">✨</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">LinkedIn DFY</h3>
                    <p className="text-muted-foreground">White-glove done-for-you service</p>
                  </div>
                  <div className="text-blue-600 font-bold text-lg">$5K/mo</div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            variant="outline"
            size="lg"
            className="px-8 h-12 rounded-xl font-medium border-2"
          >
            All Features
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 h-12 rounded-xl font-medium border-2"
          >
            Compare Tiers
          </Button>
        </div>

        {/* AI Chat Assistant */}
        <EmbeddedChatbot />
      </div>
    </section>
  );
};

export default ExploringSection;
