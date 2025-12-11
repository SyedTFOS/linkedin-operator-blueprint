import { TestimonialCard } from "@/components/TestimonialCard";
import walterChung from "@/assets/walter-chung.png";
import jessicaGreen from "@/assets/jessica-green.png";
import ethanClouser from "@/assets/ethan-clouser.png";

export const FounderStorySection = () => {
  return (
    <div className="py-24 md:py-40 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              💡 THE ORIGIN STORY
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            How We Went From Zero To Signing <span className="text-gradient">Mastercard In 6 Months</span>
          </h2>
        </div>

        {/* Founder Story Content */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              18 months ago, we were stuck at $5K/month signing local businesses that churned every 90 days.
            </p>
            
            <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
              Then we discovered something that didn't make sense: 1.2 billion professionals on LinkedIn. 960 million decision-makers with REAL budgets. Yet less than 1% posting consistently.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Everyone was fighting over Instagram and TikTok. LinkedIn was a ghost town with Fortune 500 budgets.
            </p>
            
            <p className="text-lg md:text-xl text-foreground font-bold leading-relaxed">
              So we repositioned. From 'local agency' to 'LinkedIn operator.' Built a system for Fortune 500s, not dentists.
            </p>

            <div className="pt-8 border-t border-border/50">
              <p className="text-xl md:text-2xl font-bold text-foreground mb-6">
                6 months later, we were signing:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl flex-shrink-0">→</span>
                  <span className="text-lg text-foreground">Mastercard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl flex-shrink-0">→</span>
                  <span className="text-lg text-foreground">Forbes 30 Under 30 founders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl flex-shrink-0">→</span>
                  <span className="text-lg text-foreground">Y Combinator companies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl flex-shrink-0">→</span>
                  <span className="text-lg text-foreground">Royal government contracts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl flex-shrink-0">→</span>
                  <span className="text-lg text-foreground">$1B+ investment firms</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-border/50">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Then we asked: <span className="text-foreground font-bold">Can regular people replicate this?</span>
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
                So we took complete beginners, struggling agency owners, and industry experts with zero LinkedIn presence... and guided them through the exact system.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Results Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            The results:
          </h3>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <img 
                src={ethanClouser} 
                alt="Ethan"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
              />
              <div>
                <p className="font-bold text-foreground">Ethan</p>
                <p className="text-sm text-muted-foreground">Complete Beginner</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3 italic">
              "$1K/month → $27K/month in 6 months"
            </p>
            <p className="text-lg font-bold text-primary">
              Exited for 5-figures
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl border-2 border-primary/30">
                V
              </div>
              <div>
                <p className="font-bold text-foreground">Vasilije</p>
                <p className="text-sm text-muted-foreground">Zero Experience</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3 italic">
              "Never ran an agency before"
            </p>
            <p className="text-lg font-bold text-primary">
              $25K/month with 20+ clients
            </p>
          </div>

        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-bold text-foreground">
            That's why we built LinkedIn Operator Academy.
          </p>
        </div>

        {/* Bottom Testimonial Wall */}
        <div className="mt-20 space-y-8">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              Join These Operators
            </h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TestimonialCard
              name="Walter Chung"
              image={walterChung}
              quote="I went from struggling freelancer to running a LinkedIn agency with consistent $10K+ months. The framework gave me everything I needed."
              result="$10K+ monthly recurring revenue"
            />
            <TestimonialCard
              name="Jessica Green"
              image={jessicaGreen}
              quote="The systems and templates made it so easy to start. Within 90 days I had multiple Fortune 500 clients paying premium rates."
              result="$100K/month agency revenue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
