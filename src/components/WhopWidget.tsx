import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhopWidget = () => {
  return (
    <a
      href="https://whop.com/linkedin-operator/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="bg-card border-2 border-primary/20 rounded-2xl shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 p-5 max-w-xs backdrop-blur-sm">
        {/* Header with Whop branding */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">W</span>
          </div>
          <span className="text-sm font-semibold text-muted-foreground">Whop Community</span>
        </div>
        
        {/* Main message */}
        <p className="text-foreground font-medium mb-4 leading-snug">
          Join <span className="text-primary font-bold">500 others</span> starting a LinkedIn agency on Whop
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
