import { GraduationCap, Briefcase, Lightbulb, Building2, Target, TrendingUp, Users, Zap, X, CheckCircle2, Flame } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Opening Statement */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Flame className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-foreground">The LinkedIn Revolution Starts Here</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            We're Here to <span className="text-gradient glow-text">Fuck Up</span>
            <br />
            the LinkedIn Space
          </h2>
          <p className="text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Tired of mediocre agencies ruining the game. Tired of wannabes overpromising and underdelivering. 
            <br />We're building the elite force that will dominate LinkedIn service delivery.
          </p>
        </div>

        {/* The Origin Story */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-4xl font-bold mb-6">The Moment Everything Changed</h3>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  We weren't just observers. We were <span className="text-primary font-semibold">the architects</span> behind 
                  some of LinkedIn's fastest-growing brands. We helped creators amass millions of views, built 
                  our own personal brands, scaled multiple agencies.
                </p>
                <p>
                  Then we saw it: <span className="font-semibold text-foreground">a massive gap in the market</span>. 
                  Thousands of businesses desperate to crack LinkedIn. But almost no one with the real knowledge, 
                  experience, or dedication to actually deliver results.
                </p>
                <p className="text-primary font-semibold text-xl">
                  So we became the balancers. The ones who would fix this broken market.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                <div className="text-4xl font-bold text-primary mb-2">10M+</div>
                <div className="text-sm text-foreground/70">Total Views Generated</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                <div className="text-4xl font-bold text-primary mb-2">1000s</div>
                <div className="text-sm text-foreground/70">B2B Meetings Booked</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                <div className="text-4xl font-bold text-primary mb-2">100K+</div>
                <div className="text-sm text-foreground/70">Total Reactions</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                <div className="text-4xl font-bold text-primary mb-2">Dozens</div>
                <div className="text-sm text-foreground/70">Creators Scaled</div>
              </div>
            </div>
          </div>
        </div>

        {/* Myths We're Destroying */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-6">
              Myths We're <span className="text-gradient">Destroying</span>
            </h3>
            <p className="text-xl text-muted-foreground">The lies keeping people broke and frustrated</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "LinkedIn is a cringe platform",
              "You need 100k followers to make money",
              "TikTok and IG are the only real money makers",
              "LinkedIn is super hard to grow",
              "More messages = More clients",
              "Viral content = Revenue"
            ].map((myth, index) => (
              <div key={index} className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-lg font-medium line-through text-muted-foreground">{myth}</p>
              </div>
            ))}
          </div>
          
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border-2 border-primary/30 glow-effect">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">The Real LinkedIn Strategy</h4>
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  We reveal the middle ground: content that's <span className="text-primary font-semibold">niche-focused but viral-ready</span>. 
                  Not chasing vanity metrics, but optimizing for actual revenue.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Stop messaging everyone. Start converting a <span className="text-primary font-semibold">targeted segment</span> of 
                  your audience using our proven LinkedIn secrets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Vision */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-6">
              The <span className="text-gradient">Vision</span>
            </h3>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-card to-background border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative z-10 space-y-8 text-lg leading-relaxed">
                <p className="text-xl font-semibold text-foreground">
                  We're not just building a mentorship program. We're architecting the future of LinkedIn lead generation.
                </p>
                <p className="text-foreground/80">
                  LinkedIn Operator is becoming the <span className="text-primary font-semibold">central hub</span> for 
                  everything LinkedIn: education, systems, community, and service delivery. A one-stop ecosystem 
                  where businesses come to thrive and operators come to dominate.
                </p>
                <p className="text-foreground/80">
                  We're building an <span className="text-primary font-semibold">inner circle of elite agencies</span> who 
                  operate at the highest level—with the right energy, the right systems, and the right mindset. 
                  Together, we'll control the majority of professional LinkedIn service delivery.
                </p>
                <p className="text-2xl font-bold text-gradient">
                  This isn't a course. This is the industry standard being set.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who This Is For */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-6">
              Join the <span className="text-gradient">Elite Circle</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              LinkedIn Operator is for those ready to operate at the highest level
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Beginners */}
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:scale-105 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-primary">BEGINNERS</h4>
              <p className="text-foreground/80 leading-relaxed">
                Jumpstart your journey with step-by-step guidance, practical resources, 
                and supportive community to build your online presence from scratch.
              </p>
            </div>

            {/* Professionals */}
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:scale-105 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-primary">PROFESSIONALS</h4>
              <p className="text-foreground/80 leading-relaxed">
                Learn how to launch a profitable online business while keeping your full-time job. 
                Build your side income without sacrificing your career.
              </p>
            </div>

            {/* Entrepreneurs */}
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:scale-105 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-primary">ENTREPRENEURS</h4>
              <p className="text-foreground/80 leading-relaxed">
                Expand your toolkit with insights and tactics from experts who have been where you are. 
                Scale faster with proven strategies.
              </p>
            </div>

            {/* Business Owners */}
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:scale-105 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-primary">BUSINESS OWNERS</h4>
              <p className="text-foreground/80 leading-relaxed">
                Modernize your approach and find new ways to scale and optimize your existing business. 
                Leverage LinkedIn's B2B network effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Energy Statement */}
        <div className="mt-32 text-center">
          <div className="inline-block p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/50 glow-effect">
            <p className="text-3xl font-bold text-gradient mb-4">
              When you join LinkedIn Operator, you don't just learn.
            </p>
            <p className="text-2xl text-foreground/90">
              You BECOME an operator who's already scaled, grown, and dominated.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
