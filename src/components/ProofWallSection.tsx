import proofLinkedInPost from "@/assets/proof-linkedin-post.png";
import proofAnalytics from "@/assets/proof-analytics.png";
import proofRevenue27k from "@/assets/proof-revenue-27k.png";
import proofStripeDashboard from "@/assets/proof-stripe-dashboard.png";
import proofClientGrowth from "@/assets/proof-client-growth.png";
import proofZellePayment from "@/assets/proof-zelle-payment.png";

export const ProofWallSection = () => {
  const proofImages = [
    proofLinkedInPost,
    proofAnalytics,
    proofRevenue27k,
    proofStripeDashboard,
    proofClientGrowth,
    proofZellePayment
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              I've Been Teaching This For <span className="text-primary">2 Years</span><br />
              Now And It's <span className="italic">Proven</span> To Just Keep<br />
              Working.....
            </h2>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-16">
            {proofImages.map((image, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="group relative rounded-2xl overflow-hidden bg-muted hover:scale-105 transition-transform cursor-pointer">
                  <img 
                    src={image} 
                    alt={`Proof ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border my-16"></div>

          {/* Context Section */}
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold">
              These Are Regular Working People
            </h3>

            <div className="text-left space-y-4 text-lg text-muted-foreground">
              <p className="flex items-start gap-3">
                <span className="text-destructive font-bold text-xl">✖</span>
                <span>Wanting extra income without starting a complicated business</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-destructive font-bold text-xl">✖</span>
                <span>Already spending hours on LinkedIn daily</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-destructive font-bold text-xl">✖</span>
                <span>Sick of agencies charging $5K+ per month</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-destructive font-bold text-xl">✖</span>
                <span>Tired of getting ghosted by potential clients</span>
              </p>
            </div>

            <div className="pt-8 space-y-6 text-lg text-foreground">
              <p>
                They all started with <strong>zero</strong> followers, <strong>zero</strong> experience, and <strong>zero</strong> clue how to land clients consistently.
              </p>

              <p className="text-xl font-semibold">
                But they had one thing:
              </p>

              <p className="text-muted-foreground">
                They were tired of being told what to do, where to be, and who to work with... and they were willing to follow a challenging, but super simple system.
              </p>

              <p className="text-2xl font-bold text-primary italic">
                The crazy part?
              </p>

              <p className="text-muted-foreground">
                They were already on LinkedIn anyway.
              </p>

              <p className="text-xl font-semibold">
                Now they get paid for it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};