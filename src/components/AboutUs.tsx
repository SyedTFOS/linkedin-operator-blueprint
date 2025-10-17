import { Target, Users, TrendingUp, Award } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Main About Content */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">LinkedIn Operator</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                LinkedIn Operator is a specialized service dedicated to helping businesses 
                unlock the full potential of LinkedIn as a powerful growth engine. We combine 
                strategic expertise with hands-on execution to deliver measurable results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience in B2B lead generation and social selling, we've 
                helped dozens of companies transform their LinkedIn presence from a static 
                profile into an active revenue-generating channel.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We exist because we saw too many businesses struggling to navigate LinkedIn's 
                complexity while missing out on incredible opportunities. Our mission is to 
                bridge that gap by providing expert guidance and execution.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're looking to generate qualified leads, build thought leadership, 
                or expand your professional network, we bring the strategy, tools, and 
                dedication to make it happen.
              </p>
            </div>
          </div>
        </div>

        {/* Who Is This For */}
        <div>
          <h3 className="text-3xl font-bold mb-12 text-center">
            Who is <span className="text-gradient">LinkedIn Operator</span> for?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">B2B Companies</h4>
              <p className="text-muted-foreground">
                Businesses looking to generate high-quality leads and build relationships 
                with decision-makers in their target market.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Founders & Executives</h4>
              <p className="text-muted-foreground">
                Leaders who want to establish thought leadership and expand their 
                professional influence without spending hours on social media.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Sales Teams</h4>
              <p className="text-muted-foreground">
                Sales professionals seeking to leverage social selling techniques and 
                build a consistent pipeline of warm prospects.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Service Providers</h4>
              <p className="text-muted-foreground">
                Consultants, agencies, and professional service firms looking to 
                attract premium clients and showcase their expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
