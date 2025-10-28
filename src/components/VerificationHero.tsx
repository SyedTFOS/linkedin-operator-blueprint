import { Badge } from "@/components/ui/badge";

export const VerificationHero = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-8 border-primary/30 bg-primary/5 text-primary px-6 py-2 text-sm font-semibold">
            STUDENT RESULTS
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Then We Proved It Wasn't Luck
          </h2>

          <div className="text-lg md:text-xl text-muted-foreground space-y-6 max-w-3xl mx-auto">
            <p>
              After landing Mastercard and Forbes-featured founders ourselves, we asked:
            </p>

            <p className="text-2xl md:text-3xl font-semibold text-foreground">
              "Can regular people replicate this?"
            </p>

            <p>
              So we took agency owners, first-time founders, and industry experts—people with zero LinkedIn presence—and guided them through the exact same system.
            </p>

            <p className="text-xl font-semibold text-foreground pt-4">
              Here's what happened.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};