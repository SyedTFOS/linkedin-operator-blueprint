import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import whopLogo from "@/assets/whop-logo-white.png";

const WhopWidget = () => {
  return (
    <a
      href="https://whop.com/linkedin-operator/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="bg-card border-2 border-primary/20 rounded-2xl shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 p-5 max-w-xs backdrop-blur-sm relative">
        {/* Free Course Ribbon */}
        <div className="absolute -left-2 top-6 bg-primary text-primary-foreground px-3 py-1 rounded-r-md shadow-lg text-xs font-bold">
          Free 20+ Hour Course
        </div>
        
        {/* Header with Whop branding */}
        <div className="flex items-center gap-2 mb-3">
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
  );
};

export default WhopWidget;
