import { ArrowRight, X, ChevronUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import whopLogo from "@/assets/whop-logo-light.png";
import student4 from "@/assets/student-4.png";
import student5 from "@/assets/student-5.png";
import student6 from "@/assets/student-6.png";
import student8 from "@/assets/student-8.png";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const WhopWidget = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(4 * 60 * 60 + 10 * 60 + 57); // 4:10:57 in seconds

  // Set initial visibility based on mobile state after mount
  useEffect(() => {
    setIsVisible(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const claimed = 473;
  const spotsLeft = 27;
  const total = claimed + spotsLeft;
  const progressValue = (claimed / total) * 100;

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
              
              {/* Header with Whop branding */}
              <div className="flex items-center gap-2 mb-3">
                <img src={whopLogo} alt="Whop" className="h-6" />
              </div>
              
              {/* Urgency Timer Section */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-semibold text-foreground">Ends in</span>
                  </div>
                  <span className="text-sm font-bold text-primary tabular-nums">
                    {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{claimed} claimed</span>
                    <span className="font-bold text-destructive">{spotsLeft} spots left</span>
                  </div>
                  <Progress value={progressValue} className="h-1.5" />
                </div>
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
          {isMobile ? "Join Our Free Whop" : <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />}
        </Button>
      )}
    </div>
  );
};

export default WhopWidget;
