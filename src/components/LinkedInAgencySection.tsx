import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, ArrowRight } from "lucide-react";

const LinkedInAgencySection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-width-7xl">
        {/* YouTube Video */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            What Is A <span className="text-primary">LinkedIn Agency?</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/[insert-video-id]"
                title="What Is A LinkedIn Agency"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* The Simple Answer */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Simple Answer
          </h3>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            A LinkedIn agency provides 3 core services to help B2B companies generate qualified sales calls
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Profile Optimization</h4>
                <p className="text-muted-foreground">
                  Transform their LinkedIn profile into a lead-generating machine
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Content Creation</h4>
                <p className="text-muted-foreground">
                  Create engaging posts that attract their ideal clients
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h4 className="text-xl font-bold mb-2">LinkedIn Outreach</h4>
                <p className="text-muted-foreground">
                  Send personalized messages to connect with decision-makers
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Visual Diagram */}
          <Card className="bg-gradient-to-br from-background to-muted/30 border-2">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Your Client</h4>
                  <p className="text-sm text-muted-foreground">B2B Company</p>
                </div>

                <ArrowRight className="text-primary w-8 h-8 hidden md:block" />
                <div className="md:hidden text-primary">↓</div>

                <div className="flex-1 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-primary">You Provide</h4>
                  <p className="text-sm">3 Core Services</p>
                </div>

                <ArrowRight className="text-primary w-8 h-8 hidden md:block" />
                <div className="md:hidden text-primary">↓</div>

                <div className="flex-1 text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Results</h4>
                  <p className="text-sm font-semibold text-primary">10-20 Sales Calls</p>
                  <p className="text-xs text-muted-foreground">Per Month</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t text-center">
                <p className="text-lg mb-2">You charge:</p>
                <p className="text-3xl font-bold text-primary">$3K - $50K<span className="text-lg text-muted-foreground">/month</span></p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why This Beats Other Business Models */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why This Beats <span className="text-primary">Other Business Models</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Other Online Businesses */}
            <Card className="border-2 border-destructive/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-6 text-center">Other Online Businesses</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">High competition, saturated markets</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Requires large audience before making money</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Unpredictable income month-to-month</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Hard to charge premium prices</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Takes 12-24 months to see results</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* LinkedIn Agency */}
            <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-6 text-center text-primary">LinkedIn Agency</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground">Untapped blue ocean opportunity</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground">Get paid from your first client</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground">Recurring monthly retainers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground">Charge $3K-$50K per client</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground">Land your first client in 30 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How You Get Clients */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How You <span className="text-primary">Get Clients</span>
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                step: 1,
                title: "Optimize Your Own Profile",
                description: "Show you know what you're doing by having an amazing LinkedIn profile"
              },
              {
                step: 2,
                title: "Create Valuable Content",
                description: "Post about LinkedIn strategies to attract potential clients"
              },
              {
                step: 3,
                title: "Connect with Decision Makers",
                description: "Reach out to business owners and executives who need your services"
              },
              {
                step: 4,
                title: "Offer a Free Audit",
                description: "Show them exactly how you can help improve their LinkedIn presence"
              },
              {
                step: 5,
                title: "Close the Deal",
                description: "Present your packages and turn them into paying clients"
              }
            ].map((item) => (
              <Card key={item.step} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary-foreground">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Path to $10K/Month */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Path to <span className="text-primary">$10K/Month</span>
          </h3>
          
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between py-4 border-b">
                  <span className="text-lg">Start with one client at</span>
                  <span className="text-2xl font-bold text-primary">$3,000/mo</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b">
                  <span className="text-lg">Add 2 more clients at</span>
                  <span className="text-2xl font-bold text-primary">$3,500/mo each</span>
                </div>
                <div className="flex items-center justify-between py-4">
                  <span className="text-xl font-semibold">Total Monthly Revenue:</span>
                  <span className="text-3xl font-bold text-primary">$10,000</span>
                </div>
                
                <div className="mt-8 p-6 bg-background rounded-lg border">
                  <p className="text-center text-muted-foreground mb-4">That's just 3 clients. Most of our students have 5-15 clients within 6 months.</p>
                  <p className="text-center text-lg font-semibold text-primary">
                    5 clients × $5,000 = <span className="text-2xl">$25,000/month</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="xl" className="group text-lg font-semibold">
            Get The Free Framework
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Learn the exact system to start your LinkedIn agency in 30 days
          </p>
        </div>
      </div>
    </section>
  );
};

export default LinkedInAgencySection;

