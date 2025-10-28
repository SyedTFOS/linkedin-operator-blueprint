import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CommunityWinsSection = () => {
  const wins = [
    {
      name: "Jakub",
      message: "Another $4,000 payment team!",
      details: "Back again here with another win. Keep pushing guys and let's change some lives.",
      amount: "+ 4,323.97 USD",
      reactions: "🔥 9  💬 4  ❤️ 1"
    },
    {
      name: "Rasmus",
      message: "I'm speechless, guys... I've been working full-time on my agency for just 10 days and have already signed clients for $8,500! This is insane! 🔥🔥",
      details: "I'm still waiting on the \"go\" from a prospect for a $4,500 deal. If he says yes, I'll have made $13,000 in 10 days... Have 3 new sales calls next week. This is gonna be massive. LINKEDIN OPERATOR IS GOATED. 25% profit share on all of them",
      reactions: "👍 59  🚀 18  ⚡ 5"
    },
    {
      name: "Oliver",
      message: "Client signed the contract with $5000 setup-fee + 25% net-income share today.",
      details: "It's gonna be a banger case!",
      reactions: "👍 26  🔥 14  😊"
    },
    {
      name: "Victor 🇩🇰",
      message: "First client closed!",
      details: "$4,500 setup-fee\n45% profit share",
      reactions: "❤️ 16  🚀 8  😊"
    },
    {
      name: "Victor 🇩🇰",
      message: "Just closed my 3rd client guys! 🔥",
      details: "7,200$ setup fee\n45% profitshare\n\nHe is in the stocks and investment niche and has 19k followers.\n\nKeep pushing guys 💪",
      reactions: "🔥 39  🚀 31  ⚡ 24  🙌 12"
    },
    {
      name: "Gustav",
      message: "7th client closed",
      details: "35% profit share + €5k setup which will be spent on ads to create a higher return.\n\nThis is gonna be one of the biggest cases I'll have. Shits crazy...",
      reactions: "🔥 19  😊"
    },
    {
      name: "Jakub",
      message: "Signed yesterday a fitness influencer with 130K followers for $5.8K + 10% of the revenue.",
      details: "It all happens slowly and then it all happens all at once.\n\nYou are only 5-10 NOs away from your next big payday.\n\nTrust the process.\n\n[Payment: $5,800.00 USD Succeeded ✓]",
      reactions: "🔥 24  ⚡ 4  ❤️ 2"
    },
    {
      name: "Jacob",
      message: "$3.5k/mo retainer client closed 🚀 no %",
      reactions: "🔥 5  😊"
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
            {wins.map((win, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Badge variant="secondary" className="text-xs bg-primary text-primary-foreground">
                        LO
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-2">{win.name}</h3>
                      <p className="text-foreground mb-3">{win.message}</p>
                      {win.details && (
                        <p className="text-sm text-muted-foreground whitespace-pre-line mb-3">
                          {win.details}
                        </p>
                      )}
                      {win.amount && (
                        <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-3">
                          <p className="text-primary font-bold text-lg">{win.amount}</p>
                          <p className="text-xs text-primary/70">💰 Money added</p>
                        </div>
                      )}
                      <p className="text-sm text-muted-foreground">{win.reactions}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-12">
            <div className="bg-card border border-border rounded-2xl p-8 inline-block">
              <h3 className="text-2xl font-bold mb-4">CHECK OUT MORE RESULTS</h3>
              <p className="text-muted-foreground mb-6">
                Over 500+ operators from 50+ countries<br />
                have joined LinkedIn Operator.
              </p>
              <Button size="lg" className="group">
                See All Results
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};