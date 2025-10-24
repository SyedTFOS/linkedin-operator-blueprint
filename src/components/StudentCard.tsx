import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlayCircle, Linkedin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface StudentCardProps {
  name: string;
  role: string;
  photoUrl?: string;
  situation?: string;
  transformation?: string;
  background?: string;
  whatTheyDoing?: string;
  results: string[];
  videoUrl?: string;
  videoQuote?: string;
  linkedinImageUrl?: string;
  linkedinProfileUrl?: string;
  linkedinPreviewMode?: "static" | "interactive";
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
  videoUrl,
  videoQuote,
  linkedinImageUrl,
  linkedinProfileUrl,
  linkedinPreviewMode = "static",
}: StudentCardProps) => {
  const [showLinkedInPreview, setShowLinkedInPreview] = useState(false);
  // Function to get embed URL for YouTube videos
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url; // Return as-is for direct video files
  };
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

          {videoUrl && (
            <div className="mt-6">
              {videoQuote && (
                <div className="mb-4 text-center">
                  <p className="text-xl md:text-2xl font-bold text-foreground italic">
                    "{videoQuote}"
                  </p>
                </div>
              )}
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
                <div className="aspect-video rounded-lg overflow-hidden bg-background shadow-lg">
                  {videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
                    <iframe
                      src={getEmbedUrl(videoUrl)}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={videoUrl}
                      controls
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {linkedinImageUrl && linkedinPreviewMode === "interactive" && (
            <div className="mt-6">
              <Button
                onClick={() => setShowLinkedInPreview(!showLinkedInPreview)}
                variant="outline"
                className="w-full gap-2"
              >
                <Linkedin className="w-4 h-4" />
                {showLinkedInPreview ? "Hide" : "Preview"} LinkedIn Profile
                {showLinkedInPreview ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
              
              {showLinkedInPreview && (
                <div className="mt-4 animate-in slide-in-from-top-2">
                  <div className="rounded-lg overflow-hidden border-2 border-primary/20">
                    <img 
                      src={linkedinImageUrl} 
                      alt={`${name} LinkedIn Profile`}
                      className="w-full h-auto"
                    />
                  </div>
                  {linkedinProfileUrl && (
                    <div className="mt-4 flex justify-center">
                      <Button
                        onClick={() => window.open(linkedinProfileUrl, '_blank')}
                        className="gap-2"
                      >
                        <Linkedin className="w-4 h-4" />
                        View Full LinkedIn Profile
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {linkedinImageUrl && linkedinPreviewMode === "static" && (
            <div className="mt-6">
              <div className="rounded-lg overflow-hidden border-2 border-primary/20">
                <img 
                  src={linkedinImageUrl} 
                  alt={`${name} LinkedIn Profile`}
                  className="w-full h-auto"
                />
              </div>
              {linkedinProfileUrl && (
                <div className="mt-4 flex justify-center">
                  <Button
                    onClick={() => window.open(linkedinProfileUrl, '_blank')}
                    className="gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    View Full LinkedIn Profile
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default StudentCard;
