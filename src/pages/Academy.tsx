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
import lifestyleCar from "@/assets/lifestyle-car.png";
import lifestyleCity from "@/assets/lifestyle-city.png";
import lifestylePool from "@/assets/lifestyle-pool.png";
import lifestyleBeach from "@/assets/lifestyle-beach.png";
import lifestyleOffice from "@/assets/lifestyle-office.png";
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

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 2: INTEREST - What / Why / Problem */}
      {/* ═══════════════════════════════════════════════════════════ */}

      {/* Reality Check Section */}
      <div className="py-20 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="text-sm font-semibold text-white uppercase tracking-wide">
                REALITY CHECK
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
              Ever Felt Like Doing Business Online Means...
            </h2>
          </div>

          {/* Problems List */}
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <div className="flex items-start gap-4 text-white/90 text-lg">
              <span className="text-red-500 font-bold text-xl flex-shrink-0">✗</span>
              <p>Business models that require <span className="font-bold text-white">huge upfront costs...</span></p>
            </div>
            <div className="flex items-start gap-4 text-white/90 text-lg">
              <span className="text-red-500 font-bold text-xl flex-shrink-0">✗</span>
              <p>Waiting <span className="font-bold text-white">months</span> <span className="italic text-white/60">(or years)</span> to see <span className="font-bold text-white">results...</span></p>
            </div>
            <div className="flex items-start gap-4 text-white/90 text-lg">
              <span className="text-red-500 font-bold text-xl flex-shrink-0">✗</span>
              <p>Needing an <span className="font-bold text-white">audience</span> and being stuck on the <span className="italic text-white/60">content hamster wheel...</span></p>
            </div>
          </div>

          <div className="text-center mb-20">
            <p className="text-xl text-white/80 mb-2">Then keep reading—because</p>
            <p className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-primary">this skill</span> changes everything.
            </p>
          </div>

          {/* Why Many Struggle Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
              Why Many People <span className="text-red-400">Struggle</span> to Build an Online Business
            </h3>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
              <p className="text-lg text-white/80 mb-6">
                Building an online business isn't hard because there aren't opportunities—<span className="italic text-white">it's hard because:</span>
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-red-500 font-bold text-xl flex-shrink-0">✗</span>
                  <p className="text-white/90 text-lg">They don't have a <span className="italic text-primary">clear, high-value</span> skill that businesses will <span className="font-bold text-white">pay</span> for.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-500 font-bold text-xl flex-shrink-0">✗</span>
                  <p className="text-white/90 text-lg">They get <span className="font-bold text-white">stuck</span> in <span className="italic text-white/60">"learning mode"</span> and never take <span className="font-bold text-white">action.</span></p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-500 font-bold text-xl flex-shrink-0">✗</span>
                  <p className="text-white/90 text-lg">They have <span className="italic text-white/60">no idea</span> how to get <span className="font-bold text-white">clients.</span></p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-lg text-white/80 mb-4">I know, because I was there too.</p>
                <p className="text-lg text-white/80 mb-4">Less than two years ago, I was <span className="font-bold text-white">lost.</span></p>
                <p className="text-lg text-white/80">
                  I wanted to build a business online, but nothing clicked. I <span className="font-bold text-white">tried different business models</span>—<span className="italic text-white/60">affiliate marketing, eCommerce, freelancing</span>—but everything was either <span className="font-bold text-red-400">too slow</span>, <span className="font-bold text-red-400">too expensive</span>, or <span className="font-bold text-red-400">too unpredictable</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Is a LinkedIn Agency - Simple Explanation */}
      <div className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                🚀 THE SOLUTION
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              What Is a <span className="bg-gradient-to-r from-primary via-primary/80 to-[#FF6B35] bg-clip-text text-transparent">LinkedIn Agency?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Imagine getting paid to help businesses get leads and close clients — using LinkedIn.
            </p>
          </div>

          {/* Simple 3-Step */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <p className="text-lg md:text-xl text-foreground">
                    <span className="font-semibold">Make their profile convert</span> like a sales page
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <p className="text-lg md:text-xl text-foreground">
                    <span className="font-semibold">Write simple content</span> that builds authority
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <p className="text-lg md:text-xl text-foreground">
                    <span className="font-semibold">Send smart DMs</span> that book them calls
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-border/50 text-center">
                <p className="text-2xl font-bold text-foreground mb-4">That's it.</p>
                <p className="text-xl text-muted-foreground">
                  They pay you. You get paid. And it <span className="text-primary font-semibold">scales like crazy.</span>
                </p>
              </div>
            </div>
          </div>

          {/* What Makes This Different */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                🌊 Why LinkedIn Agencies Are the <span className="text-primary">Best Business Model</span> Right Now
              </h3>
              <p className="text-xl text-muted-foreground">
                Here's what makes this different than every other "online biz opportunity" out there:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-center gap-3 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <p className="text-foreground font-medium">You don't need followers</p>
              </div>
              <div className="flex items-center gap-3 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <p className="text-foreground font-medium">You don't need a personal brand</p>
              </div>
              <div className="flex items-center gap-3 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <p className="text-foreground font-medium">You don't need complex tech</p>
              </div>
              <div className="flex items-center gap-3 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <p className="text-foreground font-medium">You don't need to learn ads, funnels, or SEO</p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 md:p-12">
              <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                Just one platform... One skill stack... One system
              </p>
              <p className="text-lg text-muted-foreground">
                that's already been proven by <span className="font-bold text-primary">2,000+ members</span> and <span className="font-bold text-primary">billion-dollar clients.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Problem With Every Other Business Model */}
      <div className="py-20 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="text-sm font-semibold text-white uppercase tracking-wide">
                💀 THE PROBLEM WITH OTHER MODELS
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
              This Isn't Dropshipping. It's Not Crypto. It's Not "TikTok Fame."
            </h2>
          </div>

          {/* Comparison Table - Old Way vs New Way */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* OLD WAY */}
              <div className="space-y-4">
                <div className="bg-yellow-500/10 backdrop-blur-sm border-2 border-yellow-500/30 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-yellow-400">The Old Way</h3>
                    <span className="text-3xl">🚫</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 text-center">
                      <p className="text-white/90 font-medium">Dropshipping</p>
                    </div>
                    <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 text-center">
                      <p className="text-white/90 font-medium">Coaching (needs audience)</p>
                    </div>
                    <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 text-center">
                      <p className="text-white/90 font-medium">Info Products</p>
                    </div>
                    <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 text-center">
                      <p className="text-white/90 font-medium">TikTok Fame</p>
                    </div>
                    <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 text-center">
                      <p className="text-white/90 font-medium">Generic Freelancing</p>
                    </div>
                    <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 text-center">
                      <p className="text-white/90 font-medium">Crypto Trading</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-yellow-500/20">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                      <p className="text-lg font-bold text-red-400">End Result Nobody Wants</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* NEW WAY */}
              <div className="space-y-4">
                <div className="bg-primary/10 backdrop-blur-sm border-2 border-primary/50 rounded-2xl p-6 shadow-2xl shadow-primary/20">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-primary">The New Way</h3>
                    <span className="text-3xl">😊</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-center">
                      <p className="text-white font-semibold">LinkedIn Agency</p>
                    </div>
                    <div className="h-16"></div>
                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-center">
                      <p className="text-white font-semibold">Client-Getting System</p>
                    </div>
                    <div className="h-16"></div>
                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-center">
                      <p className="text-white font-semibold">Premium Positioning</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-primary/30">
                    <div className="bg-green-500/20 border border-green-500/40 rounded-xl p-4 text-center">
                      <p className="text-lg font-bold text-green-400">Desired Result</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              <p className="text-2xl md:text-3xl font-bold text-white mb-6">
                The LIA Way: <span className="text-primary">Simple. Profitable. Results-Driven.</span>
              </p>
              <p className="text-lg text-white/80 mb-4">
                This is a skill you can learn in <span className="font-bold text-white">30–60 days</span>, start landing clients, and scale to <span className="font-bold text-primary">5–6 figures/month</span> — without ever turning on a funnel or running a single ad.
              </p>
              <p className="text-xl font-semibold text-white">
                This isn't hype. It's how we built an agency that landed Mastercard, Forbes founders, and $25K/month retainers using one strategy on one platform.
              </p>
            </div>

            <div className="mt-12">
              <p className="text-2xl font-bold text-white mb-2">No more "overnight" nonsense.</p>
              <p className="text-xl text-white/80">Just a <span className="text-primary font-semibold">real, repeatable, scalable system.</span></p>
            </div>
          </div>
        </div>
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


      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 3: DESIRE - Founder Story + Roadmap + Modules */}
      {/* ═══════════════════════════════════════════════════════════ */}

      {/* Founder Discovery Story Section */}
      <div className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-primary/50 bg-primary/5 backdrop-blur-sm">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                HOW I DISCOVERED THE LAST BLUE OCEAN
              </span>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-5 gap-12 items-start max-w-7xl mx-auto mb-16">
            {/* Left Column - Text (60%) */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  The Discovery That Let Me Sign <span className="text-[#FF6B35]">Mastercard 💼</span>
                </h2>
                
                <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                  <p>
                    Hey, my name's <span className="font-semibold text-foreground">Freddie</span>, and 18 months ago, I stumbled onto something that changed everything...
                  </p>
                  
                  <p>
                    I was running a regular agency, signing local businesses and doing okay. But I was stuck at $5-10K/month and working with clients who churned after 3 months.
                  </p>
                  
                  <p>
                    I felt like I'd hit a ceiling. Every other agency owner I knew was stuck in the same place—fighting for scraps, competing on price, dealing with nightmare clients.
                  </p>
                  
                  <p className="font-semibold text-foreground text-xl">
                    Then I discovered LinkedIn.
                  </p>
                  
                  <p>
                    Not the LinkedIn everyone knows—the one where you connect with your uncle's coworker.
                  </p>
                  
                  <p className="font-bold text-foreground text-xl">
                    I'm talking about the <span className="text-primary">$120 billion blue ocean</span> hiding in plain sight.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Polaroid Photos (40%) */}
            <div className="lg:col-span-2">
              <div className="relative grid grid-cols-2 gap-4">
                {/* Photo 1 - Top Left */}
                <div className="transform -rotate-3 hover:rotate-0 transition-transform duration-300 group">
                  <div className="bg-white p-3 shadow-xl rounded-lg">
                    <img src={lifestyleCar} alt="Luxury lifestyle" className="w-full aspect-square object-cover rounded" />
                    <p className="text-xs font-handwriting text-gray-700 mt-2 text-center">Living the dream ✨</p>
                  </div>
                </div>

                {/* Photo 2 - Top Right */}
                <div className="transform rotate-2 hover:rotate-0 transition-transform duration-300 mt-8 group">
                  <div className="bg-white p-3 shadow-xl rounded-lg">
                    <img src={lifestyleCity} alt="City views" className="w-full aspect-square object-cover rounded" />
                    <p className="text-xs font-handwriting text-gray-700 mt-2 text-center">Work from anywhere 🌃</p>
                  </div>
                </div>

                {/* Photo 3 - Bottom Left */}
                <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300 group">
                  <div className="bg-white p-3 shadow-xl rounded-lg">
                    <img src={lifestylePool} alt="Pool office" className="w-full aspect-square object-cover rounded" />
                    <p className="text-xs font-handwriting text-gray-700 mt-2 text-center">Pool office days 🏊</p>
                  </div>
                </div>

                {/* Photo 4 - Bottom Right */}
                <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-300 -mt-4 group">
                  <div className="bg-white p-3 shadow-xl rounded-lg">
                    <img src={lifestyleBeach} alt="Beach sunset" className="w-full aspect-square object-cover rounded" />
                    <p className="text-xs font-handwriting text-gray-700 mt-2 text-center">Team sunsets 🌅</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: I Tested Something Crazy */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="border-t-4 border-b-4 border-[#FF6B35] py-4 mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-center">I Tested Something Crazy</h3>
            </div>
            
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Instead of chasing local restaurants and dentists, I started positioning myself to attract <span className="font-semibold text-foreground">Fortune 500s and Y Combinator companies</span> on LinkedIn.
              </p>
              
              <p className="text-xl font-semibold text-foreground">
                I know—it sounds insane.
              </p>
              
              <p>
                But here's what I realized: <span className="font-bold text-primary">1.2 billion people</span> are on LinkedIn. <span className="font-bold text-primary">960 million</span> of them are decision-makers with real budgets.
              </p>
              
              <p className="text-xl font-bold text-foreground">
                Yet less than 1% post consistently.
              </p>
              
              <p className="text-2xl font-bold text-primary">
                The market was completely untapped.
              </p>
            </div>

            {/* 3 Photos in a Row */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 hover:border-primary/50 transition-all">
                <img src={lifestyleOffice} alt="Working" className="w-full aspect-video object-cover rounded-lg mb-3" />
                <p className="text-sm text-center text-muted-foreground">Building the system</p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 hover:border-primary/50 transition-all">
                <img src={lifestyleCity} alt="Success" className="w-full aspect-video object-cover rounded-lg mb-3" />
                <p className="text-sm text-center text-muted-foreground">Scaling globally</p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 hover:border-primary/50 transition-all">
                <img src={lifestyleBeach} alt="Team" className="w-full aspect-video object-cover rounded-lg mb-3" />
                <p className="text-sm text-center text-muted-foreground">Building the team</p>
              </div>
            </div>
          </div>

          {/* Section: Within 6 Months */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="border-t-4 border-b-4 border-[#FF6B35] py-4 mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-center">Within 6 Months, Everything Changed</h3>
            </div>
            
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed mb-8">
              <p className="text-xl font-semibold text-foreground">
                I wasn't signing $2K/month clients anymore.
              </p>
              
              <p className="text-xl font-bold text-foreground mb-4">I was signing:</p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span className="font-semibold">Mastercard</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span className="font-semibold">Forbes-featured founders</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span className="font-semibold">Y Combinator backed companies</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span className="font-semibold">$1B+ investment firms</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span className="font-semibold">Royal government contracts</span>
                </li>
              </ul>
              
              <p className="text-xl font-bold text-primary pt-6">
                And I was charging $10K-$50K per month.
              </p>
              
              <p className="text-lg">
                The clients didn't churn. <span className="font-bold text-foreground">They stayed.</span>
              </p>
              
              <p>
                Because when you work with real businesses solving real problems, they value what you do.
              </p>
            </div>

            {/* Large Callout Box */}
            <div className="bg-gradient-to-r from-[#FFF7ED] to-[#FFE4CC] border-l-4 border-[#FF6B35] p-8 rounded-2xl shadow-lg">
              <p className="text-2xl md:text-3xl font-medium italic text-foreground/90 leading-relaxed">
                "I remember the moment it clicked: This isn't just a better way to get clients—this is a <span className="font-bold text-[#FF6B35]">completely different business model</span>."
              </p>
            </div>
          </div>

          {/* Section: Then I Proved It Wasn't Luck */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="border-t-4 border-b-4 border-[#FF6B35] py-4 mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-center">Then I Proved It Wasn't Luck</h3>
            </div>
            
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>After my own success, I started wondering:</p>
              
              <p className="text-xl font-semibold text-foreground italic">
                "Can anyone do this? Or did I just get lucky?"
              </p>
              
              <p className="text-xl font-bold text-foreground">So I tested it.</p>
              
              <p>I took:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Agency owners stuck at $5K/month</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Complete beginners with no experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Industry experts from other fields</span>
                </li>
              </ul>
              
              <p className="text-xl font-semibold text-foreground">
                And I showed them the exact system I used.
              </p>
            </div>

            {/* Student Results Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-3 text-2xl font-bold text-primary-foreground">
                  1
                </div>
                <p className="text-sm font-semibold text-green-600">→ $10K in 30 days</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-3 text-2xl font-bold text-primary-foreground">
                  2
                </div>
                <p className="text-sm font-semibold text-green-600">→ $25K/month agency</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-3 text-2xl font-bold text-primary-foreground">
                  3
                </div>
                <p className="text-sm font-semibold text-green-600">→ Signed first Fortune 500</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-3 text-2xl font-bold text-primary-foreground">
                  4
                </div>
                <p className="text-sm font-semibold text-green-600">→ $40K/month in 6 months</p>
              </div>
            </div>

            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p className="text-xl font-bold text-foreground">
                Within 12 months, we'd trained 500+ operators.
              </p>
              
              <p>
                They were signing the same types of clients: <span className="font-semibold text-foreground">AI companies. Med-tech startups. Investment firms. SaaS companies. Real estate empires.</span>
              </p>
              
              <p className="text-2xl font-bold text-foreground">
                It wasn't luck.
              </p>
              
              <p className="text-2xl font-bold text-primary">
                It was a system.
              </p>
            </div>
          </div>

          {/* Section: LinkedIn Gave Me Freedom */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="border-t-4 border-b-4 border-[#FF6B35] py-4 mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-center">
                LinkedIn Didn't Just Replace My Income—<br />It Gave Me Freedom
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">Freedom to work with clients I actually respect</p>
                  <p className="text-muted-foreground">(No more tire-kickers and payment chasers)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">Freedom to charge what I'm worth</p>
                  <p className="text-muted-foreground">(Premium clients expect premium pricing)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">Freedom to build real relationships</p>
                  <p className="text-muted-foreground">(Not transactional 90-day contracts)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">Freedom from the "agency hamster wheel"</p>
                  <p className="text-muted-foreground">(No more churn-and-burn nightmare)</p>
                </div>
              </div>
            </div>

            {/* Lifestyle Photo Collage */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
              <img src={lifestyleCar} alt="Lifestyle freedom" className="w-full aspect-square object-cover rounded-xl shadow-lg hover:scale-105 transition-transform" />
              <img src={lifestyleBeach} alt="Team building" className="w-full aspect-square object-cover rounded-xl shadow-lg hover:scale-105 transition-transform" />
              <img src={lifestylePool} alt="Work anywhere" className="w-full aspect-square object-cover rounded-xl shadow-lg hover:scale-105 transition-transform" />
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="border-t-4 border-b-4 border-[#FF6B35] py-4 mb-8">
              <h3 className="text-3xl md:text-4xl font-bold">
                Now, I Want To Share The Exact System<br />So You Can:
              </h3>
            </div>
            
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed mb-8">
              <p className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">→</span>
                <span>Stop competing with thousands of agencies for broke clients</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">→</span>
                <span>Start attracting Fortune 500s, YC companies, and $1B+ firms</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">→</span>
                <span>Build an agency that actually lasts (not one that churns every 3 months)</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">→</span>
                <span>Access the last $120B blue ocean before everyone else catches on</span>
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-2xl font-bold text-foreground">
                The opportunity window is open.
              </p>
              <p className="text-xl font-semibold text-muted-foreground">
                But it won't stay open forever.
              </p>
            </div>

            <div className="text-right max-w-md ml-auto">
              <p className="text-lg font-semibold text-foreground">— Freddie Poticarry</p>
              <p className="text-muted-foreground">Co-Founder, LinkedIn Operator</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 4: VERIFICATION - Student Wins + Social Proof */}
      {/* ═══════════════════════════════════════════════════════════ */}

      {/* Real Results Section - Enhanced with Proof */}
      <div className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-background relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-primary/50 bg-primary/5 backdrop-blur-sm">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                🔥 PROOF, NOT PROMISES
              </span>
            </div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real <span className="bg-gradient-to-r from-primary via-primary/80 to-[#FF6B35] bg-clip-text text-transparent">Operators</span>, Real Results
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Students starting from zero — now running profitable agencies
            </p>
            <div className="mt-6 inline-block">
              <p className="text-lg font-semibold text-foreground px-6 py-3 bg-gradient-to-r from-[#FFF7ED] to-[#FFE4CC] rounded-full border-2 border-[#FF6B35]/30">
                These aren't fake screenshots. These are real people.
              </p>
            </div>
          </div>

          {/* Results Grid - Polaroid Style */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Result 1 - Ethan */}
              <div className="transform hover:scale-105 transition-all duration-300">
                <div className="bg-white p-4 shadow-2xl rounded-lg transform rotate-1 hover:rotate-0">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 mb-3 aspect-square flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-3xl mb-4">
                      E
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900 text-xl mb-2">Ethan</div>
                      <div className="text-sm text-gray-600 mb-4">Agency Owner</div>
                      <div className="text-gray-700">
                        <span className="text-gray-500 line-through">$1K/mo</span> 
                        <span className="mx-2">→</span>
                        <span className="text-primary font-bold text-2xl">$27K/mo</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">in 6 months</div>
                    </div>
                  </div>
                  <p className="text-xs font-handwriting text-gray-700 text-center">From broke to thriving ✨</p>
                </div>
              </div>

              {/* Result 2 - Jessica */}
              <div className="transform hover:scale-105 transition-all duration-300">
                <div className="bg-white p-4 shadow-2xl rounded-lg transform -rotate-2 hover:rotate-0">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 mb-3 aspect-square flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-3xl mb-4">
                      J
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900 text-xl mb-2">Jessica</div>
                      <div className="text-sm text-gray-600 mb-4">Resume Agency</div>
                      <div className="text-primary font-bold text-3xl">$100K</div>
                      <div className="text-gray-700 text-sm">/month</div>
                      <div className="text-xs text-gray-500 mt-2">using our content system</div>
                    </div>
                  </div>
                  <p className="text-xs font-handwriting text-gray-700 text-center">System = Results 🚀</p>
                </div>
              </div>

              {/* Result 3 - Rubaiyat */}
              <div className="transform hover:scale-105 transition-all duration-300">
                <div className="bg-white p-4 shadow-2xl rounded-lg transform rotate-2 hover:rotate-0">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 mb-3 aspect-square flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-3xl mb-4">
                      R
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900 text-xl mb-2">Rubaiyat</div>
                      <div className="text-sm text-gray-600 mb-4">SaaS Founder</div>
                      <div className="text-primary font-bold text-3xl">$7.7M</div>
                      <div className="text-gray-700 text-sm">ARR pipeline</div>
                      <div className="text-xs text-gray-500 mt-2">from LinkedIn alone</div>
                    </div>
                  </div>
                  <p className="text-xs font-handwriting text-gray-700 text-center">LinkedIn changed everything 💎</p>
                </div>
              </div>

              {/* Result 4 - Vasilije */}
              <div className="transform hover:scale-105 transition-all duration-300">
                <div className="bg-white p-4 shadow-2xl rounded-lg transform -rotate-1 hover:rotate-0">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 mb-3 aspect-square flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-3xl mb-4">
                      V
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900 text-xl mb-2">Vasilije</div>
                      <div className="text-sm text-gray-600 mb-4">Started From Scratch</div>
                      <div className="text-primary font-bold text-3xl">$25K</div>
                      <div className="text-gray-700 text-sm">/month agency</div>
                      <div className="text-xs text-gray-500 mt-2">in first year</div>
                    </div>
                  </div>
                  <p className="text-xs font-handwriting text-gray-700 text-center">Zero to hero 🎯</p>
                </div>
              </div>

              {/* Result 5 - Sam */}
              <div className="transform hover:scale-105 transition-all duration-300">
                <div className="bg-white p-4 shadow-2xl rounded-lg transform rotate-1 hover:rotate-0">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 mb-3 aspect-square flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-3xl mb-4">
                      S
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900 text-xl mb-2">Sam</div>
                      <div className="text-sm text-gray-600 mb-4">Creator Pivot</div>
                      <div className="text-primary font-bold text-2xl">3,000+</div>
                      <div className="text-gray-700 text-sm">waitlist</div>
                      <div className="text-xs text-gray-500 mt-2">in 21 days after pivot</div>
                    </div>
                  </div>
                  <p className="text-xs font-handwriting text-gray-700 text-center">Speed wins 🏃‍♂️</p>
                </div>
              </div>

              {/* Result 6 - YOU */}
              <div className="transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8555] p-4 shadow-2xl rounded-lg transform -rotate-2 hover:rotate-0">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-3 aspect-square flex flex-col items-center justify-center border-2 border-white/30">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#FF6B35] font-bold text-3xl mb-4">
                      ?
                    </div>
                    <div className="text-center text-white">
                      <div className="font-bold text-2xl mb-2">You</div>
                      <div className="text-sm mb-4 opacity-90">Next Success Story</div>
                      <div className="font-bold text-2xl">Your Turn</div>
                      <div className="text-sm mt-2 opacity-90">to write your story</div>
                    </div>
                  </div>
                  <p className="text-xs font-handwriting text-white text-center">Join us today! ⭐</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Callout */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-[#FFF7ED] to-[#FFE4CC] border-l-4 border-[#FF6B35] p-8 rounded-2xl shadow-lg">
              <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
                They started where you are.<br />
                Now they're living the life they always wanted.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 5: VALIDATION - Guarantee + Risk Reversal */}
      {/* ═══════════════════════════════════════════════════════════ */}

      {/* Guarantee Section */}
      <div className="py-20 md:py-32 bg-background relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-primary/50 bg-primary/5 backdrop-blur-sm">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                ⚡ READY TO START?
              </span>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Main Headline */}
            <div className="text-center mb-12">
              <div className="border-t-4 border-b-4 border-[#FF6B35] py-6 mb-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Start With <span className="bg-gradient-to-r from-primary via-primary/80 to-[#FF6B35] bg-clip-text text-transparent">3 Clients</span>.
                  <br />
                  Scale to $20K–$50K/Month.
                </h2>
              </div>
              
              <p className="text-xl md:text-2xl text-foreground/80 mb-4">
                LinkedIn Operator Academy is a <span className="font-semibold text-foreground">complete step-by-step system</span> to help you:
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {/* Left - What You'll Do */}
              <div className="bg-background/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">What You'll Achieve:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">Sign your first high-ticket client</p>
                      <p className="text-sm text-muted-foreground">Even if you're starting from zero</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">Close $3K–$50K/month retainers</p>
                      <p className="text-sm text-muted-foreground">Premium clients, premium pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">Deliver results effortlessly</p>
                      <p className="text-sm text-muted-foreground">Using our templates & SOPs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">Scale to 6-figures</p>
                      <p className="text-sm text-muted-foreground">Without burnout or churn</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Who It's For */}
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 shadow-xl shadow-primary/10">
                <h3 className="text-2xl font-bold mb-6 text-center">It's Already Working For:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                    <span className="text-primary text-xl flex-shrink-0">→</span>
                    <div>
                      <p className="font-semibold text-foreground">Complete Beginners</p>
                      <p className="text-sm text-muted-foreground">With zero LinkedIn presence</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                    <span className="text-primary text-xl flex-shrink-0">→</span>
                    <div>
                      <p className="font-semibold text-foreground">Struggling Agency Owners</p>
                      <p className="text-sm text-muted-foreground">Stuck under $5K/month</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                    <span className="text-primary text-xl flex-shrink-0">→</span>
                    <div>
                      <p className="font-semibold text-foreground">Coaches & Consultants</p>
                      <p className="text-sm text-muted-foreground">Pivoting from other platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                    <span className="text-primary text-xl flex-shrink-0">→</span>
                    <div>
                      <p className="font-semibold text-foreground">Burned Out Creators</p>
                      <p className="text-sm text-muted-foreground">Tired of the content game</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="text-center mb-12">
              <p className="text-lg md:text-xl text-foreground/80 mb-3">
                And it works across <span className="font-bold text-foreground">every industry:</span>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                <span className="px-4 py-2 bg-background/80 border border-border/50 rounded-full text-foreground font-semibold">AI</span>
                <span className="px-4 py-2 bg-background/80 border border-border/50 rounded-full text-foreground font-semibold">SaaS</span>
                <span className="px-4 py-2 bg-background/80 border border-border/50 rounded-full text-foreground font-semibold">Med-Tech</span>
                <span className="px-4 py-2 bg-background/80 border border-border/50 rounded-full text-foreground font-semibold">Finance</span>
                <span className="px-4 py-2 bg-background/80 border border-border/50 rounded-full text-foreground font-semibold">Real Estate</span>
                <span className="px-4 py-2 bg-background/80 border border-border/50 rounded-full text-foreground font-semibold">Coaching</span>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="mb-8">
                <button 
                  onClick={() => navigate('/')}
                  className="group relative px-12 py-6 bg-gradient-to-r from-primary via-primary to-[#FF6B35] text-white rounded-2xl font-bold text-2xl shadow-2xl hover:shadow-[#FF6B35]/50 hover:scale-105 transition-all duration-300"
                >
                  Get Instant Access Now
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6B35] to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              <div className="space-y-2">
                <p className="text-lg font-semibold text-foreground">
                  Join <span className="text-primary">2,000+ members</span> building profitable LinkedIn agencies
                </p>
                <p className="text-sm text-muted-foreground">
                  ⚡ Limited spots at founding member price • 🔒 Secure checkout • ✅ Instant access
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>365-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Instant Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
