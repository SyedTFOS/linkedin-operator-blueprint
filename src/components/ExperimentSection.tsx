import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, HelpCircle } from "lucide-react";
import komailGillani from "@/assets/komail-gillani.png";
import vasilijeSimic from "@/assets/vasilije-simic.png";
import ethanClouser from "@/assets/ethan-clouser.png";
import walterChung from "@/assets/walter-chung.png";
import samArami from "@/assets/sam-arami-photo.png";
import aryanShah from "@/assets/aryan-shah.png";

const ExperimentSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6 border-primary/30 bg-primary/5 text-primary px-6 py-2 text-sm font-semibold">
            REAL STUDENTS, REAL RESULTS
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Real People, Real Results
          </h2>
          
          <p className="text-xl text-muted-foreground italic mb-8">
            "This sounds great in theory, but does it actually work in the real world?"
          </p>
        </div>

        <Tabs defaultValue="beginners" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-16 h-auto p-2 bg-card border border-border">
            <TabsTrigger 
              value="beginners" 
              className="text-base py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Beginners
            </TabsTrigger>
            <TabsTrigger 
              value="agency"
              className="text-base py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Ex-Agency Owners
            </TabsTrigger>
            <TabsTrigger 
              value="experts"
              className="text-base py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Industry Experts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="beginners" className="space-y-8 animate-fade-in">
            {/* Komail Gillani */}
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 hover:border-primary/50 transition-all hover:shadow-xl group">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={komailGillani} 
                      alt="Komail Gillani" 
                      className="w-32 h-32 rounded-2xl object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-full p-2">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Komail Gillani</h3>
                    <p className="text-primary font-semibold">Complete Beginner</p>
                  </div>
                  
                  <div className="border-l-4 border-primary/30 pl-6 py-2">
                    <p className="font-bold text-sm text-muted-foreground uppercase mb-2">The Situation:</p>
                    <p className="text-lg text-foreground">
                      Zero online business experience. Corporate recruiting background. Came to us 4 months ago.
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-bold text-sm text-muted-foreground uppercase mb-4">The Results:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">$14K deal closed in first 3 weeks</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">Now an established coach inside LIOP</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">Positioned in corporate recruiting niche</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">Built authority from scratch</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vasilije Simic */}
            <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-3xl p-8 md:p-12 hover:border-primary/50 transition-all hover:shadow-xl group">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={vasilijeSimic} 
                      alt="Vasilije Simic" 
                      className="w-32 h-32 rounded-2xl object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-full p-2">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Vasilije Simic</h3>
                    <p className="text-primary font-semibold">Complete Beginner</p>
                  </div>
                  
                  <div>
                    <p className="font-bold text-sm text-muted-foreground uppercase mb-4">The Results:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-semibold">$25K/month LinkedIn agency built</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">7,800 followers</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">20+ active clients</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">20+ LinkedIn endorsements</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">Dominating Agencies & SaaS space</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">Guarantees booked meetings in 60 days</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-xl">
                    <p className="text-lg font-medium italic text-foreground">
                      "Started with zero experience. Now I'm the go-to for agencies and SaaS companies."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Turn CTA Card */}
            <div className="bg-gradient-to-br from-primary to-primary/80 border-2 border-primary rounded-2xl p-8 text-center hover:shadow-xl transition-all group">
              <div className="max-w-sm mx-auto space-y-4">
                <div className="relative inline-block">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto border-2 border-white/30 group-hover:scale-110 transition-transform">
                    <HelpCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-white/90 text-xs font-semibold tracking-wide uppercase">
                    Next Success Story
                  </p>
                  <h3 className="text-3xl font-bold text-white">
                    You
                  </h3>
                  <p className="text-xl font-bold text-white">
                    Your Turn
                  </p>
                  <p className="text-white/90 text-sm">
                    to write your story
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-3 group-hover:scale-105 transition-transform"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Start Your Journey
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="agency" className="space-y-8 animate-fade-in">
            {/* Ethan Clouser */}
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 hover:border-primary/50 transition-all hover:shadow-xl group">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={ethanClouser} 
                      alt="Ethan Clouser" 
                      className="w-32 h-32 rounded-2xl object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-full p-2">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Ethan Clouser</h3>
                    <p className="text-primary font-semibold">$1.2k to $27k in 3 months</p>
                  </div>
                  
                  <div className="border-l-4 border-primary/30 pl-6 py-2 bg-primary/5 rounded-r-xl">
                    <p className="text-lg text-foreground">
                      Running LinkedIn ads part-time, making just $1K/month. We positioned him as a category owner and showed him how to scale with systems. Result: $27K/month in 6 months, exited for a healthy 5-figure deal with 75-80% profit margins.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Walter Chung */}
            <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-3xl p-8 md:p-12 hover:border-primary/50 transition-all hover:shadow-xl group">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={walterChung} 
                      alt="Walter Chung" 
                      className="w-32 h-32 rounded-2xl object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-full p-2">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Walter Chung</h3>
                    <p className="text-primary font-semibold">Failing Business → $15K/Month Agency</p>
                  </div>
                  
                  <div className="border-l-4 border-primary/30 pl-6 py-2 bg-primary/5 rounded-r-xl">
                    <p className="text-lg text-foreground">
                      Struggling with fulfillment. Joined us 3 months ago. Now running a $15K/month agency with 1M impressions in 90 days built on a brand new account with profitable fulfillment systems in place.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Turn CTA Card */}
            <div className="bg-gradient-to-br from-primary to-primary/80 border-2 border-primary rounded-2xl p-8 text-center hover:shadow-xl transition-all group">
              <div className="max-w-sm mx-auto space-y-4">
                <div className="relative inline-block">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto border-2 border-white/30 group-hover:scale-110 transition-transform">
                    <HelpCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-white/90 text-xs font-semibold tracking-wide uppercase">
                    Next Success Story
                  </p>
                  <h3 className="text-3xl font-bold text-white">
                    You
                  </h3>
                  <p className="text-xl font-bold text-white">
                    Your Turn
                  </p>
                  <p className="text-white/90 text-sm">
                    to write your story
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-3 group-hover:scale-105 transition-transform"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Start Your Journey
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="experts" className="space-y-8 animate-fade-in">
            {/* Sam Arami */}
            <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-3xl p-8 md:p-12 hover:border-primary/50 transition-all hover:shadow-xl group">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={samArami} 
                      alt="Sam Arami" 
                      className="w-32 h-32 rounded-2xl object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-full p-2">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Sam Arami</h3>
                    <p className="text-primary font-semibold">Industry Expert (AI) • 2x Exited Founder</p>
                  </div>
                  
                  <div className="border-l-4 border-primary/30 pl-6 py-2">
                    <p className="font-bold text-sm text-muted-foreground uppercase mb-2">The Background:</p>
                    <p className="text-lg text-foreground">
                      2x exited founder. Knew AI inside and out. Wanted to build a LinkedIn business.
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-bold text-sm text-muted-foreground uppercase mb-4">The Results:</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                        <span className="text-2xl">💰</span>
                        <div>
                          <p className="font-bold text-primary text-2xl">$40K/month in 6 months</p>
                          <p className="text-sm text-muted-foreground">15 active clients</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                          <span className="text-xl">💰</span>
                          <span className="text-foreground">Built 7-figure agency</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                          <span className="text-xl">💰</span>
                          <span className="text-foreground">Dominates AI Agency niche</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <span className="text-xl">💰</span>
                        <span className="text-foreground">Now provides content services for top AI companies</span>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href="https://www.linkedin.com/in/sam-arami/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold group/link"
                  >
                    View Full LinkedIn Profile
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Aryan Shah */}
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 hover:border-primary/50 transition-all hover:shadow-xl group">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={aryanShah} 
                      alt="Aryan Shah" 
                      className="w-32 h-32 rounded-2xl object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-full p-2">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Aryan Shah</h3>
                    <p className="text-primary font-semibold">Industry Expert (Tech) • Previously Exited LIA</p>
                  </div>
                  
                  <div className="border-l-4 border-primary/30 pl-6 py-2 bg-primary/5 rounded-r-xl">
                    <p className="text-lg text-foreground">
                      Exited a LinkedIn Agency (Bambo). Worked with 50+ agencies and 7-figure creators. Now with 5,500 followers, he's productized his service and is building a LinkedIn AI SaaS.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Turn CTA Card */}
            <div className="bg-gradient-to-br from-primary to-primary/80 border-2 border-primary rounded-2xl p-8 text-center hover:shadow-xl transition-all group">
              <div className="max-w-sm mx-auto space-y-4">
                <div className="relative inline-block">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto border-2 border-white/30 group-hover:scale-110 transition-transform">
                    <HelpCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-white/90 text-xs font-semibold tracking-wide uppercase">
                    Next Success Story
                  </p>
                  <h3 className="text-3xl font-bold text-white">
                    You
                  </h3>
                  <p className="text-xl font-bold text-white">
                    Your Turn
                  </p>
                  <p className="text-white/90 text-sm">
                    to write your story
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-3 group-hover:scale-105 transition-transform"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Start Your Journey
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperimentSection;