import { Sparkles, Pickaxe } from "lucide-react";
import mastercardLogo from "@/assets/mastercard-logo.png";
import forbes30Logo from "@/assets/forbes-30-under-30.png";
import yCombinatorLogo from "@/assets/y-combinator-logo.png";
import diversyfundLogo from "@/assets/diversyfund-logo.png";
import playertwoLogo from "@/assets/playertwo-logo.png";
import forbesLogo from "@/assets/forbes-logo.png";

const BlueOceanReveal = () => {
  const logos = [
    { src: mastercardLogo, alt: "Mastercard" },
    { src: forbes30Logo, alt: "Forbes 30 Under 30" },
    { src: yCombinatorLogo, alt: "Y Combinator" },
    { src: diversyfundLogo, alt: "Diversyfund" },
    { src: playertwoLogo, alt: "Player Two" },
    { src: forbesLogo, alt: "Forbes" },
  ];

  return (
    <section className="-mt-16 md:-mt-20 pb-8 md:pb-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Scrolling Logo Bar */}
        <div className="mb-20 md:mb-24 overflow-hidden">
          <div className="flex animate-[scroll_30s_linear_infinite] hover:pause">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`w-auto object-contain ${
                    logo.alt === "Player Two" ? "h-16" : "h-12"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Badge Widget */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <span className="text-lg font-semibold text-foreground">
              About LinkedIn Operator
            </span>
          </div>
        </div>

        {/* Blue Ocean Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          {/* Left Side - Content */}
          <div className="space-y-6">
            {/* Discovery Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <Pickaxe className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                The Discovery
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              We Found The Last{" "}
              <span className="inline-block">
                <span className="text-primary">$100M Blue Ocean</span>
                <div className="h-1 bg-primary/40 mt-1"></div>
              </span>{" "}
              By Accident...
            </h2>
            
            <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-6 pt-4">
              <p className="text-lg">
                In <span className="font-bold text-primary">12 months</span>, we went from running LinkedIn agencies
                to signing contracts most people only dream about.
              </p>
              
              <p className="text-lg">
                We weren't signing local businesses or churn and burn Agencies, we were getting{" "}
                <span className="font-bold text-foreground">Forbes featured founders</span>.{" "}
                <span className="font-bold text-foreground">Y Combinator backed companies</span>.{" "}
                <span className="font-bold text-foreground">Fortune 500s</span>.{" "}
                <span className="font-bold text-foreground">Royal government contracts</span>.{" "}
                <span className="font-bold text-foreground">$1B+ investment firms</span>.
              </p>
              
              <p className="text-xl md:text-2xl font-bold text-foreground pt-4 leading-relaxed border-l-4 border-primary pl-6">
                And we realized: No other business model gives you access to clients like this.
              </p>
            </div>

            {/* The Proof Section */}
            <div className="space-y-4 mt-12 pt-8 border-t border-border/40">
              {/* The Proof Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
                <span className="text-sm font-semibold text-foreground">
                  💼 The Proof
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                We Started Helping Major Whales With LinkedIn
              </h3>

              <p className="text-lg text-muted-foreground">
                Before we turned it into a system, we used it to land the clients everyone else dreams about.
              </p>
            </div>
          </div>
          
          {/* Right Side - 12 Month Progression */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
              {/* Month 1-6 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative bg-background border-2 border-primary/30 rounded-lg p-6 h-full hover:border-primary/60 transition-all duration-300">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-primary/20">
                    Month 1-6
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    We Built Our Agencies
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">Signed:</p>
                    <ul className="space-y-1.5 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Mastercard</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Forbes Startups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>YC Cos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>$1B+ AUM Firms</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Month 7-12 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative bg-background border-2 border-primary/30 rounded-lg p-6 h-full hover:border-primary/60 transition-all duration-300">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-primary/20">
                    Month 7-12
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    We Replicated It For Others
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">Trained:</p>
                    <ul className="space-y-1.5 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>500+ Operators</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>First-time founders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Industry experts</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* TODAY */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg blur-md group-hover:blur-lg transition-all duration-300 animate-glow-pulse"></div>
                <div className="relative bg-background border-2 border-primary/50 rounded-lg p-6 h-full hover:border-primary transition-all duration-300">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-primary/30">
                    TODAY
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    We Built The System
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">Created:</p>
                    <ul className="space-y-1.5 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="font-semibold text-primary">LinkedIn Operator</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Complete Framework</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Blue Ocean Blueprint</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueOceanReveal;
