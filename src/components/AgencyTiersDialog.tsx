import { Crown, Package, ArrowRight, BookOpen, Users, Clock, Target, User, Infinity, Flame, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

interface AgencyTiersDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AgencyTiersDialog = ({ open, onOpenChange }: AgencyTiersDialogProps) => {
  const navigate = useNavigate();
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center space-y-4">
            <Badge className="mb-4 text-base px-4 py-2">Choose Your Agency Path</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Your Path to a $50K/Month LinkedIn Agency
            </h2>
          </DialogTitle>
        </DialogHeader>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Academy Tier */}
          <Card className="p-8 border-2 hover:border-primary/50 transition-all duration-300">
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="h-8 w-8 text-primary" />
                  <Badge variant="outline" className="text-sm">Do It Yourself</Badge>
                </div>
                <h3 className="text-2xl font-bold">LinkedIn Operator Academy</h3>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-primary">$$$</p>
                  <span className="text-sm text-muted-foreground">Investment</span>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 gap-4">
                {/* Feature 1 */}
                <div className="bg-muted/30 rounded-lg p-4 text-center space-y-2">
                  <BookOpen className="h-12 w-12 mx-auto text-primary" />
                  <div className="font-bold text-sm">THE COMPLETE SYSTEM</div>
                  <div className="text-xs text-muted-foreground">7 weeks • 50+ modules</div>
                </div>

                {/* Feature 2 */}
                <div className="bg-muted/30 rounded-lg p-4 text-center space-y-2">
                  <Users className="h-12 w-12 mx-auto text-primary" />
                  <div className="font-bold text-sm">GROUP COACHING</div>
                  <div className="text-xs text-muted-foreground">Weekly calls with founders</div>
                </div>

                {/* Feature 3 */}
                <div className="bg-muted/30 rounded-lg p-4 text-center space-y-2">
                  <Clock className="h-12 w-12 mx-auto text-primary" />
                  <div className="font-bold text-sm">60-DAY ACCESS</div>
                  <div className="text-xs text-muted-foreground">Community + support</div>
                </div>

                {/* Feature 4 */}
                <div className="bg-muted/30 rounded-lg p-4 text-center space-y-2">
                  <Target className="h-12 w-12 mx-auto text-primary" />
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
              <Button 
                className="w-full" 
                size="lg" 
                variant="hero"
                onClick={() => navigate('/agency/academy')}
              >
                Join Academy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>

          {/* Secrets Tier */}
          <Card className="p-8 border-[3px] border-[#FFB800] bg-gradient-to-br from-background to-[#FFB800]/5 relative overflow-hidden transform scale-[1.03] shadow-[0_8px_24px_rgba(255,184,0,0.15)]">
            <div className="absolute top-4 left-4">
              <Badge className="bg-[#FFB800] text-black font-semibold">MOST POPULAR</Badge>
            </div>
            <div className="absolute top-4 right-4">
              <Badge className="bg-[#FFB800] text-black font-semibold animate-pulse">8 SPOTS LEFT</Badge>
            </div>
            
            <div className="space-y-6 mt-8">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-3">
                  <Crown className="h-8 w-8 text-primary" />
                  <Badge variant="outline" className="text-sm border-primary">Elite Support + Access</Badge>
                </div>
                <h3 className="text-2xl font-bold">LinkedIn Operator SECRETS</h3>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-primary">$$$$</p>
                  <span className="text-sm text-muted-foreground">Premium Investment</span>
                </div>
              </div>

              {/* Everything in Academy Plus */}
              <div className="bg-[#FFB800]/5 border border-[#FFB800]/20 rounded-lg p-3 text-center">
                <p className="text-sm font-semibold flex items-center justify-center gap-2">
                  <Crown className="h-4 w-4 text-[#FFB800]" />
                  Everything in Academy PLUS:
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 gap-4">
                {/* Feature 1 */}
                <div className="bg-[#FFB800]/5 border border-[#FFB800]/20 rounded-lg p-4 text-center space-y-2">
                  <User className="h-12 w-12 mx-auto text-[#FFB800]" />
                  <div className="font-bold text-sm">1-ON-1 COACHING</div>
                  <div className="text-xs text-muted-foreground">Personal founder calls</div>
                </div>

                {/* Feature 2 */}
                <div className="bg-[#FFB800]/5 border border-[#FFB800]/20 rounded-lg p-4 text-center space-y-2">
                  <Infinity className="h-12 w-12 mx-auto text-[#FFB800]" />
                  <div className="font-bold text-sm">LIFETIME ACCESS</div>
                  <div className="text-xs text-muted-foreground">Never expires</div>
                </div>

                {/* Feature 3 */}
                <div className="bg-[#FFB800]/5 border border-[#FFB800]/20 rounded-lg p-4 text-center space-y-2">
                  <Flame className="h-12 w-12 mx-auto text-[#FFB800]" />
                  <div className="font-bold text-sm">THE SECRETS VAULT</div>
                  <div className="text-xs text-muted-foreground">Strategies we don't teach publicly</div>
                </div>

                {/* Feature 4 */}
                <div className="bg-[#FFB800]/5 border border-[#FFB800]/20 rounded-lg p-4 text-center space-y-2">
                  <Zap className="h-12 w-12 mx-auto text-[#FFB800]" />
                  <div className="font-bold text-sm">FIRST CLIENT IN 30 DAYS</div>
                  <div className="text-xs text-muted-foreground">$40K/month by month 4</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-[#FFB800]/10 rounded-lg p-4 border-l-4 border-[#FFB800]">
                <p className="text-sm italic">"Hit $40K in 4 months with 1-on-1"</p>
                <p className="text-xs font-medium mt-1">— Sarah K.</p>
              </div>

              {/* Urgency Callout */}
              <div className="bg-[#FFB800]/10 border-l-4 border-[#FFB800] rounded-lg p-4 space-y-1">
                <p className="font-bold text-sm flex items-center justify-center gap-2">
                  <Zap className="h-4 w-4 text-[#FFB800]" />
                  ONLY 8 SPOTS LEFT THIS MONTH
                </p>
                <p className="text-xs text-muted-foreground">(We limit enrollment to maintain quality)</p>
                <p className="text-xs text-muted-foreground">Last cohort filled in 6 days.</p>
              </div>

              {/* CTA */}
              <Button 
                className="w-full" 
                size="lg" 
                variant="hero"
                onClick={() => {
                  navigate('/agency/secrets');
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                }}
              >
                Apply for Secrets
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgencyTiersDialog;
