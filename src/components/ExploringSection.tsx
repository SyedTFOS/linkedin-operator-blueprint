import { Sparkles } from "lucide-react";

const ExploringSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/50 border border-accent">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-base font-medium">Exploring LinkedIn Operator</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploringSection;
