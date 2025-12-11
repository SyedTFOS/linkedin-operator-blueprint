import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import komailGillani from "@/assets/komail-gillani.png";
import vasilijeSimic from "@/assets/vasilije-simic.png";
import ethanClouser from "@/assets/ethan-clouser.png";
import walterChung from "@/assets/walter-chung.png";
import samBeck from "@/assets/sam-beck.png";
import aryanShah from "@/assets/aryan-shah.png";
import robertoLuna from "@/assets/roberto-luna.png";
import rubaiyatHossain from "@/assets/rubaiyat-hossain.png";
import craigCecilio from "@/assets/craig-cecilio.png";
import jessicaGreen from "@/assets/jessica-green.png";
import benAlistor from "@/assets/ben-alistor.png";
import lianLim from "@/assets/lian-lim.png";

export const OperatorProofSection = () => {
  const [activeTab, setActiveTab] = useState("beginners");

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Headline */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            The Operators Who Proved The System Works
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            After we signed Mastercard and Forbes founders ourselves, we asked: <span className="text-foreground font-bold">Can regular people replicate this?</span>
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mt-4">
            Here's what happened when we took beginners, struggling agency owners, and industry experts through the system:
          </p>
        </div>

        {/* Tabbed Proof Sections */}
        <div className="max-w-6xl mx-auto mb-20">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-card/50 backdrop-blur-sm p-2 rounded-2xl border border-border/50">
              <TabsTrigger value="beginners" className="text-base md:text-lg font-semibold py-4 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Complete Beginners
              </TabsTrigger>
              <TabsTrigger value="agency" className="text-base md:text-lg font-semibold py-4 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Ex-Agency Owners
              </TabsTrigger>
              <TabsTrigger value="experts" className="text-base md:text-lg font-semibold py-4 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Industry Experts
              </TabsTrigger>
            </TabsList>

            {/* TAB 1: Complete Beginners */}
            <TabsContent value="beginners" className="space-y-8">
              <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <img 
                    src={komailGillani} 
                    alt="Komail Gillani"
                    className="w-24 h-24 rounded-full object-cover border-2 border-primary/30 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Komail Gillani</h3>
                    <p className="text-muted-foreground mb-4 italic">WORTHLESS Audience - Zero Experience</p>
                    <div className="space-y-3 text-lg">
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span>Zero online business experience</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span className="font-bold">Closed $14K deal in first 3 weeks</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span>Now established coach inside LIOP</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <img 
                    src={vasilijeSimic} 
                    alt="Vasilije Simic"
                    className="w-24 h-24 rounded-full object-cover border-2 border-primary/30 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Vasilije Simic</h3>
                    <p className="text-muted-foreground mb-4 italic">WORTHLESS Audience - Zero Experience</p>
                    <div className="space-y-3 text-lg">
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span>Zero agency experience</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span className="font-bold">$25K/month agency with 20+ clients</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span>7,800+ followers built from scratch</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span>Guarantees booked meetings in 90 days</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* TAB 2: Ex-Agency Owners */}
            <TabsContent value="agency" className="space-y-8">
              <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <img 
                    src={ethanClouser} 
                    alt="Ethan Clouser"
                    className="w-24 h-24 rounded-full object-cover border-2 border-primary/30 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Ethan Clouser</h3>
                    <p className="text-muted-foreground mb-4 italic">HELPLESS Audience - Failing Business</p>
                    <div className="space-y-3 text-lg">
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span>Started at $1K/month</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span className="font-bold">$10K first month after joining</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span className="font-bold">$27K/month at 6 months</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span>Exited for healthy 5-figure deal</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span>75-80% profit margins</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <img 
                    src={walterChung} 
                    alt="Walter Chung"
                    className="w-24 h-24 rounded-full object-cover border-2 border-primary/30 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Walter Chung</h3>
                    <p className="text-muted-foreground mb-4 italic">HELPLESS Audience - Failing Business</p>
                    <div className="space-y-3 text-lg">
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span>Struggling with failed business model</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span className="font-bold">$15K/month LinkedIn agency</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span>1M+ impressions in 90 days on brand new account</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <img 
                    src={samBeck} 
                    alt="Sam Beck"
                    className="w-24 h-24 rounded-full object-cover border-2 border-primary/30 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Sam Beck</h3>
                    <p className="text-muted-foreground mb-4 italic">HELPLESS Audience - Transitioning Business</p>
                    <div className="space-y-3 text-lg">
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span>Pivoted from traditional agency model</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span className="font-bold">Built successful LinkedIn agency</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span>Now serving premium enterprise clients</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* TAB 3: Industry Experts */}
            <TabsContent value="experts" className="space-y-8">
              <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <img 
                    src={aryanShah} 
                    alt="Aryan Shah"
                    className="w-24 h-24 rounded-full object-cover border-2 border-primary/30 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Aryan Shah</h3>
                    <p className="text-muted-foreground mb-4 italic">HELPLESS Audience - Industry Expert</p>
                    <div className="space-y-3 text-lg">
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span>Previously exited LIA for multi 5-figures</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span>Worked with 50+ agencies before joining</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span>5,500+ followers, productized service model</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span>Building AI LinkedIn companion</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span className="font-bold">In talks with investors</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Whale Client Results */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Personal Client Portfolio
            </h3>
            <p className="text-xl text-muted-foreground">
              The companies we personally serve using this exact system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Client 1 */}
            <Card className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={robertoLuna} 
                  alt="Roberto H. Luna"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-bold text-lg">Roberto H. Luna</h4>
                  <p className="text-sm text-muted-foreground">Lunivate</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p>✓ Featured in Forbes</p>
                <p>✓ 15M+ LinkedIn views</p>
                <p className="font-bold text-primary">$500K revenue in 120 days</p>
              </div>
            </Card>

            {/* Client 2 */}
            <Card className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={rubaiyatHossain} 
                  alt="Rubaiyat Hossain"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-bold text-lg">Rubaiyat Hossain</h4>
                  <p className="text-sm text-muted-foreground">MarkaPolo AI</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p>✓ Forbes 30 Under 30</p>
                <p className="font-bold text-primary">$7.7M ARR</p>
                <p>✓ Y Combinator backed</p>
              </div>
            </Card>

            {/* Client 3 */}
            <Card className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={craigCecilio} 
                  alt="Craig Cecilio"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-bold text-lg">Craig Cecilio</h4>
                  <p className="text-sm text-muted-foreground">DiversyFund</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-bold text-primary">$1B+ raised</p>
                <p>✓ 40K+ investors</p>
                <p>✓ Real estate disruption</p>
              </div>
            </Card>

            {/* Client 4 */}
            <Card className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={jessicaGreen} 
                  alt="Jessica Green"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-bold text-lg">Jessica Green</h4>
                  <p className="text-sm text-muted-foreground">Simply Done Resume</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p>✓ $2.5M+ pipeline added</p>
                <p className="font-bold text-primary">$100K/month on autopilot</p>
              </div>
            </Card>

            {/* Client 5 */}
            <Card className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={benAlistor} 
                  alt="Ben Alistor"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-bold text-lg">Ben Alistor</h4>
                  <p className="text-sm text-muted-foreground">Creator Coach</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-bold text-primary">7-figure creator coaching</p>
                <p>✓ All via LinkedIn</p>
                <p>✓ Premium positioning</p>
              </div>
            </Card>

            {/* Client 6 */}
            <Card className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={lianLim} 
                  alt="Lian Lim"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-bold text-lg">Lian Lim</h4>
                  <p className="text-sm text-muted-foreground">Dashboard Lim</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-bold text-primary">$300K+ pipeline added</p>
                <p>✓ B2B SaaS positioning</p>
                <p>✓ Enterprise clients</p>
              </div>
            </Card>
          </div>

          {/* Bottom Stats */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">100M+</p>
                <p className="text-lg text-muted-foreground">LinkedIn Views Generated</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">$15M+</p>
                <p className="text-lg text-muted-foreground">Revenue Generated For Clients</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</p>
                <p className="text-lg text-muted-foreground">Lifetime Partnerships Secured</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
