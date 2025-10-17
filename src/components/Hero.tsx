import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[150px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      <div className="container relative mx-auto px-6 pt-20 pb-16">
        {/* Centered Content Layout */}
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">The Center of LinkedIn Education</span>
          </div>

          {/* Main Headline - Larger and More Impactful */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight">
              Building the Best
              <br />
              <span className="text-gradient glow-text">
                Business Model
              </span>
              <br />
              of 2026
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto font-light">
              Start, scale, and dominate with your own LinkedIn Agency
            </p>
          </div>

          {/* Social Proof Stats - Horizontal */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold">30M+</p>
                <p className="text-sm text-muted-foreground">Organic Views</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold">2,500+</p>
                <p className="text-sm text-muted-foreground">B2B Meetings</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold">6-Fig</p>
                <p className="text-sm text-muted-foreground">Agencies Built</p>
              </div>
            </div>
          </div>

          {/* Value Prop */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            We used the <span className="text-primary font-semibold">LinkedIn Secrets</span> to generate 30M+ organic views, book 2,500+ high-ticket meetings, and build multiple 6-figure agencies from zero.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="hero" 
              size="xl"
              className="group min-w-[280px]"
            >
              Start Your Agency Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="hero-outline" 
              size="xl"
              className="min-w-[280px]"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Success Stories
            </Button>
          </div>

          {/* Dashboard Mockup - Full Width */}
          <div className="relative pt-16 animate-slide-up">
            <div className="relative max-w-6xl mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-3xl" />
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                <img 
                  src={heroDashboard} 
                  alt="LinkedIn Operator Dashboard showing analytics and successful agency metrics"
                  className="w-full h-auto"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Trust Bar */}
          <div className="pt-16 space-y-6">
            <p className="text-sm text-muted-foreground">
              Trusted by LinkedIn Operators Worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
              <span className="text-base font-medium">LinkedIn Agencies</span>
              <span className="w-1 h-1 bg-muted-foreground rounded-full" />
              <span className="text-base font-medium">B2B Founders</span>
              <span className="w-1 h-1 bg-muted-foreground rounded-full" />
              <span className="text-base font-medium">Marketing Teams</span>
              <span className="w-1 h-1 bg-muted-foreground rounded-full" />
              <span className="text-base font-medium">Content Creators</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
