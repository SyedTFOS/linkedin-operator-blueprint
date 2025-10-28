import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CountdownTimer } from '@/components/CountdownTimer';
import { CheckCircle, Shield, Zap, Users, Clock, TrendingUp, Star, Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logoTransparent from "@/assets/logo-transparent-new.png";

export default function Checkout() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

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

          {/* RIGHT SIDE - Checkout Form */}
          <div className="lg:sticky lg:top-8 h-fit order-1 lg:order-2">
            <div className="bg-card border border-border rounded-lg shadow-xl">
              
              {/* Step Indicator */}
              <div className="flex border-b border-border">
                <div className={`flex-1 p-4 text-center ${step === 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                  <div className="flex items-center justify-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 1 ? 'bg-primary-foreground text-primary' : 'bg-background'}`}>
                      1
                    </div>
                    <div className="text-left hidden sm:block">
                      <div className="text-xs opacity-80">STEP 1</div>
                      <div className="font-semibold text-sm">Your Name & Email</div>
                    </div>
                  </div>
                </div>
                <div className={`flex-1 p-4 text-center ${step === 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                  <div className="flex items-center justify-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 2 ? 'bg-primary-foreground text-primary' : 'bg-background'}`}>
                      2
                    </div>
                    <div className="text-left hidden sm:block">
                      <div className="text-xs opacity-80">STEP 2</div>
                      <div className="font-semibold text-sm">Finalize & Get Access!</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6 space-y-6">
                
                {step === 1 && (
                  <>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="John"
                            className={errors.firstName ? 'border-destructive' : ''}
                          />
                          {errors.firstName && (
                            <p className="text-sm text-destructive">{errors.firstName}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Doe"
                            className={errors.lastName ? 'border-destructive' : ''}
                          />
                          {errors.lastName && (
                            <p className="text-sm text-destructive">{errors.lastName}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
                      <Lock className="w-4 h-4" />
                      <span>We respect your privacy & information.</span>
                    </div>

                    <Button 
                      size="lg" 
                      className="w-full text-lg font-bold"
                      onClick={handleNextStep}
                    >
                      GO TO NEXT STEP
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="bg-muted/50 rounded-lg p-4 space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">LinkedIn Agency Academy</span>
                        <span className="font-bold text-foreground">$497.00</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-green-600">
                        <span>Discount (80% OFF)</span>
                        <span>-$2,000.00</span>
                      </div>
                      <div className="border-t border-border pt-2 flex justify-between items-center text-lg font-bold">
                        <span>Order Total</span>
                        <span className="text-2xl text-primary">$497.00</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground mb-2">
                          You're all set! Click below to complete your secure checkout.
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Your information has been saved and will be pre-filled.
                        </p>
                      </div>

                      <Button 
                        size="lg" 
                        className="w-full text-base sm:text-lg font-bold"
                        onClick={() => {
                          window.open('https://www.fanbasis.com/agency-checkout/linkedinoperator/66KDn', '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <Lock className="w-5 h-5 mr-2" />
                        Complete Secure Checkout ($497)
                      </Button>

                      <div className="text-center">
                        <button
                          onClick={() => setStep(1)}
                          className="text-sm text-muted-foreground hover:text-foreground underline"
                        >
                          ← Back to Step 1
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm">
                      <p className="text-center text-muted-foreground">
                        Or pay in 2 installments of <span className="font-bold text-foreground">$249</span>
                      </p>
                      
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 sm:p-4 space-y-2">
                        <div className="flex items-center gap-2 text-green-600 font-bold text-sm sm:text-base">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>What happens after checkout:</span>
                        </div>
                        <ul className="space-y-1 text-xs sm:text-sm text-foreground ml-6 sm:ml-7">
                          <li>✓ Instant access to all 7 modules</li>
                          <li>✓ Immediate community access</li>
                          <li>✓ All bonuses delivered to your email</li>
                          <li>✓ First coaching call invitation sent</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Shield className="w-5 h-5 text-green-500" />
                      <span className="text-muted-foreground">Secure Checkout</span>
                    </div>
                  </>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
