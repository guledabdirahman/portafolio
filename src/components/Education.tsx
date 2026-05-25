import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Diploma in Computer Application",
      institution: "Tisqaad College",
      year: "2025",
      type: "diploma"
    },
    {
      degree: "Management Skills & Leadership + Introduction to Public Health",
      institution: "New Generation University",
      year: "2024",
      type: "certificate"
    },
    {
      degree: "Certificate in Web Development",
      institution: "Self Study",
      year: "2025",
      type: "certificate"
    },
    {
      degree: "International Taekwondo Course Certificates (4 years)",
      institution: "Somaliland International Taekwondo",
      year: "2021-2024",
      type: "certificate"
    },
    {
      degree: "Secondary Education Certificate",
      institution: "Tima-ade",
      year: "2023",
      type: "certificate"
    },
    {
      degree: "Primary Education Certificate",
      institution: "Sh. Muxumed Warsame",
      year: "2019",
      type: "certificate"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Academic Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Education & <span className="text-primary text-glow">Certifications</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {education.map((item, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 box-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  {item.type === "diploma" ? (
                    <GraduationCap className="w-6 h-6 text-primary" />
                  ) : (
                    <Award className="w-6 h-6 text-primary" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-muted-foreground mb-2">{item.institution}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {item.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
