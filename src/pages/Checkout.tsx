import { CountdownTimer } from '@/components/CountdownTimer';
import { CheckCircle, Shield, Zap, Users, TrendingUp, Star, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logoTransparent from "@/assets/logo-transparent-new.png";

export default function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <img 
            src={logoTransparent} 
            alt="LinkedIn Operator" 
            className="h-8 sm:h-10 cursor-pointer"
            onClick={() => navigate('/agency/academy')}
          />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Limited Spots Banner - Always First on Mobile */}
        <div className="lg:hidden mb-6">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-lg p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">50 LIMITED SPOTS</h3>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Ends in: <CountdownTimer className="font-bold text-primary" />
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-3 mb-2 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-primary h-full rounded-full" style={{ width: '86%' }}></div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>43 claimed • 7 spots left</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* LEFT SIDE - Offer Details */}
          <div className="space-y-6 order-2 lg:order-1">
            
            {/* Limited Spots Banner - Desktop Only */}
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-lg p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">50 LIMITED SPOTS</h3>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Ends in: <CountdownTimer className="font-bold text-primary" />
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-3 mb-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-primary h-full rounded-full" style={{ width: '86%' }}></div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span>43 claimed • 7 spots left</span>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
                LinkedIn Agency Academy
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Once the 50 spots are taken, the price goes back up to $2,497.
              </p>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row items-baseline gap-1 sm:gap-3">
                  <span className="text-base sm:text-xl text-muted-foreground">NORMAL PRICE:</span>
                  <span className="text-2xl sm:text-3xl font-bold line-through text-destructive">$2,497</span>
                </div>
                <div className="flex flex-col sm:flex-row items-baseline gap-1 sm:gap-3">
                  <span className="text-base sm:text-xl text-muted-foreground">CURRENT PRICE:</span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-green-600">$497</span>
                </div>
                <div className="inline-block bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg font-bold text-sm sm:text-base">
                  Save $2,000! (80% OFF)
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">GET INSTANT ACCESS TO:</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-foreground">Full Access To The LinkedIn Agency Academy</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-foreground">7 Comprehensive Modules (40+ Video Lessons)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-foreground">All Templates, Scripts & Resources</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-foreground">30 Days of FREE Weekly Live Coaching Calls</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-foreground">Access To Private Community (2200+ Members)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-foreground">Proven Client Acquisition Systems</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-foreground">Complete Sales & Fulfillment Training</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-foreground"><strong>LIFETIME ACCESS</strong> - All Future Updates Included</p>
                </div>
              </div>
            </div>

            {/* Bonuses */}
            <div className="border-2 border-dashed border-primary/30 rounded-lg p-4 sm:p-6 bg-primary/5 space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 fill-yellow-500" />
                <h3 className="text-base sm:text-xl font-bold text-foreground">EXCLUSIVE BONUSES (Worth $3,000+)</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    1
                  </div>
                  <div>
                    <p className="font-bold text-sm sm:text-base text-foreground">LinkedIn Outreach Blueprints</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">DFY templates that book 10+ calls per month</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    2
                  </div>
                  <div>
                    <p className="font-bold text-sm sm:text-base text-foreground">Sales Call Scripts & Frameworks</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Close 50%+ of your discovery calls</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    3
                  </div>
                  <div>
                    <p className="font-bold text-sm sm:text-base text-foreground">LinkedIn Agency Checklist</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Step-by-step guide to your first $10K</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    4
                  </div>
                  <div>
                    <p className="font-bold text-sm sm:text-base text-foreground">Private Community Access</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Network with 2200+ agency owners</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-3">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="text-base sm:text-lg font-bold text-foreground">
                  <span className="text-green-500">3</span> People are checking out now
                </span>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 bg-muted/50 rounded-lg p-3 sm:p-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-base text-foreground mb-1">Roberto L.</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                    "Just signed my 3rd client at $2,500/month. This system actually works!"
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-2 border-green-500/30 rounded-lg p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500/20 flex items-center justify-center border-4 border-green-500">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-black text-green-600">30</div>
                      <div className="text-xs font-bold text-green-600">DAY</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">30-Day Money-Back Guarantee</h3>
                  <p className="text-sm sm:text-base text-foreground mb-2">
                    If you're not completely satisfied within 30 days, simply email{' '}
                    <span className="font-bold underline break-all">support@linkedinoperator.com</span> for a full refund.
                  </p>
                  <p className="text-base sm:text-lg font-bold text-foreground">No questions asked. Zero risk.</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 py-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-500" />
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span>2200+ Students</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - Embedded Checkout */}
          <div className="lg:sticky lg:top-8 h-fit order-1 lg:order-2">
            <div className="bg-card border border-border rounded-lg shadow-xl overflow-hidden">
              <div className="bg-primary text-primary-foreground p-4 text-center">
                <h3 className="text-xl font-bold">Secure Checkout</h3>
                <p className="text-sm opacity-90">Complete your purchase below</p>
              </div>
              
              {/* Whop Checkout Embed */}
              <div className="w-full" style={{ minHeight: '600px' }}>
                <iframe
                  src="https://whop.com/checkout/plan_F61ZZgKOyK4dO?d2c=true"
                  className="w-full border-0"
                  style={{ height: '800px', minHeight: '600px' }}
                  title="Secure Checkout"
                  allow="payment"
                />
              </div>

              <div className="p-4 bg-muted/50 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-green-500" />
                <Lock className="w-4 h-4 text-green-500" />
                <span>256-bit SSL Encrypted Checkout</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
