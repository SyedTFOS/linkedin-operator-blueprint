import { Shield, CheckCircle, XCircle } from "lucide-react";

export const ValidationSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Who This Is For */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Who This Is For (And Who It's Not)
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - This IS For You */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
                <h3 className="text-2xl font-bold">THIS IS FOR YOU IF...</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-lg">You're tired of saturated business models (dropshipping, SMMA, courses)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-lg">You want to work with REAL companies (not local businesses)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-lg">You're ready to charge $3K-50K/month retainers</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-lg">You want a business that compounds (not starts over every month)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-lg">You have 10-15 hours/week to build</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-lg">You're coachable and will implement systems</p>
                </div>
              </div>
            </div>

            {/* Right Column - This is NOT For You */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-destructive/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-destructive flex-shrink-0" />
                <h3 className="text-2xl font-bold">THIS IS NOT FOR YOU IF...</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-destructive font-bold text-xl flex-shrink-0">✖</span>
                  <p className="text-lg">You want overnight results with zero work</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive font-bold text-xl flex-shrink-0">✖</span>
                  <p className="text-lg">You're not willing to send 200+ DMs/day initially</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive font-bold text-xl flex-shrink-0">✖</span>
                  <p className="text-lg">You're uncomfortable with outbound sales</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive font-bold text-xl flex-shrink-0">✖</span>
                  <p className="text-lg">You want passive income with no client interaction</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive font-bold text-xl flex-shrink-0">✖</span>
                  <p className="text-lg">You're looking for a "magic button" solution</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive font-bold text-xl flex-shrink-0">✖</span>
                  <p className="text-lg">You won't follow proven frameworks</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Operator Guarantee */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Shield className="w-12 h-12 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">The 90-Day Operator Guarantee</h2>
            </div>

            <div className="space-y-6 text-lg text-foreground mb-8">
              <p>
                Go through all 50+ modules. Use every template. Follow the system exactly.
              </p>
              <p>
                Send 200+ targeted DMs. Implement the profile optimization. Create content with our frameworks.
              </p>
              <p className="text-xl font-bold">
                If you DON'T land your first client in 90 days...
              </p>
              <p className="text-2xl font-bold text-primary">
                Email us for a full refund. No questions asked.
              </p>
            </div>

            <div className="border-t border-border/50 pt-8 space-y-4">
              <p className="text-xl font-bold">Why can we make this guarantee?</p>
              <p className="text-lg text-muted-foreground">
                Because this system signed Mastercard. It signed Forbes founders. It signed Y Combinator companies.
              </p>
              <p className="text-lg text-muted-foreground">
                We've proven it works for Fortune 500s. We've proven it works for complete beginners.
              </p>
              <p className="text-xl font-bold text-foreground">
                The only variable is you.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">500+</p>
                <p className="text-sm text-muted-foreground">Operators Trained</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">$15M+</p>
                <p className="text-sm text-muted-foreground">Client Revenue</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">90-Day</p>
                <p className="text-sm text-muted-foreground">Money-Back</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">✓</p>
                <p className="text-sm text-muted-foreground">Fan Basis Verified</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
