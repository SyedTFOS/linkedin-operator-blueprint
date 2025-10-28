import { useNavigate } from "react-router-dom";
import { X, Menu, User, FileText, MessageSquare } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-text.png";
import mastercardLogo from "@/assets/mastercard-logo.png";
import forbes30Logo from "@/assets/forbes-30-under-30.png";
import yCombinatorLogo from "@/assets/y-combinator-logo.png";
import diversyfundLogo from "@/assets/diversyfund-logo.png";
import playertwoLogo from "@/assets/playertwo-logo.png";
import forbesLogo from "@/assets/forbes-logo.png";
import { CountdownTimer } from "@/components/CountdownTimer";

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

      {/* What's a LinkedIn Agency Section */}
      <div className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What's a <span className="bg-gradient-to-r from-primary via-primary/80 to-[#FF6B35] bg-clip-text text-transparent">LinkedIn Agency</span> — And Why Is Everyone Starting One?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Think of it like this:
            </p>
          </div>

          {/* Three-Step Explanation */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  1
                </div>
                <div>
                  <p className="text-lg md:text-xl text-foreground">
                    <span className="font-semibold">Businesses need customers</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  2
                </div>
                <div>
                  <p className="text-lg md:text-xl text-foreground">
                    <span className="font-semibold">LinkedIn is where they find them</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-background backdrop-blur-sm border border-primary/30 rounded-2xl shadow-lg shadow-primary/10">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  3
                </div>
                <div>
                  <p className="text-lg md:text-xl text-foreground">
                    <span className="font-bold text-primary">You become the bridge</span> that brings them together
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Three Services */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">With just 3 simple services:</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Service 1 */}
            <div className="group relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                <User className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-3 text-foreground">Profile Optimization</h4>
                <p className="text-muted-foreground">
                  Make their profile convert like a landing page
                </p>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <div className="text-3xl font-bold text-primary">✓</div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-3 text-foreground">Content Creation</h4>
                <p className="text-muted-foreground">
                  Position them as the industry authority
                </p>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <div className="text-3xl font-bold text-primary">✓</div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                <MessageSquare className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-3 text-foreground">LinkedIn Outreach</h4>
                <p className="text-muted-foreground">
                  Book sales calls with real buyers
                </p>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <div className="text-3xl font-bold text-primary">✓</div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="space-y-4 mb-8">
              <p className="text-lg md:text-xl text-foreground/80">
                No tech. No audience. No fluff.
              </p>
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Just <span className="text-primary font-bold">real work</span> that drives <span className="text-primary font-bold">real ROI</span> for serious clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why LinkedIn Agencies Section - Comparison */}
      <div className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <span className="text-sm font-medium text-foreground uppercase tracking-wide">
                💎 REALITY CHECK
              </span>
            </div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Why <span className="bg-gradient-to-r from-primary via-primary/80 to-[#FF6B35] bg-clip-text text-transparent">LinkedIn Agencies</span> Are Different
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Unlike other business models, this actually works for beginners
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Other Models */}
              <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-muted-foreground">Other Models</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-destructive text-sm">✗</span>
                    </div>
                    <p className="text-foreground/80">Takes 6–12 months to see $$</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-destructive text-sm">✗</span>
                    </div>
                    <p className="text-foreground/80">Needs audience/followers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-destructive text-sm">✗</span>
                    </div>
                    <p className="text-foreground/80">Competes on price</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-destructive text-sm">✗</span>
                    </div>
                    <p className="text-foreground/80">Unsure offer + unclear niche</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-destructive text-sm">✗</span>
                    </div>
                    <p className="text-foreground/80">High churn & burnout</p>
                  </div>
                </div>
              </div>

              {/* LinkedIn Agency */}
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background backdrop-blur-sm border border-primary/30 rounded-2xl p-8 shadow-xl shadow-primary/10">
                <h3 className="text-2xl font-bold mb-6 text-primary">LinkedIn Agency</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <p className="text-foreground">Land your first client in 30–60 days</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <p className="text-foreground">Zero following required</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <p className="text-foreground">Charge $3K–$50K/client</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <p className="text-foreground">Offers built on real client demand</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <p className="text-foreground">3–5 clients = full-time income</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              This is not theory. It's a <span className="text-primary">repeatable system.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Real Results Section */}
      <div className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-background relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real <span className="bg-gradient-to-r from-primary via-primary/80 to-[#FF6B35] bg-clip-text text-transparent">Operators</span>, Real Results
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Students starting from zero — now running profitable agencies
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {/* Result 1 */}
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                  E
                </div>
                <div>
                  <div className="font-bold text-foreground">Ethan</div>
                  <div className="text-sm text-muted-foreground">Agency Owner</div>
                </div>
              </div>
              <p className="text-foreground mb-2">
                <span className="text-muted-foreground">$1K/month</span> → <span className="text-primary font-bold text-2xl">$27K/month</span>
              </p>
              <p className="text-sm text-muted-foreground">in 6 months</p>
            </div>

            {/* Result 2 */}
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                  J
                </div>
                <div>
                  <div className="font-bold text-foreground">Jessica</div>
                  <div className="text-sm text-muted-foreground">Resume Agency</div>
                </div>
              </div>
              <p className="text-foreground mb-2">
                <span className="text-primary font-bold text-2xl">$100K/month</span>
              </p>
              <p className="text-sm text-muted-foreground">using our content system</p>
            </div>

            {/* Result 3 */}
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                  R
                </div>
                <div>
                  <div className="font-bold text-foreground">Rubaiyat</div>
                  <div className="text-sm text-muted-foreground">SaaS Founder</div>
                </div>
              </div>
              <p className="text-foreground mb-2">
                <span className="text-primary font-bold text-2xl">$7.7M ARR</span>
              </p>
              <p className="text-sm text-muted-foreground">pipeline from LinkedIn alone</p>
            </div>

            {/* Result 4 */}
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                  V
                </div>
                <div>
                  <div className="font-bold text-foreground">Vasilije</div>
                  <div className="text-sm text-muted-foreground">Started From Scratch</div>
                </div>
              </div>
              <p className="text-foreground mb-2">
                <span className="text-primary font-bold text-2xl">$25K/month</span>
              </p>
              <p className="text-sm text-muted-foreground">agency in first year</p>
            </div>

            {/* Result 5 */}
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                  S
                </div>
                <div>
                  <div className="font-bold text-foreground">Sam</div>
                  <div className="text-sm text-muted-foreground">Creator Pivot</div>
                </div>
              </div>
              <p className="text-foreground mb-2">
                <span className="text-primary font-bold text-2xl">3,000+ waitlist</span>
              </p>
              <p className="text-sm text-muted-foreground">in 21 days after pivot</p>
            </div>

            {/* Result 6 */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background backdrop-blur-sm border border-primary/30 rounded-2xl p-6 shadow-xl shadow-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  ?
                </div>
                <div>
                  <div className="font-bold text-foreground">You</div>
                  <div className="text-sm text-muted-foreground">Next Success Story</div>
                </div>
              </div>
              <p className="text-foreground mb-2">
                <span className="text-primary font-bold text-2xl">Your Turn</span>
              </p>
              <p className="text-sm text-muted-foreground">Join them today</p>
            </div>
          </div>
        </div>
      </div>

      {/* How You Get Paid Section */}
      <div className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How You <span className="bg-gradient-to-r from-primary via-primary/80 to-[#FF6B35] bg-clip-text text-transparent">Get Paid</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              You charge monthly retainers
            </p>
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-primary/80 to-[#FF6B35] bg-clip-text text-transparent mb-6">
              $3K–$50K/month
            </div>
            <p className="text-xl text-foreground/80">per client</p>
          </div>

          {/* Pricing Examples */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-center">
                Most of our students manage <span className="text-primary font-bold">3–10 clients</span>
              </p>
              
              <div className="space-y-6">
                {/* Example 1 */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/20">
                  <div className="text-center md:text-left">
                    <div className="text-lg font-semibold text-foreground mb-1">
                      3 clients @ $3,500
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    = $10,500/month
                  </div>
                </div>

                {/* Example 2 */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30">
                  <div className="text-center md:text-left">
                    <div className="text-lg font-semibold text-foreground mb-1">
                      5 clients @ $5,000
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    = $25,000/month
                  </div>
                </div>
              </div>

              <p className="text-xl md:text-2xl font-bold text-center text-foreground mt-8">
                Just a few clients = <span className="text-primary">full-time income</span>
              </p>
            </div>
          </div>

          {/* What Clients Get */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">What Clients Get:</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <p className="text-lg text-foreground">10–20 qualified sales calls/month</p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <p className="text-lg text-foreground">Premium LinkedIn profile that converts</p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <p className="text-lg text-foreground">Consistent inbound pipeline</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Start With <span className="bg-gradient-to-r from-primary via-primary/80 to-[#FF6B35] bg-clip-text text-transparent">3 Clients</span>.
              <br />
              Scale to $20K–$50K/Month.
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              LinkedIn Operator Academy is a <span className="font-semibold text-foreground">complete step-by-step system</span> to help you:
            </p>

            <div className="space-y-4 mb-12 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <p className="text-lg text-foreground">Sign your first (or next) high-ticket client</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <p className="text-lg text-foreground">Close retainers of <span className="font-bold text-primary">$3K–$50K/month</span></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <p className="text-lg text-foreground">Deliver results using <span className="font-semibold">our done-for-you templates & SOPs</span></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <p className="text-lg text-foreground">Scale into a 6-figure agency — without burnout or churn</p>
              </div>
            </div>

            <div className="bg-background/80 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 md:p-12 mb-12">
              <p className="text-xl md:text-2xl font-bold text-foreground mb-6">
                It's already working for:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <p className="text-foreground">Beginners with <span className="font-semibold">zero LinkedIn presence</span></p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <p className="text-foreground">Ex-agency owners stuck under $5K/month</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <p className="text-foreground">Coaches & experts pivoting from other platforms</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <p className="text-foreground">Creators tired of "playing the content game"</p>
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              And it works across industries:<br />
              <span className="font-semibold text-foreground">AI. SaaS. Med-Tech. Finance. Real Estate. You name it.</span>
            </p>

            {/* CTA Button */}
            <button 
              onClick={() => navigate('/')}
              className="group relative px-10 py-5 bg-primary text-primary-foreground rounded-xl font-bold text-xl shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 mb-6"
            >
              Get Instant Access Now
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>

            <p className="text-sm text-muted-foreground">
              Join <span className="font-semibold text-foreground">2,000+ members</span> building profitable LinkedIn agencies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
