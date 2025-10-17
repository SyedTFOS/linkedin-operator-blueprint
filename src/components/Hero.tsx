import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1s" }} />

      <div className="container relative mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">The Center of LinkedIn Education</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                Building the Best
                <br />
                <span className="text-gradient glow-text">
                  Business Model
                </span>
                <br />
                of 2026
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                Start, scale, and dominate with your own LinkedIn Agency
              </p>
            </div>

            {/* Value Proposition */}
            <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
              We used the <span className="text-primary font-semibold">LinkedIn Secrets</span> to generate <span className="font-semibold">30M+ organic views</span>, book <span className="font-semibold">2,500+ high-ticket meetings</span>, and build multiple <span className="font-semibold">6-figure agencies</span> from zero.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="xl"
                className="group"
              >
                Start Your Agency Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl"
              >
                Explore B2B Solutions
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <TrendingUp className="w-5 h-5" />
                  <p className="text-3xl font-bold">30M+</p>
                </div>
                <p className="text-sm text-muted-foreground">Organic Views</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="w-5 h-5" />
                  <p className="text-3xl font-bold">2,500+</p>
                </div>
                <p className="text-sm text-muted-foreground">B2B Meetings</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Target className="w-5 h-5" />
                  <p className="text-3xl font-bold">6-Fig</p>
                </div>
                <p className="text-sm text-muted-foreground">Agencies Built</p>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative animate-slide-up lg:block hidden">
            {/* Glow container */}
            <div className="relative glow-effect">
              {/* Dashboard image */}
              <div className="relative rounded-2xl overflow-hidden border-glow">
                <img 
                  src={heroDashboard} 
                  alt="LinkedIn Operator Dashboard - Analytics and metrics showing successful LinkedIn agency performance"
                  className="w-full h-auto"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating stat cards */}
              <div className="absolute -left-8 top-1/4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="gradient-card p-4 rounded-xl border-glow backdrop-blur-sm">
                  <p className="text-xs text-muted-foreground mb-1">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-primary">$20K+</p>
                  <p className="text-xs text-green-400 mt-1">↑ 156% growth</p>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="gradient-card p-4 rounded-xl border-glow backdrop-blur-sm">
                  <p className="text-xs text-muted-foreground mb-1">Active Clients</p>
                  <p className="text-2xl font-bold text-primary">12</p>
                  <p className="text-xs text-green-400 mt-1">+4 this month</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-24 pt-12 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by LinkedIn Operators Worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-lg font-semibold">LinkedIn Agencies</div>
            <div className="text-lg font-semibold">B2B Founders</div>
            <div className="text-lg font-semibold">Marketing Agencies</div>
            <div className="text-lg font-semibold">Content Creators</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
