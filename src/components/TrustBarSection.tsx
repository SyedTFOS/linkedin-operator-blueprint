import trustBarLogos from "@/assets/trust-bar-logos.png";

const TrustBarSection = () => {
  return (
    <section className="py-8 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm mb-6">
          Learn the exact system to start your LinkedIn agency in 30 days
        </p>
        <div className="flex justify-center">
          <img 
            src={trustBarLogos} 
            alt="Trusted by leading companies" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;
