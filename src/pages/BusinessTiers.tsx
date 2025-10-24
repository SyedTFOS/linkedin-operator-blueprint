import { Crown, Package, ArrowRight, X, BookOpen, Users, Target, Headphones, Infinity, Sparkles, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const BusinessTiers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-500/5">
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
          <Badge className="mb-4 text-base px-4 py-2">Choose Your Growth Path</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Become The #1 Authority In Your Industry
          </h1>
        </div>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-start">
          {/* LinkedIn Founder Tier */}
          <Card className="p-8 border-2 hover:border-blue-500/50 transition-all duration-300">
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="h-8 w-8 text-blue-500" />
                  <Badge variant="outline" className="text-sm border-blue-500">Strategic Foundation</Badge>
                </div>
                <h2 className="text-2xl font-bold">LinkedIn Founder</h2>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-blue-500">$$$</p>
                  <span className="text-sm text-muted-foreground">Investment</span>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 gap-4">
                {/* Feature 1 */}
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4 text-center space-y-2">
                  <BookOpen className="h-12 w-12 mx-auto text-blue-500" />
                  <div className="font-bold text-sm">STRATEGIC POSITIONING SYSTEM</div>
                  <div className="text-xs text-muted-foreground">Forbes-level authority framework</div>
                </div>

                {/* Feature 2 */}
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4 text-center space-y-2">
                  <Users className="h-12 w-12 mx-auto text-blue-500" />
                  <div className="font-bold text-sm">GROUP STRATEGY SESSIONS</div>
                  <div className="text-xs text-muted-foreground">Weekly calls with experts</div>
                </div>

                {/* Feature 3 */}
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4 text-center space-y-2">
                  <Target className="h-12 w-12 mx-auto text-blue-500" />
                  <div className="font-bold text-sm">CONTENT ENGINE TEMPLATES</div>
                  <div className="text-xs text-muted-foreground">High-converting frameworks</div>
                </div>

                {/* Feature 4 */}
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4 text-center space-y-2">
                  <TrendingUp className="h-12 w-12 mx-auto text-blue-500" />
                  <div className="font-bold text-sm">INBOUND LEADS IN 90 DAYS</div>
                  <div className="text-xs text-muted-foreground">10-20 qualified inquiries/month</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-blue-500/10 rounded-lg p-4 border-l-4 border-blue-500/30">
                <p className="text-sm italic text-muted-foreground">"Became a recognized voice in my industry"</p>
                <p className="text-xs font-medium mt-1">— David R., SaaS Founder</p>
              </div>

              {/* CTA */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                Join Founder Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>

          {/* LinkedIn DFY Tier */}
          <Card className="p-8 border-[3px] border-[#FFB800] bg-gradient-to-br from-background to-[#FFB800]/5 relative overflow-hidden transform scale-[1.03] shadow-[0_8px_24px_rgba(255,184,0,0.15)]">
            <div className="absolute top-4 left-4">
              <Badge className="bg-[#FFB800] text-black font-semibold">MOST POPULAR</Badge>
            </div>
            <div className="absolute top-4 right-4">
              <Badge className="bg-[#FFB800] text-black font-semibold animate-pulse">5 SPOTS LEFT</Badge>
            </div>
            
            <div className="space-y-6 mt-8">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-3">
                  <Crown className="h-8 w-8 text-[#FFB800]" />
                  <Badge variant="outline" className="text-sm border-[#FFB800]">White-Glove Service</Badge>
                </div>
                <h2 className="text-2xl font-bold">LinkedIn DFY</h2>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-[#FFB800]">$$$$</p>
                  <span className="text-sm text-muted-foreground">Premium Investment</span>
                </div>
              </div>

              {/* Everything in Founder Plus */}
              <div className="bg-[#FFB800]/5 border border-[#FFB800]/20 rounded-lg p-3 text-center">
                <p className="text-sm font-semibold flex items-center justify-center gap-2">
                  <Crown className="h-4 w-4 text-[#FFB800]" />
                  Everything in Founder PLUS:
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 gap-4">
                {/* Feature 1 */}
                <div className="bg-[#FFB800]/5 border border-[#FFB800]/20 rounded-lg p-4 text-center space-y-2">
                  <Headphones className="h-12 w-12 mx-auto text-[#FFB800]" />
                  <div className="font-bold text-sm">DEDICATED ACCOUNT MANAGER</div>
                  <div className="text-xs text-muted-foreground">Your personal LinkedIn expert</div>
                </div>

                {/* Feature 2 */}
                <div className="bg-[#FFB800]/5 border border-[#FFB800]/20 rounded-lg p-4 text-center space-y-2">
                  <Infinity className="h-12 w-12 mx-auto text-[#FFB800]" />
                  <div className="font-bold text-sm">COMPLETE EXECUTION</div>
                  <div className="text-xs text-muted-foreground">We do everything for you</div>
                </div>

                {/* Feature 3 */}
                <div className="bg-[#FFB800]/5 border border-[#FFB800]/20 rounded-lg p-4 text-center space-y-2">
                  <Sparkles className="h-12 w-12 mx-auto text-[#FFB800]" />
                  <div className="font-bold text-sm">CUSTOM CONTENT CREATION</div>
                  <div className="text-xs text-muted-foreground">Professional writers & designers</div>
                </div>

                {/* Feature 4 */}
                <div className="bg-[#FFB800]/5 border border-[#FFB800]/20 rounded-lg p-4 text-center space-y-2">
                  <Zap className="h-12 w-12 mx-auto text-[#FFB800]" />
                  <div className="font-bold text-sm">RESULTS IN 60 DAYS</div>
                  <div className="text-xs text-muted-foreground">Top industry voice positioning</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-[#FFB800]/10 rounded-lg p-4 border-l-4 border-[#FFB800]">
                <p className="text-sm italic">"LinkedIn became my #1 client source"</p>
                <p className="text-xs font-medium mt-1">— Maria L., B2B Consultant</p>
              </div>

              {/* Urgency Callout */}
              <div className="bg-[#FFB800]/10 border-l-4 border-[#FFB800] rounded-lg p-4 space-y-1">
                <p className="font-bold text-sm flex items-center justify-center gap-2">
                  <Zap className="h-4 w-4 text-[#FFB800]" />
                  ONLY 5 SPOTS LEFT THIS MONTH
                </p>
                <p className="text-xs text-muted-foreground">(We limit clients for quality delivery)</p>
                <p className="text-xs text-muted-foreground">Last spots filled in 4 days.</p>
              </div>

              {/* CTA */}
              <Button className="w-full bg-[#FFB800] hover:bg-[#FFB800]/90 text-black font-semibold" size="lg">
                Apply for DFY Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer Actions */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <span>❓</span> Not sure which?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button variant="outline" size="lg">
                See Full Comparison
              </Button>
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
              Ask Leo to Recommend
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTiers;
