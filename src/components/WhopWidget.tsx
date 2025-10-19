import { ArrowRight, X, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import whopLogo from "@/assets/whop-logo-light.png";
import { useState } from "react";

const WhopWidget = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]">
      {isVisible ? (
        <div className="relative group animate-scale-in">
          <a
            href="https://whop.com/linkedin-operator/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-card/95 border-2 border-primary/30 rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 p-4 sm:p-5 w-[280px] sm:w-[300px] backdrop-blur-md relative overflow-hidden">

              {/* Free Course Ribbon - Tilted Top Right */}
              <div className="absolute -right-6 top-0 bg-primary text-primary-foreground px-8 py-1.5 shadow-lg text-xs font-bold rotate-12">
                Free Course Incl.
              </div>
              
              {/* Header with Whop branding */}
              <div className="flex items-center gap-2 mb-3 mt-2">
                <img src={whopLogo} alt="Whop" className="h-6" />
              </div>
              
              {/* Main message */}
              <p className="text-foreground font-medium mb-1 leading-snug">
                #1 LinkedIn Agency Community on Whop
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Join <span className="text-primary font-bold">500 others</span> starting their agency
              </p>
              
              {/* CTA Button */}
              <Button className="w-full group-hover:bg-primary/90 font-semibold">
                Join Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Social proof indicator */}
              <div className="flex items-center gap-2 mt-3 justify-center">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-card" />
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-card" />
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 border-2 border-card" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">Active now</span>
              </div>
            </div>
          </a>

          {/* Close Button - Bottom Left of Widget */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsVisible(false);
            }}
            className="absolute -bottom-3 -left-3 bg-muted hover:bg-muted/80 text-foreground rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-border"
            aria-label="Hide widget"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-scale-in"
          aria-label="Show widget"
        >
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
};

export default WhopWidget;
