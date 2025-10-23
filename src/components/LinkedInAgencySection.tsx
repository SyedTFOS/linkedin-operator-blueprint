import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, MessageCircle } from "lucide-react";

const LinkedInAgencySection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          What Is A <span className="text-primary">LinkedIn Agency?</span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-center text-muted-foreground mb-8">
          Help B2B companies generate sales calls through:
        </p>
        <p className="text-base md:text-lg text-center text-muted-foreground mb-8">
          Profile optimization · Content creation · Outreach
        </p>

        {/* Video */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/[insert-video-id]"
              title="What Is A LinkedIn Agency"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            📹 Watch 7-min explainer →
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-12"></div>

        {/* YOU PROVIDE Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6">YOU PROVIDE:</h3>
          <div className="space-y-3 text-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎨</span>
              <span>Profile Optimization</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✍️</span>
              <span>Content Creation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📨</span>
              <span>LinkedIn Outreach</span>
            </div>
          </div>
        </div>

        {/* Pricing & Results */}
        <div className="mb-8 space-y-2">
          <p className="text-lg">
            <span className="font-bold">YOU CHARGE:</span>{" "}
            <span className="text-primary font-bold text-xl">$3K-$50K/month</span>
          </p>
          <p className="text-lg">
            <span className="font-bold">THEY GET:</span>{" "}
            <span className="font-semibold">10-20 qualified sales calls/month</span>
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-12"></div>

        {/* Comparison Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6">WHY THIS BEATS OTHER MODELS:</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Other Models */}
            <div>
              <h4 className="text-lg font-bold mb-4">Other Models</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Saturated</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Need audience</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Low prices</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">12-24 months</span>
                </div>
              </div>
            </div>

            {/* LinkedIn Agency */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-primary">LinkedIn Agency</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-semibold">Blue ocean</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-semibold">Paid day 1</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-semibold">$3K-$50K/client</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-semibold">30-60 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-12"></div>

        {/* Path to $10K */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">PATH TO $10K/MONTH:</h3>
          
          <div className="space-y-4 mb-6">
            <p className="text-lg">
              1 client × $3,000 = <span className="font-bold">$3,000/mo</span>
            </p>
            <p className="text-lg">
              +2 clients × $3,500 = <span className="font-bold">$7,000/mo</span>
            </p>
            <p className="text-xl font-bold border-t pt-4">
              Total = <span className="text-primary text-2xl">$10,000/mo</span>{" "}
              <span className="text-base font-normal text-muted-foreground">(just 3 clients!)</span>
            </p>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 border">
            <p className="text-base text-muted-foreground mb-3">
              Most students: 5-15 clients by month 6
            </p>
            <p className="text-lg font-bold text-primary">
              = $25,000-$50,000/month
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-12"></div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group text-base font-semibold">
            🚀 Get The Free Framework
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="group text-base font-semibold">
            <MessageCircle className="mr-2 w-4 h-4" />
            💬 Ask Leo Questions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LinkedInAgencySection;

