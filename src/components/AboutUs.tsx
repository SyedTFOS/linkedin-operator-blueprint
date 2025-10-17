import { GraduationCap, Briefcase, Lightbulb, Building2, TrendingUp, Target, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Main Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            What is <span className="text-gradient">LinkedIn Operator</span>?
          </h2>
          <p className="text-xl text-foreground/90 leading-relaxed mb-6">
            LinkedIn Operator is your dedicated partner in transforming LinkedIn from a passive profile 
            into an active income-generating machine. We handle the strategy, content, engagement, 
            and growth—so you can focus on what you do best.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With proven expertise in social selling, personal branding, and lead generation, 
            we've helped hundreds of people build sustainable online income streams through LinkedIn's 
            professional network of 900+ million users.
          </p>
        </div>

        {/* Who Is This For */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Who is LinkedIn Operator for?
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're just starting out or scaling an empire, we meet you where you are
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Beginners */}
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 transition-all">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-primary">BEGINNERS</h4>
              <p className="text-foreground/80 leading-relaxed">
                Jumpstart your journey with step-by-step guidance, practical resources, 
                and supportive community to build your online presence from scratch.
              </p>
            </div>

            {/* Professionals */}
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 transition-all">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-primary">PROFESSIONALS</h4>
              <p className="text-foreground/80 leading-relaxed">
                Learn how to launch a profitable online business while keeping your full-time job. 
                Build your side income without sacrificing your career.
              </p>
            </div>

            {/* Entrepreneurs */}
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 transition-all">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-primary">ENTREPRENEURS</h4>
              <p className="text-foreground/80 leading-relaxed">
                Expand your toolkit with insights and tactics from experts who have been where you are. 
                Scale faster with proven strategies.
              </p>
            </div>

            {/* Business Owners */}
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 transition-all">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-primary">BUSINESS OWNERS</h4>
              <p className="text-foreground/80 leading-relaxed">
                Modernize your approach and find new ways to scale and optimize your existing business. 
                Leverage LinkedIn's B2B network effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
