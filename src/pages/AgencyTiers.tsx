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
          <Badge className="mb-4 text-base px-4 py-2">Choose Your Path</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Build Your LinkedIn Agency: Choose Your Tier
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Both include the complete system + weekly coaching.<br />
            The difference? <span className="text-foreground font-semibold">Academy = group support.</span><br />
            <span className="text-foreground font-semibold">Secrets = group + 1-on-1 + lifetime access.</span>
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
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
                <p className="text-3xl font-bold text-primary">Investment Required</p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Complete 7-week framework</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>All templates & SOPs</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-semibold">Weekly GROUP coaching calls</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>60-day community access</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Industry playbooks</span>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <p className="font-semibold text-sm uppercase tracking-wide">Best for:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Budget-conscious operators</li>
                  <li>• Comfortable learning in group setting</li>
                  <li>• Don't need 1-on-1 attention</li>
                </ul>
              </div>

              {/* CTA */}
              <Button className="w-full" size="lg" variant="hero">
                Join LinkedIn Operator Academy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>

          {/* Secrets Tier */}
          <Card className="p-8 border-2 border-primary bg-gradient-to-br from-background to-primary/5 relative overflow-hidden premium-card-glow">
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary text-primary-foreground">LIMITED SPOTS</Badge>
            </div>
            
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-3">
                  <Crown className="h-8 w-8 text-primary" />
                  <Badge variant="outline" className="text-sm border-primary">Elite Support + Access</Badge>
                </div>
                <h2 className="text-2xl font-bold">LinkedIn Operator SECRETS</h2>
                <p className="text-3xl font-bold text-primary">Premium Investment</p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <p className="font-bold text-primary flex items-center gap-2">
                  <Crown className="h-5 w-5" />
                  Everything in Academy PLUS:
                </p>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-semibold">1-on-1 coaching with founders</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Access to Academy group calls too <span className="text-primary font-semibold">(double the coaching)</span></span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-semibold">Lifetime community (never expires)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>24/7 founder access (6 months)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>The LinkedIn Secrets vault</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>LinkedIn Operator Secrets</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Elite operator network</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>In-person events</span>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-primary/10 rounded-lg p-4 space-y-2 border border-primary/20">
                <p className="font-semibold text-sm uppercase tracking-wide">Best for:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Want fastest results</li>
                  <li>• Need personal attention</li>
                  <li>• Building 6-7 figure agency</li>
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/30 rounded-lg p-3 text-center">
                <p className="text-sm font-semibold">✅ Guarantee Included</p>
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
