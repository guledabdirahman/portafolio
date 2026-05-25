import { Briefcase, Check } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Professional Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Work <span className="text-primary text-glow">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-card border border-border rounded-2xl p-8 box-glow animate-fade-in">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Member & Website Builder</h3>
                    <p className="text-xl text-primary">Waqal Development Organization (WDO)</p>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    2024 - Present
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Building and maintaining the organization's website and digital presence</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Supporting project development solutions in education, healthcare, and youth development</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Contributing to community engagement and environmental sustainability initiatives</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Collaborating with a team of multi-disciplinary youth activists in Gabiley, Somaliland</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 box-glow animate-fade-in">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Waiter & Website Manager</h3>
                    <p className="text-xl text-primary">Dalgona Coffee & Restaurant</p>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    2024 - Present
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Providing excellent customer service and managing customer relations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Efficiently taking and processing customer orders</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Managing and maintaining the restaurant's website and online presence</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Ensuring seamless coordination between service and digital operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
