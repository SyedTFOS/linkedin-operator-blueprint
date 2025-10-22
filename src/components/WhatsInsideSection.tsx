import { Package } from "lucide-react";

const WhatsInsideSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <Package className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              <span className="text-primary mr-1.5">vi.</span>What's Inside
            </span>
          </div>
        </div>

        {/* Header */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-16 md:mb-24">
          What's Inside LinkedIn Operator
        </h2>

        {/* Content will be added here */}
        <div className="max-w-5xl mx-auto">
          {/* Placeholder for content */}
        </div>
      </div>
    </section>
  );
};

export default WhatsInsideSection;
