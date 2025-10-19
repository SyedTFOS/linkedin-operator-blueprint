import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const ExperimentSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <span className="text-sm font-medium">V The Experiment</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
          Then We Proved It Wasn't Luck
        </h2>

        {/* Subheadline */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            After landing Mastercard and Forbes-featured founders ourselves, we asked: 
            <span className="italic"> "Can regular people replicate this?"</span>
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
            So we took agency owners, first-time founders, and industry experts—people with 
            zero LinkedIn presence—and guided them through the exact same system.
          </p>
          <p className="text-lg md:text-xl font-semibold text-foreground mt-6">
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
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Starting From Zero</h3>
                <p className="text-muted-foreground mb-6">
                  Complete newcomers with no LinkedIn presence or network
                </p>
                {/* Student results will go here */}
                <div className="min-h-[400px] flex items-center justify-center border-2 border-dashed border-muted-foreground/20 rounded-lg">
                  <p className="text-muted-foreground">Student results coming soon...</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="agency-owners" className="mt-8">
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Experienced Operators</h3>
                <p className="text-muted-foreground mb-6">
                  Agency owners looking to scale their client acquisition
                </p>
                {/* Student results will go here */}
                <div className="min-h-[400px] flex items-center justify-center border-2 border-dashed border-muted-foreground/20 rounded-lg">
                  <p className="text-muted-foreground">Student results coming soon...</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="experts" className="mt-8">
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Industry Veterans</h3>
                <p className="text-muted-foreground mb-6">
                  Founders and experts expanding their LinkedIn reach
                </p>
                {/* Student results will go here */}
                <div className="min-h-[400px] flex items-center justify-center border-2 border-dashed border-muted-foreground/20 rounded-lg">
                  <p className="text-muted-foreground">Student results coming soon...</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperimentSection;
