import { useNavigate } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-text.png";
import mastercardLogo from "@/assets/mastercard-logo.png";
import forbes30Logo from "@/assets/forbes-30-under-30.png";
import yCombinatorLogo from "@/assets/y-combinator-logo.png";
import diversyfundLogo from "@/assets/diversyfund-logo.png";
import playertwoLogo from "@/assets/playertwo-logo.png";
import forbesLogo from "@/assets/forbes-logo.png";
import { CountdownTimer } from "@/components/CountdownTimer";
import frameworkDashboard from "@/assets/framework-dashboard.png";
import masterDocument from "@/assets/master-document.png";
import guidesTemplates from "@/assets/guides-templates.png";
import masterClasses from "@/assets/master-classes.png";
import { BookOpen, Users, Rocket, Award } from "lucide-react";

const Academy = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logos = [
    { src: mastercardLogo, alt: "Mastercard" },
    { src: forbes30Logo, alt: "Forbes 30 Under 30" },
    { src: yCombinatorLogo, alt: "Y Combinator" },
    { src: diversyfundLogo, alt: "Diversyfund" },
    { src: playertwoLogo, alt: "Player Two" },
    { src: forbesLogo, alt: "Forbes" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Navigation */}
      <nav className="hidden md:block border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img src={logo} alt="LinkedIn Operator" className="h-12 md:h-14 lg:h-16" />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Sliding Header */}
      <div className="md:hidden">
        {/* Mobile Header Toggle Button - Only show when menu is closed */}
        {!isMobileMenuOpen && (
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="fixed top-4 right-4 z-[100] bg-primary text-primary-foreground p-3 rounded-full shadow-2xl hover:scale-110 transition-transform"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}

        {/* Mobile Sliding Header */}
        <div className={`fixed top-0 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border/50 shadow-xl z-[90] transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="container mx-auto px-6 py-3 relative">
            <div className="flex items-center justify-between">
              <img src={logo} alt="LinkedIn Operator" className="h-8" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-primary-foreground p-2 rounded-full hover:scale-110 transition-transform"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
          {/* Countdown Banner */}
          <div className="max-w-4xl mx-auto mb-8 md:mb-12">
            <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <div className="text-lg md:text-xl font-bold text-foreground mb-1">
                    LIMITED SPOTS AT FOUNDING MEMBER PRICE
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-2">
                    <span className="text-primary font-semibold">147 joined</span>
                    <span>•</span>
                    <span>Only 53 spots left</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Ends in</div>
                  <CountdownTimer className="text-2xl font-bold text-primary" />
                </div>
              </div>
              <div className="mt-4 h-2 bg-background/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full" style={{ width: '73.5%' }}></div>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <span className="text-sm md:text-base font-medium text-foreground">
                ⚡ MASTER THE HIGHEST-DEMAND SKILL FOR 2025
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="max-w-5xl mx-auto text-center mb-8 md:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">Become a </span>
              <span className="bg-gradient-to-r from-primary via-primary/80 to-[#FF6B35] bg-clip-text text-transparent">
                LinkedIn Operator PRO
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-foreground/90">
              🚀 Build <span className="italic text-primary">Ready-To-Launch</span> LinkedIn Agencies <span className="underline decoration-primary/50">Solo</span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-base md:text-lg mb-8">
              <div className="flex items-center gap-2">
                <span className="text-foreground font-semibold">2,000+ members</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center gap-2">
                <span className="text-foreground font-semibold">1,400+ wins</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">$20k/m avg.</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Get started with this <span className="font-semibold text-foreground">beginner-friendly</span>, <span className="italic">over-the-shoulder</span> training that gets you from <span className="underline decoration-primary/50">zero</span> to your first full-stack client-getting LinkedIn agency in <span className="font-semibold text-foreground italic">hours instead of days</span>—even if you've never built one before.
            </p>

            <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto mb-10">
              I give you the necessary knowledge & systems so you can put in the work and make big money. This is business - not rocket-science.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => navigate('/')}
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
              >
                Join the Academy Now
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
              <button 
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const element = document.getElementById('chat-leo');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="px-8 py-4 bg-background border-2 border-primary/30 text-foreground rounded-xl font-semibold text-lg hover:bg-primary/5 hover:border-primary transition-all duration-300"
              >
                Talk to Leo First
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar Section */}
      <div className="bg-background border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">As Trusted By</p>
          </div>
          <div className="overflow-hidden">
            <div className="flex animate-[scroll_30s_linear_infinite] hover:pause">
              {[...logos, ...logos].map((logo, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 mx-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={`w-auto object-contain ${logo.alt === "Player Two" ? "h-16" : "h-12"}`} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What's Inside Section */}
      <div className="bg-gradient-to-br from-background via-primary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
              <span className="text-sm md:text-base font-medium text-foreground">
                🎯 EVERYTHING YOU NEED TO SUCCEED
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What's Inside the{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-[#FF6B35] bg-clip-text text-transparent">
                Academy
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Get instant access to our complete LinkedIn Operator system—everything you need to build, launch, and scale your agency
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Execution OS */}
            <div className="group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Rocket className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">LinkedIn Operator Execution OS</h3>
                <p className="text-muted-foreground mb-6">
                  Your complete operating system with tutorials, templates, content calendar, and daily execution framework
                </p>
                <img src={frameworkDashboard} alt="Execution OS Dashboard" className="rounded-lg border border-border/50 mb-4" />
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span className="text-foreground">Weekly content calendar & scheduling system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span className="text-foreground">Resource library with 50+ tutorials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span className="text-foreground">Daily task tracking & accountability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Master Document */}
            <div className="group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">LinkedIn Master Document</h3>
                <p className="text-muted-foreground mb-6">
                  Every strategy, script, and framework you need to dominate LinkedIn and close high-ticket clients
                </p>
                <img src={masterDocument} alt="Master Document" className="rounded-lg border border-border/50 mb-4" />
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="font-semibold text-foreground mb-2">Content</div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Full content strategy</li>
                      <li>• 50+ writing hooks</li>
                      <li>• Post frameworks</li>
                      <li>• Lead magnet blueprints</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-2">Sales & DMs</div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• DM master document</li>
                      <li>• Outreach library</li>
                      <li>• Meeting scripts</li>
                      <li>• $40k in 30min funnel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Features */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Templates & Guides */}
            <div className="group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <img src={guidesTemplates} alt="Templates & Guides" className="rounded-lg border border-border/50 mb-4" />
                <h4 className="text-xl font-bold mb-2 text-foreground">Templates & Guides</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  15+ plug-and-play guides including LinkedIn Growth Blueprint, GTM Roadmap, and Operator Pipeline
                </p>
              </div>
            </div>

            {/* Master Classes */}
            <div className="group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <img src={masterClasses} alt="Master Classes" className="rounded-lg border border-border/50 mb-4" />
                <h4 className="text-xl font-bold mb-2 text-foreground">Course Modules</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Step-by-step video training covering profile optimization, content creation, and client acquisition
                </p>
              </div>
            </div>

            {/* Community */}
            <div className="group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-full h-40 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-border/50 mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary/40" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">Private Community</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Connect with 2,000+ operators, get weekly calls, live Q&As, and direct support from the team
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button 
              onClick={() => navigate('/')}
              className="group relative px-10 py-5 bg-primary text-primary-foreground rounded-xl font-bold text-xl shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
            >
              Get Instant Access Now
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
            <p className="text-sm text-muted-foreground mt-4">Join 2,000+ members already inside</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
