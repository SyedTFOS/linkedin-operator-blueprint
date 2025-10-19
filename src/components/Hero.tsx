import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Play, ChevronUp, ChevronDown } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import logo from "@/assets/logo-text.png";

const Hero = () => {
  return (
    <section className="relative bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img src={logo} alt="LinkedIn Operator" className="h-10" />
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Results
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <Button variant="default" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                {/* Social Proof */}
                <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-full bg-muted/50 border border-border/50 w-fit">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background" />
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background" />
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 border-2 border-background" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">Join 500+ students</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 relative">
                <div className="relative">
                  <p className="text-sm md:text-base text-muted-foreground font-medium">
                    The Only Business Model That Allows You To Sign Clients Like this
                  </p>
                  {/* Curved Arrow */}
                  <svg
                    className="absolute hidden lg:block left-full top-1/2 -translate-y-1/2 ml-4 w-[200px] h-[60px]"
                    viewBox="0 0 200 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 0 30 Q 100 10, 180 25" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
                    <path d="M 180 25 L 170 20 L 175 25 L 170 30 Z" fill="hsl(var(--primary))" />
                  </svg>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                  Start Your LinkedIn Agency
                </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight">
                  A Real Business Model for Real Founders
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Whether you're starting a LinkedIn agency or scaling your business—we have the programs, systems, and strategies to get you working with Fortune 500s, Y Combinator startups, and real companies in a blue ocean outside the saturated "online money" space.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-border/50">
                <div>
                  <div className="text-2xl font-bold text-foreground">50M+</div>
                  <div className="text-sm text-muted-foreground">Organic Views</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">2,500+</div>
                  <div className="text-sm text-muted-foreground">Meetings Booked</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">6-Fig</div>
                  <div className="text-sm text-muted-foreground">Revenue Scale</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="group">
                  Choose Your Program
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </div>
            </div>

            {/* Right: Results Carousel */}
            <div className="relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  Check Out Our <span className="text-primary">Results</span>
                </h3>
                <p className="text-sm text-muted-foreground">Over 500 Students & 50+ Businesses Transformed</p>
              </div>

              <Tabs defaultValue="students" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="students">Agency Students</TabsTrigger>
                  <TabsTrigger value="business">Business</TabsTrigger>
                </TabsList>

                {/* Agency Students Tab */}
                <TabsContent value="students">
                  <div className="relative">
                    {/* Top gradient shadow */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background via-background/60 to-transparent z-10 pointer-events-none" />

                    {/* Bottom gradient shadow */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/60 to-transparent z-10 pointer-events-none" />

                    <Carousel orientation="vertical" className="w-full" opts={{ loop: true }}>
                      <CarouselContent className="-mt-4 h-[500px]">
                        {/* Testimonial 1 */}
                        <CarouselItem className="pt-4 basis-full">
                          <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
                            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden group cursor-pointer">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                                </div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                                  <div>
                                    <p className="font-semibold text-sm">Sarah Chen</p>
                                    <p className="text-xs text-muted-foreground">San Francisco, USA</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-bold text-lg">From Zero to $15K/Month in 90 Days</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                "The LinkedIn Operator course gave me everything I needed. I landed my first client in
                                week 2 and scaled to <span className="text-primary font-semibold">$15,000 MRR</span>{" "}
                                within 3 months."
                              </p>
                            </div>
                          </div>
                        </CarouselItem>

                        {/* Testimonial 2 */}
                        <CarouselItem className="pt-4 basis-full">
                          <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
                            <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg overflow-hidden group cursor-pointer">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                                </div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary" />
                                  <div>
                                    <p className="font-semibold text-sm">Marcus Johnson</p>
                                    <p className="text-xs text-muted-foreground">London, UK</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-bold text-lg">Built a Team of 5 in 6 Months</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                "Started solo, now I run a{" "}
                                <span className="text-primary font-semibold">full agency with 5 team members</span>. The
                                systems taught here are incredible for scaling fast."
                              </p>
                            </div>
                          </div>
                        </CarouselItem>

                        {/* Testimonial 3 */}
                        <CarouselItem className="pt-4 basis-full">
                          <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
                            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg overflow-hidden group cursor-pointer">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                                </div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/80 to-accent/80" />
                                  <div>
                                    <p className="font-semibold text-sm">Emma Rodriguez</p>
                                    <p className="text-xs text-muted-foreground">Toronto, Canada</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-bold text-lg">Replaced My 9-5 Income</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                "I was skeptical at first, but within 4 months I was making{" "}
                                <span className="text-primary font-semibold">more than my corporate salary</span>. Now I
                                work from anywhere."
                              </p>
                            </div>
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious className="left-1/2 -translate-x-1/2 top-2 h-8 w-8 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90">
                        <ChevronUp className="h-4 w-4" />
                      </CarouselPrevious>
                      <CarouselNext className="left-1/2 -translate-x-1/2 bottom-2 h-8 w-8 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90">
                        <ChevronDown className="h-4 w-4" />
                      </CarouselNext>
                    </Carousel>
                  </div>
                </TabsContent>

                {/* Business Tab */}
                <TabsContent value="business">
                  <div className="relative">
                    {/* Top gradient shadow */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background via-background/60 to-transparent z-10 pointer-events-none" />

                    {/* Bottom gradient shadow */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/60 to-transparent z-10 pointer-events-none" />

                    <Carousel orientation="vertical" className="w-full" opts={{ loop: true }}>
                      <CarouselContent className="-mt-4 h-[500px]">
                        {/* Business Testimonial 1 */}
                        <CarouselItem className="pt-4 basis-full">
                          <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
                            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden group cursor-pointer">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                                </div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                                  <div>
                                    <p className="font-semibold text-sm">TechStart Inc.</p>
                                    <p className="text-xs text-muted-foreground">New York, USA</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-bold text-lg">3X Our Lead Generation</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                "Working with this team transformed our LinkedIn presence. We went from{" "}
                                <span className="text-primary font-semibold">50 to 150+ qualified leads per month</span>{" "}
                                in just 2 quarters."
                              </p>
                            </div>
                          </div>
                        </CarouselItem>

                        {/* Business Testimonial 2 */}
                        <CarouselItem className="pt-4 basis-full">
                          <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
                            <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg overflow-hidden group cursor-pointer">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                                </div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary" />
                                  <div>
                                    <p className="font-semibold text-sm">Global Solutions Ltd</p>
                                    <p className="text-xs text-muted-foreground">Singapore</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-bold text-lg">$500K in Pipeline Revenue</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                "Their LinkedIn strategies generated{" "}
                                <span className="text-primary font-semibold">over $500,000 in pipeline</span> for our
                                B2B business. Best ROI we've seen from any channel."
                              </p>
                            </div>
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious className="left-1/2 -translate-x-1/2 top-2 h-8 w-8 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90">
                        <ChevronUp className="h-4 w-4" />
                      </CarouselPrevious>
                      <CarouselNext className="left-1/2 -translate-x-1/2 bottom-2 h-8 w-8 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90">
                        <ChevronDown className="h-4 w-4" />
                      </CarouselNext>
                    </Carousel>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
