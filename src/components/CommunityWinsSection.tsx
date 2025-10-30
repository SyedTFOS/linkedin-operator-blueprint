import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import robertoLuna from "@/assets/roberto-luna.png";
import craigCecilio from "@/assets/craig-cecilio.png";
import benAlistor from "@/assets/ben-alistor.png";
import jessicaGreen from "@/assets/jessica-green.png";
import samArami from "@/assets/sam-arami-photo.png";
import ethanClouser from "@/assets/ethan-clouser.png";
import walterChung from "@/assets/walter-chung.png";
import komailGillani from "@/assets/komail-gillani.png";
import vasilijeSimic from "@/assets/vasilije-simic.png";
import aryanShah from "@/assets/aryan-shah.png";

export const CommunityWinsSection = () => {
  const testimonials = [
    {
      name: "Roberto H. Luna",
      role: "Founder, Lunivate • Featured in Forbes",
      image: robertoLuna,
      quote: "Within 120 days of implementing their system, I was featured in Forbes, hit 50,000 followers, and generated over $500K in revenue. The content framework generated 15M+ views.",
      results: "Featured in Forbes • 15M+ views • $500K revenue"
    },
    {
      name: "Ethan Clouser",
      role: "$1.2k to $27k in 3 months",
      image: ethanClouser,
      quote: "Running LinkedIn ads part-time, making just $1K/month. We positioned him as a category owner and showed him how to scale with systems. Result: $27K/month in 6 months, exited for a healthy 5-figure deal with 75-80% profit margins.",
      results: "$1.2k to $27k in 3 months • 5-figure exit"
    },
    {
      name: "Craig Cecilio",
      role: "CEO, DiversyFund • $1B+ Raised",
      image: craigCecilio,
      quote: "They don't just manage your LinkedIn—they turn it into a lead generation machine. Our LinkedIn strategy directly contributed to raising $1B+ and our 300% annual growth rate.",
      results: "$1B+ raised • 40K+ investors • 300% growth"
    },
    {
      name: "Walter Chung",
      role: "Failing Business → $15K/Month Agency",
      image: walterChung,
      quote: "Struggling with fulfillment. Joined us 3 months ago. Now running a $15K/month agency with 1M impressions in 90 days built on a brand new account with profitable fulfillment systems in place.",
      results: "$15K/month • 1M impressions • 90 days"
    },
    {
      name: "Sam Arami",
      role: "Founder, Arami AI • 2x Exited Founder",
      image: samArami,
      quote: "LinkedIn Operator helped me build a 7-figure agency in 6 months. From 800 to 7,000 followers in 21 days. 3,000+ waitlist signups. Now serving top AI companies.",
      results: "$40K/month • 15 clients • 7-figure agency"
    },
    {
      name: "Komail Gillani",
      role: "Complete Beginner",
      image: komailGillani,
      quote: "Zero online business experience. Corporate recruiting background. Closed a $14K deal in my first 3 weeks. Now an established coach with authority built from scratch.",
      results: "$14K deal in 3 weeks • Complete beginner"
    },
    {
      name: "Jessica M. Green",
      role: "Founder, Simply Done Resume",
      image: jessicaGreen,
      quote: "They helped me build a $2.5M+ pipeline and close $300K in deals. I went from 'just another resume writer' to THE authority in my niche. Now doing $100K/month on autopilot.",
      results: "$2.5M+ pipeline • $300K closed • $100K/month"
    },
    {
      name: "Vasilije Simic",
      role: "Complete Beginner",
      image: vasilijeSimic,
      quote: "Started with zero experience. Built a $25K/month LinkedIn agency with 20+ active clients and 7,800 followers. Now dominating Agencies & SaaS space.",
      results: "$25K/month • 20+ clients • Zero to hero"
    },
    {
      name: "Ben Alistor",
      role: "Creator Coach • 58K Instagram Following",
      image: benAlistor,
      quote: "I had 58K followers on Instagram but struggled to monetize. Now I get 30-50 qualified leads per month on autopilot. I went from chasing clients to clients chasing me.",
      results: "30-50 leads/month • 7-figure business"
    },
    {
      name: "Aryan Shah",
      role: "Tech Expert • Previously Exited",
      image: aryanShah,
      quote: "Exited a LinkedIn Agency (Bambo). Worked with 50+ agencies and 7-figure creators. Now with 5,500 followers, he's productized his service and is building a LinkedIn AI SaaS.",
      results: "5,500 followers • Productized • LinkedIn AI SaaS"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Live From Our Private Community
            </h2>
            <p className="text-muted-foreground text-lg">
              (btw, this is a fraction of all the wins our members have produced - just a few highlights)
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 shrink-0"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{testimonial.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                      <p className="text-sm font-semibold text-primary">
                        🔥 {testimonial.results}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};