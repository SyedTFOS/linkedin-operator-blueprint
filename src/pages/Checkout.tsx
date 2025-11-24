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
              <span className="text-white font-bold text-sm sm:text-base">ONLY 9 SPOTS REMAINING</span>
            </div>
            <div className="text-white/90 text-sm">
              <span>Price increases after 9 spots are filled</span>
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
                Start Your LinkedIn Agency
              </h1>
              
              {/* Limited Time Offer Badge */}
              <div className="inline-block bg-orange-600/20 border border-orange-500/50 rounded-lg px-4 py-2 mb-6">
                <p className="text-orange-400 font-bold text-sm">LIMITED TIME OFFER</p>
              </div>

              <div className="space-y-3 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  GET FULL ACCESS FOR $497
                </h2>
                <div className="flex items-center gap-3">
                  <span className="text-3xl text-white/60 line-through">$2,497</span>
                  <span className="text-xl text-green-400 font-semibold">Save $2,000!</span>
                </div>
              </div>

              <div className="bg-red-600/20 border border-red-500/50 rounded-lg px-4 py-3 mb-6">
                <p className="text-red-400 font-bold text-center">Only 9 Spots Left</p>
              </div>
            </div>

            {/* What's Included */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Get Instant Access:</h3>
              
              <div className="space-y-3">
                {[
                  'Lifetime Access to the complete LinkedIn Agency Masterclass',
                  'All course materials, templates, and future updates (Lifetime)',
                  'Full access to our global community',
                  'Everything needed to build a $20k+/month LinkedIn Agency',
                  '14-Day Money-Back Guarantee - No questions asked',
                  '30 days of weekly Q&A coaching calls (Included FREE)',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-white/60 text-sm mt-4 pl-8">
                Then $97/month to continue • Cancel anytime
              </p>
            </div>

            {/* Money Back Guarantee */}
            <div className="bg-gradient-to-br from-green-600/10 to-green-500/5 border border-green-600/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-600/20 rounded-full p-3 flex-shrink-0">
                  <Shield className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">14-Day Money-Back Guarantee</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    No questions asked
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
