const ExperimentSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
          <span className="text-sm font-medium">V The Experiment</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Then We Proved It Wasn't Luck
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          After landing Mastercard and Forbes-featured founders ourselves, we asked: 
          <span className="italic"> "Can regular people replicate this?"</span>
          <br /><br />
          So we took agency owners, first-time founders, and industry experts—people with 
          zero LinkedIn presence—and guided them through the exact same system.
          <br /><br />
          <span className="font-semibold text-foreground">Here's what happened.</span>
        </p>
      </div>
    </section>
  );
};

export default ExperimentSection;
