import { useNavigate } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-main.png";
const DoneForYou = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <div className="min-h-screen bg-background">
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
        {!isMobileMenuOpen && <button onClick={() => setIsMobileMenuOpen(true)} className="fixed top-4 right-4 z-[100] bg-primary text-primary-foreground p-3 rounded-full shadow-2xl hover:scale-110 transition-transform" aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>}

        {/* Mobile Sliding Header */}
        <div className={`fixed top-0 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border/50 shadow-xl z-[90] transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="container mx-auto px-6 py-3 relative">
            <div className="flex items-center justify-between">
              <img src={logo} alt="LinkedIn Operator" className="h-8" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-primary-foreground p-2 rounded-full hover:scale-110 transition-transform" aria-label="Close menu">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Book Your Strategy Call With Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Let's discuss how we can build your LinkedIn presence and
            </p>
            <p className="text-xl text-muted-foreground">
              grow your business with our Done-For-You service.
            </p>
          </div>

          {/* Calendar Embed */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg overflow-visible">
            <div style={{width: '100%', height: '100%', overflow: 'scroll'}} id="my-cal-inline-linked-operator-business"></div>
            <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
              (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
              Cal("init", "linked-operator-business", {origin:"https://app.cal.com"});
              Cal.ns["linked-operator-business"]("inline", {
                elementOrSelector:"#my-cal-inline-linked-operator-business",
                config: {"layout":"month_view"},
                calLink: "linkedoperator/linked-operator-business",
              });
              Cal.ns["linked-operator-business"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#ff7800"}},"hideEventTypeDetails":false,"layout":"month_view"});
            `}} />
          </div>
        </div>
      </div>

    </div>;
};
export default DoneForYou;