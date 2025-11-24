import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Lock } from "lucide-react";

export const WeeklyFrameworkSection = () => {
  return (
    <div className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              📚 COMPLETE FRAMEWORK
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-12 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Complete <span className="text-gradient">7-Week Operator Framework</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            You're not getting another LinkedIn course. You're getting the complete business operating system that built the most successful LinkedIn agencies online.
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
            <p className="text-xl font-bold text-foreground">
              Here's exactly what's inside:
            </p>
          </div>
        </div>

        {/* Weekly Framework Accordion */}
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {/* WEEK 1 */}
            <AccordionItem value="week-1" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-6 overflow-hidden">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">WEEK 1: FOUNDATIONS</h3>
                    <p className="text-sm text-muted-foreground">Operator Mindset & Business Infrastructure</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-6">
                <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 1: Operator Mindset & Infrastructure</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Warning about the power you're about to acquire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Why 99% of LinkedIn agencies die at $5K/month (avoid their fate)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Operator vs Freelancer mindset (this changes everything)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>BusinessOS & Notion organization setup</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 2: Business & Agency Overview</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Early wins that get you paid fast</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Payment setup for $20K+ months</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>LinkedIn account setup (never get banned)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Tech stack that scales to $50K+/month</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Inside look at multiple 6-figure operations</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 3: Defining and Building Offers</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Market research stealing secrets from successful agencies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Building the actual OFFER (ICP, pricing, packaging)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>The LinkedIn offer formula for C-suite executives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Risk reversal/guarantee frameworks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Pricing strategies that eliminate price objections</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold text-primary uppercase">BONUS</span>
                    </div>
                    <p className="text-sm text-foreground">🔒 <span className="font-bold">[REDACTED]</span> Whale Client Acquisition Method - Too powerful to show publicly</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* WEEK 2 */}
            <AccordionItem value="week-2" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-6 overflow-hidden">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">WEEK 2: AGENCY BRANDING</h3>
                    <p className="text-sm text-muted-foreground">Funnel Creation & Profile Psychology</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-6">
                <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 1: Funnel Creation</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>B2B funnel flow mapping</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Landing page architecture (7-figure+ templates included)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>VSL scripting formula that generated $1M+ in agency sales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Booking pages with pre-qualifying questions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Email sequences that build authority</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 2: Profile Psychology</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>What decision-makers look for in first 3 seconds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Authority positioning vs amateur signals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Examples of profiles that book $50K+ clients</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 3: High-Converting Profile Creation</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Headlines that position you above 'LinkedIn coaches'</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Banner creation psychology (7-figure templates)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>About section trust-building</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Strategic recommendations system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>CTA optimization mastery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* WEEK 3 */}
            <AccordionItem value="week-3" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-6 overflow-hidden">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">WEEK 3: PERSONAL BRANDING</h3>
                    <p className="text-sm text-muted-foreground">Algorithm Mastery & Content Strategy</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-6">
                <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 1: LinkedIn Algorithm Mastery</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Why certain posts get 1M-10M+ views</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Viral pattern recognition for unfair advantages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>🔒 <span className="font-bold">[REDACTED]</span> Algorithm manipulation tactics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Engagement & commenting strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Cross-platform repurposing</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 2: Competitor Analysis</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Who's making money vs who just has followers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>The 3 W's & 1 H of strategic content replication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Viral trend identification</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 3: Content Strategy</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>How to write posts that reach 1M+ views and attract clients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Hook psychology that stops scrolling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Content types for different funnel stages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Trust-building content sequences</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 4: Lead Magnets Blueprint</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Creating quality vs filler lead magnets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Lead magnet types: Notion databases, video masterclasses, automation workflows, 🔒 <span className="font-bold">[REDACTED]</span>, scrolling videos, proof of concept images</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>🔒 <span className="font-bold">[REDACTED - Viral Lead Magnet Formula]</span></span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 5: Personal Branding for Operators</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Positioning as actual authority (not another 'coach')</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>How to attract Fortune 500s with personal brand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Expanding to other platforms</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* WEEK 4 */}
            <AccordionItem value="week-4" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-6 overflow-hidden">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">WEEK 4: LINKEDIN OUTBOUND</h3>
                    <p className="text-sm text-muted-foreground">DM Selling System & Lead Generation</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-6">
                <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 1: DM Selling System</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Scalable framework that converts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>How to send 200+ targeted DMs/day</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>🔒 <span className="font-bold">[REDACTED - High-Ticket DM Architecture]</span></span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 2: DM Psychology</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Getting inside executive mindset</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Age, experience, and authority triggers</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 3: Lead List Building</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Sales Navigator mastery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Competition stealing with advanced tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>🔒 How to use <span className="font-bold">[REDACTED TOOL]</span> to scrape competitors' followers/likes/commenters in 1 CLICK</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 4: Sending Messages</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>3 DM approaches: Straight pitch, Don't Give A F*ck method, Trust-building</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Follow-up frameworks and timeframes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>5 levels of intent outreach strategies</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 5: Systemization & Tracking</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Building DM SOPs for VAs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>🔒 <span className="font-bold">[REDACTED]</span> Reverse engineering at industry-scale</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* WEEK 5 */}
            <AccordionItem value="week-5" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-6 overflow-hidden">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">WEEK 5: SALES MASTERCLASS</h3>
                    <p className="text-sm text-muted-foreground">High-Level Closing & LinkedIn Secrets</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-6">
                <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 1: High-Level Closing</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Pre-call prospect analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Sales call structure for authority positioning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Handling rebuttals without desperation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>7-Figure discovery & closing frameworks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>🔒 <span className="font-bold">[REDACTED - LinkedIn Closing Secrets]</span></span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 2: LinkedIn Sales Secrets</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Different call approaches (audit/inbound/outbound/referral)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Valuing your system as strategic asset</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Building hyper-specific proposals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>🔒 <span className="font-bold">[REDACTED - Executive Manipulation Framework]</span></span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 3: Delivery & Tonality</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Positioning regardless of background (young/experienced/ethnicity/accent)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>High-level conversation & vocabulary</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Asserting dominance when undervalued</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Reading vibes and adapting personality</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 4: Optimizing Close Rates</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Sales tracking systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Call recording and learning from discoveries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Follow-up strategies and show-up rate improvement</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 5: Sales Asset Creation</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>7-Figure Proposal Structure (with 🔒 3 <span className="font-bold">REDACTED</span> sections)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Case study building from prior clients</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* WEEK 6 */}
            <AccordionItem value="week-6" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-6 overflow-hidden">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">WEEK 6: FULFILLMENT SYSTEM</h3>
                    <p className="text-sm text-muted-foreground">Client Delivery & Scaling Operations</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-6">
                <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 1: Fulfillment Overview</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Getting right information from clients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Setting achievable KPIs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Complete LinkedIn fulfillment process</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 2: Profile Branding (For Clients)</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Using brand guidelines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Banner, headline, CTA, about section creation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Endorsements and testimonial setup</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 3: Content Creation (For Clients)</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Lead magnets for clients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Viral content quickly (reposters/boosters)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Beating content competitors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Developing client-specific tonality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Building approval posting systems</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 4: Outbound Sending (For Clients)</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Building Sales Navigator lists</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Competitor analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Hyper-targeted connection requests and DMs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>A/B split testing frameworks</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 5: Client Development</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Effective communication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Understanding client personality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Weekly meeting setup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Asking for payment professionally</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 6: Scaling & Systemization</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Fulfillment system templates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Scaling progression: Yourself → AI → Setter → Ghostwriter → Ops Manager → Team</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Quality assurance and reporting</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold text-primary uppercase">MODULE 7</span>
                    </div>
                    <p className="text-sm text-foreground mb-2">🔒 <span className="font-bold">[REDACTED]</span> Fulfillment Secrets</p>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>→ Building 6-7 figure client relationships</li>
                      <li>→ Framework for increasing monthly payments (never taught online)</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* WEEK 7 */}
            <AccordionItem value="week-7" className="bg-card/50 backdrop-blur-sm border border-primary/50 rounded-2xl px-6 overflow-hidden">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 border-2 border-primary/50 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">7</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">WEEK 7: THE LINKEDIN SECRETS</h3>
                    <p className="text-sm text-primary font-semibold">Advanced Strategies & Competitive Domination</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-6">
                <div className="space-y-4 pl-4 border-l-2 border-primary">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 1: Brand Equity & Attainment</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Building real brand equity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Belief engineering systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>How to brainwash your audience's minds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Authority Positioning: -1 to +1 systematic positioning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Personal brand = company valuation correlation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Everything-Is-A-Sell Framework</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Getting ICPs to impulse book calls</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 2: Multiplication Systems</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Getting affiliates to market your business</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Expanding operations beyond $250K/month</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 3: AI & Automation Mastery</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Custom agents for agency, content, and fulfillment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Systems for creating 30 days of content in 6 hours</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 4: Client Retention Mastery</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Making clients fall in love (0% churn)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Playing with dopamine levels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>🔒 Upsell frameworks <span className="font-bold">NEVER taught online</span></span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 5: Competitive Domination</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Always staying #1</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Never letting competitors surpass you</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Becoming the GO-TO in your niche</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 6: LinkedIn Account Protection</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>NEVER getting banned (ads method, email recovery, 🔒 <span className="font-bold">[REDACTED]</span>, LinkedIn Top Voice method, 🔒 <span className="font-bold">[REDACTED]</span>)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">MODULE 7: Innovation & Trend Creation</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Creating new viral trends</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        <span>Industry disruption strategies</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="w-5 h-5 text-primary" />
                      <span className="text-sm font-bold text-primary uppercase">MODULE 8</span>
                    </div>
                    <p className="text-base font-bold text-foreground">🔒 Mystery Module</p>
                    <p className="text-sm text-muted-foreground mt-1">Too powerful to reveal here. Operators-only access.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
