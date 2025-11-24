import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  image: string;
  quote: string;
  result: string;
}

export const TestimonialCard = ({ name, image, quote, result }: TestimonialCardProps) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 hover:border-primary/50 transition-all max-w-3xl mx-auto">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <img 
            src={image} 
            alt={name}
            className="w-20 h-20 rounded-full object-cover border-2 border-primary/30"
          />
        </div>
        <div className="flex-1">
          <p className="text-lg text-muted-foreground mb-4 italic">"{quote}"</p>
          <div className="pt-4 border-t border-border/50">
            <p className="text-xl font-bold text-primary mb-1">{result}</p>
            <p className="text-sm text-foreground font-semibold">— {name}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
