import { Sparkles, Pickaxe, Briefcase, TrendingUp, MessageCircle, Users, DollarSign, Eye, Award, Rocket, Building2, Tv } from "lucide-react";
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
                <span className="text-primary mr-1.5">i.</span>The Discovery
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
          </div>
          
          {/* Right Side - 12 Month Progression + The Proof */}
          <div className="space-y-16">
            {/* 12 Month Progression */}
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

            {/* The Proof Section */}
            <div className="space-y-4 pt-8 border-t border-border/30">
              {/* The Proof Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">
                  <span className="text-primary mr-1.5">ii.</span>The Proof
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                We Started Helping <span className="text-primary">Major Whales</span> With LinkedIn
              </h3>

              <p className="text-lg text-muted-foreground">
                Before we turned it into a system, we used it to land the clients everyone else dreams about.
              </p>
            </div>
          </div>
        </div>

        {/* Client Hero Cards Section */}
        <div className="mt-24">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">
                Tier 1: Ultra-Whales
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              The Results Speak For Themselves
            </h3>
          </div>

          {/* Hero Cards Horizontal Scroll */}
          <div className="relative">
            {/* Scroll container */}
            <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
              <div className="flex gap-8 min-w-max px-4">
                {/* Tier 1 Cards */}
            {/* CARD 1: Roberto H. Luna */}
            <div className="group relative overflow-hidden rounded-2xl h-[500px] w-[350px] flex-shrink-0">
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/20">
                {/* Placeholder for photo - will be replaced with actual image */}
                <div className="w-full h-full flex items-center justify-center">
                  <Users className="w-32 h-32 text-primary/30" />
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>

              {/* Major Win Badge - Always Visible */}
              <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                <TrendingUp className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm font-bold text-primary-foreground">Featured in Forbes</span>
              </div>

              {/* Basic Info - Always Visible */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-300">
                <h4 className="text-2xl font-bold text-foreground mb-1">
                  Roberto H. Luna
                </h4>
                <p className="text-base text-primary font-semibold mb-2">Lunivate</p>
                <p className="text-sm text-muted-foreground">Business Consulting & Leadership</p>
              </div>

              {/* Detailed Results - Show on Hover */}
              <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-foreground mb-1">
                      Roberto H. Luna
                    </h4>
                    <p className="text-sm text-primary font-semibold">Lunivate • 120 Days</p>
                  </div>

                  {/* Results */}
                  <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">
                    The Results:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">Featured in Forbes</p>
                        <p className="text-xs text-muted-foreground">Direct result of LinkedIn strategy</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Eye className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">15M+ LinkedIn views</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">100,000+ comments</p>
                        <p className="text-xs text-muted-foreground">Across content</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">50,000+ followers</p>
                        <p className="text-xs text-muted-foreground">Built from zero</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-2 border-t border-primary/20">
                      <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-bold text-primary">$500,000+ revenue</p>
                        <p className="text-xs text-muted-foreground">In just 120 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: Rubaiyat Hossain */}
            <div className="group relative overflow-hidden rounded-2xl h-[500px] w-[350px] flex-shrink-0">
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-primary/30 to-accent/20">
                {/* Placeholder for photo - will be replaced with actual image */}
                <div className="w-full h-full flex items-center justify-center">
                  <Award className="w-32 h-32 text-primary/30" />
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>

              {/* Major Win Badge - Always Visible */}
              <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                <Award className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm font-bold text-primary-foreground">Forbes 30 Under 30</span>
              </div>

              {/* Basic Info - Always Visible */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-300">
                <h4 className="text-2xl font-bold text-foreground mb-1">
                  Rubaiyat Hossain
                </h4>
                <p className="text-base text-primary font-semibold mb-2">MarkaPolo AI</p>
                <p className="text-sm text-muted-foreground">AI Marketing Platform</p>
              </div>

              {/* Detailed Results - Show on Hover */}
              <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-foreground mb-1">
                      Rubaiyat Hossain
                    </h4>
                    <p className="text-sm text-primary font-semibold">MarkaPolo AI</p>
                  </div>

                  {/* The Credentials */}
                  <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">
                    The Credentials:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">Forbes 30 Under 30 Asia</p>
                        <p className="text-xs text-muted-foreground">Recognition award</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">$7.7M+ annual revenue</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Rocket className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">Backed by top accelerators</p>
                        <p className="text-xs text-muted-foreground">Google For Startups, NTDP, Taqadam</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-2 border-t border-primary/20">
                      <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-bold text-primary">Enterprise pipeline fueled</p>
                        <p className="text-xs text-muted-foreground">By LinkedIn strategy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: Craig Cecilio */}
            <div className="group relative overflow-hidden rounded-2xl h-[500px] w-[350px] flex-shrink-0">
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/30 to-accent/30">
                {/* Placeholder for photo - will be replaced with actual image */}
                <div className="w-full h-full flex items-center justify-center">
                  <Building2 className="w-32 h-32 text-primary/30" />
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>

              {/* Major Win Badge - Always Visible */}
              <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                <DollarSign className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm font-bold text-primary-foreground">$1B+ Raised</span>
              </div>

              {/* Basic Info - Always Visible */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-300">
                <h4 className="text-2xl font-bold text-foreground mb-1">
                  Craig Cecilio
                </h4>
                <p className="text-base text-primary font-semibold mb-2">DiversyFund</p>
                <p className="text-sm text-muted-foreground">Real Estate Investment Platform</p>
              </div>

              {/* Detailed Results - Show on Hover */}
              <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-foreground mb-1">
                      Craig Cecilio
                    </h4>
                    <p className="text-sm text-primary font-semibold">DiversyFund • Fortune 500 Level</p>
                  </div>

                  {/* The Empire */}
                  <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">
                    The Empire:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">$1 Billion+ capital raised</p>
                        <p className="text-xs text-muted-foreground">From 40,000+ investors</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">500,000+ participants</p>
                        <p className="text-xs text-muted-foreground">30,000+ active users</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">300% annual growth</p>
                        <p className="text-xs text-muted-foreground">Over 3 years</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Tv className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">Forbes, CNBC, Bloomberg</p>
                        <p className="text-xs text-muted-foreground">Major media features</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-2 border-t border-primary/20">
                      <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-bold text-primary">143,000+ social following</p>
                        <p className="text-xs text-muted-foreground">27K LinkedIn + 116K Instagram</p>
                      </div>
                    </div>
                  </div>
                </div>
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
