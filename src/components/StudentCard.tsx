import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

interface StudentCardProps {
  name: string;
  role: string;
  photoUrl?: string;
  situation?: string;
  transformation?: string;
  background?: string;
  whatTheyDoing?: string;
  results: string[];
  hasInterview?: boolean;
}

const StudentCard = ({
  name,
  role,
  photoUrl,
  situation,
  transformation,
  background,
  whatTheyDoing,
  results,
  hasInterview = false,
}: StudentCardProps) => {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="w-28 h-28 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
            {photoUrl ? (
              <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-4xl font-bold text-muted-foreground">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
            <div className="h-px w-24 bg-primary/30 mt-2" />
          </div>

          {situation && (
            <div>
              <h4 className="text-sm font-bold text-foreground mb-2">THE SITUATION:</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{situation}</p>
            </div>
          )}

          {transformation && (
            <div>
              <h4 className="text-sm font-bold text-foreground mb-2">THE TRANSFORMATION:</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{transformation}</p>
            </div>
          )}

          {background && (
            <div>
              <h4 className="text-sm font-bold text-foreground mb-2">THE BACKGROUND:</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{background}</p>
            </div>
          )}

          {whatTheyDoing && (
            <div>
              <h4 className="text-sm font-bold text-foreground mb-2">WHAT HE'S DOING NOW:</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{whatTheyDoing}</p>
            </div>
          )}

          <div>
            <h4 className="text-sm font-bold text-foreground mb-2">THE RESULTS:</h4>
            <ul className="space-y-1.5">
              {results.map((result, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">→</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {hasInterview && (
            <Button variant="outline" className="mt-4 gap-2">
              <PlayCircle className="w-4 h-4" />
              Watch Full Interview
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default StudentCard;
