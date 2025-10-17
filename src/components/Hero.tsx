import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import logo from "@/assets/logo-white.png";

const Hero = () => {
  return (
    <section className="relative bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img src={logo} alt="LinkedIn Operator" className="h-8" />
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Results</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <Button variant="default" size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-foreground">Proven System for 2026</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                Build a Six-Figure
                <br />
                <span className="text-primary">LinkedIn Agency</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                The complete framework to start, scale, and run a profitable LinkedIn agency—from zero to consistent high-ticket clients.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-border/50">
                <div>
                  <div className="text-2xl font-bold text-foreground">30M+</div>
                  <div className="text-sm text-muted-foreground">Organic Views</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">2,500+</div>
                  <div className="text-sm text-muted-foreground">Meetings Booked</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">6-Fig</div>
                  <div className="text-sm text-muted-foreground">Revenue Scale</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="group">
                  Start Your Agency
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </div>
            </div>

            {/* Right: Dashboard Preview */}
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl">
                <img 
                  src={heroDashboard} 
                  alt="LinkedIn agency dashboard showcasing performance metrics and analytics"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-border/50">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Scalable System</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Proven processes to grow from your first client to a full agency with recurring revenue.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">High-Ticket Clients</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Learn the exact methods we use to consistently book qualified B2B meetings.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">LinkedIn Mastery</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The secrets behind generating 30M+ organic views and building authority fast.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
