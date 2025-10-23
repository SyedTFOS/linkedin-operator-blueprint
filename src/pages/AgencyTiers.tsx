import { Check, Crown, Package, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

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

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <Badge className="mb-4 text-base px-4 py-2">Choose Your Agency Path</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Path to a $50K/Month LinkedIn Agency
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Both include the complete system + weekly coaching.<br />
            The difference? <span className="text-foreground font-semibold">Academy = group support.</span><br />
            <span className="text-foreground font-semibold">Secrets = group + 1-on-1 + lifetime access.</span>
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-start">
          {/* Academy Tier */}
          <Card className="p-8 border-2 hover:border-primary/50 transition-all duration-300">
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="h-8 w-8 text-primary" />
                  <Badge variant="outline" className="text-sm">Do It Yourself</Badge>
                </div>
                <h2 className="text-2xl font-bold">LinkedIn Operator Academy</h2>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-primary">$$$</p>
                  <span className="text-sm text-muted-foreground">Investment</span>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 gap-4">
                {/* Feature 1 */}
                <div className="bg-muted/30 rounded-lg p-4 text-center space-y-2">
                  <div className="text-4xl">📚</div>
                  <div className="font-bold text-sm">THE COMPLETE SYSTEM</div>
                  <div className="text-xs text-muted-foreground">7 weeks • 50+ modules</div>
                </div>

                {/* Feature 2 */}
                <div className="bg-muted/30 rounded-lg p-4 text-center space-y-2">
                  <div className="text-4xl">👥</div>
                  <div className="font-bold text-sm">GROUP COACHING</div>
                  <div className="text-xs text-muted-foreground">Weekly calls with founders</div>
                </div>

                {/* Feature 3 */}
                <div className="bg-muted/30 rounded-lg p-4 text-center space-y-2">
                  <div className="text-4xl">⏱️</div>
                  <div className="font-bold text-sm">60-DAY ACCESS</div>
                  <div className="text-xs text-muted-foreground">Community + support</div>
                </div>

                {/* Feature 4 */}
                <div className="bg-muted/30 rounded-lg p-4 text-center space-y-2">
                  <div className="text-4xl">🎯</div>
                  <div className="font-bold text-sm">FIRST CLIENT IN 60 DAYS</div>
                  <div className="text-xs text-muted-foreground">$10K/month by day 90</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-muted/20 rounded-lg p-4 border-l-4 border-primary/30">
                <p className="text-sm italic text-muted-foreground">"Got my first client in week 8"</p>
                <p className="text-xs font-medium mt-1">— Marcus T.</p>
              </div>

              {/* CTA */}
              <Button className="w-full" size="lg" variant="hero">
                Join Academy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>

          {/* Secrets Tier */}
          <Card className="p-8 border-[3px] border-[#FF6B35] bg-gradient-to-br from-background to-primary/5 relative overflow-hidden transform scale-[1.03] shadow-[0_8px_24px_rgba(255,107,53,0.15)]">
            <div className="absolute top-4 left-4">
              <Badge className="bg-[#FF6B35] text-white">🔥 MOST POPULAR</Badge>
            </div>
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary text-primary-foreground animate-pulse">📍 8 SPOTS LEFT</Badge>
            </div>
            
            <div className="space-y-6 mt-8">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-3">
                  <Crown className="h-8 w-8 text-primary" />
                  <Badge variant="outline" className="text-sm border-primary">Elite Support + Access</Badge>
                </div>
                <h2 className="text-2xl font-bold">LinkedIn Operator SECRETS</h2>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-primary">$$$$</p>
                  <span className="text-sm text-muted-foreground">Premium Investment</span>
                </div>
              </div>

              {/* Everything in Academy Plus */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-center">
                <p className="text-sm font-semibold flex items-center justify-center gap-2">
                  <Crown className="h-4 w-4 text-primary" />
                  Everything in Academy PLUS:
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 gap-4">
                {/* Feature 1 */}
                <div className="bg-[#FF6B35]/5 border border-[#FF6B35]/20 rounded-lg p-4 text-center space-y-2">
                  <div className="text-4xl">👤</div>
                  <div className="font-bold text-sm">1-ON-1 COACHING</div>
                  <div className="text-xs text-muted-foreground">Personal founder calls</div>
                </div>

                {/* Feature 2 */}
                <div className="bg-[#FF6B35]/5 border border-[#FF6B35]/20 rounded-lg p-4 text-center space-y-2">
                  <div className="text-4xl">♾️</div>
                  <div className="font-bold text-sm">LIFETIME ACCESS</div>
                  <div className="text-xs text-muted-foreground">Never expires</div>
                </div>

                {/* Feature 3 */}
                <div className="bg-[#FF6B35]/5 border border-[#FF6B35]/20 rounded-lg p-4 text-center space-y-2">
                  <div className="text-4xl">🔥</div>
                  <div className="font-bold text-sm">THE SECRETS VAULT</div>
                  <div className="text-xs text-muted-foreground">Strategies we don't teach publicly</div>
                </div>

                {/* Feature 4 */}
                <div className="bg-[#FF6B35]/5 border border-[#FF6B35]/20 rounded-lg p-4 text-center space-y-2">
                  <div className="text-4xl">⚡</div>
                  <div className="font-bold text-sm">FIRST CLIENT IN 30 DAYS</div>
                  <div className="text-xs text-muted-foreground">$40K/month by month 4</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-[#FF6B35]/10 rounded-lg p-4 border-l-4 border-[#FF6B35]">
                <p className="text-sm italic">"Hit $40K in 4 months with 1-on-1"</p>
                <p className="text-xs font-medium mt-1">— Sarah K.</p>
              </div>

              {/* Urgency Callout */}
              <div className="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] rounded-lg p-4 space-y-1">
                <p className="font-bold text-sm">⚡ ONLY 8 SPOTS LEFT THIS MONTH</p>
                <p className="text-xs text-muted-foreground">(We limit enrollment to maintain quality)</p>
                <p className="text-xs text-muted-foreground">Last cohort filled in 6 days.</p>
              </div>

              {/* CTA */}
              <Button className="w-full" size="lg" variant="hero">
                Apply for Secrets
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer Actions */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            ❓ Not sure which?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button variant="outline" size="lg">
                See Full Comparison
              </Button>
            </Link>
            <Button variant="hero-outline" size="lg">
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
