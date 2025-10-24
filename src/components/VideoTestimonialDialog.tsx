import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoTestimonialDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  name: string;
  role: string;
  videoUrl: string;
}

const VideoTestimonialDialog = ({
  open,
  onOpenChange,
  name,
  role,
  videoUrl,
}: VideoTestimonialDialogProps) => {
  // Check if it's a YouTube URL
  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  
  // Extract YouTube video ID if applicable
  const getYouTubeEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-2xl font-bold">{name}</DialogTitle>
          <DialogDescription className="text-base">{role}</DialogDescription>
        </DialogHeader>
        
        <div className="aspect-video w-full bg-black">
          {isYouTube ? (
            <iframe
              src={getYouTubeEmbedUrl(videoUrl)}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={videoUrl}
              controls
              className="w-full h-full"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoTestimonialDialog;
