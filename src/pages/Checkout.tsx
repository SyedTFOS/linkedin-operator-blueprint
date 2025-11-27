import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CheckCircle2, Shield, Clock, ChevronDown } from 'lucide-react';
import logo from "@/assets/logo-main.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from 'zod';
import { CountdownTimer } from "@/components/CountdownTimer";

const checkoutSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
});

export default function Checkout() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContinue = async () => {
    if (step !== 1) return;

    // Validate form data
    try {
      checkoutSchema.parse(formData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { name?: string; email?: string } = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as 'name' | 'email'] = err.message;
          }
        });
        setErrors(fieldErrors);
        return;
      }
    }

    setIsSubmitting(true);

    // Open Fanbasis checkout immediately after validation
    window.open('https://www.fanbasis.com/agency-checkout/linkedinoperator/pgWKy', '_blank');
    setStep(2);

    try {
      // Save to database in background
      const { error } = await supabase
        .from('checkout_submissions')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
        });

      if (error) {
        console.error('Error saving checkout submission:', error);
        toast.error('Failed to save your information, but checkout is open.');
      } else {
        toast.success('Information saved successfully!');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <img 
            src={logo} 
            alt="LinkedIn Operator Academy" 
            className="h-8 sm:h-10 cursor-pointer"
            onClick={() => navigate('/agency/academy')}
          />
        </div>
      </header>

      {/* Urgency Bar */}
      <div className="bg-gradient-to-r from-primary/20 via-[#FF8A5B]/20 to-[#FF6B35]/20 border-b border-primary/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <span className="text-foreground font-bold text-sm sm:text-base">ONLY 9 SPOTS REMAINING</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-foreground/80" />
              <CountdownTimer className="text-foreground/80 text-sm font-semibold" />
            </div>
            <div className="text-foreground/80 text-sm">
              <span>Price increases after 9 spots are filled</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Grid Pattern */}
      <div className="relative bg-gradient-to-br from-background via-primary/5 to-[#FF6B35]/10 overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        <div className="relative container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Start Your LinkedIn Agency
              </h1>
              
              {/* Limited Time Offer Badge */}
              <div className="inline-block bg-primary/10 border border-primary/30 rounded-lg px-4 py-2 mb-6">
                <p className="text-primary font-bold text-sm">LIMITED TIME OFFER</p>
              </div>

              <div className="space-y-3 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  GET FULL ACCESS FOR $497
                </h2>
                <div className="flex items-center gap-3">
                  <span className="text-3xl text-muted-foreground line-through">$2,497</span>
                  <span className="text-xl text-green-600 dark:text-green-400 font-semibold">Save $2,000!</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 rounded-lg px-4 py-3 mb-6">
                <p className="text-red-600 dark:text-red-400 font-bold text-center">Only 9 Spots Left</p>
              </div>
            </div>

            {/* What's Included */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-4">Get Instant Access:</h3>
              
              <div className="space-y-3">
                {[
                  'Lifetime Access to the complete LinkedIn Agency Masterclass',
                  'All course materials, templates, and future updates (Lifetime)',
                  'Full access to our global community',
                  'Everything needed to build a $20k+/month LinkedIn Agency',
                  '14-Day Money-Back Guarantee - No questions asked',
                  '30 days of weekly Q&A coaching calls (Included FREE)',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-sm mt-4 pl-8">
                Then $97/month to continue • Cancel anytime
              </p>
            </div>

            {/* Money Back Guarantee */}
            <div className="bg-gradient-to-br from-green-600/10 to-green-500/5 border border-green-600/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-600/20 rounded-full p-3 flex-shrink-0">
                  <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">14-Day Money-Back Guarantee</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    No questions asked
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-border/50">
              {/* Steps Header */}
              <div className="grid grid-cols-2 bg-muted/30">
                <div className={`py-4 px-6 text-center border-b-4 transition-colors ${
                  step === 1 ? 'border-primary bg-card' : 'border-transparent'
                }`}>
                  <div className="text-xs text-muted-foreground mb-1">STEP 1</div>
                  <div className="text-sm font-semibold text-foreground">Your Name & Email</div>
                </div>
                <div className={`py-4 px-6 text-center border-b-4 transition-colors ${
                  step === 2 ? 'border-primary bg-card' : 'border-transparent'
                }`}>
                  <div className="text-xs text-muted-foreground mb-1">STEP 2</div>
                  <div className="text-sm font-semibold text-foreground">Finalize & Get Access!</div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                {step === 1 ? (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground mb-2 block">Your Full Name...</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your Full Name..."
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full h-12 text-base ${errors.name ? 'border-red-500' : ''}`}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-foreground mb-2 block">Your Email Address...</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your Email Address..."
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full h-12 text-base ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <Button
                      onClick={handleContinue}
                      disabled={!formData.name || !formData.email || isSubmitting}
                      className="w-full h-14 text-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold disabled:opacity-50 shadow-lg"
                    >
                      {isSubmitting ? 'Saving...' : 'Continue To Next Step'}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4" />
                      Secure 256-Bit SSL Checkout Powered by Fan Basis
                    </p>
                  </div>
                ) : (
                  <div className="text-center space-y-6 py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Checkout opened!</h3>
                      <p className="text-muted-foreground">
                        Complete your purchase in the new tab to get instant access.
                      </p>
                    </div>
                    <Button
                      onClick={() => window.open('https://www.fanbasis.com/agency-checkout/linkedinoperator/pgWKy', '_blank')}
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                    >
                      Click here if checkout didn't open
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Further questions? Please email us at{' '}
                <a href="mailto:Support@linkedinoperator.com" className="text-primary hover:underline">
                  Support@linkedinoperator.com
                </a>
              </p>
            </div>

            <div className="space-y-4">
              <details className="group bg-card border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-muted/50 transition-colors">
                  <span className="font-semibold text-foreground text-lg">What if I've never run an agency before?</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    Perfect. Several of our most successful students were complete beginners (like Komail who closed a $14K deal in his first 3 weeks). The system is designed to work whether you're starting from scratch or pivoting from another business model.
                  </p>
                </div>
              </details>

              <details className="group bg-card border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-muted/50 transition-colors">
                  <span className="font-semibold text-foreground text-lg">How is this different from other LinkedIn courses?</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    Most LinkedIn courses teach you how to grow a following and become an influencer. We teach you how to build a legitimate agency that signs Fortune 500 companies. This is the actual system that landed Mastercard, not theory from someone who's never done it.
                  </p>
                </div>
              </details>

              <details className="group bg-card border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-muted/50 transition-colors">
                  <span className="font-semibold text-foreground text-lg">Do I need a LinkedIn following to start?</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    No. Unlike other business models where you need to build an audience first, you can start getting paid from day one with LinkedIn agencies. We show you how to sign clients through outbound systems, not just inbound content.
                  </p>
                </div>
              </details>

              <details className="group bg-card border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-muted/50 transition-colors">
                  <span className="font-semibold text-foreground text-lg">How much time do I need to dedicate?</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    Treat this like building a real business. If you can dedicate 2-4 hours per day implementing the system, you should see your first client within 30-90 days. The more time you invest, the faster you'll scale.
                  </p>
                </div>
              </details>

              <details className="group bg-card border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-muted/50 transition-colors">
                  <span className="font-semibold text-foreground text-lg">What if I'm in a competitive niche?</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    That's actually perfect. LinkedIn agencies can work in ANY industry — AI, SaaS, Med-Tech, Finance, Real Estate, etc. We provide 8+ industry-specific playbooks showing you exactly how to position yourself as the go-to operator in your vertical.
                  </p>
                </div>
              </details>

              <details className="group bg-card border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-muted/50 transition-colors">
                  <span className="font-semibold text-foreground text-lg">Is there support after I join?</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    Yes. You get 30 days of private community access where you can ask questions and connect with other operators. You also get access to weekly GROUP coaching calls where we troubleshoot specific challenges. After 30 days, you can continue community access for $97/month (optional).
                  </p>
                </div>
              </details>

              <details className="group bg-card border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-muted/50 transition-colors">
                  <span className="font-semibold text-foreground text-lg">What if I can't afford $497 right now?</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    If $497 feels like a lot, that's exactly why you need this more than ever. Your first client at $3K/month pays for this 6x over. If you can't see that ROI potential, you're not thinking like an operator yet — which is exactly what we'll fix inside.
                  </p>
                </div>
              </details>

              <details className="group bg-card border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-muted/50 transition-colors">
                  <span className="font-semibold text-foreground text-lg">Do I get lifetime access?</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    Yes. You get lifetime access to all 50+ video modules, templates, SOPs, and frameworks. As we update and refine the system, you get those updates too. The 30-day community access is what becomes optional after the first month.
                  </p>
                </div>
              </details>

              <details className="group bg-card border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-muted/50 transition-colors">
                  <span className="font-semibold text-foreground text-lg">What's the refund policy?</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    We're operators, not scammers. But we're also not here to babysit. If you join, get access to everything, and then decide it's "too much work" — that's on you. We've proven this system works with Fortune 500s and complete beginners. The only variable is you.
                  </p>
                </div>
              </details>
            </div>

            {/* Final CTA */}
            <div className="mt-12">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-xl py-6 px-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get Full Access for 80% Off
                <div className="text-sm font-normal mt-1 opacity-90">
                  Normally $2,497 - Today $497 - Save $2,000!
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
