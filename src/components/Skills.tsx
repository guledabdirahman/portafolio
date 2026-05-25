import { Users, Lightbulb, Target, Code } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Users,
      name: "Teamwork",
      level: 90,
      description: "Collaborative problem-solving"
    },
    {
      icon: Target,
      name: "Leadership",
      level: 85,
      description: "Guiding teams to success"
    },
    {
      icon: Lightbulb,
      name: "Problem Solving",
      level: 88,
      description: "Creative solutions"
    },
    {
      icon: Code,
      name: "Web Development",
      level: 92,
      description: "Modern web technologies"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            What I Bring
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Core <span className="text-primary text-glow">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 box-glow group hover:border-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out box-glow"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
