import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Play, ChevronUp, ChevronDown, Eye } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo-text.png";
import robertoLuna from "@/assets/roberto-luna.png";
import craigCecilio from "@/assets/craig-cecilio.png";
import samAramiVideo from "@/assets/sam-arami-video.mp4";
import ethanClouserPhoto from "@/assets/ethan-clouser.png";
import aryanShahPhoto from "@/assets/aryan-shah.png";
import walterChungPhoto from "@/assets/walter-chung.png";

const Hero = () => {
  const [studentsApi, setStudentsApi] = useState<CarouselApi>();
  const [businessApi, setBusinessApi] = useState<CarouselApi>();
  const [isStudentsHovered, setIsStudentsHovered] = useState(false);
  const [isBusinessHovered, setIsBusinessHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPathDropdownOpen, setIsPathDropdownOpen] = useState(false);

  // Auto-scroll for Agency Students carousel
  useEffect(() => {
    if (!studentsApi || isStudentsHovered) return;

    const intervalId = setInterval(() => {
      studentsApi.scrollNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [studentsApi, isStudentsHovered]);

  // Auto-scroll for Business carousel
  useEffect(() => {
    if (!businessApi || isBusinessHovered) return;

    const intervalId = setInterval(() => {
      businessApi.scrollNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [businessApi, isBusinessHovered]);

  return (
    <section className="relative bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img src={logo} alt="LinkedIn Operator" className="h-10" />
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
                <p className="text-sm text-primary font-semibold uppercase tracking-wider italic">
                  For True Founders
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                  Start Your LinkedIn Agency
                </h1>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Whether you're starting a LinkedIn agency or scaling your business—we have the programs, systems, and strategies to get you working with Fortune 500s, Y Combinator startups, and real companies in a blue ocean outside the saturated "online money" space.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-border/50">
                <div>
                  <div className="text-2xl font-bold text-foreground">100M+</div>
                  <div className="text-sm text-muted-foreground">Organic Views</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">2,500+</div>
                  <div className="text-sm text-muted-foreground">Meetings Booked</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">7-Fig</div>
                  <div className="text-sm text-muted-foreground">Revenue Scale</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <DropdownMenu open={isPathDropdownOpen} onOpenChange={setIsPathDropdownOpen}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      size="lg" 
                      className="group shadow-lg hover:shadow-xl transition-all duration-300 border-glow"
                      onMouseEnter={() => setIsPathDropdownOpen(true)}
                      onMouseLeave={() => setIsPathDropdownOpen(false)}
                    >
                      Choose Your Path
                      <ChevronDown className="ml-2 w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-64 bg-card border border-border/50 shadow-2xl rounded-xl p-2 z-[100] backdrop-blur-sm"
                    onMouseEnter={() => setIsPathDropdownOpen(true)}
                    onMouseLeave={() => setIsPathDropdownOpen(false)}
                  >
                    <DropdownMenuItem 
                      className="cursor-pointer rounded-lg p-4 hover:bg-primary/10 focus:bg-primary/10 transition-all duration-200 mb-1.5"
                      onClick={() => {
                        const programsSection = document.getElementById('about-programs');
                        programsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setIsPathDropdownOpen(false);
                      }}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-foreground">Building A LinkedIn Agency</span>
                        <span className="text-xs text-muted-foreground">Start from scratch</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="cursor-pointer rounded-lg p-4 hover:bg-primary/10 focus:bg-primary/10 transition-all duration-200"
                      onClick={() => {
                        const programsSection = document.getElementById('about-programs');
                        programsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setIsPathDropdownOpen(false);
                      }}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-foreground">Growing My Business</span>
                        <span className="text-xs text-muted-foreground">Scale your existing company</span>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="group shadow-md hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      View All Results
                      <ChevronDown className="ml-2 w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-64 bg-card border border-border/50 shadow-2xl rounded-xl p-2 z-[100] backdrop-blur-sm"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <DropdownMenuItem 
                      className="cursor-pointer rounded-lg p-4 hover:bg-accent/10 focus:bg-accent/10 transition-all duration-200 mb-1.5"
                      onClick={() => {
                        const businessSection = document.getElementById('business-results-section');
                        businessSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setIsDropdownOpen(false);
                      }}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-foreground">Business Results</span>
                        <span className="text-xs text-muted-foreground">Fortune 500 & YC startups</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="cursor-pointer rounded-lg p-4 hover:bg-accent/10 focus:bg-accent/10 transition-all duration-200"
                      onClick={() => {
                        const agencySection = document.getElementById('agency-results-section');
                        agencySection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setIsDropdownOpen(false);
                      }}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-foreground">Agency Results</span>
                        <span className="text-xs text-muted-foreground">500+ student success stories</span>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsStudentsHovered(true)}
                    onMouseLeave={() => setIsStudentsHovered(false)}
                  >
                    {/* Top gradient shadow */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background via-background/60 to-transparent z-10 pointer-events-none" />

                    {/* Bottom gradient shadow */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/60 to-transparent z-10 pointer-events-none" />

                    <Carousel orientation="vertical" className="w-full" opts={{ loop: true }} setApi={setStudentsApi}>
                      <CarouselContent className="-mt-4 h-[500px]">
                        {/* Ethan Clouser */}
                        <CarouselItem className="pt-4 basis-full">
                          <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
                            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                              <img src={ethanClouserPhoto} alt="Ethan Clouser" className="w-full h-full object-cover" />
                              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                                    <img src={ethanClouserPhoto} alt="Ethan Clouser" className="w-full h-full object-cover" />
                                  </div>
                                  <div>
                                    <p className="font-semibold text-sm">Ethan Clouser</p>
                                    <p className="text-xs text-muted-foreground">Ex-Agency Owner</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-bold text-lg">From $1K to $27K/Month → 5-Figure Exit</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                Running LinkedIn ads part-time, making just $1K/month. We positioned him as a category owner and showed him how to scale with systems. Result: <span className="text-primary font-semibold">$27K/month in 6 months</span>, exited for a healthy 5-figure deal with <span className="text-primary font-semibold">75-80% profit margins</span>.
                              </p>
                            </div>
                          </div>
                        </CarouselItem>

                        {/* Aryan Shah */}
                        <CarouselItem className="pt-4 basis-full">
                          <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
                            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                              <img src={aryanShahPhoto} alt="Aryan Shah" className="w-full h-full object-cover" />
                              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                                    <img src={aryanShahPhoto} alt="Aryan Shah" className="w-full h-full object-cover" />
                                  </div>
                                  <div>
                                    <p className="font-semibold text-sm">Aryan Shah</p>
                                    <p className="text-xs text-muted-foreground">Industry Expert (Tech)</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-bold text-lg">Exited Founder → AI LinkedIn Companion</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                Previously exited LIA (Bambo) for multi 5-figures. Worked with 50+ agencies and 7-figure creators. Now with <span className="text-primary font-semibold">5,500 followers</span>, he's productized his service and is <span className="text-primary font-semibold">building the first AI LinkedIn companion</span> with investor backing.
                              </p>
                            </div>
                          </div>
                        </CarouselItem>

                        {/* Walter Chung */}
                        <CarouselItem className="pt-4 basis-full">
                          <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
                            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                              <img src={walterChungPhoto} alt="Walter Chung" className="w-full h-full object-cover" />
                              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                                    <img src={walterChungPhoto} alt="Walter Chung" className="w-full h-full object-cover" />
                                  </div>
                                  <div>
                                    <p className="font-semibold text-sm">Walter Chung</p>
                                    <p className="text-xs text-muted-foreground">Ex-Agency Owner</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-bold text-lg">Failing Business → $15K/Month Agency</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                Struggling with fulfillment. Joined us 3 months ago. Now running a <span className="text-primary font-semibold">$15K/month agency</span> with <span className="text-primary font-semibold">1M impressions in 90 days</span> built on a brand new account with profitable fulfillment systems in place.
                              </p>
                            </div>
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious 
                        className="left-1/2 -translate-x-1/2 top-2 h-8 w-8 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <ChevronUp className="h-4 w-4" />
                      </CarouselPrevious>
                      <CarouselNext 
                        className="left-1/2 -translate-x-1/2 bottom-2 h-8 w-8 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </CarouselNext>
                    </Carousel>
                  </div>
                </TabsContent>

                {/* Business Tab */}
                <TabsContent value="business">
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsBusinessHovered(true)}
                    onMouseLeave={() => setIsBusinessHovered(false)}
                  >
                    {/* Top gradient shadow */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background via-background/60 to-transparent z-10 pointer-events-none" />

                    {/* Bottom gradient shadow */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/60 to-transparent z-10 pointer-events-none" />

                    <Carousel orientation="vertical" className="w-full" opts={{ loop: true }} setApi={setBusinessApi}>
                      <CarouselContent className="-mt-4 h-[500px]">
                        {/* Roberto H. Luna */}
                        <CarouselItem className="pt-4 basis-full">
                          <div className="group relative overflow-hidden rounded-2xl h-[500px] w-full">
                            <div 
                              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                              style={{ backgroundImage: `url(/src/assets/roberto-luna.png)` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                            <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                              <Star className="w-4 h-4 text-primary-foreground fill-current" />
                              <span className="text-sm font-bold text-primary-foreground">Featured in Forbes</span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h4 className="text-2xl font-bold text-foreground mb-1">Roberto H. Luna</h4>
                              <p className="text-base text-primary font-semibold mb-2">Lunivate</p>
                              <p className="text-sm text-muted-foreground">Business Consulting</p>
                            </div>
                            <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                              <div className="space-y-4">
                                <div className="mb-6">
                                  <h4 className="text-xl font-bold text-foreground mb-1">Roberto H. Luna</h4>
                                  <p className="text-sm text-primary font-semibold">Lunivate • 120 Days</p>
                                </div>
                                <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">The Results:</p>
                                <div className="space-y-3">
                                  <div className="flex items-start gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                      <Star className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-sm font-semibold text-foreground">Featured in Forbes</p>
                                      <p className="text-xs text-muted-foreground">Direct result of LinkedIn strategy</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                      <Eye className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-sm font-semibold text-foreground">15M+ LinkedIn views</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3 pt-2 border-t border-primary/20">
                                    <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                      <ArrowRight className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-base font-bold text-primary">$500,000+ revenue</p>
                                      <p className="text-xs text-muted-foreground">In just 120 days</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>

                        {/* Sam Arami */}
                        <CarouselItem className="pt-4 basis-full">
                          <div className="group relative overflow-hidden rounded-2xl h-[500px] w-full">
                            <video 
                              className="absolute inset-0 w-full h-full object-cover"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              <source src="/src/assets/sam-arami-video.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                            <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                              <Star className="w-4 h-4 text-primary-foreground fill-current" />
                              <span className="text-sm font-bold text-primary-foreground">7-Figure Agency</span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h4 className="text-2xl font-bold text-foreground mb-1">Sam Arami</h4>
                              <p className="text-base text-primary font-semibold mb-2">Arami AI</p>
                              <p className="text-sm text-muted-foreground">AI Voice Agents Platform • 2x Exited Founder</p>
                            </div>
                            <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                              <div className="space-y-4">
                                <div className="mb-6">
                                  <h4 className="text-xl font-bold text-foreground mb-1">Sam Arami</h4>
                                  <p className="text-sm text-primary font-semibold">Arami AI • 2x Exited Founder</p>
                                </div>
                                <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">The Sprint:</p>
                                <div className="space-y-3">
                                  <div className="flex items-start gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                      <Star className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-sm font-semibold text-foreground">3,000+ waitlist signups</p>
                                      <p className="text-xs text-muted-foreground">In just 21 days</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                      <Star className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-sm font-semibold text-foreground">800 → 7,000 LinkedIn followers</p>
                                      <p className="text-xs text-muted-foreground">21 days growth</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3 pt-2 border-t border-primary/20">
                                    <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                      <ArrowRight className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-base font-bold text-primary">Multiple 7-figures/year</p>
                                      <p className="text-xs text-muted-foreground">LinkedIn agency revenue</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>

                        {/* Craig Cecilio */}
                        <CarouselItem className="pt-4 basis-full">
                          <div className="group relative overflow-hidden rounded-2xl h-[500px] w-full">
                            <div 
                              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                              style={{ backgroundImage: `url(/src/assets/craig-cecilio.png)` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                            <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full flex items-center gap-2 shadow-lg">
                              <Star className="w-4 h-4 text-primary-foreground fill-current" />
                              <span className="text-sm font-bold text-primary-foreground">$1B+ Raised</span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h4 className="text-2xl font-bold text-foreground mb-1">Craig Cecilio</h4>
                              <p className="text-base text-primary font-semibold mb-2">DiversyFund</p>
                              <p className="text-sm text-muted-foreground">Real Estate Investment</p>
                            </div>
                            <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                              <div className="space-y-4">
                                <div className="mb-6">
                                  <h4 className="text-xl font-bold text-foreground mb-1">Craig Cecilio</h4>
                                  <p className="text-sm text-primary font-semibold">DiversyFund • Fortune 500 Level</p>
                                </div>
                                <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">The Empire:</p>
                                <div className="space-y-3">
                                  <div className="flex items-start gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                      <Star className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-sm font-semibold text-foreground">$1 Billion+ capital raised</p>
                                      <p className="text-xs text-muted-foreground">From 40,000+ investors</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                      <Star className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-sm font-semibold text-foreground">500,000+ participants</p>
                                      <p className="text-xs text-muted-foreground">30,000+ active users</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3 pt-2 border-t border-primary/20">
                                    <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                      <ArrowRight className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-base font-bold text-primary">LinkedIn fueled growth</p>
                                      <p className="text-xs text-muted-foreground">Exponential reach</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious 
                        className="left-1/2 -translate-x-1/2 top-2 h-8 w-8 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <ChevronUp className="h-4 w-4" />
                      </CarouselPrevious>
                      <CarouselNext 
                        className="left-1/2 -translate-x-1/2 bottom-2 h-8 w-8 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
                      >
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
