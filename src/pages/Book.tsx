import { useNavigate } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-text.png";

const Book = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img 
              src={logo} 
              alt="LinkedIn Operator" 
              className="h-8 cursor-pointer"
              onClick={() => navigate("/")}
            />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => navigate("/")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => navigate("/agency")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Agency
              </button>
              <button onClick={() => navigate("/business")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Business
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col gap-4">
                <button onClick={() => navigate("/")} className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Home
                </button>
                <button onClick={() => navigate("/agency")} className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Agency
                </button>
                <button onClick={() => navigate("/business")} className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Business
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
              APPLICATION
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Book Your Call To Achieve X
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              With Unique Solution
            </p>
            <p className="text-sm text-muted-foreground">
              Find a time that suits you below
            </p>
          </div>

          {/* Calendar Embed */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
            <iframe 
              src="https://os.linkedinoperator.com/widget/booking/BFjTWz9wLiIwfnMKaOYD" 
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
              scrolling="no" 
              id="BFjTWz9wLiIwfnMKaOYD_1761497987766"
              title="Booking Calendar"
            />
          </div>
        </div>
      </div>

      {/* Calendar Script */}
      <script src="https://os.linkedinoperator.com/js/form_embed.js" type="text/javascript"></script>
    </div>
  );
};

export default Book;
