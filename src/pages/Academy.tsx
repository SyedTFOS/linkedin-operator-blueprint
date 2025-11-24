import { useNavigate } from "react-router-dom";
import { X, Menu, User, FileText, MessageSquare, Lightbulb, Target, Zap, Send, DollarSign, CheckCircle, Crown, Filter, ClipboardCheck, Users, Shield, CreditCard, Package, Star, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-main.png";
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
import trainingSystemCard from "@/assets/training-system-card.png";
import operatorExecutionOS from "@/assets/operator-execution-os.png";
import founderOperatingSystem from "@/assets/founder-operating-system.png";
import acquisitionOperatingSystem from "@/assets/acquisition-operating-system.png";
import { CountdownTimer } from "@/components/CountdownTimer";
import { VerificationHero } from "@/components/VerificationHero";
import ExperimentSection from "@/components/ExperimentSection";
import { CommunityWinsSection } from "@/components/CommunityWinsSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import komailGillani from "@/assets/komail-gillani.png";
import ethanClouser from "@/assets/ethan-clouser.png";
import vasilijeSimic from "@/assets/vasilije-simic.png";
import craigCecilio from "@/assets/craig-cecilio.png";
const Academy = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logos = [{
    src: mastercardLogo,
    alt: "Mastercard"
  }, {
    src: forbes30Logo,
    alt: "Forbes 30 Under 30"
  }, {
    src: yCombinatorLogo,
    alt: "Y Combinator"
  }, {
    src: diversyfundLogo,
    alt: "Diversyfund"
  }, {
    src: playertwoLogo,
    alt: "Player Two"
  }, {
    src: forbesLogo,
    alt: "Forbes"
  }];
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Navigation */}
      <nav className="hidden md:block border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img src={logo} alt="LinkedIn Operator" className="h-12 md:h-14 lg:h-16" loading="eager" />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Sliding Header */}
      <div className="md:hidden">
        {/* Mobile Header Toggle Button - Only show when menu is closed */}
        {!isMobileMenuOpen && <button onClick={() => setIsMobileMenuOpen(true)} className="fixed top-4 right-4 z-[100] bg-primary text-primary-foreground p-3 rounded-full shadow-2xl hover:scale-110 transition-transform" aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>}

        {/* Mobile Sliding Header */}
        <div className={`fixed top-0 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border/50 shadow-xl z-[90] transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="container mx-auto px-6 py-3 relative">
            <div className="flex items-center justify-between">
              <img src={logo} alt="LinkedIn Operator" className="h-8" loading="eager" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-primary-foreground p-2 rounded-full hover:scale-110 transition-transform" aria-label="Close menu">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Academy Framework */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-[#FF6B35]/10 pt-8 pb-16">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            {/* Main Headline */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight sm:leading-none mb-6 sm:mb-8 uppercase">
                <span className="block text-foreground mb-2 sm:mb-3">STUCK TRYING TO BUILD AN ONLINE BUSINESS?</span>
                <span className="block text-foreground mb-2 sm:mb-3">WHILE YOU'RE FIGHTING OVER SCRAPS...</span>
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium max-w-4xl mx-auto mb-3 sm:mb-4">
                Less than 1% of 1.2 BILLION LinkedIn users are posting. This is the last $120B blue ocean before it closes forever.
              </p>
            </div>

            {/* Journey Path */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Starting Point */}
              <div className="relative bg-card backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">You Today</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Tried dropshipping, courses, freelancing<br />
                    Nothing clicked<br />
                    Stuck at $0-5K/month<br />
                    Ready for something real
                  </p>
                </div>
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold">
                  →
                </div>
              </div>

              {/* The Academy */}
              <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm border-2 border-primary/40 rounded-2xl p-6 sm:p-8">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full">
                  <span className="text-xs text-white font-bold uppercase">The Academy</span>
                </div>
                <div className="text-center pt-2">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/20 border-2 border-primary/50 flex items-center justify-center relative">
                    <Lightbulb className="w-10 h-10 text-primary" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">7 Weeks</h3>
                  <p className="text-foreground/80 text-sm font-medium leading-relaxed">
                    Complete training<br />
                    Live support<br />
                    Templates & systems<br />
                    Community access
                  </p>
                </div>
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold">
                  →
                </div>
              </div>

              {/* The Result */}
              <div className="relative bg-card backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 sm:p-8 hover:border-green-500/50 transition-all duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <Crown className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">You in 7 Weeks</h3>
                  <p className="text-green-600 text-sm font-semibold leading-relaxed">
                    $10K-20K/month agency<br />
                    Multiple retainer clients<br />
                    Fortune 500 positioning<br />
                    Full autonomy
                  </p>
                </div>
              </div>
            </div>


            {/* CTA Section */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <button onClick={() => navigate('/agency/academy/checkout')} className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    See The Exact System
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-[#FF8A5B] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-3">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-600">14-Day Money-Back Guarantee</span>
              </div>
              
              
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
              {[...logos, ...logos].map((logo, index) => <div key={index} className="flex-shrink-0 mx-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <img src={logo.src} alt={logo.alt} className={`w-auto object-contain ${logo.alt === "Player Two" ? "h-16" : "h-12"}`} loading="eager" />
                </div>)}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 2: INTEREST - What / Why / Problem */}
      {/* ═══════════════════════════════════════════════════════════ */}

      {/* Reality Check Section */}
      <div className="py-24 md:py-40 bg-[#0A0A0A] relative overflow-hidden">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
              Here's What Nobody's Telling You About Building An Online Business
            </h2>
          </div>

          {/* Body Copy */}
          <div className="max-w-3xl mx-auto mb-16 space-y-6">
            <p className="text-white/90 text-base sm:text-lg">
              You've tried everything. Dropshipping. Courses. Freelancing. Info products. Maybe even coaching.
            </p>
            <p className="text-white/90 text-base sm:text-lg">
              Each one promised "financial freedom" and "6 figures in 90 days."
            </p>
            <p className="text-white/90 text-base sm:text-lg">
              Each one left you broke, burnt out, or both.
            </p>
            <p className="text-white/90 text-base sm:text-lg font-bold">
              Here's why: You're competing in red oceans with everyone else who watched the same YouTube video.
            </p>
            <p className="text-white/90 text-base sm:text-lg">
              But there's a $120 billion market hiding in plain sight.
            </p>
          </div>

          {/* LinkedIn Market Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-12">
              But There&apos;s A <span className="text-primary">$120 Billion Market</span> Hiding In Plain Sight
            </h3>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 md:p-12 mb-12">
              <p className="text-lg text-white/80 mb-8">
                While everyone fights over scraps, there&apos;s a platform with:
              </p>

              <div className="grid grid-cols-2 gap-6 sm:gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">1.2B</div>
                  <div className="text-sm sm:text-base text-white/70">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">960M</div>
                  <div className="text-sm sm:text-base text-white/70">Decision-Makers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">60M</div>
                  <div className="text-sm sm:text-base text-white/70">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">&lt;1%</div>
                  <div className="text-sm sm:text-base text-white/70">Post Weekly</div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-xl sm:text-2xl text-white font-bold text-center">
                  LinkedIn is the single biggest untapped opportunity in online business right now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Card 1 - Komail - After Reality Check */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <TestimonialCard
            name="Komail Gillani"
            image={komailGillani}
            quote="Complete Beginner - Zero online business experience"
            result="$14K deal in first 3 weeks"
          />
        </div>
      </div>

      {/* The LinkedIn Operator Method - Simple Mechanism */}
      <div className="py-24 md:py-40 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
              The <span className="bg-gradient-to-r from-primary via-primary/80 to-[#FF6B35] bg-clip-text text-transparent">LinkedIn Operator Method</span>
            </h2>
          </div>

          {/* Simple 3-Step */}
          <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl p-6 sm:p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <p className="text-lg md:text-xl text-foreground">
                    <span className="font-semibold">Position for premium clients</span> (not local businesses)
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <p className="text-lg md:text-xl text-foreground">
                    <span className="font-semibold">Build authority</span> through content + outbound systems
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <p className="text-lg md:text-xl text-foreground">
                    <span className="font-semibold">Close $3K-50K/month retainers</span>
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-border/50 text-center">
                <p className="text-xl text-muted-foreground">
                  Same system that signed Mastercard, Forbes founders, and Y Combinator companies in 6 months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Problem With Every Other Business Model */}
      <div className="py-24 md:py-40 bg-[#0A0A0A] relative overflow-hidden">
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
          <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 sm:mb-8 leading-tight">
              This Isn't Dropshipping. It's Not Crypto. It's Not "TikTok Fame."
            </h2>
          </div>

          {/* Comparison Table - Old Way vs New Way */}
          <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 md:p-12">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                The LIA Way: <span className="text-primary">Simple. Profitable. Results-Driven.</span>
              </p>
              <p className="text-base sm:text-lg text-white/80 mb-4">
                This is a skill you can learn in <span className="font-bold text-white">30–60 days</span>, start landing clients, and scale to <span className="font-bold text-primary">5–6 figures/month</span> — without ever turning on a funnel or running a single ad.
              </p>
              <p className="text-lg sm:text-xl font-semibold text-white">
                This isn't hype. It's how we built an agency that landed Mastercard, Forbes founders, and $25K/month retainers using one strategy on one platform.
              </p>
            </div>

            <div className="mt-8 sm:mt-12">
              <p className="text-xl sm:text-2xl font-bold text-white mb-2">No more "overnight" nonsense.</p>
              <p className="text-lg sm:text-xl text-white/80">Just a <span className="text-primary font-semibold">real, repeatable, scalable system.</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 3: DESIRE - Founder Story + Roadmap + Modules */}
      {/* ═══════════════════════════════════════════════════════════ */}

      {/* Founder Story Section - Condensed */}
      <div className="py-24 md:py-40 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-primary/50 bg-primary/5 backdrop-blur-sm">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                THE FOUNDER STORY
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-5xl mx-auto leading-tight">
              How I Went From $5K/Month Agency to <span className="text-primary">Signing Mastercard in 6 Months</span>
            </h2>
          </div>

          {/* Story Content with Single Image - 400 words max */}
          <div className="max-w-6xl mx-auto mb-12">
            {/* Main Section with Image */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed order-2 md:order-1">
                <p>
                  18 months ago, I was stuck at $5K/month. Local clients. 60-hour weeks. Everyone churned in 90 days.
                </p>
                
                <p>
                  Then I discovered something that didn't make sense: 1.2 billion people on LinkedIn. 960 million decision-makers with REAL budgets. Yet less than 1% posting consistently.
                </p>
                
                <p>
                  Everyone was fighting over Instagram and TikTok. LinkedIn was a ghost town with Fortune 500 budgets.
                </p>
                
                <p>
                  So I repositioned. From "local agency" to "LinkedIn specialist." Built a system for Fortune 500s, not dentists.
                </p>
                
                <p className="text-2xl font-bold text-primary">
                  6 months later: Mastercard. Forbes founders. Y Combinator companies. $10K-50K/month retainers.
                </p>
                
                <p>
                  That's why I built The LinkedIn Operator Method. Not to create another course. But to share the exact system that took me from local clients to Fortune 500s.
                </p>
                
                <p className="text-xl font-bold text-foreground">
                  And if I could do it in 6 months... you can too.
                </p>
                
                <div className="text-right pt-8">
                  <p className="text-lg font-semibold text-foreground">— Freddie Poticarry</p>
                  <p className="text-muted-foreground">Co-Founder, LinkedIn Operator</p>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <img 
                  src="/src/assets/sam-founder-car.jpg" 
                  alt="Founder working in car" 
                  className="rounded-2xl shadow-2xl w-full border-2 border-primary/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Card 2 - Ethan - After Founder Story */}
      <div className="py-16 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <TestimonialCard
            name="Ethan Clouser"
            image={ethanClouser}
            quote="$1.2K to $27K in 3 months"
            result="Used this system to exit for 5-figures"
          />
        </div>
      </div>

      {/* Value Stack - Simplified 3 Buckets */}
      <div className="py-24 md:py-40 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need To Build A <span className="text-primary">$20K+/Month Agency</span>
            </h2>
          </div>

          {/* Three Value Buckets */}
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Bucket 1: The Training */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-2xl">🎯</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">THE TRAINING</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">✓</span>
                      <span>Complete 7-Week Operator Framework (50+ modules)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">✓</span>
                      <span>From zero to $20K+/month step-by-step</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">✓</span>
                      <span>Lifetime access + all future updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bucket 2: The Tools */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-2xl">📦</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">THE TOOLS</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">✓</span>
                      <span>Templates & SOP Library (50+ plug-and-play assets)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">✓</span>
                      <span>DM scripts, proposals, content frameworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">✓</span>
                      <span>AI automation systems & custom agents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bucket 3: The Support */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-2xl">🤝</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">THE SUPPORT</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">✓</span>
                      <span>30 Days Private Community (FREE)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">✓</span>
                      <span>Weekly Group Coaching Calls</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">✓</span>
                      <span>8+ Industry Playbooks (AI, SaaS, Finance, etc.)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real Students, Real Results Section */}
      <ExperimentSection />

      {/* Testimonial Card 3 - Vasilije - Before Pricing */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <TestimonialCard
            name="Vasilije Simic"
            image={vasilijeSimic}
            quote="Started with zero experience"
            result="$25K/month agency with 20+ clients"
          />
        </div>
      </div>

      {/* Pricing Section - Single Clean Display */}
      <div id="pricing-section" className="py-24 md:py-40 bg-[#0F0F0F] relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Get Started Today
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Main Pricing Card */}
            <div className="bg-[#1A1A1A] border-2 border-white/10 rounded-3xl p-8 md:p-12 mb-8">
              {/* Price Display */}
              <div className="text-center mb-8 pb-8 border-b border-white/10">
                <div className="text-7xl md:text-8xl font-black text-white mb-4">
                  $497
                </div>
                <p className="text-white/60 text-lg">One-Time Payment</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white text-lg">Lifetime course access</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white text-lg">30 days coaching FREE</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white text-lg">All templates & systems</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white text-lg">14-day money-back guarantee</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="space-y-4">
                <button onClick={() => navigate('/agency/academy/checkout')} className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-xl py-6 px-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105">
                  Get Instant Access - $497
                </button>
                <p className="text-center text-white/60 text-sm">
                  Join 500+ operators building LinkedIn agencies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Card 4 - Craig - After Pricing */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <TestimonialCard
            name="Craig Cecilio"
            image={craigCecilio}
            quote="CEO, DiversyFund"
            result="$1B+ raised using this LinkedIn strategy"
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 5: VALIDATION - Guarantee + Risk Reversal */}
      {/* ═══════════════════════════════════════════════════════════ */}

      {/* Guarantee Section */}
      <div className="py-24 md:py-40 bg-background relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-primary/50 bg-primary/5 backdrop-blur-sm">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  THE GUARANTEE
                </span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              The Operator Guarantee
            </h2>

            {/* Body */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 md:p-12 mb-12 space-y-6 text-lg text-foreground/80">
              <p>
                Implement all 50+ modules. Use the templates. Follow the system.
              </p>
              
              <p className="font-bold text-primary text-xl">
                If you DON'T land your first client in 60 days, email us for a full refund.
              </p>
              
              <p>
                Why can we make this guarantee? Because this system WORKS.
              </p>
              
              <p>
                We've proven it with Fortune 500s. We've proven it with complete beginners.
              </p>
              
              <p className="font-bold text-foreground text-xl">
                The only variable is you.
              </p>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => navigate('/agency/academy/checkout')} 
              className="px-12 py-6 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 hover:scale-105 mb-4"
            >
              Get Instant Access - $497
            </button>
            
            <p className="text-muted-foreground">
              ✓ 14-day guarantee ✓ Instant access ✓ 500+ members
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 md:py-40 bg-gradient-to-br from-muted/30 via-background to-background relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* FAQ 1 - REWRITTEN */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">What if I&apos;ve never run an agency or online business before?</h3>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>Even better. You don't have bad habits to unlearn.</p>
                
                <p>Komail had ZERO online business experience. Closed a $14K deal in his first 3 weeks.</p>
                
                <p>Vasilije started with zero experience. Now running a $25K/month agency.</p>
                
                <p>The LinkedIn Operator Method works for beginners BECAUSE it&apos;s a system. Not guesswork. Step-by-step, paint-by-numbers.</p>
                
                <p className="font-bold text-foreground">Your lack of experience is actually an advantage.</p>
              </div>
            </div>

            {/* FAQ 2 - REWRITTEN */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">How is this different from other courses I&apos;ve tried?</h3>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>Most courses teach you to build an audience first, then maybe make money.</p>
                
                <p className="font-bold text-foreground">This teaches you to get PAID from day one.</p>
                
                <p>Most courses are theory from people who&apos;ve never done it.</p>
                
                <p>This is the actual system that signed Mastercard, not theory from someone with a podcast.</p>
                
                <p>You learn client acquisition, fulfillment, and sales - not "post 3x a day and pray."</p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Do I need a LinkedIn following to start?</h3>
              <p className="text-lg text-muted-foreground">
                No. Unlike other business models where you need to build an audience first, you can start getting paid from day one with LinkedIn agencies. We show you how to sign clients through outbound systems, not just inbound content.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">How much time do I need to dedicate?</h3>
              <p className="text-lg text-muted-foreground">
                Treat this like building a real business. If you can dedicate 2-4 hours per day implementing the system, you should see your first client within 30-60 days. The more time you invest, the faster you&apos;ll scale.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">What if I&apos;m in a competitive niche?</h3>
              <p className="text-lg text-muted-foreground">
                That&apos;s actually perfect. LinkedIn agencies can work in ANY industry — AI, SaaS, Med-Tech, Finance, Real Estate, etc. We provide 8+ industry-specific playbooks showing you exactly how to position yourself as the go-to operator in your vertical.
              </p>
            </div>

            {/* FAQ 6 - REWRITTEN */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Do I need community access after 30 days?</h3>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>After your first 30 days FREE, you can continue community access for $97/month (optional).</p>
                
                <p>Most students keep it because:</p>
                <ul className="list-none space-y-2 ml-4">
                  <li>• Weekly coaching calls solve problems in real-time</li>
                  <li>• Peer collaboration leads to joint ventures</li>
                  <li>• You&apos;re building alongside 500+ other operators</li>
                </ul>
                
                <p className="font-bold text-foreground">But it&apos;s optional. Your lifetime course access never expires regardless.</p>
              </div>
            </div>

            {/* FAQ 7 */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">What if I can&apos;t afford $497 right now?</h3>
              <p className="text-lg text-muted-foreground">
                If $497 feels like a lot, that&apos;s exactly why you need this more than ever. Your first client at $3K/month pays for this 6x over. If you can&apos;t see that ROI potential, you&apos;re not thinking like an operator yet — which is exactly what we&apos;ll fix inside.
              </p>
            </div>

            {/* FAQ 8 */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Do I get lifetime access?</h3>
              <p className="text-lg text-muted-foreground">
                Yes. You get lifetime access to all 50+ video modules, templates, SOPs, and frameworks. As we update and refine the system, you get those updates too. The 30-day community access is what becomes optional after the first month.
              </p>
            </div>

            {/* FAQ 9 */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">What&apos;s the refund policy?</h3>
              <p className="text-lg text-muted-foreground">
                We&apos;re operators, not scammers. But we&apos;re also not here to babysit. If you join, get access to everything, and then decide it&apos;s "too much work" — that&apos;s on you. We&apos;ve proven this system works with Fortune 500s and complete beginners. The only variable is you.
              </p>
            </div>
          </div>

          {/* Final Close - SIMPLIFIED */}
          <div className="max-w-3xl mx-auto mt-20 text-center">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-8">Every Successful Operator Made A Decision</h3>
              
              <div className="space-y-3 text-lg text-foreground/80 mb-8">
                <p>They stopped chasing saturated opportunities.</p>
                <p>They stopped listening to gurus who&apos;ve never signed a real client.</p>
                <p>They saw the $120 billion blue ocean hiding in plain sight.</p>
                <p className="font-bold text-foreground text-xl">And they moved.</p>
              </div>
              
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                The question is: will you?
              </p>

              <button 
                onClick={() => navigate('/agency/academy/checkout')} 
                className="px-12 py-6 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 hover:scale-105 mb-4"
              >
                Join The Operators Now - $497
              </button>
              
              <p className="text-muted-foreground text-sm">
                ✓ 14-day guarantee ✓ Instant access ✓ 500+ members
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;