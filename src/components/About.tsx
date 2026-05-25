import { Code, Camera, Trophy, MessageCircle } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Quick Learner",
      description: "Constantly acquiring new skills in web development and technology"
    },
    {
      icon: Trophy,
      title: "Dedicated",
      description: "Committed to excellence and continuous self-improvement"
    },
    {
      icon: MessageCircle,
      title: "Strong Communicator",
      description: "Effective at building relationships and conveying ideas"
    },
    {
      icon: Camera,
      title: "Creative & Technical",
      description: "Balancing artistic vision with technical precision"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Get to Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            About <span className="text-primary text-glow">Me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          <div className="bg-card border border-border rounded-2xl p-8 box-glow animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At 20 years old, I've built a disciplined lifestyle that balances professional 
              development with continuous learning. My approach to life is grounded in strong 
              communication, a focused mindset, and a commitment to both worldly success and 
              spiritual growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm socially selective, choosing to invest my time in productivity and meaningful 
              pursuits. With no addictions and a clear focus on self-improvement, I dedicate 
              myself to mastering web development, photography, and martial arts. My journey 
              is driven by the belief that every skill learned today builds a better tomorrow.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 box-glow group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
