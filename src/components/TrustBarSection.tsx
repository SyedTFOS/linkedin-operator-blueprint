import trustBarLogos from "@/assets/trust-bar-logos.png";

const TrustBarSection = () => {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-lg md:text-xl text-muted-foreground mb-8">
          Learn the exact system to start your LinkedIn agency in 30 days
        </p>
        <div className="flex justify-center">
          <img
            src={trustBarLogos}
            alt="Trusted by leading companies including Y Combinator, Forbes, Mastercard, and more"
            className="w-full max-w-5xl h-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;
