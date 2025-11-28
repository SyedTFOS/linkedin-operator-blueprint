import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X, ArrowRight, User, FileText, Mail, DollarSign, TrendingUp, Users, Rocket, Building2, Briefcase, Target, Zap, Award, Play } from "lucide-react";
const LinkedInAgencySection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [{
    id: 0,
    icon: Play,
    title: "Watch The Full Explanation",
    subtitle: "7-minute deep dive",
    content: <div className="space-y-6 md:space-y-8">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-3 md:mb-4 px-2">
              See the complete system explained in detail
            </p>
            <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap px-2">
              <div className="flex items-center gap-1.5 md:gap-2 bg-muted px-3 py-1.5 md:px-4 md:py-2 rounded-lg">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-xs md:text-sm font-medium">Real examples</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-muted px-3 py-1.5 md:px-4 md:py-2 rounded-lg">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-xs md:text-sm font-medium">Client case studies</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-muted px-3 py-1.5 md:px-4 md:py-2 rounded-lg">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-xs md:text-sm font-medium">Step-by-step breakdown</span>
              </div>
            </div>
          </div>

          <Card className="p-3 md:p-4 bg-gradient-to-br from-background to-muted/20 border-2 border-primary/20 shadow-xl">
            <div className="relative w-full rounded-lg md:rounded-xl overflow-hidden shadow-2xl" style={{
          paddingBottom: '56.25%'
        }}>
              <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/AVkV4OLi2vk" title="The High Ticket Agency Model for 2026" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </Card>
        </div>
  }, {
    id: 1,
    icon: Target,
    title: "Think of it like this...",
    subtitle: "A simple analogy",
    content: <div className="space-y-6 md:space-y-8">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center leading-relaxed px-2">
            You know how some businesses need help getting customers on <span className="text-primary">LinkedIn</span>?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 my-8 md:my-12">
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-muted to-muted/50 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                <Building2 className="w-10 h-10 md:w-12 md:h-12 text-foreground" />
              </div>
              <p className="text-sm md:text-base font-medium text-muted-foreground">Businesses need<br />customers</p>
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-primary rotate-90 sm:rotate-0" />
            </div>
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg border border-primary/20">
                <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-primary" />
              </div>
              <p className="text-sm md:text-base font-medium text-muted-foreground">LinkedIn is where<br />they find them</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl md:rounded-2xl p-6 md:p-8 border border-primary/20">
            <p className="text-lg md:text-xl text-center text-foreground font-medium leading-relaxed">
              A LinkedIn Agency <span className="font-bold text-primary">helps these businesses</span> get more customers from LinkedIn.
            </p>
          </div>
        </div>
  }, {
    id: 2,
    icon: Zap,
    title: "What You Actually Do",
    subtitle: "3 simple services",
    content: <div className="space-y-6 md:space-y-8">
          <p className="text-lg md:text-xl lg:text-2xl text-center font-semibold mb-8 md:mb-12 px-2">You provide 3 services that help businesses win on LinkedIn:</p>
          
          <div className="grid gap-4 md:gap-6">
            <Card className="group p-6 md:p-8 border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-background to-muted/20">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <User className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <span className="text-xs md:text-sm font-bold text-primary bg-primary/10 px-2 md:px-3 py-1 rounded-full">SERVICE 1</span>
                  </div>
                  <h4 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">Profile Optimization</h4>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Transform their LinkedIn profile into a professional, high-converting presence that attracts ideal clients
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-3 italic">
                    Position them as the go-to expert in their industry
                  </p>
                </div>
              </div>
            </Card>

            <Card className="group p-6 md:p-8 border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-background to-muted/20">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <span className="text-xs md:text-sm font-bold text-primary bg-primary/10 px-2 md:px-3 py-1 rounded-full">SERVICE 2</span>
                  </div>
                  <h4 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">Content Creation</h4>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Create engaging, strategic posts that build authority and attract their target audience
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-3 italic">
                    Turn them into a thought leader their clients want to work with
                  </p>
                </div>
              </div>
            </Card>

            <Card className="group p-6 md:p-8 border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-background to-muted/20">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <span className="text-xs md:text-sm font-bold text-primary bg-primary/10 px-2 md:px-3 py-1 rounded-full">SERVICE 3</span>
                  </div>
                  <h4 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">LinkedIn Outreach</h4>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Send personalized messages to connect with decision-makers and book sales calls
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-3 italic">
                    Fill their calendar with qualified leads ready to buy
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
  }, {
    id: 3,
    icon: DollarSign,
    title: "How You Get Paid",
    subtitle: "The money part",
    content: <div className="space-y-6 md:space-y-8">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/30 shadow-xl">
            <div className="text-center space-y-4 md:space-y-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <DollarSign className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">You Charge Monthly Retainers</h3>
              <div className="space-y-2">
                <div className="text-4xl md:text-6xl font-bold text-primary">
                  $3K-$50K
                </div>
                <p className="text-lg md:text-2xl text-muted-foreground">/month per client</p>
              </div>
              <div className="bg-background/80 rounded-xl p-4 md:p-6 border border-primary/20">
                <p className="text-base md:text-lg text-foreground font-medium">
                  Most students maintain <span className="font-bold text-primary">3-10 active clients</span>
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Card className="p-6 md:p-8 border-2 border-border hover:border-primary/30 transition-all bg-gradient-to-br from-background to-muted/10">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <h4 className="text-lg md:text-xl font-bold">Client Results:</h4>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  </div>
                  <span className="text-sm md:text-base">10-20 qualified sales calls monthly</span>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  </div>
                  <span className="text-sm md:text-base">Professional LinkedIn presence</span>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  </div>
                  <span className="text-sm md:text-base">Consistent new customer pipeline</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-primary">Your Income:</h4>
              </div>
              <div className="space-y-4 md:space-y-5">
                <div className="bg-background/80 rounded-lg p-3 md:p-4 border border-primary/20">
                  <p className="text-sm md:text-base text-muted-foreground mb-1">3 clients × $3,500</p>
                  <p className="font-bold text-xl md:text-2xl text-primary">$10,500/month</p>
                </div>
                <div className="bg-background/80 rounded-lg p-3 md:p-4 border border-primary/20">
                  <p className="text-sm md:text-base text-muted-foreground mb-1">5 clients × $5,000</p>
                  <p className="font-bold text-xl md:text-2xl text-primary">$25,000/month</p>
                </div>
                <p className="text-xs md:text-sm text-center text-muted-foreground pt-2 italic">
                  Just a few clients = full-time income
                </p>
              </div>
            </Card>
          </div>
        </div>
  }, {
    id: 4,
    icon: Award,
    title: "Why This Is Special",
    subtitle: "Better than other online businesses",
    content: <div className="space-y-6 md:space-y-8">
          <p className="text-lg md:text-xl lg:text-2xl text-center font-semibold mb-8 md:mb-12 px-2">Compare this to starting other online businesses:</p>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="p-6 md:p-8 border-2 border-destructive/30 bg-gradient-to-br from-destructive/5 to-background relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-destructive/30"></div>
              <h4 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Most Online Businesses</h4>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 md:w-5 md:h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg mb-1">Need followers first</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Build audience for months before earning anything</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 md:w-5 md:h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg mb-1">Takes 12-24 months</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Long wait before making substantial income</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 md:w-5 md:h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg mb-1">Hard to charge premium</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Heavy competition keeps prices low</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 border-2 border-primary/50 bg-gradient-to-br from-primary/10 via-primary/5 to-background relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50"></div>
              <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-primary text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg flex items-center gap-1 md:gap-2">
                <Award className="w-3 h-3 md:w-4 md:h-4" />
                SUPERIOR
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center text-primary">LinkedIn Agency</h4>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg mb-1">Get paid immediately</p>
                    <p className="text-xs md:text-sm text-muted-foreground">First client = first paycheck, no waiting</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg mb-1">Takes 30-90 days</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Land your first client within weeks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg mb-1">Charge $3K-$50K/client</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Premium pricing for premium results</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 md:p-10 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/30 shadow-lg">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
              <Rocket className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              <span className="font-bold text-primary text-xl md:text-2xl">Bottom Line</span>
            </div>
            <p className="text-center text-lg md:text-xl leading-relaxed px-2">
              You can start earning <span className="font-bold text-primary">real money way faster</span> with a LinkedIn agency than almost any other online business model.
            </p>
          </Card>
        </div>
  }];
  return <section className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Main Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text leading-tight">
            What Is A <span className="text-primary">LinkedIn Agency?</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium">
            Let's break it down super simple...
          </p>
        </div>

        {/* Interactive Stepper */}
        <div className="mb-8 md:mb-12">
          {/* Step Navigation */}
          <div className="flex justify-center gap-2 md:gap-3 mb-6 md:mb-10 flex-wrap px-2">
            {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return <button key={step.id} onClick={() => setActiveStep(idx)} className={`group px-3 py-2 md:px-6 md:py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 md:gap-3 shadow-md ${activeStep === idx ? 'bg-primary text-primary-foreground scale-105 shadow-lg' : 'bg-background border-2 border-border hover:border-primary/50 hover:shadow-lg'}`}>
                  <IconComponent className={`w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110 ${activeStep === idx ? '' : 'text-primary'}`} />
                  <span className="hidden sm:inline text-sm md:text-base">Step {idx + 1}</span>
                </button>;
          })}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-muted/50 rounded-full h-2 md:h-3 mb-8 md:mb-12 overflow-hidden shadow-inner">
            <div className="bg-gradient-to-r from-primary to-primary/80 h-2 md:h-3 rounded-full transition-all duration-500 shadow-lg" style={{
            width: `${(activeStep + 1) / steps.length * 100}%`
          }} />
          </div>

          {/* Step Content */}
          <div className="min-h-[500px] md:min-h-[600px] relative">
            {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return <div key={step.id} className={`transition-all duration-500 ${activeStep === idx ? 'opacity-100 translate-x-0 relative' : 'opacity-0 absolute translate-x-full pointer-events-none'}`}>
                  <div className="text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-xl mb-4 md:mb-6">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 px-4">{step.title}</h3>
                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-medium px-4">{step.subtitle}</p>
                  </div>

                  <Card className="p-6 md:p-10 lg:p-12 bg-gradient-to-br from-background via-background to-muted/20 border-2 shadow-xl">
                    {step.content}
                  </Card>
                </div>;
          })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 md:mt-12 gap-2 md:gap-4">
            <Button variant="outline" size="default" onClick={() => setActiveStep(Math.max(0, activeStep - 1))} disabled={activeStep === 0} className="group border-2 disabled:opacity-50 text-sm md:text-base px-3 md:px-4">
              <ArrowRight className="mr-1 md:mr-2 w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </Button>

            {activeStep < steps.length - 1 ? <Button size="default" onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))} className="group shadow-lg text-sm md:text-base px-3 md:px-4">
                <span className="hidden sm:inline">Next Step</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="ml-1 md:ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button> : <Button size="default" className="group bg-gradient-to-r from-primary to-primary/80 shadow-lg text-sm md:text-base px-3 md:px-4">
                <Rocket className="mr-1 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden md:inline">Got It! Show Me How</span>
                <span className="md:hidden">Got It!</span>
                <ArrowRight className="ml-1 md:ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>}
          </div>
        </div>
      </div>
    </section>;
};
export default LinkedInAgencySection;
