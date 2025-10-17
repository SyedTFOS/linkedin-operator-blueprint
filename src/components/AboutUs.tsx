import { Lightbulb, TrendingUp, Users, Rocket, ArrowRight, DollarSign, Briefcase, Sparkles } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto">
        {/* Story Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Your Journey to <span className="text-gradient">Financial Freedom</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From stuck in the 9-5 grind to building your own income stream on LinkedIn. 
            Here's how thousands have transformed their lives.
          </p>
        </div>

        {/* The Journey - Step by Step */}
        <div className="space-y-24">
          {/* Step 1 - The Problem */}
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent hidden md:block" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="p-8 rounded-2xl bg-card border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                      <span className="text-2xl">😔</span>
                    </div>
                    <h3 className="text-2xl font-bold">The Reality</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    You're tired. Tired of trading time for money. Tired of seeing others succeed online 
                    while you're stuck wondering "how do they do it?" You've tried courses, side hustles, 
                    and YouTube gurus... but nothing seems to click.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                  <span className="text-4xl font-bold text-primary relative z-10">1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 - The Discovery */}
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent hidden md:block" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                  <span className="text-4xl font-bold text-primary relative z-10">2</span>
                </div>
              </div>
              <div>
                <div className="p-8 rounded-2xl bg-card border border-border border-glow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">The Discovery</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Then you stumble upon it: LinkedIn. Not the boring job-search platform your parents use, 
                    but a goldmine where regular people are building 6-figure businesses, landing clients, 
                    and creating opportunities you didn't know existed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 - The Problem */}
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent hidden md:block" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="p-8 rounded-2xl bg-card border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-2xl">🤔</span>
                    </div>
                    <h3 className="text-2xl font-bold">The Gap</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    But here's the catch: you don't have time to figure it all out. What to post? When to post? 
                    How to grow followers? How to actually convert connections into dollars? It's overwhelming.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                  <span className="text-4xl font-bold text-primary relative z-10">3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 - The Solution */}
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent hidden md:block" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center relative glow-effect">
                  <Sparkles className="w-10 h-10 text-white animate-pulse" />
                </div>
              </div>
              <div>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">The Solution</h3>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    That's exactly why LinkedIn Operator exists. We handle EVERYTHING for you. 
                    You focus on living your life, we focus on building your LinkedIn empire.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed font-semibold">
                    No more guesswork. No more wasted time. Just results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Who This Is For */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">
              Is This <span className="text-gradient">For You?</span>
            </h3>
            <p className="text-xl text-muted-foreground">
              LinkedIn Operator is built for people ready to take control of their income
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:scale-105">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">9-5 Escapers</h4>
              <p className="text-muted-foreground">
                Ready to break free from the corporate grind and build something that's actually yours. 
                You have skills, you just need a platform to monetize them.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:scale-105">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Aspiring Entrepreneurs</h4>
              <p className="text-muted-foreground">
                You've got the drive, the ideas, and the ambition. What you need is a proven system 
                to attract clients and opportunities without spending 24/7 on social media.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:scale-105">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Side Hustle Seekers</h4>
              <p className="text-muted-foreground">
                Whether you want an extra $2k/month or to eventually replace your salary, 
                you need a reliable way to make money online. LinkedIn is that way.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-lg mb-4">
            <ArrowRight className="w-5 h-5" />
            <span>Your journey starts here</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
