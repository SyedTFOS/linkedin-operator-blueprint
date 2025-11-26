import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, Clock, Trophy } from "lucide-react";
import { TestimonialCard } from "@/components/TestimonialCard";
import ethanClouser from "@/assets/ethan-clouser.png";
import vasilijeSimic from "@/assets/vasilije-simic.png";
import komailGillani from "@/assets/komail-gillani.png";

export const ActionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Pricing Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Complete LinkedIn Operator Academy
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to build a $20K+/month LinkedIn agency
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Side - What's Included */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8">What's Included:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">Complete 7-Week Framework</p>
                    <p className="text-sm text-muted-foreground">50+ video modules covering every aspect</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">Templates & SOP Library</p>
                    <p className="text-sm text-muted-foreground">50+ plug-and-play assets</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">8+ Industry Playbooks</p>
                    <p className="text-sm text-muted-foreground">AI, SaaS, Finance, MedTech, and more</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">Weekly GROUP Coaching Calls</p>
                    <p className="text-sm text-muted-foreground">Live Q&A and implementation support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">90 Days Community Access</p>
                    <p className="text-sm text-muted-foreground">FREE, then $97/month optional</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">Lifetime Course Access</p>
                    <p className="text-sm text-muted-foreground">All future updates included FREE</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">90-Day Operator Guarantee</p>
                    <p className="text-sm text-muted-foreground">Full refund if you don't land a client</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Investment */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-8">
              <div className="text-center mb-8">
                <p className="text-lg text-muted-foreground mb-2">Total Value:</p>
                <p className="text-3xl font-bold line-through text-muted-foreground mb-6">$12,497</p>
                <p className="text-xl text-muted-foreground mb-2">Your Investment Today:</p>
                <p className="text-6xl font-black text-primary mb-4">$497</p>
                <p className="text-muted-foreground mb-8">One-Time Payment</p>
                <p className="text-lg text-muted-foreground">Or 3 payments of <span className="font-bold text-foreground">$197</span></p>
              </div>

              <div className="border-t border-border/50 pt-8 space-y-4 mb-8">
                <p className="text-xl font-bold">What You Get:</p>
                <div className="space-y-2 text-muted-foreground">
                  <p>→ Lifetime access to complete framework</p>
                  <p>→ 90 days coaching FREE</p>
                  <p>→ All templates, SOPs, playbooks</p>
                  <p>→ Future updates included</p>
                  <p>→ 90-day money-back guarantee</p>
                </div>
              </div>

              <Button 
                onClick={() => navigate('/agency/academy/checkout')}
                className="w-full py-8 text-xl font-bold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:scale-105 transition-all duration-300"
              >
                JOIN LINKEDIN OPERATOR ACADEMY →
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                ✓ Instant access ✓ 800+ operators in training ✓ 90-day guarantee
              </p>

              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
                <CreditCard className="w-4 h-4" />
                <span>Secure checkout via Stripe | All major credit cards accepted</span>
              </div>
            </div>
          </div>
        </div>

        {/* What Happens After You Join */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              What Happens After You Join
            </h3>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">TODAY</p>
                  <p className="text-muted-foreground">Instant access to complete framework + community</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">W1</span>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">WEEK 1</p>
                  <p className="text-muted-foreground">Attend your first GROUP coaching call</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">30</span>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">DAY 30</p>
                  <p className="text-muted-foreground">Land your first qualified client call</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">60</span>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">DAY 60</p>
                  <p className="text-muted-foreground">Sign your first $3K-10K/month retainer</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">DAY 90</p>
                  <p className="text-muted-foreground">Scale to $15K-20K+/month with 3-5 clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Close */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              The Only Question Left Is...
            </h3>

            <div className="space-y-6 text-lg text-foreground mb-8">
              <p>Will you be one of the operators who took action?</p>
              <p>Or will you still be looking for the "perfect" business model 6 months from now?</p>
              <p className="text-xl font-bold">Every successful operator made a decision.</p>
            </div>

            <div className="space-y-3 text-lg text-muted-foreground mb-8">
              <p>They stopped chasing saturated opportunities.</p>
              <p>They stopped listening to gurus who've never signed a real client.</p>
              <p>They saw the $120 billion blue ocean.</p>
              <p className="text-xl font-bold text-foreground">And they moved.</p>
            </div>

            <div className="border-t border-border/50 pt-8 mb-8">
              <p className="text-xl mb-4">The window is open. But it won't be forever.</p>
              <p className="text-lg text-muted-foreground mb-4">
                Less than 1% of LinkedIn users are posting. The market hasn't caught on yet.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                But when it does? This opportunity closes.
              </p>
              <p className="text-xl font-bold text-foreground">
                The operators who moved early built $20K-50K/month agencies.
              </p>
              <p className="text-lg text-muted-foreground">
                The ones who waited are still looking.
              </p>
            </div>

            <Button 
              onClick={() => navigate('/agency/academy/checkout')}
              className="px-12 py-8 text-xl font-bold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:scale-105 transition-all duration-300 mb-4"
            >
              SECURE YOUR SPOT NOW →
            </Button>

            <div className="space-y-1 text-sm text-muted-foreground">
              <p>🔴 NEXT COHORT STARTING DECEMBER 1st, 2025</p>
              <p>✓ 90-day guarantee ✓ Instant access ✓ Lifetime updates</p>
            </div>
          </div>
        </div>

        {/* Final Testimonial Push */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Join These Operators
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <TestimonialCard
              name="Ethan Clouser"
              image={ethanClouser}
              quote="From $1K to $27K/month in 6 months. Then exited for a healthy 5-figure deal. This system changed my life."
              result="Exited for 5-figures at 75-80% profit margins"
            />
            <TestimonialCard
              name="Vasilije Simic"
              image={vasilijeSimic}
              quote="Zero experience to $25K/month agency. I guarantee my clients booked meetings in 60 days. The framework works."
              result="$25K/month with 20+ clients"
            />
            <TestimonialCard
              name="Komail Gillani"
              image={komailGillani}
              quote="I had zero online business experience. Closed a $14K deal in my first 3 weeks. Now I'm a coach inside LIOP."
              result="$14K deal in first 3 weeks"
            />
          </div>

          <div className="text-center">
            <Button 
              onClick={() => navigate('/agency/academy/checkout')}
              className="px-12 py-6 text-xl font-bold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Join These Operators →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
