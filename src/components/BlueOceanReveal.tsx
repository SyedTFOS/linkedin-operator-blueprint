import { Sparkles } from "lucide-react";
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
          </div>
          
          {/* Right Side - Reserved for images/widgets */}
          <div className="hidden lg:block">
            {/* Space reserved for future content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueOceanReveal;
