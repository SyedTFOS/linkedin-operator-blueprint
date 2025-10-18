import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhopWidget = () => {
  return (
    <a
      href="https://whop.com/linkedin-operator/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Button
        size="lg"
        className="rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 px-6 py-6 bg-primary hover:bg-primary/90"
      >
        <Users className="w-5 h-5 mr-2" />
        <span className="font-semibold">Join Community</span>
      </Button>
    </a>
  );
};

export default WhopWidget;
