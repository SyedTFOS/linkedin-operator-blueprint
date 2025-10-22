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
    <section className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
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
          Two Paths. Same Blue Ocean. Choose Your Entry Point.
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-16 text-center animate-fade-in">
          The LinkedIn opportunity is massive. Your approach depends on your goal: Build an agency empire, or become the
          authority in your niche.
        </p>

        {/* Two Path Cards with enhanced design */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {/* Card 1 - LinkedIn Agency */}
          <div className="group relative bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-card border-2 border-orange-200 dark:border-orange-900/40 rounded-3xl p-8 hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2">
            {/* Gradient overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-block px-4 py-1.5 bg-orange-100 dark:bg-orange-900/50 border border-orange-200 dark:border-orange-800 rounded-full mb-6">
                <span className="text-xs font-bold text-orange-700 dark:text-orange-400 uppercase tracking-wide">
                  LinkedIn Agency
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Build A 6-7 Figure LinkedIn Agency
              </h3>
              
              {/* Description */}
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                Turn LinkedIn into a predictable client acquisition engine and build a real agency—not another
                churn-and-burn operation.
              </p>

              {/* What You Will Get */}
              <div className="mb-6">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-4">What you will get:</p>
                <div className="space-y-3">
                  {[
                    "The Complete LinkedIn Operator Framework",
                    "Done-For-You Templates & Systems",
                    "Proven Client Acquisition System",
                    "Community + Weekly Coaching"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform">
                        <Check className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                      </div>
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results Box */}
              <div className="mb-8 p-5 bg-gradient-to-br from-orange-100/50 to-orange-50/30 dark:from-orange-900/30 dark:to-orange-950/20 border border-orange-200/50 dark:border-orange-800/30 rounded-2xl backdrop-blur-sm">
                <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-4">Results you can expect:</p>
                <div className="space-y-2.5">
                  {[
                    "First Client: 30-60 days (avg. $3K-$8K contract)",
                    "90-Days: $10K-$15K/month MRR",
                    "6-Month Goal: $25K-$50K+/month with systemized delivery",
                    "12-Month Vision: Scalable agency with team, recurring revenue, and enterprise pipeline"
                  ].map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For */}
              <div className="mb-6 pb-6 border-b border-orange-200/50 dark:border-orange-800/30">
                <p className="text-sm font-bold text-foreground mb-2">Best For:</p>
                <p className="text-sm text-muted-foreground">Beginners, agency owners, industry experts, founders</p>
              </div>

              {/* CTA */}
              <Button size="lg" className="w-full text-base font-bold group/btn bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-14 rounded-2xl">
                Apply for LIA Programs
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
              </Button>

              {/* Trusted By */}
              <div className="mt-6 pt-6 border-t border-orange-200/50 dark:border-orange-800/30">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">Trusted By:</p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[ethanPhoto, walterPhoto, samPhoto, aryanPhoto, komailPhoto, vasilijePhoto].map((photo, idx) => (
                      <img
                        key={idx}
                        src={photo}
                        alt={`Student ${idx + 1}`}
                        className="w-10 h-10 rounded-full border-2 border-background object-cover hover:scale-110 transition-transform"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">+100 more</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Business & Founders */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-card border-2 border-blue-200 dark:border-blue-900/40 rounded-3xl p-8 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
            {/* Gradient overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-800 rounded-full mb-6">
                <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wide">
                  For Businesses & Founders
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Become The #1 Authority In Your Industry
              </h3>
              
              {/* Description */}
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                Turn LinkedIn into your primary client acquisition channel. Book high-ticket sales calls, attract
                partnerships, and position yourself as the go-to expert in your niche.
              </p>

              {/* What You Will Get */}
              <div className="mb-6">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-4">What you will get:</p>
                <div className="space-y-3">
                  {[
                    "Strategic LinkedIn Positioning System (forbes level)",
                    "High-Converting Content Engine",
                    "White-Glove Execution",
                    "Dedicated Account Manager"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform">
                        <Check className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results Box */}
              <div className="mb-8 p-5 bg-gradient-to-br from-blue-100/50 to-blue-50/30 dark:from-blue-900/30 dark:to-blue-950/20 border border-blue-200/50 dark:border-blue-800/30 rounded-2xl backdrop-blur-sm">
                <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-4">Results you can expect:</p>
                <div className="space-y-2.5">
                  {[
                    "60 Days: 10-20 inbound inquiries/month from qualified prospects",
                    "90 Days: Positioned as a top voice in your industry",
                    "6 Months: Consistent pipeline of high-ticket opportunities, partnerships, or funding conversations",
                    "12 Months: LinkedIn as your #1 client acquisition channel"
                  ].map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For */}
              <div className="mb-6 pb-6 border-b border-blue-200/50 dark:border-blue-800/30">
                <p className="text-sm font-bold text-foreground mb-2">Best For:</p>
                <p className="text-sm text-muted-foreground">SaaS, AI, B2B service companies, consultants, executives</p>
              </div>

              {/* CTA */}
              <Button size="lg" className="w-full text-base font-bold group/btn bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-14 rounded-2xl">
                Get Your Custom LinkedIn Roadmap
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
              </Button>

              {/* Trusted By */}
              <div className="mt-6 pt-6 border-t border-blue-200/50 dark:border-blue-800/30">
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
        </div>

        {/* AI Chat Assistant */}
        <EmbeddedChatbot />
      </div>
    </section>
  );
};

export default ExploringSection;
