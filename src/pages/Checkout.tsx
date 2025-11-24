import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CheckCircle2, Shield, Clock } from 'lucide-react';
import logoTransparent from "@/assets/logo-transparent-new.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Checkout() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleContinue = () => {
    if (step === 1 && formData.name && formData.email) {
      // Open Fanbasis checkout with the form data
      window.open('https://www.fanbasis.com/agency-checkout/linkedinoperator/pgWKy', '_blank');
      setStep(2);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <img 
            src={logoTransparent} 
            alt="LinkedIn Operator Academy" 
            className="h-8 sm:h-10 cursor-pointer"
            onClick={() => navigate('/agency/academy')}
          />
        </div>
      </header>

      {/* Urgency Bar */}
      <div className="bg-gradient-to-r from-orange-600/20 via-orange-500/20 to-orange-600/20 border-b border-orange-500/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <div>
              <span className="text-white font-bold text-sm sm:text-base">50 SPOTS AT $2400 OFF</span>
              <span className="text-white/70 text-sm ml-2">41 claimed • 9 left</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Clock className="w-4 h-4" />
              <span>November special, price increasing after</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Access To Start Building!
              </h1>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-white/60">Normally the price is:</span>
                  <span className="text-2xl text-white/60 line-through">$3000</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-white font-semibold text-xl">Today's price:</span>
                  <span className="text-4xl font-bold text-white">$600</span>
                  <span className="text-lg text-green-400">(save $2400)</span>
                </div>
              </div>

              <p className="text-white/70 text-sm">
                Prefer paying in 2 installments?{' '}
                <a href="https://www.fanbasis.com/agency-checkout/linkedinoperator/pgWKy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Click here.
                </a>
              </p>
            </div>

            {/* What's Included */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Join & get instant access to:</h3>
              
              <div className="space-y-3">
                {[
                  'The IPGA Masterclass course.',
                  'All content, All templates, All upgrades.',
                  'Our Private IPGA Mastermind community.',
                  'Access To Weekly Q&A Calls with Sander.',
                  'Everything you need to get to $10k+/m.',
                  '2200+ members • 1400+ wins'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-500/5 border border-yellow-600/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-600/20 rounded-full p-3 flex-shrink-0">
                  <Shield className="w-8 h-8 text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">14-DAY MONEY BACK GUARANTEE</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    If you're not completely satisfied within 14 days, simply let us know and we'll refund you in full — no questions asked. We're confident you'll see results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Steps Header */}
              <div className="grid grid-cols-2 bg-gray-100">
                <div className={`py-4 px-6 text-center border-b-4 transition-colors ${
                  step === 1 ? 'border-green-600 bg-white' : 'border-transparent'
                }`}>
                  <div className="text-xs text-gray-500 mb-1">STEP 1</div>
                  <div className="text-sm font-semibold text-gray-900">Your Name & Email</div>
                </div>
                <div className={`py-4 px-6 text-center border-b-4 transition-colors ${
                  step === 2 ? 'border-green-600 bg-white' : 'border-transparent'
                }`}>
                  <div className="text-xs text-gray-500 mb-1">STEP 2</div>
                  <div className="text-sm font-semibold text-gray-900">Finalize & Get Access!</div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                {step === 1 ? (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 mb-2 block">Your Full Name...</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your Full Name..."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-12 text-base"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-gray-700 mb-2 block">Your Email Address...</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your Email Address..."
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 text-base"
                      />
                    </div>

                    <Button
                      onClick={handleContinue}
                      disabled={!formData.name || !formData.email}
                      className="w-full h-14 text-lg bg-green-700 hover:bg-green-800 text-white font-semibold"
                    >
                      Continue To Next Step
                    </Button>

                    <p className="text-center text-sm text-gray-500 flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4" />
                      Secure 256-Bit SSL Checkout Powered by Stripe
                    </p>
                  </div>
                ) : (
                  <div className="text-center space-y-6 py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Checkout opened!</h3>
                      <p className="text-gray-600">
                        Complete your purchase in the new tab to get instant access.
                      </p>
                    </div>
                    <Button
                      onClick={() => window.open('https://www.fanbasis.com/agency-checkout/linkedinoperator/pgWKy', '_blank')}
                      className="bg-green-700 hover:bg-green-800 text-white"
                    >
                      Click here if checkout didn't open
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
