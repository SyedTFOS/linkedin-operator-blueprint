import { useState } from "react";
import { 
  Package, 
  Target, 
  FileText, 
  Users, 
  Lock, 
  Building2, 
  Link2,
  CheckCircle2,
  Crown,
  LockKeyhole,
  ArrowRight,
  Briefcase,
  TrendingUp,
  MessageSquare,
  FileCheck,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import frameworkDashboard from "@/assets/framework-dashboard.png";
import masterDocument from "@/assets/master-document.png";
import coachingEvent from "@/assets/coaching-event.png";
import guidesTemplates from "@/assets/guides-templates.png";
import communityChat from "@/assets/community-chat.png";
import masterClasses from "@/assets/master-classes.png";

const WhatsInsideSection = () => {
  const [viewMode, setViewMode] = useState<"all" | "compare">("all");
  const [activePath, setActivePath] = useState<'lia' | 'b2b'>('lia');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // LIA Cards Data (Building An Agency)
  const liaCardsData = [
    {
      id: 1,
      tier: "both",
      icon: Target,
      title: "7-Week Operator Framework",
      image: frameworkDashboard,
      shortDescription: "The exact playbook that signed Mastercard and Forbes founders—systematized into 50+ video modules.",
      previewBullets: [
        "50+ Video Modules (7 comprehensive weeks)",
        "Client Acquisition Systems (attract real companies)",
        "Fulfillment SOPs (scale without quality loss)"
      ],
      allBullets: [
        "50+ Video Modules (7 comprehensive weeks)",
        "Client Acquisition Systems (attract real companies)",
        "Fulfillment SOPs (scale without quality loss)",
        "Sales Masterclass (close $5K-$50K+ contracts)",
        "Personal Branding Blueprint (authority positioning)",
        "LinkedIn Outbound System (predictable pipeline)"
      ],
      footer: "Lifetime access. Updated quarterly."
    },
    {
      id: 2,
      tier: "both",
      icon: FileText,
      title: "Templates & SOP Library",
      image: masterDocument,
      shortDescription: "Copy-paste everything. Every template, script, and SOP we use to run 6-7 figure agencies.",
      previewBullets: [
        "50+ Content Templates (hooks, posts, lead magnets)",
        "DM & Outreach Scripts (connection requests, InMails)",
        "Proposal Templates ($5K-$50K+ closing docs)"
      ],
      allBullets: [
        "50+ Content Templates (hooks, posts, lead magnets)",
        "DM & Outreach Scripts (connection requests, InMails)",
        "Proposal Templates ($5K-$50K+ closing docs)",
        "Onboarding SOPs (client intake, KPI tracking)",
        "Fulfillment Playbooks (delivery, reporting, scaling)",
        "Personal Brand Assets (profiles, banners, bios)",
        "Automation Workflows (AI agents, content systems)"
      ],
      footer: "Updated monthly with new templates."
    },
    {
      id: 3,
      tier: "split",
      icon: Users,
      title: "Coaching & Operator Community",
      image: coachingEvent,
      shortDescription: "",
      midTicket: [
        "60 Days Community Access (full member benefits)",
        "Peer Network (collaborate, share strategies)",
        "Resource Library (playbooks, case studies)",
        "Option to extend: $97/month (LIA) or $127/month (B2B)"
      ],
      highTicket: [
        "Lifetime Community Access (never expires)",
        "Weekly Live Coaching Calls (strategy, Q&A, hot seats)",
        "Monthly Founder Calls with Syed & Freddie",
        "24/7 Text/Chat Access to founders (6 months)",
        "In-Person Events (exclusive operator meetups)"
      ]
    },
    {
      id: 4,
      tier: "both",
      icon: Building2,
      title: "Industry Playbooks",
      image: masterClasses,
      shortDescription: "No generic advice. Tailored positioning strategies for AI, SaaS, Med-Tech, Finance, and more.",
      previewBullets: [
        "8+ Industry Playbooks (AI, SaaS, Finance, Real Estate, etc.)",
        "Niche Positioning Guides (stand out in your vertical)",
        "Vertical-Specific Templates (content, DM scripts, offers)"
      ],
      allBullets: [
        "8+ Industry Playbooks (AI, SaaS, Finance, Real Estate, etc.)",
        "Niche Positioning Guides (stand out in your vertical)",
        "Vertical-Specific Templates (content, DM scripts, offers)",
        "Industry Case Studies (real operators, real results)",
        "ICP Mapping (find ideal clients)",
        "Competitive Analysis Frameworks (beat incumbents)"
      ],
      footer: "Works for ANY B2B industry."
    },
    {
      id: 5,
      tier: "high",
      icon: Lock,
      title: "The LinkedIn Secrets",
      image: guidesTemplates,
      shortDescription: "The difference between $10K/month and $100K/month agencies.",
      isPremium: true,
      previewBullets: [
        "Brand Equity Engineering (belief installation, positioning)",
        "Viral Content Science (predictable 1M+ view posts)",
        "Client Retention Mastery (upsell frameworks, 0% churn)"
      ],
      allBullets: [
        "Brand Equity Engineering (belief installation, positioning)",
        "Viral Content Science (predictable 1M+ view posts)",
        "Client Retention Mastery (upsell frameworks, 0% churn)",
        "Account Protection Protocols (never get banned)",
        "Competitive Domination (be #1 in your niche)",
        "AI & Automation Mastery (custom agents, batch systems)",
        "Mystery Module (join to find out)"
      ],
      footer: "Unlocked ONLY for elite operators"
    },
    {
      id: 6,
      tier: "high",
      icon: Link2,
      title: "Exclusive Operator Network",
      image: communityChat,
      shortDescription: "Access our private rolodex of vetted service providers and resources to build your success.",
      isPremium: true,
      previewBullets: [
        "Tax Optimization Solutions (operator-friendly accountants)",
        "Payment Processing (high-risk merchants, international)",
        "OTC Trading Connections (scaling past $100K/month)"
      ],
      allBullets: [
        "Tax Optimization Solutions (operator-friendly accountants)",
        "Payment Processing (high-risk merchants, international)",
        "OTC Trading Connections (scaling past $100K/month)",
        "Social Media Insiders (LinkedIn/X troubleshooting contacts)",
        "Legal Protection Resources (contracts, entity setup)",
        "Scaling Infrastructure (hiring, ops, systems beyond $50K/month)"
      ],
      footer: "Worth more than the program itself."
    }
  ];

  // B2B Cards Data (Growing My Business)
  const b2bCardsData = [
    {
      id: 1,
      tier: "both",
      icon: TrendingUp,
      title: "LinkedIn Growth Fundamentals",
      image: frameworkDashboard,
      shortDescription: "Master the fundamentals of LinkedIn personal branding, positioning, and content that attracts decision-makers in your industry.",
      previewBullets: [
        "Fundamentals Module (mindset, infrastructure, setup)",
        "Personal Branding Blueprint (Forbes-level positioning)",
        "Profile Optimization System (conversion-focused)"
      ],
      allBullets: [
        "Fundamentals Module (mindset, infrastructure, setup)",
        "Personal Branding Blueprint (Forbes-level positioning)",
        "Profile Optimization System (conversion-focused)",
        "Content Strategy Framework (authority-building)"
      ],
      footer: "Lifetime access. Updated quarterly."
    },
    {
      id: 2,
      tier: "both",
      icon: MessageSquare,
      title: "LinkedIn Outbound & Sales",
      image: masterDocument,
      shortDescription: "Learn the art of LinkedIn DM selling that actually works. No spam—just surgical outreach that books qualified calls with decision-makers.",
      previewBullets: [
        "LinkedIn Outbound System (DM frameworks, follow-ups)",
        "Sales Masterclass (discovery calls, closing)",
        "Lead List Building (Sales Navigator mastery)"
      ],
      allBullets: [
        "LinkedIn Outbound System (DM frameworks, follow-ups)",
        "Sales Masterclass (discovery calls, closing)",
        "Lead List Building (Sales Navigator mastery)",
        "Conversion Optimization (booking rate improvement)"
      ],
      footer: "Updated monthly with proven scripts."
    },
    {
      id: 3,
      tier: "split",
      icon: Users,
      title: "LinkedIn Founder Community",
      image: coachingEvent,
      shortDescription: "",
      midTicket: [
        "60 Days Access",
        "Founder peer network",
        "Strategy resources",
        "Extend for $127/month"
      ],
      highTicket: [
        "Lifetime Access + White-Glove Support",
        "Never expires",
        "Weekly strategy calls",
        "Dedicated account manager",
        "Priority support"
      ]
    },
    {
      id: 4,
      tier: "both",
      icon: FileCheck,
      title: "Templates & Content Assets",
      image: masterClasses,
      shortDescription: "Done-for-you templates for content, outreach, and positioning. Skip the trial-and-error phase.",
      previewBullets: [
        "Content Templates (hooks, posts, lead magnets)",
        "Profile Templates (headlines, about sections, banners)",
        "Outreach Scripts (DM frameworks, InMails)"
      ],
      allBullets: [
        "Content Templates (hooks, posts, lead magnets)",
        "Profile Templates (headlines, about sections, banners)",
        "Outreach Scripts (DM frameworks, InMails)",
        "Lead Magnet Templates"
      ],
      footer: "Updated monthly."
    },
    {
      id: 5,
      tier: "high",
      icon: Lock,
      title: "The LinkedIn Secrets",
      image: guidesTemplates,
      shortDescription: "Advanced strategies for predictable virality, brand equity engineering, and positioning that makes competitors irrelevant.",
      isPremium: true,
      isDFY: true,
      previewBullets: [
        "Brand Equity Engineering",
        "Viral Content Science (predictable 1M+ views)",
        "Algorithm Mastery"
      ],
      allBullets: [
        "Brand Equity Engineering",
        "Viral Content Science (predictable 1M+ views)",
        "Algorithm Mastery",
        "Account Protection Protocols",
        "Competitive Domination",
        "[REDACTED]",
        "Mystery Module"
      ],
      testimonial: {
        quote: "LinkedIn became our #1 client acquisition channel. 5-10X ROI.",
        author: "Craig C., DiversyFund"
      },
      footer: "Available only with Done-For-You service."
    },
    {
      id: 6,
      tier: "high",
      icon: Phone,
      title: "Done-For-You Execution",
      image: communityChat,
      shortDescription: "We handle everything. You show up for sales calls. Our team manages strategy, content creation, posting, and optimization.",
      isPremium: true,
      isDFY: true,
      previewBullets: [
        "White-Glove Content Creation (ghostwritten for you)",
        "Strategic Positioning (Forbes-level authority)",
        "Profile Optimization (done for you)"
      ],
      allBullets: [
        "White-Glove Content Creation (ghostwritten for you)",
        "Strategic Positioning (Forbes-level authority)",
        "Profile Optimization (done for you)",
        "Dedicated Account Manager (weekly strategy calls)",
        "Performance Reporting (monthly ROI tracking)"
      ],
      footer: "Limited to 10 DFY clients at a time."
    }
  ];

  const cardsData = activePath === 'lia' ? liaCardsData : b2bCardsData;

  const toggleCardExpansion = (cardId: number) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

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
        <p className="text-lg md:text-xl text-center text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          Everything you need to turn LinkedIn into a predictable revenue engine—whether you're building an agency empire or becoming the #1 authority in your industry.
        </p>

        {/* Path Selector Tabs */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 bg-card/50 rounded-xl border border-border/50">
            <button
              onClick={() => setActivePath('lia')}
              className={`px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activePath === 'lia'
                  ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg scale-105'
                  : 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Briefcase className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm font-bold">Building An Agency</div>
                  <div className="text-xs opacity-80">(LIA)</div>
                </div>
              </div>
            </button>
            <button
              onClick={() => setActivePath('b2b')}
              className={`px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activePath === 'b2b'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg scale-105'
                  : 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm font-bold">Growing My Business</div>
                  <div className="text-xs opacity-80">(B2B)</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Product Name Callout */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <div className={`border rounded-xl p-6 ${
            activePath === 'lia' 
              ? 'bg-orange-500/5 border-orange-500/30' 
              : 'bg-blue-500/5 border-blue-500/30'
          }`}>
            <div className="flex items-start gap-4">
              <div className="text-2xl">📦</div>
              <div>
                <div className={`font-bold text-lg mb-1 ${
                  activePath === 'lia' ? 'text-orange-600' : 'text-blue-600'
                }`}>
                  {activePath === 'lia' ? 'LinkedIn Operator Academy' : 'LinkedIn Founder'}
                </div>
                <div className="text-sm text-muted-foreground">
                  Complete framework + 60 days community
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">👑</div>
              <div>
                <div className="font-bold text-lg mb-1">
                  {activePath === 'lia' ? 'LinkedIn Operator Secrets' : 'LinkedIn DFY'}
                </div>
                <div className="text-sm text-muted-foreground">
                  {activePath === 'lia' ? 'Everything + Elite access + Secrets' : 'Done-for-you execution + strategy'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tier Comparison Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 p-1 bg-muted rounded-lg border border-border">
            <button
              onClick={() => setViewMode("all")}
              className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all ${
                viewMode === "all"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All Features
            </button>
            <button
              onClick={() => setViewMode("compare")}
              className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all ${
                viewMode === "compare"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Compare Tiers
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        {viewMode === "all" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
            {cardsData.map((card, index) => {
              const Icon = card.icon;
              const isExpanded = expandedCard === card.id;
              const animationDelay = `${index * 150}ms`;

              // Premium card (LinkedIn Secrets & Network / DFY cards for B2B)
              if (card.isPremium) {
                return (
                  <div
                    key={card.id}
                    className="relative rounded-2xl overflow-hidden animate-fade-in"
                    style={{ animationDelay }}
                  >
                    {/* Premium Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full shadow-lg">
                        <Crown className="w-4 h-4 text-white" />
                        <span className="text-xs font-bold text-white uppercase tracking-wide">
                          {'isDFY' in card && card.isDFY ? 'DFY Exclusive' : 'High Ticket Only'}
                        </span>
                      </div>
                    </div>

                    {/* Premium Card with Gold Border */}
                    <div className="relative h-full border-2 border-amber-500/50 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden animate-pulse-glow">
                      <img src={card.image} alt={card.title} className="w-full h-64 object-cover opacity-60" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
                      
                      <div className="relative p-8 pt-4">
                        {/* Lock Icon with Breathing Animation */}
                        <div className="flex justify-center mb-6">
                          <div className="w-20 h-20 rounded-full bg-amber-500/20 backdrop-blur-sm flex items-center justify-center border-2 border-amber-500/40 animate-breathe">
                            <LockKeyhole className="w-10 h-10 text-amber-500" />
                          </div>
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-3 text-center">
                          {card.title}
                        </h3>
                        
                        <p className="text-gray-300 text-center mb-6 text-sm">
                          {card.shortDescription}
                        </p>

                        {/* Preview bullets */}
                        <div className="space-y-2 mb-4">
                          {card.previewBullets?.map((bullet, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-gray-300">
                              <Crown className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{bullet}</span>
                            </div>
                          ))}
                          {/* Redacted items for secrets */}
                          {card.allBullets && card.allBullets.length > 3 && (
                            <>
                              {card.allBullets.slice(3).map((bullet, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-gray-500">
                                  <Crown className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm blur-sm select-none">{bullet}</span>
                                </div>
                              ))}
                            </>
                          )}
                        </div>

                        {/* Testimonial for B2B Secrets */}
                        {'testimonial' in card && card.testimonial && typeof card.testimonial === 'object' && 'quote' in card.testimonial && 'author' in card.testimonial && (
                          <div className="mb-4 p-4 bg-white/5 rounded-lg border border-white/10">
                            <p className="text-sm italic text-gray-300 mb-2">"{String(card.testimonial.quote)}"</p>
                            <p className="text-xs text-gray-400">— {String(card.testimonial.author)}</p>
                          </div>
                        )}

                        {/* Premium CTA */}
                        <Button 
                          className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                          <LockKeyhole className="w-5 h-5 mr-2" />
                          {'isDFY' in card && card.isDFY && activePath === 'b2b' && card.id === 5 ? '🔓 Unlock DFY + Secrets' : 
                           'isDFY' in card && card.isDFY && activePath === 'b2b' && card.id === 6 ? '📞 Book Strategy Call' :
                           'Unlock High Ticket Access'}
                        </Button>

                        <p className="text-center text-xs text-gray-400 mt-4 italic">
                          {card.footer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }

              // Split card (Coaching & Community)
              if (card.tier === "split") {
                return (
                  <div
                    key={card.id}
                    className="relative rounded-2xl overflow-hidden animate-fade-in border-2 border-primary/20 hover:border-primary/40 transition-all"
                    style={{ animationDelay }}
                  >
                    {/* Split Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-lg ${
                        activePath === 'lia'
                          ? 'bg-gradient-to-r from-orange-500/90 to-orange-400/90'
                          : 'bg-gradient-to-r from-blue-500/90 to-blue-400/90'
                      }`}>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                        <span className="text-xs font-bold text-white uppercase tracking-wide">Both Tiers</span>
                      </div>
                    </div>

                    <div className="relative h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                      <img src={card.image} alt={card.title} className="w-full h-48 object-cover opacity-70" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                      
                      <div className="relative p-6">
                        <div className="mb-4">
                          <div className={`w-12 h-12 rounded-xl backdrop-blur-sm flex items-center justify-center border ${
                            activePath === 'lia'
                              ? 'bg-orange-500/20 border-orange-500/30'
                              : 'bg-blue-500/20 border-blue-500/30'
                          }`}>
                            <Icon className={`w-6 h-6 ${
                              activePath === 'lia' ? 'text-orange-500' : 'text-blue-500'
                            }`} />
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-6">
                          {card.title}
                        </h3>

                        {/* Split Design */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          {/* Mid Ticket Side */}
                          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                            <div className="flex items-center gap-2 mb-3">
                              <CheckCircle2 className="w-5 h-5 text-green-500" />
                              <span className="text-sm font-bold text-white uppercase">
                                {activePath === 'lia' ? 'LinkedIn Operator Academy' : 'LinkedIn Founder'}
                              </span>
                            </div>
                            <div className="space-y-2">
                              {card.midTicket?.slice(0, 2).map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-xs text-gray-300">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* High Ticket Side */}
                          <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-4 border border-amber-500/30">
                            <div className="flex items-center gap-2 mb-3">
                              <Crown className="w-5 h-5 text-amber-500" />
                              <span className="text-sm font-bold text-white uppercase">
                                {activePath === 'lia' ? 'LinkedIn Operator Secrets' : 'LinkedIn DFY'}
                              </span>
                            </div>
                            <div className="space-y-2">
                              {card.highTicket?.slice(0, 2).map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <Crown className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-xs text-gray-300">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Expandable section */}
                        {isExpanded && (
                          <div className="mt-4 space-y-4 animate-fade-in">
                            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                              <p className="text-xs font-bold text-white uppercase mb-2">
                                {activePath === 'lia' ? 'LinkedIn Operator Academy' : 'LinkedIn Founder'} (Full List):
                              </p>
                              <div className="space-y-2">
                                {card.midTicket?.map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs text-gray-300">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-4 border border-amber-500/30">
                              <p className="text-xs font-bold text-white uppercase mb-2">
                                {activePath === 'lia' ? 'LinkedIn Operator Secrets' : 'LinkedIn DFY'} (Full List):
                              </p>
                              <div className="space-y-2">
                                {card.highTicket?.map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <Crown className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs text-gray-300">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        <button
                          onClick={() => toggleCardExpansion(card.id)}
                          className={`w-full mt-4 text-sm transition-colors flex items-center justify-center gap-2 ${
                            activePath === 'lia' 
                              ? 'text-orange-500 hover:text-orange-400' 
                              : 'text-blue-500 hover:text-blue-400'
                          }`}
                        >
                          {isExpanded ? "Show less" : "See all details"} <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }

              // Regular "Both Tiers" cards
              return (
                <div
                  key={card.id}
                  className="relative rounded-2xl overflow-hidden animate-fade-in border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl"
                  style={{ animationDelay }}
                >
                  {/* Both Tiers Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-sm rounded-full shadow-md ${
                      activePath === 'lia' 
                        ? 'bg-orange-500/90' 
                        : 'bg-blue-500/90'
                    }`}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span className="text-xs font-bold text-white uppercase tracking-wide">Included in Both</span>
                    </div>
                  </div>

                    <div className="relative h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                    <img src={card.image} alt={card.title} className="w-full h-48 object-cover opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    <div className="relative p-6">
                      <div className="mb-4">
                        <div className={`w-12 h-12 rounded-xl backdrop-blur-sm flex items-center justify-center border ${
                          activePath === 'lia'
                            ? 'bg-orange-500/20 border-orange-500/30'
                            : 'bg-blue-500/20 border-blue-500/30'
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            activePath === 'lia' ? 'text-orange-500' : 'text-blue-500'
                          }`} />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3">
                        {card.title}
                      </h3>

                      <p className="text-sm text-gray-300 mb-4">
                        {card.shortDescription}
                      </p>

                      {/* Always visible preview bullets (mobile-first) */}
                      <div className="space-y-2 mb-4">
                        {card.previewBullets?.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              activePath === 'lia' ? 'text-orange-500' : 'text-blue-500'
                            }`} />
                            <span className="text-sm text-gray-300">{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Expandable full list */}
                      {isExpanded && card.allBullets && (
                        <div className="space-y-2 mb-4 animate-fade-in">
                          {card.allBullets.slice(3).map((bullet, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                activePath === 'lia' ? 'text-orange-500' : 'text-blue-500'
                              }`} />
                              <span className="text-sm text-gray-300">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <button
                        onClick={() => toggleCardExpansion(card.id)}
                        className={`text-sm transition-colors flex items-center gap-2 ${
                          activePath === 'lia' 
                            ? 'text-orange-500 hover:text-orange-400' 
                            : 'text-blue-500 hover:text-blue-400'
                        }`}
                      >
                        {isExpanded ? "Show less" : `See all ${card.allBullets?.length || 0} included resources`} <ArrowRight className="w-4 h-4" />
                      </button>

                      <p className="text-xs text-gray-400 mt-4 italic">
                        {card.footer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Compare Tiers View */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
            {/* Mid Ticket Column */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border-2 border-primary/30">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    {activePath === 'lia' ? 'LinkedIn Operator Academy' : 'LinkedIn Founder'} Includes
                  </h3>
                </div>
                <div className="space-y-4">
                  {cardsData.filter(c => c.tier === "both" || c.tier === "split").map(card => (
                    <div key={card.id} className="bg-muted/50 rounded-lg p-4 border border-border">
                      <div className="flex items-center gap-3 mb-2">
                        <card.icon className="w-5 h-5 text-primary" />
                        <h4 className="font-bold text-foreground">{card.title}</h4>
                      </div>
                      {card.tier === "split" ? (
                        <ul className="space-y-1 ml-8">
                          {card.midTicket?.slice(0, 2).map((item, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">• {item}</li>
                          ))}
                        </ul>
                      ) : (
                        <ul className="space-y-1 ml-8">
                          {card.previewBullets?.map((item, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">• {item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* High Ticket Column */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-6 border-2 border-amber-500/50 animate-pulse-glow">
                <div className="flex items-center gap-3 mb-6">
                  <Crown className="w-8 h-8 text-amber-500" />
                  <h3 className="text-2xl font-bold text-foreground">
                    {activePath === 'lia' ? 'LinkedIn Operator Secrets' : 'LinkedIn DFY'} Adds
                  </h3>
                </div>
                <div className="space-y-4">
                  {cardsData.map(card => {
                    if (card.tier === "high") {
                      return (
                        <div key={card.id} className="bg-background/80 rounded-lg p-4 border border-amber-500/30">
                          <div className="flex items-center gap-3 mb-2">
                            <card.icon className="w-5 h-5 text-amber-500" />
                            <h4 className="font-bold text-foreground">{card.title}</h4>
                            <span className="ml-auto text-xs font-bold text-amber-500 uppercase">Exclusive</span>
                          </div>
                          <ul className="space-y-1 ml-8">
                            {card.previewBullets?.map((item, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    if (card.tier === "split") {
                      return (
                        <div key={card.id} className="bg-background/80 rounded-lg p-4 border border-amber-500/30">
                          <div className="flex items-center gap-3 mb-2">
                            <card.icon className="w-5 h-5 text-amber-500" />
                            <h4 className="font-bold text-foreground">{card.title} Upgrades</h4>
                          </div>
                          <ul className="space-y-1 ml-8">
                            {card.highTicket?.slice(0, 3).map((item, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Bar */}
        <div className="relative bg-gradient-to-r from-muted/40 via-muted/30 to-muted/40 border border-border/50 rounded-xl py-8 px-6 max-w-6xl mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
          <div className="relative z-10 flex flex-wrap justify-center items-center gap-8 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base font-semibold text-foreground">50+ Video Modules</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base font-semibold text-foreground">100+ Templates & SOPs</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base font-semibold text-foreground">500+ Active Operators</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base font-semibold text-foreground">$10M+ Student Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base font-semibold text-foreground">15+ Industries Dominated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsInsideSection;
