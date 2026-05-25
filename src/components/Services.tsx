import { Code, Palette, Camera, Share2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites built with modern technologies, responsive design, and optimal performance.",
      features: ["React & TypeScript", "Responsive Design", "Performance Optimized"]
    },
    {
      icon: Palette,
      title: "WordPress Websites",
      description: "Professional WordPress sites with custom themes, plugins, and full content management.",
      features: ["Custom Themes", "Plugin Integration", "Easy Management"]
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services for events, portraits, and commercial projects.",
      features: ["Event Photography", "Portrait Sessions", "Commercial Shoots"]
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Strategic social media presence with content creation and engagement optimization.",
      features: ["Content Strategy", "Brand Growth", "Engagement Boost"]
    },
    {
      icon: Trophy,
      title: "Taekwondo Training",
      description: "Professional martial arts instruction focusing on technique, discipline, and personal growth.",
      features: ["Technique Training", "Fitness Focus", "Mental Discipline"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            My <span className="text-primary text-glow">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 box-glow group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
