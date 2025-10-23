import mastercardLogo from "@/assets/mastercard-logo.png";
import forbes30Logo from "@/assets/forbes-30-under-30.png";
import yCombinatorLogo from "@/assets/y-combinator-logo.png";
import diversyfundLogo from "@/assets/diversyfund-logo.png";
import playertwoLogo from "@/assets/playertwo-logo.png";
import forbesLogo from "@/assets/forbes-logo.png";

const TrustBarSection = () => {
  const logos = [
    { src: mastercardLogo, alt: "Mastercard" },
    { src: forbes30Logo, alt: "Forbes 30 Under 30" },
    { src: yCombinatorLogo, alt: "Y Combinator" },
    { src: diversyfundLogo, alt: "Diversyfund" },
    { src: playertwoLogo, alt: "Player Two" },
    { src: forbesLogo, alt: "Forbes" },
  ];

  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Scrolling Logo Bar */}
        <div className="overflow-hidden">
          <div className="flex animate-[scroll_30s_linear_infinite] hover:pause">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`w-auto object-contain ${
                    logo.alt === "Player Two" ? "h-16" : "h-12"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;
