import { Route, Briefcase, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmbeddedChatbot from "@/components/EmbeddedChatbot";
import { useState } from "react";

const ExploringSection = () => {
  const [selectedPath, setSelectedPath] = useState<'agency' | 'business'>('business');

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <Route className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              <span className="text-primary mr-1.5">vii.</span>What's Inside LinkedIn Operator
            </span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center animate-fade-in">
          What's Inside LinkedIn Operator
        </h2>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto mb-12 text-center animate-fade-in">
          Everything you need to turn LinkedIn into a predictable revenue engine—whether you're building an agency empire or becoming the #1 authority in your industry.
        </p>

        {/* Path Toggle Buttons */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="grid grid-cols-2 gap-4 p-2 bg-muted/30 rounded-2xl">
            <button
              onClick={() => setSelectedPath('agency')}
              className={`group relative py-6 px-6 rounded-xl transition-all duration-300 ${
                selectedPath === 'agency'
                  ? 'bg-background shadow-lg'
                  : 'hover:bg-background/50'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  selectedPath === 'agency'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground group-hover:bg-primary/10'
                }`}>
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <div className={`font-bold text-base transition-colors ${
                    selectedPath === 'agency' ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    Building An Agency
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">(LIA)</div>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedPath('business')}
              className={`group relative py-6 px-6 rounded-xl transition-all duration-300 ${
                selectedPath === 'business'
                  ? 'bg-background shadow-lg'
                  : 'hover:bg-background/50'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  selectedPath === 'business'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground group-hover:bg-primary/10'
                }`}>
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <div className={`font-bold text-base transition-colors ${
                    selectedPath === 'business' ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    Growing My Business
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">(B2B)</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Program Options */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          {selectedPath === 'agency' ? (
            <>
              {/* LinkedIn Operator Academy */}
              <div className="group relative bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📦</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      LinkedIn Operator Academy
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Complete framework + 60 days community
                    </p>
                  </div>
                </div>
              </div>

              {/* LinkedIn Operator Secrets */}
              <div className="group relative bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/30 hover:border-primary rounded-2xl p-6 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">👑</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      LinkedIn Operator Secrets
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Everything + Elite access + Secrets
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* LinkedIn Founder */}
              <div className="group relative bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📦</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      LinkedIn Founder
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Complete framework + 60 days community
                    </p>
                  </div>
                </div>
              </div>

              {/* LinkedIn DFY */}
              <div className="group relative bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/30 hover:border-primary rounded-2xl p-6 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">👑</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      LinkedIn DFY
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Done-for-you execution + strategy
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="max-w-md mx-auto mb-16">
          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              size="lg"
              className="font-semibold"
            >
              All Features
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="font-semibold"
            >
              Compare Tiers
            </Button>
          </div>
        </div>

        {/* AI Chat Assistant */}
        <EmbeddedChatbot />
      </div>
    </section>
  );
};

export default ExploringSection;
