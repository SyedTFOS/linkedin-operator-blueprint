import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentCard from "./StudentCard";
import aryanShahPhoto from "@/assets/aryan-shah.png";
import vasilijeSimicPhoto from "@/assets/vasilije-simic.png";
import komailGillaniPhoto from "@/assets/komail-gillani.png";

const ExperimentSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <span className="text-sm font-medium">V The Experiment</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center leading-tight">
          Then We Proved It Wasn't Luck
        </h2>

        {/* Subheadline */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            After landing Mastercard and Forbes-featured founders ourselves, we asked:
          </p>
          
          <p className="text-xl md:text-2xl text-foreground font-medium italic leading-relaxed">
            "Can regular people replicate this?"
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            So we took agency owners, first-time founders, and industry experts—people with zero LinkedIn presence—and guided them through the exact same system.
          </p>
          
          <p className="text-lg md:text-xl font-bold text-foreground pt-4">
            Here's what happened.
          </p>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="beginners" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-1 bg-muted/50">
            <TabsTrigger 
              value="beginners" 
              className="text-sm md:text-base py-3 data-[state=active]:bg-background data-[state=active]:text-primary"
            >
              Beginners
            </TabsTrigger>
            <TabsTrigger 
              value="agency-owners" 
              className="text-sm md:text-base py-3 data-[state=active]:bg-background data-[state=active]:text-primary"
            >
              Ex. Agency Owners
            </TabsTrigger>
            <TabsTrigger 
              value="experts" 
              className="text-sm md:text-base py-3 data-[state=active]:bg-background data-[state=active]:text-primary"
            >
              Industry Experts & Founders
            </TabsTrigger>
          </TabsList>

          <TabsContent value="beginners" className="mt-8">
            <div className="space-y-6">
              <StudentCard
                name="Komail Gillani"
                role="Complete Beginner"
                photoUrl={komailGillaniPhoto}
                situation="Zero online business experience. Corporate recruiting background. Came to us 4 months ago."
                results={[
                  "$14K deal closed in first 3 weeks",
                  "Now an established coach inside LIOP",
                  "Positioned in corporate recruiting niche",
                  "Built authority from scratch"
                ]}
              />
              <StudentCard
                name="Vasilije Simic"
                role="Complete Beginner"
                photoUrl={vasilijeSimicPhoto}
                results={[
                  "$25K/month LinkedIn agency built",
                  "7,800 followers",
                  "20+ active clients",
                  "20+ LinkedIn endorsements",
                  "Dominating Agencies & SaaS space",
                  "Guarantees booked meetings in 60 days"
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="agency-owners" className="mt-8">
            <div className="space-y-6">
              <StudentCard
                name="Ethan Clouser"
                role="Ex-Agency Owner"
                situation="Running LinkedIn ads part-time, making just $1K/month. He was good—but stuck."
                transformation="We positioned him as a category owner, built a client acquisition engine, and showed him how to scale with systems."
                results={[
                  "4 Weeks: $10K/month",
                  "Fully booked ghostwriting agency",
                  "6 Months: $27K/month",
                  "Exited for healthy 5-figure deal",
                  "75-80% profit margins"
                ]}
                hasInterview={true}
              />
              <StudentCard
                name="Walter Chung"
                role="Ex-Agency Owner"
                situation="Failing business. Struggling with fulfillment. Joined us 3 months ago."
                results={[
                  "Now: $15K/month agency",
                  "1M impressions in 90 days",
                  "Built on a brand new account",
                  "Profitable fulfillment systems in place"
                ]}
                hasInterview={true}
              />
              <StudentCard
                name="Sam Beck"
                role="Ex-Agency Owner"
                results={[
                  "Transformation details coming soon"
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="experts" className="mt-8">
            <div className="space-y-6">
              <StudentCard
                name="Sam Arami"
                role="Industry Expert (AI)"
                background="2x exited founder. Knew AI inside and out. Wanted to build a LinkedIn business."
                results={[
                  "$40K/month in 6 months",
                  "15 active clients",
                  "Built 7-figure agency",
                  "Dominates AI Agency niche",
                  "Now provides content services for top AI companies"
                ]}
              />
              <StudentCard
                name="Aryan Shah"
                role="Industry Expert (Tech)"
                photoUrl={aryanShahPhoto}
                background="Previously exited LIA (Bambo) for multi 5-figures. Worked with 50+ agencies and 7-figure creators including Beehive and Smartlead."
                whatTheyDoing="→ 5,500 followers\n→ Productized his service\n→ Building first AI LinkedIn companion\n→ In talks with multiple investors for funding"
                results={[
                  "5,500 followers",
                  "Productized his service",
                  "Building first AI LinkedIn companion",
                  "In talks with multiple investors for funding"
                ]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperimentSection;
