import { useNavigate } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-main.png";

const Book = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Navigation */}
      <nav className="hidden md:block border-b border-border/50 backdrop-blur-sm sticky top-0 z-40 bg-background/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img src={logo} alt="LinkedIn Operator" className="h-12 md:h-14 lg:h-16" />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Sliding Header */}
      <div className="md:hidden">
        {/* Mobile Header Toggle Button - Only show when menu is closed */}
        {!isMobileMenuOpen && (
          <button 
            onClick={() => setIsMobileMenuOpen(true)} 
            className="fixed top-4 right-4 z-[100] bg-primary text-primary-foreground p-3 rounded-full shadow-2xl hover:scale-110 transition-transform" 
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}

        {/* Mobile Sliding Header */}
        <div className={`fixed top-0 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border/50 shadow-xl z-[90] transition-transform duration-300 ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="container mx-auto px-6 py-3 relative">
            <div className="flex items-center justify-between">
              <img src={logo} alt="LinkedIn Operator" className="h-8" />
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="bg-primary text-primary-foreground p-2 rounded-full hover:scale-110 transition-transform" 
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
              ✅ Application Approved!
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Book Your Strategy Call With Syed & Freddie
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Let's map out your path to $50K/month and see if
            </p>
            <p className="text-xl text-muted-foreground">
              Secrets is the right fit for you.
            </p>
          </div>

          {/* Calendar Embed */}
          <div className="bg-card border border-border rounded-lg p-0 shadow-lg overflow-hidden">
            <iframe
              src="https://cal.com/linkedoperator/linked-operator-secrets?embed=true"
              style={{ width: "100%", height: "900px", border: "0" }}
              title="LinkedOperator Secrets Strategy Call"
              allow="camera; microphone; autoplay; encrypted-media;"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Book;
