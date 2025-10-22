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
    <div className="text-center py-8 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight">
        <span className="text-foreground">Ask </span>
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">🦁</span>
        <span className="text-foreground"> Leo </span>
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
      <p className="text-muted-foreground text-base md:text-lg mt-4">
        Get instant answers about LinkedIn Operator programs 24/7
      </p>
    </div>
  );
};

export default AnimatedChatHeader;
