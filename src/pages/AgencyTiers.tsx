import { Package, Crown, ArrowRight, X, Users, BookOpen, Lock, Network, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import frameworkDashboard from "@/assets/framework-dashboard.png";
import guidesTemplates from "@/assets/guides-templates.png";
import coachingCall from "@/assets/coaching-call.png";
import masterClasses from "@/assets/master-classes.png";

const AgencyTiers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Close Button */}
      <div className="container mx-auto px-4 pt-6">
        <Link to="/">
          <Button variant="ghost" size="icon" className="float-right">
            <X className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">Academy vs Secrets: What's The Difference?</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Secrets = Academy + Elite Operator Status
          </h1>
        </div>

        {/* Tier Cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Academy Tier */}
          <Card className="bg-card border-2 border-border overflow-hidden">
            <div className="p-8 space-y-6">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-1">LinkedIn Operator Academy</h2>
                  <p className="text-muted-foreground">The Complete Foundation</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Everything you need to build and scale a LinkedIn agency. Learn the systems, get the templates, join weekly GROUP coaching calls, and connect with the community.
              </p>

              {/* What's Included */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wider">What's Included:</h3>
                
                {/* Framework */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">7-Week Operator Framework</h4>
                    </div>
                  </div>
                  <div className="pl-11 space-y-1 text-sm text-muted-foreground">
                    <p>• 50+ Video Modules (7 comprehensive weeks)</p>
                    <p>• Client Acquisition Systems (attract real companies)</p>
                  </div>
                </div>

                {/* Templates */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Templates & SOP Library</h4>
                    </div>
                  </div>
                  <div className="pl-11 space-y-1 text-sm text-muted-foreground">
                    <p>• 50+ Content Templates (hooks, posts, lead magnets)</p>
                    <p>• DM & Outreach Scripts (connection requests, InMails)</p>
                  </div>
                </div>

                {/* Coaching */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Coaching & Operator Community</h4>
                    </div>
                  </div>
                  <div className="pl-11 space-y-1 text-sm text-muted-foreground">
                    <p>• Weekly GROUP Coaching Calls (strategy, Q&A, hot seats)</p>
                    <p>• 60 Days Community Access</p>
                  </div>
                </div>

                {/* Industry Playbooks */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Industry Playbooks</h4>
                    </div>
                  </div>
                  <div className="pl-11 space-y-1 text-sm text-muted-foreground">
                    <p>• 8+ Industry Playbooks (AI, SaaS, Finance, Real Estate, etc.)</p>
                    <p>• Niche Positioning Guides (stand out in your vertical)</p>
                  </div>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-muted/50 rounded-lg p-4 border border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Best For:</p>
                <p className="text-sm">Operators comfortable with group support and peer learning</p>
              </div>

              {/* Expected Results */}
              <div className="bg-muted/30 rounded-lg p-4 border border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Expected Results:</p>
                <p className="text-sm font-semibold">Land your first 3-5 clients ($5K-$15K/mo) within 60-90 days</p>
              </div>

              {/* CTA */}
              <Button className="w-full" size="lg" variant="default">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>

          {/* Secrets Tier */}
          <Card className="bg-gradient-to-br from-[#FF6B35]/5 via-background to-background border-2 border-[#FF6B35] overflow-hidden relative">
            {/* Elite Badge */}
            <div className="absolute top-6 right-6">
              <Badge className="bg-[#FF6B35] text-white border-0 px-3 py-1">
                👑 ELITE TIER
              </Badge>
            </div>

            <div className="p-8 space-y-6">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#FF6B35]/20 flex items-center justify-center flex-shrink-0">
                  <Crown className="h-6 w-6 text-[#FF6B35]" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-1">LinkedIn Operator Secrets</h2>
                  <p className="text-muted-foreground">Academy + Premium Advantages</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Never Build Alone. We Don't Let You Fail. Get everything in Academy (including group calls) PLUS personal 1-on-1 coaching with founders, lifetime access, and elite advantages.
              </p>

              {/* Everything in Academy */}
              <div className="bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-lg p-4">
                <p className="text-sm font-semibold flex items-center gap-2">
                  <span className="text-[#FF6B35]">✓</span>
                  EVERYTHING IN ACADEMY +
                </p>
              </div>

              {/* Premium Additions */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wider">Premium Additions:</h3>
                
                {/* Community Upgrades */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#FF6B35]/20 flex items-center justify-center">
                      <Users className="h-4 w-4 text-[#FF6B35]" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Coaching & Operator Community Upgrades</h4>
                    </div>
                  </div>
                  <div className="pl-11 space-y-1 text-sm text-muted-foreground">
                    <p>• Everything in Academy PLUS:</p>
                    <p>• 1-on-1 Coaching with Founders (personal guidance)</p>
                  </div>
                </div>

                {/* The LinkedIn Secrets */}
                <div className="space-y-3 bg-[#FF6B35]/5 border border-[#FF6B35]/20 rounded-lg p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-[#FF6B35]/20 flex items-center justify-center">
                        <Lock className="h-4 w-4 text-[#FF6B35]" />
                      </div>
                      <div>
                        <h4 className="font-semibold">The LinkedIn Secrets</h4>
                        <p className="text-xs text-muted-foreground">The difference between $10K/month and $100K/month agencies.</p>
                      </div>
                    </div>
                    <Badge variant="destructive" className="bg-[#FF6B35] border-0 text-xs whitespace-nowrap">EXCLUSIVE</Badge>
                  </div>
                  <div className="pl-11 space-y-1 text-sm text-muted-foreground">
                    <p>• Brand Equity Engineering (belief installation, positioning)</p>
                    <p>• Viral Content Science (predictable 1M+ view posts)</p>
                  </div>
                </div>

                {/* Exclusive Operator Network */}
                <div className="space-y-3 bg-[#FF6B35]/5 border border-[#FF6B35]/20 rounded-lg p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-[#FF6B35]/20 flex items-center justify-center">
                        <Network className="h-4 w-4 text-[#FF6B35]" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Exclusive Operator Network</h4>
                        <p className="text-xs text-muted-foreground">Access our private rolodex of vetted service providers and resources to build your success.</p>
                      </div>
                    </div>
                    <Badge variant="destructive" className="bg-[#FF6B35] border-0 text-xs whitespace-nowrap">EXCLUSIVE</Badge>
                  </div>
                  <div className="pl-11 space-y-1 text-sm text-muted-foreground">
                    <p>• Tax Optimization Solutions (operator-friendly accountants)</p>
                    <p>• Payment Processing (high-risk merchants, international)</p>
                  </div>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-[#FF6B35]/10 rounded-lg p-4 border border-[#FF6B35]/30">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Best For:</p>
                <p className="text-sm font-semibold">Operators who want personal 1-on-1 attention from founders</p>
              </div>

              {/* Expected Results */}
              <div className="bg-[#FF6B35]/10 rounded-lg p-4 border border-[#FF6B35]/30">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Expected Results:</p>
                <p className="text-sm font-semibold">$50K/month by month 6 (We guide you every step)</p>
                <p className="text-xs text-muted-foreground mt-2">With group calls + personal 1-on-1 coaching, lifetime community, founder DM access, and secret playbooks, operators scale 3-5X faster than Academy alone.</p>
              </div>

              {/* Testimonial */}
              <div className="bg-[#FF6B35]/5 border border-[#FF6B35]/20 rounded-lg p-4 italic">
                <p className="text-sm">"Secrets gave me the unfair advantages I needed. Went from $0 to $40K/mo in 4 months."</p>
                <p className="text-xs font-medium mt-2 not-italic">— Ethan C., LIO Secrets</p>
              </div>

              {/* Urgency */}
              <div className="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] rounded-lg p-4">
                <p className="font-bold text-sm">⚡ Limited to 50 operators per cohort</p>
              </div>

              {/* CTA */}
              <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90" size="lg">
                Apply For Secrets
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer Actions */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground text-sm">
            Not sure which tier is right for you?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button variant="outline" size="lg">
                See Full Comparison
              </Button>
            </Link>
            <Button variant="default" size="lg">
              Ask Leo to Recommend
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyTiers;
