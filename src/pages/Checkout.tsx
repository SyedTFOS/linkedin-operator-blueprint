import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoTransparent from "@/assets/logo-transparent-new.png";

export default function Checkout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Open Whop checkout link immediately
    window.open('https://whop.com/checkout/plan_F61ZZgKOyK4dO?d2c=true', '_blank');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <img 
            src={logoTransparent} 
            alt="LinkedIn Operator" 
            className="h-8 sm:h-10 cursor-pointer"
            onClick={() => navigate('/agency/academy')}
          />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="animate-pulse">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Redirecting to checkout...
            </h1>
            <p className="text-lg text-muted-foreground">
              Opening secure checkout page in a new tab.
            </p>
          </div>
          
          <div className="mt-8">
            <button
              onClick={() => window.open('https://whop.com/checkout/plan_F61ZZgKOyK4dO?d2c=true', '_blank')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Click here if checkout didn't open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
