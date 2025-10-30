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
  return <div className="min-h-screen bg-background">
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
        {!isMobileMenuOpen && <button onClick={() => setIsMobileMenuOpen(true)} className="fixed top-4 right-4 z-[100] bg-primary text-primary-foreground p-3 rounded-full shadow-2xl hover:scale-110 transition-transform" aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>}

        {/* Mobile Sliding Header */}
        <div className={`fixed top-0 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border/50 shadow-xl z-[90] transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="container mx-auto px-6 py-3 relative">
            <div className="flex items-center justify-between">
              <img src={logo} alt="LinkedIn Operator" className="h-8" />
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
          {/* Limited Access Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-foreground/70 uppercase tracking-wider">Limited Enrollment Open</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <span className="text-sm font-semibold text-primary">Only 9 Spots Remaining</span>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Headline */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
                <span className="text-sm text-primary uppercase tracking-widest font-semibold">LINKEDIN OPERATOR ACADEMY | THE LAST $120 BILLION BLUE OCEAN</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50"></div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight sm:leading-none mb-6 sm:mb-8">
                <span className="block text-foreground mb-2 sm:mb-3">While 99% Chase Saturated Markets</span>
                <span className="block bg-gradient-to-r from-primary via-[#FF8A5B] to-[#FF6B35] bg-clip-text text-transparent">LinkedIn Agency</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-3 sm:mb-4">The same system that signed Mastercard, Forbes 30 Under 30 founders, and Y Combinator companies — now available to operators who move fast.</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  <span className="text-muted-foreground">$0 {'→'}</span> <span className="text-primary">$20K/month</span>
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
                    No experience<br />
                    No audience<br />
                    No clients<br />
                    Ready to start
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
                    $20K/month avg.<br />
                    Multiple clients<br />
                    Proven systems<br />
                    Full autonomy
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
              <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 text-center hover:border-primary/30 transition-all">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Active Students</div>
              </div>
              <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 text-center hover:border-primary/30 transition-all">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">$20K</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Avg. Monthly Revenue</div>
              </div>
              <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 text-center hover:border-primary/30 transition-all">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">7 Weeks</div>
                <div className="text-xs sm:text-sm text-muted-foreground">To First Client</div>
              </div>
            </div>


            {/* CTA Section */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-sm text-red-600 font-medium">Only 9 spots remaining at this price</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <button onClick={() => document.getElementById('pricing-section')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              })} className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Join The Academy Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-[#FF8A5B] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-3">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-600">30-Day Money-Back Guarantee</span>
              </div>
              
              <p className="text-sm text-muted-foreground">
                <span className="line-through text-muted-foreground/60">$2,497</span> → Now $497 (Save $2,000!) • Offer ends in: <CountdownTimer className="inline text-primary font-bold" />
              </p>
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
                  <img src={logo.src} alt={logo.alt} className={`w-auto object-contain ${logo.alt === "Player Two" ? "h-16" : "h-12"}`} />
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
              Here&apos;s What Nobody&apos;s Telling You
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 font-medium">
              You&apos;ve been sold a lie.
            </p>
          </div>

          {/* Problems List */}
          <div className="max-w-3xl mx-auto mb-16 space-y-6">
            <p className="text-white/90 text-base sm:text-lg">
              They told you to start an SMMA. Chase local restaurants and dentists for $500/month. Watch your clients churn after 3 months.
            </p>
            <p className="text-white/90 text-base sm:text-lg">
              They told you dropshipping was the answer. Fight over pennies on commoditized products while Facebook crushes your margins.
            </p>
            <p className="text-white/90 text-base sm:text-lg">
              They told you AI agencies were the future. Now there are 10,000 of them, all saying the same thing, all racing to the bottom.
            </p>
          </div>

          <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-white font-bold mb-4">
              Every "opportunity" you&apos;ve been sold has the same fatal flaw:
            </p>
            <p className="text-lg sm:text-xl text-white/80">
              You&apos;re competing in red oceans with everyone else who watched the same YouTube video.
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

      {/* Ever Felt Like Section */}
      <div className="py-24 md:py-40 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="text-sm font-semibold text-white uppercase tracking-wide">
                REALITY CHECK
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-white leading-tight">
              Ever Felt Like Doing Business Online Means...
            </h2>
          </div>

          {/* Problems List with X marks */}
          <div className="max-w-3xl mx-auto mb-16 space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-red-500 text-xl flex-shrink-0 mt-1">✕</span>
              <p className="text-white/90 text-base sm:text-lg">
                Business models that require <span className="font-bold text-white">huge upfront costs</span>...
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-red-500 text-xl flex-shrink-0 mt-1">✕</span>
              <p className="text-white/90 text-base sm:text-lg">
                Waiting <span className="font-bold text-white">months</span> <span className="italic text-white/70">(or years)</span> to see <span className="font-bold text-white">results</span>...
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-red-500 text-xl flex-shrink-0 mt-1">✕</span>
              <p className="text-white/90 text-base sm:text-lg">
                Needing an <span className="font-bold text-white">audience</span> and being stuck on the <span className="italic text-white/70">content hamster wheel</span>...
              </p>
            </div>
          </div>

          {/* Transition Statement */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-white/80 mb-2">
              Then keep reading—because
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="text-primary">this skill</span> <span className="text-white">changes everything.</span>
            </p>
          </div>

          {/* Why Many People Struggle Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
              <span className="text-white">Why Many People</span> <span className="text-red-500">Struggle</span> <span className="text-white">to Build an Online Business</span>
            </h3>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 md:p-12">
              <p className="text-lg text-white/90 mb-8">
                Building an online business isn&apos;t hard because there aren&apos;t opportunities—<span className="italic">it&apos;s hard because:</span>
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <span className="text-red-500 text-xl flex-shrink-0 mt-1">✕</span>
                  <p className="text-white/90 text-base sm:text-lg">
                    They don&apos;t have a <span className="italic text-primary">clear, high-value</span> skill that businesses will <span className="font-bold text-white">pay</span> for.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-500 text-xl flex-shrink-0 mt-1">✕</span>
                  <p className="text-white/90 text-base sm:text-lg">
                    They get <span className="font-bold text-white">stuck</span> in <span className="italic text-white/70">"learning mode"</span> and never take <span className="font-bold text-white">action.</span>
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-500 text-xl flex-shrink-0 mt-1">✕</span>
                  <p className="text-white/90 text-base sm:text-lg">
                    They have <span className="italic text-primary">no idea</span> how to get <span className="font-bold text-white">clients.</span>
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 space-y-4">
                <p className="text-white/90 text-base sm:text-lg">
                  I know, because I was there too.
                </p>
                <p className="text-white/90 text-base sm:text-lg">
                  Less than two years ago, I was <span className="font-bold text-white">lost.</span>
                </p>
                <p className="text-white/90 text-base sm:text-lg">
                  I wanted to build a business online, but nothing clicked. I <span className="font-bold text-white">tried different business models</span>—<span className="italic text-white/70">affiliate marketing, eCommerce, freelancing</span>—but everything was either <span className="text-red-500">too slow</span>, <span className="text-red-500">too expensive</span>, or <span className="text-red-500">too unpredictable.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Is a LinkedIn Agency - Simple Explanation */}
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
              What Is a <span className="bg-gradient-to-r from-primary via-primary/80 to-[#FF6B35] bg-clip-text text-transparent">LinkedIn Agency?</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
              Imagine getting paid to help businesses get leads and close clients — using LinkedIn.
            </p>
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
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                🌊 Why LinkedIn Agencies Are the <span className="text-primary">Best Business Model</span> Right Now
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                And here&apos;s what makes it different from every other business model:
              </p>
            </div>

            {/* Comparison Table */}
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-4 sm:p-6 font-bold text-foreground text-base sm:text-lg">Factor</th>
                      <th className="text-center p-4 sm:p-6 font-bold text-muted-foreground text-base sm:text-lg">Traditional Agencies</th>
                      <th className="text-center p-4 sm:p-6 font-bold text-primary text-base sm:text-lg">LinkedIn Agency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/30">
                      <td className="p-4 sm:p-6 font-semibold text-foreground text-sm sm:text-base">Time to First Client</td>
                      <td className="p-4 sm:p-6 text-center text-muted-foreground text-sm sm:text-base">3-6 months building audience</td>
                      <td className="p-4 sm:p-6 text-center text-primary font-semibold text-sm sm:text-base">30-60 days</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="p-4 sm:p-6 font-semibold text-foreground text-sm sm:text-base">Monthly Retainers</td>
                      <td className="p-4 sm:p-6 text-center text-muted-foreground text-sm sm:text-base">$500-$2,000</td>
                      <td className="p-4 sm:p-6 text-center text-primary font-semibold text-sm sm:text-base">$3,000-$50,000</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="p-4 sm:p-6 font-semibold text-foreground text-sm sm:text-base">Client Quality</td>
                      <td className="p-4 sm:p-6 text-center text-muted-foreground text-sm sm:text-base">Local SMBs that churn</td>
                      <td className="p-4 sm:p-6 text-center text-primary font-semibold text-sm sm:text-base">Fortune 500s, YC companies, $1B+ firms</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="p-4 sm:p-6 font-semibold text-foreground text-sm sm:text-base">Competition</td>
                      <td className="p-4 sm:p-6 text-center text-muted-foreground text-sm sm:text-base">Saturated (100,000+ agencies)</td>
                      <td className="p-4 sm:p-6 text-center text-primary font-semibold text-sm sm:text-base">Virtually zero (blue ocean)</td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-6 font-semibold text-foreground text-sm sm:text-base">Required Following</td>
                      <td className="p-4 sm:p-6 text-center text-muted-foreground text-sm sm:text-base">Need 10K+ followers first</td>
                      <td className="p-4 sm:p-6 text-center text-primary font-semibold text-sm sm:text-base">Get paid from day one</td>
                    </tr>
                  </tbody>
                </table>
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

      {/* Founder Discovery Story Section */}
      <div className="py-24 md:py-40 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
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

            {/* CTA Button */}
            <div className="mt-16 text-center">
              <button onClick={() => document.getElementById('pricing-section')?.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            })} className="group inline-flex items-center gap-3 px-10 py-6 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
                <span>Start Your Agency Today</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center justify-center gap-2 mt-4 mb-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-600">30-Day Money-Back Guarantee</span>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="line-through text-muted-foreground/60">$2,497</span> → Now $497 (Save $2,000!) • Only 9 spots left • <CountdownTimer className="inline text-primary font-bold" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Real Students, Real Results Section */}
      <ExperimentSection />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 3.5: THE SYSTEM - Roadmap + Modules + Bonuses + CTA */}
      {/* ═══════════════════════════════════════════════════════════ */}

      {/* The System - Hero Section */}
      <div className="py-24 md:py-40 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-white/50 bg-white/20 backdrop-blur-sm">
              <span className="text-sm font-semibold text-white uppercase tracking-wide">
                📦 THE SYSTEM
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-12 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Everything You Need To Build A{" "}
              <span className="text-yellow-300">$20K - $50K / Month LinkedIn Agency</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              In just 7 weeks, you'll go from complete beginner to landing your first premium client—with the exact system that signed Fortune 500s.
            </p>
          </div>

          {/* Product Mockup Visual */}
          <div className="max-w-4xl mx-auto mb-16">
            <img src={trainingSystemCard} alt="Complete Training System" className="w-full rounded-2xl shadow-2xl shadow-black/30" />
          </div>


          {/* What you're getting */}
          <div className="text-center">
            <p className="text-xl font-semibold text-white/90 mb-4">
              💎 What you're getting instant access to:
            </p>
          </div>
        </div>
      </div>

      {/* 7-Week Roadmap Section */}
      <div className="py-24 md:py-40 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your 7-Week Roadmap To <span className="text-primary">$20K+/Month</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Step-by-step modules that take you from zero to signing premium clients
            </p>
          </div>

          {/* Module Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Week 1 */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
              <div className="w-20 h-20 mb-4 mx-auto bg-[#EA580C]/20 rounded-xl flex items-center justify-center border-2 border-[#EA580C]/40">
                <Lightbulb className="w-12 h-12 text-[#EA580C]" />
              </div>
              <div className="text-center mb-4">
                <div className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">WEEK 1</div>
                <h3 className="text-xl font-bold">Fundamentals</h3>
              </div>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Operator mindset & business setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Offer creation & pricing strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Niche selection framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Essential tech stack setup</span>
                </li>
              </ul>
              <p className="text-muted-foreground text-sm italic text-center">Install the operator mindset. Set up payment systems that handle $20K+ months. Tech stack that scales to $50K+. Build your offer architecture that eliminates price objections.</p>
            </div>

            {/* Week 2 */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
              <div className="w-20 h-20 mb-4 mx-auto bg-[#EA580C]/20 rounded-xl flex items-center justify-center border-2 border-[#EA580C]/40">
                <Target className="w-12 h-12 text-[#EA580C]" />
              </div>
              <div className="text-center mb-4">
                <div className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">WEEK 2</div>
                <h3 className="text-xl font-bold">LinkedIn Branding</h3>
              </div>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Profile optimization & VSL scripting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Authority positioning strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Profile psychology & conversion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Personal brand blueprint</span>
                </li>
              </ul>
              <p className="text-muted-foreground text-sm italic text-center">Create funnel flows that convert at 7+ figures. Build VSLs that take prospects from "another LinkedIn coach" to "this is exactly what we need." Profile optimization that positions you above freelancers.</p>
            </div>

            {/* Week 3 */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
              <div className="w-20 h-20 mb-4 mx-auto bg-[#EA580C]/20 rounded-xl flex items-center justify-center border-2 border-[#EA580C]/40">
                <Zap className="w-12 h-12 text-[#EA580C]" />
              </div>
              <div className="text-center mb-4">
                <div className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">WEEK 3</div>
                <h3 className="text-xl font-bold">Content Mastery</h3>
              </div>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Algorithm mastery & virality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Hook psychology & templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Lead magnet systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Content calendar frameworks</span>
                </li>
              </ul>
              <p className="text-muted-foreground text-sm italic text-center">Master the LinkedIn algorithm. Write posts that hit 1M+ views. Create content that attracts ideal clients. Lead magnet systems that go viral. Never run out of content ideas.</p>
            </div>

            {/* Week 4 */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
              <div className="w-20 h-20 mb-4 mx-auto bg-[#EA580C]/20 rounded-xl flex items-center justify-center border-2 border-[#EA580C]/40">
                <Send className="w-12 h-12 text-[#EA580C]" />
              </div>
              <div className="text-center mb-4">
                <div className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">WEEK 4</div>
                <h3 className="text-xl font-bold">LinkedIn Outbound</h3>
              </div>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>DM frameworks & sequences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Lead list building strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Scaling to 200+ DMs/day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Automation & AI tools</span>
                </li>
              </ul>
              <p className="text-muted-foreground text-sm italic text-center">Build scalable DM frameworks that book qualified calls with decision-makers. Advanced prospecting beyond Sales Navigator. Message sequences that work at different prospect temperatures. Send 200+ targeted DMs per day.</p>
            </div>

            {/* Week 5 */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
              <div className="w-20 h-20 mb-4 mx-auto bg-[#EA580C]/20 rounded-xl flex items-center justify-center border-2 border-[#EA580C]/40">
                <DollarSign className="w-12 h-12 text-[#EA580C]" />
              </div>
              <div className="text-center mb-4">
                <div className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">WEEK 5</div>
                <h3 className="text-xl font-bold">Sales & Closing</h3>
              </div>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>High-ticket closing frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Discovery call scripts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Proposal creation & pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Objection handling mastery</span>
                </li>
              </ul>
              <p className="text-muted-foreground text-sm italic text-center">Close $5K-$50K+ contracts. Handle objections like a master. Position your offer as the obvious choice. Build hyper-specific proposals that win Fortune 500 deals.</p>
            </div>

            {/* Week 6 */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
              <div className="w-20 h-20 mb-4 mx-auto bg-[#EA580C]/20 rounded-xl flex items-center justify-center border-2 border-[#EA580C]/40">
                <CheckCircle className="w-12 h-12 text-[#EA580C]" />
              </div>
              <div className="text-center mb-4">
                <div className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">WEEK 6</div>
                <h3 className="text-xl font-bold">Fulfillment</h3>
              </div>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Service delivery & onboarding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Content creation systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Outbound at scale for clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Client retention strategies</span>
                </li>
              </ul>
              <p className="text-muted-foreground text-sm italic text-center">Build delivery systems that create raving fans. Scale fulfillment without quality loss. Profile branding for clients. Content creation that makes clients go viral. Outbound sending that books meetings.</p>
            </div>

            {/* Week 7 - Centered */}
            <div className="md:col-span-2 lg:col-span-3 max-w-md mx-auto w-full">
              <div className="bg-white/95 rounded-2xl p-8 border-2 border-orange-700 hover:border-orange-600 transition-all hover:scale-105 duration-300 shadow-2xl shadow-black/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center text-3xl shadow-lg">
                    🚀
                  </div>
                  <div>
                    <div className="text-orange-600 text-sm font-semibold uppercase tracking-wide">WEEK 7</div>
                    <h3 className="text-xl font-bold text-gray-900">Advanced Secrets</h3>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Brand equity building & authority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>AI automation & scaling systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Competitive domination strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Secret module (unlocked inside)</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm italic">Advanced operator knowledge: competitive domination, account protection methods, innovation & trend creation. The methods that build $50K+/month agencies.</p>
              </div>
            </div>
          </div>

          {/* Bottom Badge */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              <span className="font-semibold text-foreground">50+ Video Modules</span> • Lifetime Access • Updated Monthly
            </p>
          </div>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="py-24 md:py-40 bg-gradient-to-br from-muted/30 via-background to-background relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-primary/50 bg-primary/5 backdrop-blur-sm">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                📦 INCLUDED
              </span>
            </div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              This isn&apos;t a course. This is the complete operator system that built multi-million dollar LinkedIn agencies — distilled into a 7-week transformation framework.
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              LinkedIn Operator Academy
            </h2>
          </div>

          {/* Included Items */}
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Item 1 */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl">✓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Complete 7-Week Operator Framework</h3>
                  <p className="text-muted-foreground mb-4">
                    50+ video modules covering client acquisition, fulfillment, sales mastery, personal branding, LinkedIn outbound systems, and competitive domination strategies. The exact playbook that signed Mastercard and Forbes founders.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl">✓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Templates & SOP Library</h3>
                  <p className="text-muted-foreground mb-4">
                    50+ content templates (hooks, posts, lead magnets) | DM & outreach scripts | Proposal templates ($5K-$50K+ closing docs) | Onboarding SOPs | Fulfillment playbooks | Personal brand assets | Automation workflows | AI agents
                  </p>
                  {/* Operating System Visuals */}
                  <div className="mt-6 space-y-4">
                    <div className="bg-background rounded-xl overflow-hidden border border-border/50">
                      <img src={operatorExecutionOS} alt="LinkedIn Operator Execution OS" className="w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl">✓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Weekly GROUP Coaching Calls</h3>
                  <p className="text-muted-foreground mb-4">
                    Strategy sessions, Q&A, hot seats with the operators who built the system. Real-time troubleshooting and feedback on your client acquisition and fulfillment.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl">✓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">30 Days Private Community Access</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with other operators building LinkedIn agencies. Share strategies, collaborate on deals, get peer feedback. (Extend for $97/month after 30 days)
                  </p>
                </div>
              </div>
            </div>

            {/* Item 5 */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl">✓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">8+ Industry Playbooks</h3>
                  <p className="text-muted-foreground mb-4">
                    Vertical-specific positioning strategies for AI, SaaS, Med-Tech, Finance, Real Estate, and more. ICP mapping, competitive analysis frameworks, industry case studies.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 6 */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl">✓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">The LinkedIn Secrets Module</h3>
                  <p className="text-muted-foreground mb-4">
                    Advanced operator knowledge that separates $10K/month agencies from $50K+ operations: Brand equity systems, competitive domination strategies, methods never taught online.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 7 */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl">✓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">AI & Automation Mastery</h3>
                  <p className="text-muted-foreground mb-4">
                    Custom AI agents for content creation and client fulfillment | Automation templates | Systems for creating 30 days of content in 6 hours | Elite-level prompts included
                  </p>
                </div>
              </div>
            </div>

            {/* Item 8 */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl">✓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Lifetime Access to Course Content</h3>
                  <p className="text-muted-foreground mb-4">
                    All 50+ video modules, templates, SOPs, and frameworks — yours forever. Updates and upgrades included as we refine the system.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bonuses Section */}
      <div className="py-24 md:py-40 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              🎁 4+ Bonuses To <span className="text-yellow-300 italic">Fast-Track</span> Your Success
            </h2>
            <p className="text-xl text-white/80">
              When you join today, you also get these bonuses designed to skip the trial & error we went through:
            </p>
          </div>

          {/* Bonus Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Bonus 1 */}
            <div className="bg-white/95 backdrop-blur-sm border-2 border-orange-700 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-black/30">
              <div className="bg-gradient-to-r from-orange-700 to-orange-800 p-4 border-b border-orange-600">
                <p className="text-white font-bold text-center">🎁 BONUS #1</p>
              </div>
              <div className="p-6">
                <div className="w-full aspect-square mb-4 bg-gradient-to-br from-orange-500/30 to-orange-600/40 rounded-xl flex items-center justify-center border-2 border-orange-500/50">
                  <Filter className="w-20 h-20 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Your First Funnel: Done-For-You</h3>
                <p className="text-gray-700 text-sm mb-4">
                  A pre-built, ready-to-launch funnel you don't have to build yourself. Just install & customize.
                </p>
                <p className="text-orange-500 font-semibold">VALUE: $500</p>
              </div>
            </div>

            {/* Bonus 2 */}
            <div className="bg-white/95 backdrop-blur-sm border-2 border-orange-700 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-black/30">
              <div className="bg-gradient-to-r from-orange-700 to-orange-800 p-4 border-b border-orange-600">
                <p className="text-white font-bold text-center">🎁 BONUS #2</p>
              </div>
              <div className="p-6">
                <div className="w-full aspect-square mb-4 bg-gradient-to-br from-orange-500/30 to-orange-600/40 rounded-xl flex items-center justify-center border-2 border-orange-500/50">
                  <ClipboardCheck className="w-20 h-20 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Zero-To-One: Get Your First Client</h3>
                <p className="text-gray-700 text-sm mb-4">
                  A step by step checklist that walks you through our entire strategy for getting new clients
                </p>
                <p className="text-orange-500 font-semibold">VALUE: $300</p>
              </div>
            </div>

            {/* Bonus 3 */}
            <div className="bg-white/95 backdrop-blur-sm border-2 border-orange-700 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-black/30">
              <div className="bg-gradient-to-r from-orange-700 to-orange-800 p-4 border-b border-orange-600">
                <p className="text-white font-bold text-center">🎁 BONUS #3</p>
              </div>
              <div className="p-6">
                <div className="w-full aspect-square mb-4 bg-gradient-to-br from-orange-500/30 to-orange-600/40 rounded-xl flex items-center justify-center border-2 border-orange-500/50">
                  <FileText className="w-20 h-20 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Best-Selling Funnel Blueprints</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Multiple funnel types working in the market. Broken down for your niche.
                </p>
                <p className="text-orange-500 font-semibold">VALUE: $400</p>
              </div>
            </div>

            {/* Bonus 4 */}
            <div className="bg-white/95 backdrop-blur-sm border-2 border-orange-700 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-black/30">
              <div className="bg-gradient-to-r from-orange-700 to-orange-800 p-4 border-b border-orange-600">
                <p className="text-white font-bold text-center">🎁 BONUS #4</p>
              </div>
              <div className="p-6">
                <div className="w-full aspect-square mb-4 bg-gradient-to-br from-orange-500/30 to-orange-600/40 rounded-xl flex items-center justify-center border-2 border-orange-500/50">
                  <Users className="w-20 h-20 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Private Community Access</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Get support, feedback and connect with other builders working for clients or themselves.
                </p>
                <p className="text-orange-500 font-semibold">VALUE: $1,200</p>
              </div>
            </div>
          </div>

          {/* Total Bonus Value */}
          <div className="text-center mb-12">
            <p className="text-2xl font-bold text-white mb-8">
              TOTAL BONUS VALUE: <span className="text-yellow-300">$2,400</span>
            </p>
            
            {/* CTA Button */}
            <button onClick={() => document.getElementById('pricing-section')?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })} className="group inline-flex items-center gap-3 px-12 py-6 bg-white hover:bg-white/90 text-orange-600 rounded-2xl font-black text-2xl shadow-2xl transition-all duration-300 hover:scale-105">
              <span>Claim Your Bonuses Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-sm text-white/80">
              <span className="line-through text-white/40">$2,497</span> → Now $497 (Save $2,000!) • Only 9 spots • <CountdownTimer className="inline text-yellow-300 font-bold" />
            </p>
          </div>
        </div>
      </div>

      {/* Original Pricing/CTA Section */}
      <div id="pricing-section" className="py-24 md:py-40 bg-[#0F0F0F] relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="text-sm font-bold text-white uppercase tracking-wider">LIMITED TIME OFFER</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              GET FULL ACCESS FOR <span className="text-primary">$497</span>
            </h2>
            <p className="text-xl text-white/60 mb-2">
              <span className="line-through text-white/40">$2,497</span> → <span className="text-green-400 font-bold">Save $2,000!</span>
            </p>
            <p className="text-xl text-white/60">Or 2 payments of $249 • Only 9 Spots Left</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Main Pricing Card */}
            <div className="bg-[#1A1A1A] border-2 border-white/10 rounded-3xl p-8 md:p-12 mb-8">
              {/* Price Display */}
              <div className="text-center mb-8 pb-8 border-b border-white/10">
                <p className="text-white/60 text-lg mb-3">Get Instant Access:</p>
                <div className="mb-3">
                  <span className="text-3xl text-white/40 line-through">$2,497</span>
                </div>
                <div className="text-7xl md:text-8xl font-black text-white mb-4">
                  $497
                </div>
                <div className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full mb-4">
                  <span className="text-green-400 font-bold text-lg">Save $2,000!</span>
                </div>
                <p className="text-white/60 text-lg">
                  Or split it: <span className="text-primary font-semibold">2 payments of $249</span>
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white text-lg"><span className="font-semibold">Lifetime Access</span> to the complete LinkedIn Agency Masterclass</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white text-lg">All course materials, templates, and future updates <span className="font-semibold">(Lifetime)</span></p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white text-lg">Full access to our global community</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white text-lg">Everything needed to build a $20k+/month LinkedIn Agency</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white text-lg"><span className="font-semibold">30-Day Money-Back Guarantee</span> - No questions asked</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-lg"><span className="font-semibold">30 days of weekly Q&A coaching calls</span> (Included FREE)</p>
                    <p className="text-white/60 text-sm mt-1">Then $97/month to continue • Cancel anytime</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <button onClick={() => navigate('/agency/academy/checkout')} className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-xl py-6 px-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105">
                  JOIN NOW - FULL PAYMENT $497
                </button>
                
                <div className="text-center text-white/40 font-semibold">OR</div>
                
                <button onClick={() => navigate('/agency/academy/checkout')} className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold text-xl py-6 px-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105">
                  JOIN NOW - 2 PAYMENTS OF $249
                </button>
              </div>

              {/* Scarcity Bar */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between text-white/60 text-sm mb-3">
                  <span className="font-semibold">
                    <span className="text-white">ONLY 9 SPOTS REMAINING</span>
                  </span>
                  <span>Offer ends in <CountdownTimer className="inline text-red-400 font-bold" /></span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse" style={{ width: '18%' }}></div>
                </div>
                <p className="text-yellow-400 text-sm mt-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Price increases after 9 spots are filled
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Stack + Pricing Section */}
      <div className="py-24 md:py-40 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Main Headline */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Talk About What This Is <span className="text-primary">Actually Worth</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Think about what you&apos;re getting for $497:
            </p>
          </div>

          {/* Value Points */}
          <div className="max-w-4xl mx-auto space-y-4 mb-16">
            <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <span className="text-primary text-2xl flex-shrink-0">✅</span>
              <p className="text-lg">The exact system that signed Mastercard, Forbes founders, and $1B+ investment firms</p>
            </div>
            <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <span className="text-primary text-2xl flex-shrink-0">✅</span>
              <p className="text-lg">50+ video modules worth $5,000+ if sold separately</p>
            </div>
            <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <span className="text-primary text-2xl flex-shrink-0">✅</span>
              <p className="text-lg">Templates & SOPs that took $1M+ in trial and error to develop</p>
            </div>
            <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <span className="text-primary text-2xl flex-shrink-0">✅</span>
              <p className="text-lg">Weekly coaching calls with operators who&apos;ve done $15M+ in client results</p>
            </div>
            <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <span className="text-primary text-2xl flex-shrink-0">✅</span>
              <p className="text-lg">Industry playbooks that would cost $10,000+ to develop yourself</p>
            </div>
            <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <span className="text-primary text-2xl flex-shrink-0">✅</span>
              <p className="text-lg">Access to the fulfillment systems that keep churn near 0%</p>
            </div>
          </div>

          {/* ROI Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 md:p-12 text-center">
              <p className="text-2xl md:text-3xl font-bold mb-6">
                Your first client at <span className="text-primary">$3,000/month</span> pays for this <span className="text-primary">6x over</span>.
              </p>
              <p className="text-2xl md:text-3xl font-bold mb-8">
                Your first client at <span className="text-primary">$5,000/month</span> pays for this <span className="text-primary">10x over</span>.
              </p>
              <p className="text-xl text-muted-foreground">
                If you can&apos;t turn $497 into $3,000+ within 60 days with this system, you&apos;re simply not implementing.
              </p>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-3xl p-8 md:p-12">
              <div className="flex items-center justify-center gap-4 mb-8">
                <Shield className="w-16 h-16 text-primary" />
                <h3 className="text-3xl md:text-4xl font-bold">The Operator Guarantee</h3>
              </div>
              
              <p className="text-xl text-muted-foreground mb-6">
                We&apos;re not here to collect your $497 and disappear. We&apos;re building a network of elite LinkedIn operators.
              </p>
              
              <p className="text-lg mb-6">
                Here&apos;s the truth: If you implement what&apos;s inside — all 50+ modules, all the templates, all the SOPs — and don&apos;t land your first client within 60 days, you&apos;re either:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 bg-muted/50 rounded-xl p-4">
                  <span className="text-lg font-bold text-primary">1.</span>
                  <p className="text-lg">Not following the system (in which case, we&apos;ll show you exactly where you went wrong on coaching calls)</p>
                </div>
                <div className="flex items-start gap-3 bg-muted/50 rounded-xl p-4">
                  <span className="text-lg font-bold text-primary">2.</span>
                  <p className="text-lg">Not putting in the work (in which case, nothing will help you)</p>
                </div>
              </div>
              
              <p className="text-xl font-bold text-center">
                This system works. We&apos;ve proven it with Fortune 500 companies. We&apos;ve proven it with complete beginners. The question is: <span className="text-primary">will you do the work?</span>
              </p>
            </div>
          </div>

          {/* This Is For You Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* For You */}
              <div className="bg-green-500/5 border-2 border-green-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">This Is For You If:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                    <p>You&apos;re tired of chasing local businesses for $500/month retainers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                    <p>You want to work with real companies — Fortune 500s, YC startups, $1B+ firms</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                    <p>You&apos;re ready to build a legitimate business, not another guru&apos;s dropshipping/SMMA clone</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                    <p>You have existing expertise from another field and want to leverage LinkedIn</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                    <p>You&apos;re an agency owner looking to pivot to higher-quality clients</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                    <p>You&apos;re a complete beginner willing to learn a proven system</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                    <p>You understand that $497 is an investment, not an expense</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                    <p>You&apos;re ready to operate in a $120B blue ocean before it gets crowded</p>
                  </div>
                </div>
              </div>

              {/* Not For You */}
              <div className="bg-red-500/5 border-2 border-red-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">This Is NOT For You If:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0">❌</span>
                    <p>You&apos;re looking for a "get rich quick" scheme</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0">❌</span>
                    <p>You&apos;re not willing to implement what you learn</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0">❌</span>
                    <p>You expect results without putting in the work</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0">❌</span>
                    <p>You&apos;re not serious about building a real business</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0">❌</span>
                    <p>You think $497 is "too expensive" (if so, you need this more than anyone)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-500/10 via-primary/10 to-red-500/10 border-2 border-primary/30 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Why You Need To <span className="text-primary">Move Fast</span>
              </h3>
              
              <div className="space-y-6 text-lg mb-8">
                <p>
                  Right now, less than <span className="font-bold text-primary">1%</span> of LinkedIn&apos;s <span className="font-bold">1.2 billion users</span> post consistently.
                </p>
                <p>
                  Right now, <span className="font-bold text-primary">virtually zero competition</span> exists for high-quality LinkedIn agencies targeting enterprise clients correctly.
                </p>
                <p>
                  Right now, there&apos;s a <span className="font-bold text-primary">$120 billion blue ocean</span> that most people don&apos;t even know exists.
                </p>
                <p className="text-xl font-bold text-center pt-6 border-t border-border">
                  But this window won&apos;t stay open forever.
                </p>
                <p>
                  Every month that passes, more people discover this opportunity. Every month, the blue ocean gets a little more crowded. Every month, it gets harder to be the first LinkedIn operator in your vertical.
                </p>
              </div>
              
              <div className="bg-card/80 rounded-2xl p-6 md:p-8 text-center">
                <p className="text-2xl md:text-3xl font-bold mb-4">
                  The operators who move <span className="text-primary">now</span> will be the category owners who dominate for the next 5 years.
                </p>
                <p className="text-xl text-muted-foreground">
                  The ones who wait will be fighting for scraps in a saturated market.
                </p>
                <p className="text-2xl font-bold mt-6 text-primary">
                  Which one will you be?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA + Guarantee Section */}
      <div className="py-24 md:py-40 bg-gradient-to-br from-primary via-[#FF8A5B] to-[#FF6B35] relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Main Headline */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Ready To Build Your LinkedIn Agency?
            </h2>
          </div>

          {/* CTA Button */}
          <div className="max-w-2xl mx-auto mb-12">
            <button onClick={() => navigate('/agency/academy/checkout')} className="w-full bg-white hover:bg-white/90 text-primary font-black text-2xl md:text-3xl py-8 px-12 rounded-2xl shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:scale-105 mb-4">
              CLAIM YOUR SPOT NOW →
              <div className="text-base font-normal mt-2 opacity-80">
                Only 9 Spots Left • Lifetime Access
              </div>
            </button>

            <div className="text-center text-white space-y-3 mb-6">
              <div className="mb-2">
                <span className="text-xl text-white/50 line-through">$2,497</span>
              </div>
              <p className="text-2xl font-bold">
                $497 one-time <span className="text-white/70">or 2 payments of $249</span>
              </p>
              <p className="text-lg text-white/80">
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 font-semibold">Save $2,000!</span>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-base mt-4">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" /> Instant Lifetime Access
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" /> 30 Days Coaching FREE
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" /> 30-Day Money-Back
                </span>
              </div>
            </div>

            <div className="text-center">
              <button onClick={() => navigate('/book')} className="text-white hover:text-white/80 underline transition-colors text-lg">
                Talk to Support First →
              </button>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-3xl p-10">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-32 h-32 rounded-full bg-[#FFD700] flex items-center justify-center shadow-2xl">
                    <Shield className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4">30-Day Money-Back Guarantee</h3>
                  <p className="text-white text-lg leading-relaxed mb-3">
                    If for any reason you&apos;re not satisfied with your purchase, simply email{" "}
                    <span className="font-bold text-white underline">support@linkedinoperator.com</span> within 30 days for a full refund.
                  </p>
                  <p className="text-white text-xl font-bold">No questions asked. Zero risk.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white text-base mb-12">
            <span className="flex items-center gap-2 font-semibold">
              <CreditCard className="w-5 h-5" /> Secure Checkout
            </span>
            <span>•</span>
            <span className="flex items-center gap-2 font-semibold">
              <Shield className="w-5 h-5" /> SSL Encrypted
            </span>
            <span>•</span>
            <span className="flex items-center gap-2 font-semibold">
              <Zap className="w-5 h-5" /> Instant Access
            </span>
            <span>•</span>
            <span className="flex items-center gap-2 font-semibold">
              <Shield className="w-5 h-5" /> 30-Day Guarantee
            </span>
          </div>

          {/* Testimonial */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8">
              <div className="flex justify-center gap-1 text-[#FFD700] text-3xl mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 fill-[#FFD700]" />)}
              </div>
              <p className="text-white text-xl md:text-2xl italic font-medium mb-4">
                "Best investment I've made in my business. Hit $10K in my first month."
              </p>
              <p className="text-white/80 text-lg">— Ethan C., Academy Member</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 4: VERIFICATION - Student Wins + Social Proof */}
      {/* ═══════════════════════════════════════════════════════════ */}

      {/* Real Results Section - Enhanced with Proof */}
      
      <CommunityWinsSection />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 5: VALIDATION - Guarantee + Risk Reversal */}
      {/* ═══════════════════════════════════════════════════════════ */}

      {/* Guarantee Section */}
      <div className="py-24 md:py-40 bg-background relative overflow-hidden">
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
                <button onClick={() => navigate('/agency/academy/checkout')} className="group relative px-12 py-6 bg-gradient-to-r from-primary via-primary to-[#FF6B35] text-white rounded-2xl font-bold text-2xl shadow-2xl hover:shadow-[#FF6B35]/50 hover:scale-105 transition-all duration-300">
                  Get Instant Access Now
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6B35] to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              <div className="space-y-2">
                <p className="text-lg font-semibold text-foreground">
                  Join <span className="text-primary">500+ members</span> building profitable LinkedIn agencies
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
            {/* FAQ 1 */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">What if I&apos;ve never run an agency before?</h3>
              <p className="text-lg text-muted-foreground">
                Perfect. Several of our most successful students were complete beginners (like Komail who closed a $14K deal in his first 3 weeks). The system is designed to work whether you&apos;re starting from scratch or pivoting from another business model.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">How is this different from other LinkedIn courses?</h3>
              <p className="text-lg text-muted-foreground">
                Most LinkedIn courses teach you how to grow a following and become an influencer. We teach you how to build a legitimate agency that signs Fortune 500 companies. This is the actual system that landed Mastercard, not theory from someone who&apos;s never done it.
              </p>
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

            {/* FAQ 6 */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Is there support after I join?</h3>
              <p className="text-lg text-muted-foreground">
                Yes. You get 30 days of private community access where you can ask questions and connect with other operators. You also get access to weekly GROUP coaching calls where we troubleshoot specific challenges. After 30 days, you can continue community access for $97/month (optional).
              </p>
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

          {/* Final Message */}
          <div className="max-w-3xl mx-auto mt-20 text-center">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">One Last Thing...</h3>
              
              <div className="space-y-4 text-lg text-muted-foreground mb-8">
                <p>Every successful operator in our community made a decision.</p>
                <p>They stopped chasing saturated opportunities.</p>
                <p>They stopped listening to gurus who&apos;ve never signed a real client.</p>
                <p>They saw the $120 billion blue ocean hiding in plain sight.</p>
                <p className="font-bold text-foreground">And they moved.</p>
              </div>
              
              <p className="text-2xl md:text-3xl font-bold text-primary mb-8">
                The question is: will you?
              </p>

              <button onClick={() => navigate('/agency/academy/checkout')} className="px-12 py-6 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 hover:scale-105">
                Join The Operators Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Academy;