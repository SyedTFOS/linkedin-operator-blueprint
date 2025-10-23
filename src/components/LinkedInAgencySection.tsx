import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X, ArrowRight, MessageCircle, User, FileText, Mail, DollarSign, TrendingUp, Users, Rocket } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LinkedInAgencySection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      emoji: "👋",
      title: "Think of it like this...",
      subtitle: "A simple analogy",
      content: (
        <div className="space-y-6">
          <p className="text-2xl md:text-3xl font-bold text-center">
            You know how some businesses need help getting customers on <span className="text-primary">LinkedIn</span>?
          </p>
          <div className="flex justify-center gap-8 my-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-3 text-4xl">
                🏢
              </div>
              <p className="text-sm text-muted-foreground">Businesses need<br/>customers</p>
            </div>
            <div className="flex items-center text-4xl text-primary">→</div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-4xl">
                💼
              </div>
              <p className="text-sm text-muted-foreground">LinkedIn is where<br/>they find them</p>
            </div>
          </div>
          <p className="text-xl text-center text-muted-foreground">
            A LinkedIn Agency <span className="font-bold text-foreground">helps these businesses</span> get more customers from LinkedIn.
          </p>
        </div>
      )
    },
    {
      id: 1,
      emoji: "🎯",
      title: "What You Actually Do",
      subtitle: "3 simple services",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-center mb-8">You provide 3 services that help businesses win on LinkedIn:</p>
          
          <div className="grid gap-6">
            <Card className="p-6 border-2 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">1. Profile Makeover 🎨</h4>
                  <p className="text-muted-foreground text-lg">
                    Make their LinkedIn profile look professional and attract the right people
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Like giving their online business card a glow-up!
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">2. Create Posts ✍️</h4>
                  <p className="text-muted-foreground text-lg">
                    Write interesting posts that make people want to work with them
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Think of it like being their social media manager, but for business!
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">3. Send Messages 📨</h4>
                  <p className="text-muted-foreground text-lg">
                    Reach out to potential customers and start conversations
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Like making new friends, but for business deals!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 2,
      emoji: "💰",
      title: "How You Get Paid",
      subtitle: "The money part",
      content: (
        <div className="space-y-8">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
            <div className="text-center space-y-4">
              <DollarSign className="w-16 h-16 text-primary mx-auto" />
              <h3 className="text-2xl font-bold">You Charge Monthly</h3>
              <div className="text-5xl font-bold text-primary my-4">
                $3K-$50K
                <span className="text-xl text-muted-foreground">/month</span>
              </div>
              <p className="text-lg text-muted-foreground">
                That's <span className="font-bold text-foreground">per client!</span> Most students have 3-10 clients.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-2">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                What They Get:
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>10-20 sales calls per month</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Professional LinkedIn presence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>More customers & revenue</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 bg-primary/5">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Simple Math:
              </h4>
              <div className="space-y-3">
                <p className="text-base">
                  3 clients × $3,500 = <span className="font-bold text-xl text-primary">$10,500/mo</span>
                </p>
                <p className="text-base">
                  5 clients × $5,000 = <span className="font-bold text-xl text-primary">$25,000/mo</span>
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Just a few clients = full-time income!
                </p>
              </div>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 3,
      emoji: "🚀",
      title: "Why This Is Special",
      subtitle: "Better than other online businesses",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-center">Compare this to starting other online businesses:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-2 border-destructive/30 bg-destructive/5">
              <h4 className="text-xl font-bold mb-6 text-center">Most Online Businesses</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Need followers first</p>
                    <p className="text-sm text-muted-foreground">Build audience for months before earning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Takes 12-24 months</p>
                    <p className="text-sm text-muted-foreground">Long wait before making good money</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Hard to charge high prices</p>
                    <p className="text-sm text-muted-foreground">Competition keeps prices low</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                BETTER! ⭐
              </div>
              <h4 className="text-xl font-bold mb-6 text-center text-primary">LinkedIn Agency</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Get paid immediately</p>
                    <p className="text-sm text-muted-foreground">First client = first paycheck</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Takes 30-60 days</p>
                    <p className="text-sm text-muted-foreground">Get your first client in weeks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Charge $3K-$50K/client</p>
                    <p className="text-sm text-muted-foreground">Premium prices, premium results</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-primary/5 border-2 border-primary/20">
            <p className="text-center text-lg">
              <span className="font-bold text-primary text-xl">Bottom line:</span> You can start earning real money way faster with a LinkedIn agency than almost any other online business.
            </p>
          </Card>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            What Is A <span className="text-primary">LinkedIn Agency?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's break it down super simple...
          </p>
        </div>

        {/* Interactive Stepper */}
        <div className="mb-12">
          {/* Step Navigation */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  activeStep === idx
                    ? 'bg-primary text-primary-foreground scale-110'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <span className="mr-2">{step.emoji}</span>
                <span className="hidden sm:inline">Step {idx + 1}</span>
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-muted rounded-full h-2 mb-8">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Step Content */}
          <div className="min-h-[500px]">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                className={`transition-all duration-500 ${
                  activeStep === idx
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 absolute translate-x-full pointer-events-none'
                }`}
              >
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{step.emoji}</div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.subtitle}</p>
                </div>

                <Card className="p-8 md:p-12 bg-gradient-to-br from-background to-muted/20">
                  {step.content}
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="group"
            >
              <ArrowRight className="mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Previous
            </Button>

            {activeStep < steps.length - 1 ? (
              <Button
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                className="group"
              >
                Next Step
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            ) : (
              <Button className="group bg-primary text-primary-foreground">
                <Rocket className="mr-2 w-4 h-4" />
                Got It! Show Me How
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Watch The Full Explanation (7 minutes)
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/[insert-video-id]"
                title="What Is A LinkedIn Agency"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInAgencySection;

