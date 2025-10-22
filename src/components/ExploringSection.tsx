import { Route, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmbeddedChatbot from "@/components/EmbeddedChatbot";
import ethanPhoto from "@/assets/ethan-clouser.png";
import walterPhoto from "@/assets/walter-chung.png";
import samPhoto from "@/assets/sam-beck.png";
import aryanPhoto from "@/assets/aryan-shah.png";
import komailPhoto from "@/assets/komail-gillani.png";
import vasilijePhoto from "@/assets/vasilije-simic.png";
import diversyfundLogo from "@/assets/diversyfund-logo.png";
import playertwoLogo from "@/assets/playertwo-logo.png";
import lunivateLogo from "@/assets/lunivate-logo.png";

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
              <span className="text-primary mr-1.5">vii.</span>Your Next Step
            </span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-center">
          Two Paths. Same Blue Ocean. Choose Your Entry Point.
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-16 text-center">
          The LinkedIn opportunity is massive. Your approach depends on your goal: Build an agency empire, or become the
          authority in your niche.
        </p>

        {/* Two Path Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto">
          {/* Card 1 - LinkedIn Agency - ORANGE/WARM THEME */}
          <div className="bg-card border-2 border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/60 transition-all duration-300 hover:shadow-orange-500/10 hover:shadow-xl">
            {/* Header */}
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4">
                <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wide">
                  LinkedIn Agency
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Build A 6-7 Figure LinkedIn Agency
              </h3>
              <p className="text-base text-muted-foreground">
                Turn LinkedIn into a predictable client acquisition engine and build a real agency—not another
                churn-and-burn operation.
              </p>
            </div>

            {/* What You Will Get */}
            <div className="mb-6">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-4">What you will get:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">The Complete LinkedIn Operator Framework</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Done-For-You Templates & Systems</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Proven Client Acquisition System</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Community + Weekly Coaching</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-6 p-4 bg-orange-500/5 border border-orange-500/10 rounded-lg">
              <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">Results you can expect:</p>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">First Client: 30-60 days (avg. $3K-$8K contract)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">90-Days: $10K-$15K/month MRR</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">
                    6-Month Goal: $25K-$50K+/month with systemized delivery
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">
                    12-Month Vision: Scalable agency with team, recurring revenue, and enterprise pipeline
                  </span>
                </div>
              </div>
            </div>

            {/* Best For */}
            <div className="mb-6">
              <p className="text-sm font-bold text-foreground mb-2">Best For:</p>
              <p className="text-sm text-muted-foreground">Beginners, agency owners, industry experts, founders</p>
            </div>

            {/* CTA */}
            <Button size="lg" className="w-full text-base font-bold group bg-orange-600 hover:bg-orange-700 text-white">
              Apply for LIA Programs →
            </Button>

            {/* Trusted By */}
            <div className="mt-6 pt-6 border-t">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">Trusted By:</p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img
                    src={ethanPhoto}
                    alt="Ethan C"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                  <img
                    src={walterPhoto}
                    alt="Walter C"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                  <img
                    src={samPhoto}
                    alt="Sam B"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                  <img
                    src={aryanPhoto}
                    alt="Aryan S"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                  <img
                    src={komailPhoto}
                    alt="Komail G"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                  <img
                    src={vasilijePhoto}
                    alt="Vasilije S"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                </div>
                <span className="text-sm text-muted-foreground ml-2">+100 more</span>
              </div>
            </div>
          </div>

          {/* Card 2 - Business & Founders - BLUE/PROFESSIONAL THEME */}
          <div className="bg-card border-2 border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/60 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-xl">
            {/* Header */}
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                  For Businesses & Founders
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Become The #1 Authority In Your Industry
              </h3>
              <p className="text-base text-muted-foreground">
                Turn LinkedIn into your primary client acquisition channel. Book high-ticket sales calls, attract
                partnerships, and position yourself as the go-to expert in your niche.
              </p>
            </div>

            {/* What You Will Get */}
            <div className="mb-6">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-4">What you will get:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Strategic LinkedIn Positioning System (forbes level)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">High-Converting Content Engine</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">White-Glove Execution</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Dedicated Account Manager</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-6 p-4 bg-blue-500/5 border border-blue-500/10 rounded-lg">
              <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">Results you can expect:</p>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">60 Days: 10-20 inbound inquiries/month from qualified prospects</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">90 Days: Positioned as a top voice in your industry</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">
                    6 Months: Consistent pipeline of high-ticket opportunities, partnerships, or funding conversations
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">12 Months: LinkedIn as your #1 client acquisition channel</span>
                </div>
              </div>
            </div>

            {/* Best For */}
            <div className="mb-6">
              <p className="text-sm font-bold text-foreground mb-2">Best For:</p>
              <p className="text-sm text-muted-foreground">SaaS, AI, B2B service companies, consultants, executives</p>
            </div>

            {/* CTA */}
            <Button size="lg" className="w-full text-base font-bold group bg-blue-600 hover:bg-blue-700 text-white">
              Get Your Custom LinkedIn Roadmap →
            </Button>

            {/* Trusted By */}
            <div className="mt-6 pt-6 border-t">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">Trusted By:</p>
              <div className="flex items-center gap-4 flex-wrap">
                <img
                  src={lunivateLogo}
                  alt="Lunivate"
                  className="h-7 opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src={diversyfundLogo}
                  alt="DiversyFund"
                  className="h-6 opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src={playertwoLogo}
                  alt="PlayerTwo"
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                />
                <span className="text-sm font-medium text-foreground">Markapolo AI</span>
                <span className="text-sm text-muted-foreground">+50 more companies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Header */}
        <div className="text-center mb-8 mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Get All Of Your Questions Answered
          </h3>
        </div>

        {/* AI Chat Assistant */}
        <EmbeddedChatbot />
      </div>
    </section>
  );
};

export default ExploringSection;
