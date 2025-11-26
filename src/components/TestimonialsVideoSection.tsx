import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

export const TestimonialsVideoSection = () => {
  const testimonials = [
    {
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      quote: "Hit $10K in first month",
      name: "Ethan C."
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
      quote: "Signed 3 clients in 90 days",
      name: "Walter C."
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
      quote: "Built $40K/month agency in 6 months",
      name: "Sam A."
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop",
      quote: "$25K/month with 20+ clients",
      name: "Vasilije S."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-primary/30 bg-primary/5 text-primary px-6 py-2 text-sm font-semibold">
              TESTIMONIALS
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hear From A Few Of Our<br />Operators
            </h2>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden aspect-video bg-muted cursor-pointer hover:scale-105 transition-transform">
                <img 
                  src={testimonial.thumbnail} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-semibold text-lg mb-1">"{testimonial.quote}"</p>
                  <p className="text-white/80 text-sm">— {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Screenshots */}
          <div className="space-y-6">
            <div className="bg-muted/50 backdrop-blur-sm border border-border rounded-2xl p-6 max-w-2xl">
              <p className="text-foreground/90 italic">
                "Like I said, we definitely need help on design and some marketing stuff. We are trying to build this agency to 1million mrr. Lots of opportunity, and we are impressed. If you need testimonials lmk"
              </p>
            </div>

            <div className="bg-muted/50 backdrop-blur-sm border border-border rounded-2xl p-6 max-w-2xl ml-auto">
              <div className="space-y-3 text-sm">
                <p className="text-foreground/90 italic">"That one headline change has increased a clients qualified booking rate by 300% the last 3 days"</p>
                <p className="text-muted-foreground italic">"Whoa crazy result. Running paid or organic?"</p>
                <p className="text-foreground/90 italic">"Purely paid"</p>
                <p className="text-foreground/90 italic font-semibold">"another sale"</p>
                <p className="text-muted-foreground italic">"Wooooow"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};