import { ArrowRight, X, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import skoolLogo from "@/assets/skool-logo.png";
import student4 from "@/assets/student-4.png";
import student5 from "@/assets/student-5.png";
import student6 from "@/assets/student-6.png";
import student8 from "@/assets/student-8.png";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const WhopWidget = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);

  // Set initial visibility based on mobile state after mount
  useEffect(() => {
    setIsVisible(!isMobile);
  }, [isMobile]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]">
      {isVisible ? (
        <div className="relative group animate-scale-in">
          <a
            href="https://www.skool.com/linkedinoperatorhub"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-card/95 border-2 border-primary/30 rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 p-4 sm:p-5 w-[280px] sm:w-[300px] backdrop-blur-md relative overflow-hidden">
              
              {/* Header with Skool branding */}
              <div className="flex items-center justify-center mb-4">
                <img src={skoolLogo} alt="Skool" className="h-10" />
              </div>

              {/* Main message */}
              <p className="text-foreground font-medium mb-1 leading-snug text-center">
                #1 LinkedIn Agency Community on Skool
              </p>
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Join <span className="text-primary font-bold">1000 others</span> starting their LinkedIn journey
              </p>
              
              {/* CTA Button */}
              <Button className="w-full group-hover:bg-primary/90 font-semibold">
                Join Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Social proof indicator */}
              <div className="flex items-center gap-2 mt-3 justify-center">
                <div className="flex -space-x-2">
                  <img src={student4} alt="Active member" className="w-6 h-6 rounded-full border-2 border-card object-cover" />
                  <img src={student5} alt="Active member" className="w-6 h-6 rounded-full border-2 border-card object-cover" />
                  <img src={student6} alt="Active member" className="w-6 h-6 rounded-full border-2 border-card object-cover" />
                  <img src={student8} alt="Active member" className="w-6 h-6 rounded-full border-2 border-card object-cover" />
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
        <Button
          onClick={() => setIsVisible(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in font-semibold"
          aria-label="Show widget"
        >
          {isMobile ? "Join Our Free Skool" : <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />}
        </Button>
      )}
    </div>
  );
};

export default WhopWidget;
