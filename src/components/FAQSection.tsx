import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know before joining
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-8">
              <AccordionTrigger className="text-lg md:text-xl font-bold hover:no-underline py-6">
                What if I've never run an online business before?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                <p className="mb-4">Even better. You don't have bad habits to unlearn.</p>
                <p className="mb-4">Komail had ZERO online business experience. Closed a $14K deal in his first 3 weeks.</p>
                <p className="mb-4">Vasilije started with zero experience. Now running a $25K/month agency.</p>
                <p className="mb-4">The LinkedIn Operator Framework is a SYSTEM. Not guesswork. Step-by-step, paint-by-numbers.</p>
                <p className="font-bold text-foreground">Your lack of experience is actually an advantage.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-8">
              <AccordionTrigger className="text-lg md:text-xl font-bold hover:no-underline py-6">
                How is this different from other LinkedIn courses?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                <p className="mb-4">Most LinkedIn courses teach you to post 3x a day and pray.</p>
                <p className="mb-4 font-bold text-foreground">We teach you to sign Mastercard.</p>
                <p className="mb-4">This isn't theory from someone with a podcast. This is the actual system that signed Fortune 500s, Forbes founders, and Y Combinator companies.</p>
                <p className="font-bold text-foreground">You learn client acquisition, fulfillment, and scaling - not just "build an audience."</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-8">
              <AccordionTrigger className="text-lg md:text-xl font-bold hover:no-underline py-6">
                Do I need community access after 90 days?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                <p className="mb-4">After your first 90 days FREE, you can continue for $97/month (optional).</p>
                <p className="mb-4">Most operators keep it because:</p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li>→ Weekly coaching calls solve problems in real-time</li>
                  <li>→ Peer collaboration leads to joint ventures</li>
                  <li>→ You're building alongside 500+ other operators</li>
                </ul>
                <p className="font-bold text-foreground">But it's optional. Your lifetime course access never expires.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-8">
              <AccordionTrigger className="text-lg md:text-xl font-bold hover:no-underline py-6">
                What if I can't afford $497 right now?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                <p className="mb-4 font-bold text-foreground">Then you can't afford NOT to invest.</p>
                <p className="mb-4">Math: One client at $5K/month = 10x ROI in month one.</p>
                <p className="mb-4">If you can't find $497 today, where will you be in 6 months without this system? Still broke. Still stuck.</p>
                <p className="mb-4">Or like Ethan: $1K/month → $27K/month in 6 months.</p>
                <p className="font-bold text-foreground">You're not spending $497. You're investing in the system that changes everything.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-8">
              <AccordionTrigger className="text-lg md:text-xl font-bold hover:no-underline py-6">
                Do I need to be on camera or show my face?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                <p className="mb-4">No. LinkedIn is text-based.</p>
                <p className="mb-4">Many successful operators never show their face. They focus on written content, profile optimization, and DM outreach.</p>
                <p className="font-bold text-foreground">Your results come from the system, not your appearance.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-8">
              <AccordionTrigger className="text-lg md:text-xl font-bold hover:no-underline py-6">
                How much time does this require per week?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                <p className="mb-4">10-15 hours/week minimum to see results.</p>
                <p className="mb-4">Breakdown:</p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li>→ 1-2 hours: Content creation (3-5 posts/week)</li>
                  <li>→ 1-2 hours: Outbound DMs (200+ per week)</li>
                  <li>→ 2-3 hours: Sales calls with prospects</li>
                  <li>→ 5-8 hours: Client fulfillment (once you sign clients)</li>
                </ul>
                <p className="font-bold text-foreground">If you can't commit 10-15 hours/week, this isn't for you.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-8">
              <AccordionTrigger className="text-lg md:text-xl font-bold hover:no-underline py-6">
                What industries can I serve?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                <p className="mb-4">Any B2B industry. We provide 8+ industry playbooks:</p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li>→ AI & SaaS companies</li>
                  <li>→ Finance & investment firms</li>
                  <li>→ MedTech & healthcare</li>
                  <li>→ Real estate & property</li>
                  <li>→ B2B services & consulting</li>
                  <li>→ And more...</li>
                </ul>
                <p className="font-bold text-foreground">The system works for any industry with decision-makers on LinkedIn.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-8">
              <AccordionTrigger className="text-lg md:text-xl font-bold hover:no-underline py-6">
                Is the course content updated?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                <p className="mb-4">Yes. You get lifetime access to all 50+ video modules, templates, SOPs, and frameworks.</p>
                <p className="mb-4">As we update and refine the system, you get those updates too.</p>
                <p className="font-bold text-foreground">The 90-day community access is what becomes optional after the first period.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-8">
              <AccordionTrigger className="text-lg md:text-xl font-bold hover:no-underline py-6">
                What's the refund policy?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                <p className="mb-4">90-day money-back guarantee.</p>
                <p className="mb-4">Go through the modules, implement the system, and if you don't land your first client in 90 days - we'll refund you.</p>
                <p className="font-bold text-foreground">We're operators, not scammers. We've proven this system works with Fortune 500s and complete beginners. The only variable is you.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-8">
              <AccordionTrigger className="text-lg md:text-xl font-bold hover:no-underline py-6">
                Can I do this while working a full-time job?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                <p className="mb-4">Yes. Many operators started while working 9-5.</p>
                <p className="mb-4">10-15 hours/week means:</p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li>→ 1-2 hours before work (morning DMs)</li>
                  <li>→ 1-2 hours after work (content creation)</li>
                  <li>→ Weekends for sales calls and fulfillment</li>
                </ul>
                <p className="font-bold text-foreground">Once you sign your first 2-3 clients at $5K/month, you can quit your job.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
