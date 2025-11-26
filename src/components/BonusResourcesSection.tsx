import { FileText, Briefcase, Users, Infinity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TestimonialCard } from "@/components/TestimonialCard";
import vasilijeSimic from "@/assets/vasilije-simic.png";

export const BonusResourcesSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="py-24 md:py-40 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            PLUS: <span className="text-gradient">Everything You Need To Execute</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Not just training. Complete business-in-a-box with templates, playbooks, community access, and lifetime updates.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Column 1: Templates & SOPs */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Templates & SOPs</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>50+ Content Templates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>DM & Outreach Scripts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>Proposal Templates ($5K-$50K)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>Onboarding SOPs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>Fulfillment Playbooks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>Personal Brand Assets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>Automation Workflows</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Industry Playbooks */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Briefcase className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Industry Playbooks</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>AI Agency Playbook</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>SaaS Agency Playbook</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>Finance Agency Playbook</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>MedTech Agency Playbook</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>Real Estate Playbook</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>Investment Firm Playbook</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>B2B Services Playbook</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>Consulting Playbook</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Coaching & Community */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Coaching & Community</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>Weekly GROUP Coaching Calls</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>90 Days Community Access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>Live Q&A and Hot Seats</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span>Peer Network Collaboration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span className="font-semibold text-foreground">Optional Extension: $97/month</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Lifetime Access */}
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm border-2 border-primary/40 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
                <Infinity className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Lifetime Access</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                  <span>All 50+ Video Modules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                  <span className="font-semibold text-foreground">Future Updates FREE</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                  <span>New Playbooks Added</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                  <span>Template Library Expansions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-16">
          <TestimonialCard
            name="Vasilije Simic"
            image={vasilijeSimic}
            quote="I had zero experience running an agency. The framework, templates, and community support made it so simple. Now I'm managing 20+ clients and living the life I always dreamed of."
            result="$25K/month with 20+ clients"
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/agency/academy/checkout')}
            size="lg"
            className="px-10 py-6 text-lg font-bold shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
          >
            Get The Complete Framework
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
