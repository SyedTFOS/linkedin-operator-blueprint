import { useState, useEffect } from "react";

const rotatingPhrases = [
  "about pricing",
  "which program fits you",
  "how to get started",
  "about building an agency",
  "how this is different",
  "if you need experience",
  "about success stories",
  "which tier to choose",
  "about the guarantee",
  "how long until results",
  "if LinkedIn works for you",
  "anything you want"
];

const AnimatedChatHeader = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-8 px-4 w-full mx-auto mt-16">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex flex-wrap items-center justify-center gap-2">
          <span className="text-foreground whitespace-nowrap">Ask 🦁 Leo</span>
          <span
            className={`text-[#FF6B35] transition-all duration-500 inline-block ${
              isAnimating
                ? "opacity-0 translate-y-[-10px]"
                : "opacity-100 translate-y-0"
            }`}
          >
            {rotatingPhrases[currentPhraseIndex]}
          </span>
        </h1>
      </div>
      <p className="text-muted-foreground text-base md:text-lg mt-4">
        Get instant answers about LinkedIn Operator programs 24/7
      </p>
    </div>
  );
};

export default AnimatedChatHeader;
