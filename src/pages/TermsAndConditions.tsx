import { useNavigate } from "react-router-dom";
import logoTransparent from "@/assets/logo-transparent-new.png";

export default function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <img 
            src={logoTransparent} 
            alt="LinkedIn Operator" 
            className="h-8 sm:h-10 cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using LinkedIn Operator services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by these terms, please do not use 
              this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use of Services</h2>
            <p>
              You agree to use our services only for lawful purposes and in accordance with these Terms. You are 
              responsible for maintaining the confidentiality of your account and password and for restricting 
              access to your computer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services, including but not limited to text, graphics, 
              logos, and software, are the exclusive property of LinkedIn Operator and are protected by copyright, 
              trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Content</h2>
            <p>
              You retain ownership of any content you submit to our services. By submitting content, you grant us 
              a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content in 
              connection with our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment and Refunds</h2>
            <p>
              Payment terms are specified at the time of purchase. All sales are final unless otherwise stated. 
              Refund requests will be evaluated on a case-by-case basis in accordance with our refund policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
            <p>
              LinkedIn Operator shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages resulting from your use or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your account and access to our services at our sole 
              discretion, without notice, for conduct that we believe violates these Terms or is harmful to 
              other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material changes. 
              Your continued use of the service after such modifications constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to 
              its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us through our website.
            </p>
          </section>

          <p className="text-sm mt-8">Last Updated: January 2025</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 LinkedIn Operator</p>
            <div className="flex gap-6">
              <button onClick={() => navigate('/terms')} className="hover:text-foreground transition-colors">
                Terms & Conditions
              </button>
              <button onClick={() => navigate('/privacy')} className="hover:text-foreground transition-colors">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
