import { Package, Target, FileText, Users, Lock, Building2, Link2, CheckCircle2, Crown } from "lucide-react";
import frameworkDashboard from "@/assets/framework-dashboard.png";
import masterDocument from "@/assets/master-document.png";
import coachingEvent from "@/assets/coaching-event.png";
import guidesTemplates from "@/assets/guides-templates.png";
import communityChat from "@/assets/community-chat.png";
import masterClasses from "@/assets/master-classes.png";

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
          <div className="group relative h-[600px] perspective-1000">
            <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                <div className="relative h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                  <img src={frameworkDashboard} alt="Framework Dashboard" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                        <Target className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      7-Week Operator Framework
                    </h3>
                    <p className="text-gray-200 text-sm">Hover to see what's inside →</p>
                  </div>
                </div>
              </div>
              
              {/* Back Side */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden border border-primary/50 shadow-2xl">
                <div className="h-full bg-gradient-to-br from-muted/95 via-muted/90 to-muted/95 backdrop-blur-sm p-10 overflow-y-auto">
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Target className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    7-Week Operator Framework
                  </h3>
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                    The exact playbook that signed Mastercard and Forbes founders—systematized into 50+ video modules.
                  </p>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-bold text-foreground uppercase tracking-wide">What's Included:</p>
                    {[
                      "50+ Video Modules (7 comprehensive weeks)",
                      "Client Acquisition Systems (attract real companies)",
                      "Fulfillment SOPs (scale without quality loss)",
                      "Sales Masterclass (close $5K-$50K+ contracts)",
                      "Personal Branding Blueprint (authority positioning)",
                      "LinkedIn Outbound System (predictable pipeline)"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground/80 italic mt-auto">
                    Lifetime access. Updated quarterly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Swipe Vault + Templates */}
          <div className="group relative h-[600px] perspective-1000">
            <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                <div className="relative h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                  <img src={masterDocument} alt="Master Document" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                        <FileText className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Templates & SOP Library
                    </h3>
                    <p className="text-gray-200 text-sm">Hover to explore the vault →</p>
                  </div>
                </div>
              </div>
              
              {/* Back Side */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden border border-primary/50 shadow-2xl">
                <div className="h-full bg-gradient-to-br from-muted/95 via-muted/90 to-muted/95 backdrop-blur-sm p-10 overflow-y-auto">
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center">
                      <FileText className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Templates & SOP Library
                  </h3>
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                    Copy-paste everything. Every template, script, and SOP we use to run 6-7 figure agencies.
                  </p>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-bold text-foreground uppercase tracking-wide">What's Included:</p>
                    {[
                      "50+ Content Templates (hooks, posts, lead magnets)",
                      "DM & Outreach Scripts (connection requests, InMails)",
                      "Proposal Templates ($5K-$50K+ closing docs)",
                      "Onboarding SOPs (client intake, KPI tracking)",
                      "Fulfillment Playbooks (delivery, reporting, scaling)",
                      "Personal Brand Assets (profiles, banners, bios)",
                      "Automation Workflows (AI agents, content systems)"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground/80 italic mt-auto">
                    Updated monthly with new templates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Weekly Live Coaching + Inner Circle */}
          <div className="group relative h-[600px] perspective-1000">
            <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                <div className="relative h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                  <img src={coachingEvent} alt="Coaching Event" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                        <Users className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Coaching & Operator Community
                    </h3>
                    <p className="text-gray-200 text-sm">Hover to see the network →</p>
                  </div>
                </div>
              </div>
              
              {/* Back Side */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden border border-primary/50 shadow-2xl">
                <div className="h-full bg-gradient-to-br from-muted/95 via-muted/90 to-muted/95 backdrop-blur-sm p-10 overflow-y-auto">
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    Coaching & Operator Community
                  </h3>
                  
                  {/* Mid Ticket Section */}
                  <div className="mb-6">
                    <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">Mid Ticket Includes:</p>
                    <div className="space-y-3">
                      {[
                        "60 Days Community Access (full member benefits)",
                        "Peer Network (collaborate, share strategies)",
                        "Resource Library (playbooks, case studies)",
                        "Option to extend: $97/month (LIA) or $127/month (B2B)"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* High Ticket Section */}
                  <div>
                    <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">High Ticket Adds:</p>
                    <div className="space-y-3">
                      {[
                        "Lifetime Community Access (never expires)",
                        "Weekly Live Coaching Calls (strategy, Q&A, hot seats)",
                        "Monthly Founder Calls with Syed & Freddie",
                        "24/7 Text/Chat Access to founders (6 months)",
                        "In-Person Events (exclusive operator meetups)"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Crown className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: The LinkedIn Secrets */}
          <div className="group relative h-[600px] perspective-1000">
            <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                <div className="relative h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                  <img src={guidesTemplates} alt="Guides & Templates" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                        <Lock className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      The LinkedIn Secrets
                    </h3>
                    <p className="text-gray-200 text-sm">Hover to unlock the secrets →</p>
                  </div>
                </div>
              </div>
              
              {/* Back Side */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden border border-primary/50 shadow-2xl">
                <div className="h-full bg-gradient-to-br from-muted/95 via-muted/90 to-muted/95 backdrop-blur-sm p-10 overflow-y-auto">
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Lock className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    The LinkedIn Secrets
                  </h3>
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                    Strategies too powerful to share publicly. Separates $10K/month from $100K/month agencies.
                  </p>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-bold text-foreground uppercase tracking-wide">What's Included:</p>
                    {[
                      "Brand Equity Engineering (belief installation, positioning)",
                      "Viral Content Science (predictable 1M+ view posts)",
                      "Client Retention Mastery (upsell frameworks, 0% churn)",
                      "Account Protection Protocols (never get banned)",
                      "Competitive Domination (be #1 in your niche)",
                      "AI & Automation Mastery (custom agents, batch systems)",
                      "Mystery Module (join to find out)"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Crown className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground/80 italic mt-auto">
                    Unlocked in Week 7 only.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Industry-Specific Playbooks */}
          <div className="group relative h-[600px] perspective-1000">
            <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                <div className="relative h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                  <img src={masterClasses} alt="Master Classes" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                        <Building2 className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Industry Playbooks
                    </h3>
                    <p className="text-gray-200 text-sm">Hover to see industries →</p>
                  </div>
                </div>
              </div>
              
              {/* Back Side */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden border border-primary/50 shadow-2xl">
                <div className="h-full bg-gradient-to-br from-muted/95 via-muted/90 to-muted/95 backdrop-blur-sm p-10 overflow-y-auto">
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Industry Playbooks
                  </h3>
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                    No generic advice. Tailored positioning strategies for AI, SaaS, Med-Tech, Finance, and more.
                  </p>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-bold text-foreground uppercase tracking-wide">What's Included:</p>
                    {[
                      "8+ Industry Playbooks (AI, SaaS, Finance, Real Estate, etc.)",
                      "Niche Positioning Guides (stand out in your vertical)",
                      "Vertical-Specific Templates (content, DM scripts, offers)",
                      "Industry Case Studies (real operators, real results)",
                      "ICP Mapping (find ideal clients)",
                      "Competitive Analysis Frameworks (beat incumbents)"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground/80 italic mt-auto">
                    Works for ANY B2B industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Private Network + Resources */}
          <div className="group relative h-[600px] perspective-1000">
            <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                <div className="relative h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                  <img src={communityChat} alt="Community Chat" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                        <Link2 className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Exclusive Operator Network
                    </h3>
                    <p className="text-gray-200 text-sm">Hover to see connections →</p>
                  </div>
                </div>
              </div>
              
              {/* Back Side */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden border border-primary/50 shadow-2xl">
                <div className="h-full bg-gradient-to-br from-muted/95 via-muted/90 to-muted/95 backdrop-blur-sm p-10 overflow-y-auto">
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Link2 className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Exclusive Operator Network
                  </h3>
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                    Access our private rolodex of vetted service providers and resources to build your success.
                  </p>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-bold text-foreground uppercase tracking-wide">What's Included:</p>
                    {[
                      "Tax Optimization Solutions (operator-friendly accountants)",
                      "Payment Processing (high-risk merchants, international)",
                      "OTC Trading Connections (scaling past $100K/month)",
                      "Social Media Insiders (LinkedIn/X troubleshooting contacts)",
                      "Legal Protection Resources (contracts, entity setup)",
                      "Scaling Infrastructure (hiring, ops, systems beyond $50K/month)"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Crown className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground/80 italic mt-auto">
                    Worth more than the program itself.
                  </p>
                </div>
              </div>
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
