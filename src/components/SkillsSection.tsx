import { Target, TrendingUp, Pen, DollarSign, Cog, Rocket } from "lucide-react";

export const SkillsSection = () => {
  const skills = [
    {
      icon: Target,
      title: "CLIENT ACQUISITION",
      items: [
        "Positioning",
        "Niche selection",
        "Offer creation",
        "Pricing strategy",
        "Cold outreach",
        "Inbound systems"
      ]
    },
    {
      icon: TrendingUp,
      title: "LINKEDIN STRATEGY",
      items: [
        "Algorithm mastery",
        "Profile optimization",
        "Growth hacking",
        "Analytics tracking",
        "Content distribution",
        "Engagement tactics"
      ]
    },
    {
      icon: Pen,
      title: "CONTENT MASTERY",
      items: [
        "Viral hooks",
        "Lead magnets",
        "Personal branding",
        "Ghostwriting",
        "Storytelling",
        "Copywriting"
      ]
    },
    {
      icon: DollarSign,
      title: "HIGH-TICKET CLOSING",
      items: [
        "Discovery calls",
        "Objection handling",
        "Proposal creation",
        "Contract negotiation",
        "Value stacking",
        "Follow-up systems"
      ]
    },
    {
      icon: Cog,
      title: "FULFILLMENT SYSTEMS",
      items: [
        "Client onboarding",
        "Service delivery",
        "Quality control",
        "Client retention",
        "Upselling",
        "Case studies"
      ]
    },
    {
      icon: Rocket,
      title: "SCALING SYSTEMS",
      items: [
        "Team building",
        "Automation",
        "SOPs",
        "AI tools",
        "Delegation",
        "Systems thinking"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Skills That Build<br />
              <span className="text-primary">$20K+/Month</span> Agencies
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              By the end of LinkedIn Operator Academy, you'll have mastered the exact skills that separate $5K/month agencies from $50K/month agencies.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-sm uppercase tracking-wider">
                      {skill.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Bottom Message */}
          <div className="text-center">
            <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
              These aren't just theory. These are the <span className="font-bold text-primary">exact skills</span> our students used to sign Fortune 500s, YC companies, and $1B+ firms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};