import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import logoTransparent from "@/assets/logo-transparent.png";

const DoneForYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Close"
      >
        <X className="w-5 h-5 text-foreground" />
      </button>

      <div className="container mx-auto px-4 pt-8">
        <div className="flex justify-center mb-8">
          <img 
            src={logoTransparent} 
            alt="LinkedIn Operator" 
            className="h-16 md:h-20 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DoneForYou;
