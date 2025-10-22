import { Package } from "lucide-react";

const WhatsInsideSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <Package className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              <span className="text-primary mr-1.5">vi.</span>What's Inside
            </span>
          </div>
        </div>

        {/* Header */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-6">
          What's Inside LinkedIn Operator
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-center text-muted-foreground max-w-4xl mx-auto mb-16 md:mb-24 leading-relaxed">
          Everything you need to turn LinkedIn into a predictable revenue engine—whether you're building an agency empire or becoming the #1 authority in your industry.
        </p>

        {/* 2x3 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {/* Card 1: The Complete Framework */}
          <div className="group relative bg-gradient-to-br from-muted/60 via-muted/40 to-muted/20 border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🎯</div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              The Complete 7-Week Operator Framework
            </h3>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              The exact playbook that signed Mastercard and Forbes founders—systematized into 50+ video modules. From positioning to fulfillment, everything you need to build a 6-7 figure LinkedIn agency.
            </p>
            <div className="space-y-3 mb-6">
              <p className="text-sm font-semibold text-foreground">What's Included:</p>
              {[
                "50+ Video Modules across 7 comprehensive weeks",
                "Client Acquisition Systems that attract real companies with real budgets",
                "Fulfillment SOPs for scaling without quality loss",
                "Sales Masterclass for closing $5K-$50K+ contracts",
                "Personal Branding Blueprint for authority positioning",
                "LinkedIn Outbound System for predictable pipeline",
                "Progress Tracking Dashboard with organized, sequential learning"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0">✅</span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
              <p className="text-xs text-muted-foreground italic">
                Lifetime access. Updated quarterly with new strategies.
              </p>
            </div>
          </div>

          {/* Card 2: Swipe Vault + Templates */}
          <div className="group relative bg-gradient-to-br from-muted/60 via-muted/40 to-muted/20 border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] transition-all duration-500 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📋</div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Done-For-You Templates & SOP Library
            </h3>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Copy-paste everything. Every template, script, and SOP we use to run 6-7 figure agencies. No starting from scratch—just plug in your details and execute.
            </p>
            <div className="space-y-3 mb-6">
              <p className="text-sm font-semibold text-foreground">What's Included:</p>
              {[
                "50+ Content Templates (hooks, posts, lead magnets)",
                "DM & Outreach Scripts (connection requests, follow-ups, InMails)",
                "Proposal Templates ($5K-$50K+ closing docs)",
                "Onboarding SOPs (client intake, account setup, KPI tracking)",
                "Fulfillment Playbooks (weekly delivery, reporting, scaling)",
                "Personal Brand Assets (profile templates, banner designs, bio frameworks)",
                "Automation Workflows (AI agents, content systems, lead generation)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0">✅</span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
              <p className="text-xs text-muted-foreground italic">
                Updated monthly with new high-performing templates.
              </p>
            </div>
          </div>

          {/* Card 3: Weekly Live Coaching + Inner Circle */}
          <div className="group relative bg-gradient-to-br from-muted/60 via-muted/40 to-muted/20 border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">👥</div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Weekly Coaching + Operator Community
              </h3>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Join 500+ operators building real agencies across 15+ industries. Get live coaching, hot seats, and 6 months of direct access to Syed & Freddie—so you're never stuck.
            </p>
            <div className="space-y-3 mb-6">
              <p className="text-sm font-semibold text-foreground">What's Included:</p>
              {[
                "Weekly Group Coaching Calls (live strategy, Q&A, hot seats)",
                "Monthly Founder Calls with Syed & Freddie (advanced tactics)",
                "Private Operator Community (no low-ticket lurkers—real builders only)",
                "In-Person Events (exclusive meetups around the world)",
                "Peer Network (collaborate, share wins, solve problems together)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0">✅</span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
              <p className="text-xs text-muted-foreground italic">
                You're not just buying a course. You're joining an operator network.
              </p>
            </div>
          </div>

          {/* Card 4: The LinkedIn Secrets */}
          <div className="group relative bg-gradient-to-br from-muted/60 via-muted/40 to-muted/20 border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] transition-all duration-500 overflow-hidden">
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🔒</div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Advanced Operator Secrets (Week 7)
            </h3>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              The strategies too powerful to share publicly. Engineer virality, dominate competitors, protect your accounts, and retain clients indefinitely. This separates $10K/month from $100K/month agencies.
            </p>
            <div className="space-y-3 mb-6">
              <p className="text-sm font-semibold text-foreground">What's Included:</p>
              {[
                "Brand Equity Engineering (belief installation, authority positioning)",
                "Viral Content Science (algorithm mastery, predictable 1M+ view posts)",
                "Client Retention Mastery (upsell frameworks, 0% churn systems)",
                "Account Protection Protocols (never get banned, stay in LinkedIn's good graces)",
                "Competitive Domination (how to be #1 and stay #1 in your niche)",
                "AI & Automation Mastery (custom agents, batch content creation)",
                "Mystery Module (you'll have to join to find out)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0">✅</span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
              <p className="text-xs text-muted-foreground italic">
                Unlocked in Week 7 for committed operators only.
              </p>
            </div>
          </div>

          {/* Card 5: Industry-Specific Playbooks */}
          <div className="group relative bg-gradient-to-br from-muted/60 via-muted/40 to-muted/20 border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🏢</div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Playbooks For Every Industry
            </h3>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              No generic advice. Tailored positioning strategies, content frameworks, and client acquisition systems for AI, SaaS, Med-Tech, Finance, Real Estate, Consulting, and more—with real case studies.
            </p>
            <div className="space-y-3 mb-6">
              <p className="text-sm font-semibold text-foreground">What's Included:</p>
              {[
                "8+ Industry Playbooks (AI, SaaS, Finance, Real Estate, Med-Tech, etc.)",
                "Niche Positioning Guides (how to stand out in your vertical)",
                "Vertical-Specific Templates (content angles, DM scripts, offers)",
                "Industry Case Studies (real operators, real results)",
                "ICP Mapping (where to find ideal clients in each industry)",
                "Competitive Analysis Frameworks (how to beat incumbents)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0">✅</span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
              <p className="text-xs text-muted-foreground italic">
                Works for ANY B2B industry—we've proven it.
              </p>
            </div>
          </div>

          {/* Card 6: Private Network + Resources */}
          <div className="group relative bg-gradient-to-br from-muted/60 via-muted/40 to-muted/20 border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] transition-all duration-500 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🔗</div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Exclusive Operator Network
            </h3>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Access our private rolodex of vetted service providers. Tax solutions, payment processors, legal protection, and every resource to build and protect your online success.
            </p>
            <div className="space-y-3 mb-6">
              <p className="text-sm font-semibold text-foreground">What's Included:</p>
              {[
                "Tax Optimization Solutions (operator-friendly accountants)",
                "Payment Processing (high-risk merchant accounts, international solutions)",
                "OTC Trading Connections (for those scaling past $100K/month)",
                "Social Media Insiders (LinkedIn, Twitter/X contacts for troubleshooting)",
                "Legal Protection Resources (contract templates, entity setup guidance)",
                "Scaling Infrastructure (hiring, ops, systems beyond $50K/month)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0">✅</span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
              <p className="text-xs text-muted-foreground italic">
                These connections are worth more than the program itself.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative bg-gradient-to-r from-muted/40 via-muted/30 to-muted/40 border border-border/50 rounded-xl py-8 px-6 max-w-6xl mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
          <div className="relative z-10 flex flex-wrap justify-center items-center gap-8 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📚</span>
              <span className="text-sm md:text-base font-semibold text-foreground">50+ Video Modules</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📋</span>
              <span className="text-sm md:text-base font-semibold text-foreground">100+ Templates & SOPs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span className="text-sm md:text-base font-semibold text-foreground">500+ Active Operators</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              <span className="text-sm md:text-base font-semibold text-foreground">$10M+ Student Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span className="text-sm md:text-base font-semibold text-foreground">15+ Industries Dominated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsInsideSection;
