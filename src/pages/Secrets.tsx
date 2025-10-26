import { useNavigate } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-text.png";

const Secrets = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[hsl(222,47%,11%)] to-[hsl(0,0%,0%)] overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
            
            {/* Video Sound Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 border border-destructive/30 rounded-lg backdrop-blur-sm animate-pulse">
              <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-foreground">WATCH THE VIDEO TO TURN ON SOUND</span>
            </div>

            {/* Social Proof Avatars */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center -space-x-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-3 border-background flex items-center justify-center text-lg hover:scale-110 transition-transform"
                  >
                    👤
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-muted-foreground">
                147+ Operators scaled past $50K/month
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              The Fastest Way to Build a<br />
              <span className="text-primary">$50K+/Month B2B Agency</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
              (Without Paid Ads, Cold Calling,<br className="hidden md:block" /> or Hiring a Sales Team)
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get everything you need to sign $5K-$50K clients on LinkedIn—plus 1-on-1 founder coaching every week.
            </p>

            {/* VSL Video Player */}
            <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-black group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-300">
                <div className="relative">
                  <div className="w-28 h-28 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-[0_8px_32px_rgba(var(--primary-rgb),0.4)]">
                    <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[32px] border-l-primary-foreground border-b-[20px] border-b-transparent ml-2" />
                  </div>
                </div>
              </div>
              {/* Placeholder for video thumbnail - in real implementation, this would be the actual video */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-background/40" />
            </div>

            {/* Review Stars */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-primary text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-sm font-semibold text-foreground">
                Excellent | <span className="text-primary">4.9/5</span> from 127 members
              </p>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-12 py-6 bg-primary text-primary-foreground rounded-xl text-xl font-bold overflow-hidden transition-all hover:scale-105 shadow-[0_8px_32px_rgba(var(--primary-rgb),0.4)] hover:shadow-[0_12px_48px_rgba(var(--primary-rgb),0.6)] mx-auto inline-flex items-center gap-3"
            >
              <span className="relative z-10">APPLY NOW (2-Minute Application)</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">↓</span>
              <div className="absolute inset-0 bg-primary-glow opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Urgency Badge */}
            <div className="inline-flex flex-col items-center gap-2 px-6 py-4 bg-primary/10 border-2 border-primary rounded-3xl backdrop-blur-sm animate-pulse">
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <span className="font-bold text-primary text-lg">Only 8 spots available this month</span>
              </div>
              <p className="text-sm text-muted-foreground">Last cohort filled in 6 days.</p>
            </div>

            {/* Testimonial Quote */}
            <div className="max-w-2xl mx-auto p-6 rounded-xl bg-secondary/30 border border-border/50">
              <p className="text-base md:text-lg italic text-foreground leading-relaxed mb-3">
                "Hit $40K in 4 months with the 1-on-1 support. Worth every penny."
              </p>
              <p className="text-sm font-semibold text-primary">
                — Sarah K., Secrets Member
              </p>
            </div>

            {/* Scroll Arrow */}
            <div className="pt-8 animate-bounce">
              <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex items-start justify-center p-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Apply Now Button Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Build With Us?</h2>
            
            <button 
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-16 py-8 bg-primary text-primary-foreground rounded-2xl text-2xl font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl border-glow mx-auto block"
            >
              <span className="relative z-10 flex items-center gap-3 justify-center">
                APPLY NOW (2-Minute Application)
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </span>
              <div className="absolute inset-0 bg-primary-glow opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <p className="text-sm text-muted-foreground">Clicking this scrolls to application form below</p>
          </div>
        </div>
      </section>

      {/* Social Proof Wall */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-5xl md:text-6xl font-bold">Real Results From Real Operators</h2>
            <p className="text-xl md:text-2xl text-muted-foreground italic">
              "We don't just teach this. Our students are living it."
            </p>
          </div>

          {/* Video Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { name: "Sarah K.", result: "$0→$40K/mo", time: "in 4 months" },
              { name: "Eden R.", result: "$10→$27K", time: "in 90 days" },
              { name: "Marcus T.", result: "$15K client", time: "in month 2" }
            ].map((testimonial, i) => (
              <div key={i} className="group relative aspect-video rounded-2xl overflow-hidden border-2 border-border bg-secondary/50 hover:border-primary transition-all cursor-pointer">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-primary border-b-[12px] border-b-transparent ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{testimonial.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-1">{testimonial.result}</p>
                  <p className="text-muted-foreground">{testimonial.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Screenshot Gallery */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-center mb-12">Revenue Proof</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { type: "Stripe", amount: "$15K MRR" },
                { type: "Bank", amount: "$8,729" },
                { type: "Invoice", amount: "$5,000" },
                { type: "LinkedIn", amount: "1M Views" },
                { type: "Calendar", amount: "8 Calls" },
                { type: "DM Reply", amount: "Yes!" },
                { type: "Stripe", amount: "$22K MRR" },
                { type: "Wire", amount: "$12,500" }
              ].map((proof, i) => (
                <div key={i} className="premium-card-glow rounded-xl p-6 text-center space-y-3 hover:scale-105 transition-transform">
                  <div className="text-4xl mb-2">
                    {proof.type.includes('Stripe') && '💳'}
                    {proof.type.includes('Bank') && '🏦'}
                    {proof.type.includes('Invoice') && '📄'}
                    {proof.type.includes('LinkedIn') && '📊'}
                    {proof.type.includes('Calendar') && '📅'}
                    {proof.type.includes('DM') && '💬'}
                    {proof.type.includes('Wire') && '💰'}
                  </div>
                  <p className="text-sm text-muted-foreground font-semibold">{proof.type}</p>
                  <p className="text-2xl font-bold text-primary">{proof.amount}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Written Testimonials */}
          <div className="max-w-5xl mx-auto space-y-8 mb-24">
            {[
              {
                quote: "The 1-on-1 calls are worth the price alone. Syed helped me close my first $5K client on our second call.",
                author: "Alex M., Secrets Member"
              },
              {
                quote: "Hit $40K in 4 months. Would've taken a year with Academy alone. The Secrets vault changed everything.",
                author: "Sarah K., Secrets Member"
              },
              {
                quote: "The elite network is insane. Got connected to a CPA who saved me $18K in taxes first year.",
                author: "James L., Secrets Member"
              }
            ].map((testimonial, i) => (
              <div key={i} className="flex gap-6 p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-2xl">
                  👤
                </div>
                <div className="space-y-3">
                  <p className="text-lg md:text-xl leading-relaxed italic">"{testimonial.quote}"</p>
                  <p className="text-sm font-semibold text-primary">— {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Member Photos */}
          <div className="text-center space-y-8 mb-24">
            <div className="flex flex-wrap justify-center gap-4">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary/50 flex items-center justify-center text-2xl hover:scale-110 transition-transform">
                  👤
                </div>
              ))}
            </div>
            <p className="text-xl font-semibold">Join 20+ elite operators building 6-7 figure agencies</p>
          </div>

          {/* Live Stats */}
          <div className="max-w-4xl mx-auto rounded-3xl p-12 gradient-card border-2 border-primary/30">
            <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
              <span>📊</span>
              SECRETS MEMBER RESULTS (LAST 90 DAYS)
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { label: "Average time to first client", value: "32 days" },
                { label: "Average MRR after 90 days", value: "$18,400" },
                { label: "Members who hit $10K+", value: "78%" },
                { label: "Average deal size", value: "$4,200" }
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-2">
                  <p className="text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-5xl font-bold">Ready to Join Secrets?</h2>
              <p className="text-xl text-muted-foreground">
                Complete this 2-minute application. We'll review and respond within 24 hours.
              </p>
            </div>

            <form className="premium-card-glow rounded-3xl p-12 space-y-10 bg-background">
              {/* Your Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold border-b border-border pb-4">YOUR INFORMATION</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">First Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Last Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email *</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Phone *</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors" required />
                </div>
              </div>

              {/* About You */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold border-b border-border pb-4">ABOUT YOU</h3>
                
                <div className="space-y-3">
                  <label className="text-sm font-semibold">Current situation? *</label>
                  {['Complete beginner', 'Running an agency', 'Freelancer/consultant', 'Other'].map((option) => (
                    <label key={option} className="flex items-center gap-3 p-4 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors">
                      <input type="radio" name="situation" className="w-5 h-5" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Current monthly revenue?</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors">
                    <option>$0</option>
                    <option>$1-5K</option>
                    <option>$5-10K</option>
                    <option>$10-25K</option>
                    <option>$25K+</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold">Monthly revenue goal? *</label>
                  {['$10K/month', '$25K/month', '$50K+/month'].map((option) => (
                    <label key={option} className="flex items-center gap-3 p-4 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors">
                      <input type="radio" name="goal" className="w-5 h-5" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Why Secrets over Academy? *</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors resize-none" placeholder="2-3 sentences" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Biggest challenge right now? *</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors resize-none" placeholder="2-3 sentences" required />
                </div>
              </div>

              {/* Investment */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold border-b border-border pb-4">INVESTMENT</h3>
                
                <div className="space-y-3">
                  <label className="text-sm font-semibold">Ready to invest $5,000+? *</label>
                  {['Yes, pay in full', 'Yes, need payment plan', 'Want to discuss first'].map((option) => (
                    <label key={option} className="flex items-center gap-3 p-4 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors">
                      <input type="radio" name="investment" className="w-5 h-5" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold">When can you start? *</label>
                  {['This week', 'Next 2 weeks', 'This month', 'Just exploring'].map((option) => (
                    <label key={option} className="flex items-center gap-3 p-4 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors">
                      <input type="radio" name="start" className="w-5 h-5" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Agreement */}
              <label className="flex items-start gap-3 p-6 rounded-lg bg-secondary/50 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 mt-1" required />
                <span className="text-sm">
                  I understand this is an application, not enrollment. If approved, I'll be invited to a strategy call.
                </span>
              </label>

              {/* Submit Button */}
              <button 
                type="submit"
                className="group relative w-full px-12 py-6 bg-primary text-primary-foreground rounded-2xl text-xl font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl border-glow"
              >
                <span className="relative z-10 flex items-center gap-3 justify-center">
                  Submit Application
                  <span className="transition-transform group-hover:translate-x-2">→</span>
                </span>
                <div className="absolute inset-0 bg-primary-glow opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                <span>🔒</span>
                Your information is secure. We'll review within 24-48 hours.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Secrets;
