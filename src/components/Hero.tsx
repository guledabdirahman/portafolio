import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/guled-profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Welcome to my Portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-primary text-glow">Guled Abdirahman Jama</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Web Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A hardworking, self-motivated individual focused on skill development, 
              discipline, and continuous self-improvement. Dedicated to excellence in 
              technology, fitness, and personal growth.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground box-glow-strong group"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse-glow"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 border-4 border-primary rounded-full opacity-20 animate-float"></div>
                <div className="absolute inset-4 border-2 border-primary/50 rounded-full"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-primary/20 to-transparent rounded-full"></div>
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary box-glow-strong bg-card">
                    <img 
                      src={profileImage} 
                      alt="Guled Abdirahman Jama - Web Developer, Photographer, and Taekwondo Trainer"
                      className="w-full h-full object-cover"
                    />
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

export default Hero;
