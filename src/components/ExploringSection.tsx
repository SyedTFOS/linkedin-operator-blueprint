import { Route, Check, ArrowDown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import EmbeddedChatbot from "@/components/EmbeddedChatbot";
import ethanPhoto from "@/assets/ethan-clouser.png";
import walterPhoto from "@/assets/walter-chung.png";
import samPhoto from "@/assets/sam-beck.png";
import aryanPhoto from "@/assets/aryan-shah.png";
import komailPhoto from "@/assets/komail-gillani.png";
import vasilijePhoto from "@/assets/vasilije-simic.png";
import diversyfundLogo from "@/assets/diversyfund-logo.png";
import playertwoLogo from "@/assets/playertwo-logo.png";
import lunivateLogo from "@/assets/lunivate-logo.png";

const ExploringSection = () => {
  const scrollToWhatsInside = () => {
    const element = document.getElementById("about-programs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <Route className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              <span className="text-primary mr-1.5">vii.</span>Your Next Step
            </span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-center">
          Two Paths. Same Blue Ocean. Choose Your Entry Point.
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-16 text-center">
          The LinkedIn opportunity is massive. Your approach depends on your goal: Build an agency empire, or become the
          authority in your niche.
        </p>

        {/* Choose Your Path Dropdown */}
        <div className="flex justify-center mb-16">
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Choose Your Path
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0 bg-card border-border shadow-2xl" align="center">
              <div className="divide-y divide-border">
                <button
                  onClick={scrollToWhatsInside}
                  className="w-full p-6 text-left hover:bg-muted/50 transition-colors duration-200 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                      <Check className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-1 group-hover:text-orange-500 transition-colors">
                        Building An Agency
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Build a 6-7 figure LinkedIn agency
                      </p>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={scrollToWhatsInside}
                  className="w-full p-6 text-left hover:bg-muted/50 transition-colors duration-200 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <Check className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-1 group-hover:text-blue-500 transition-colors">
                        Growing My Business
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Become the #1 authority in your industry
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Not Sure Transition */}
        <div className="text-center mb-8 mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Not Sure?
          </h3>
          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
          </div>
        </div>

        {/* AI Chat Assistant */}
        <EmbeddedChatbot />
      </div>
    </section>
  );
};

export default ExploringSection;
