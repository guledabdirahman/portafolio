import { ExternalLink, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const project = {
    title: "Dalgona Coffee & Restaurant Website",
    description: "Complete website creation, management, and maintenance for a modern coffee shop and restaurant. Features online menu, reservation system, and responsive design.",
    url: "https://somalilandtaekwondo.gt.tc",
    year: "2024 - Present",
    technologies: ["Web Development", "WordPress", "Responsive Design", "Content Management"],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop"
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden box-glow hover:border-primary transition-all duration-300 group animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              
              <div className="p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      {project.year}
                    </span>
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 rounded-full bg-secondary text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground box-glow group"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">More projects coming soon!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
