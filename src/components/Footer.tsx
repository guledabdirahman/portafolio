import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">G</span>uled
            </h3>
            <p className="text-muted-foreground">
              Web Developer, Photographer, and Taekwondo Trainer dedicated to excellence and continuous growth.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Services", "Portfolio", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="mailto:guledbdi115@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>guledbdi115@gmail.com</span>
              </a>
              <a 
                href="https://wa.me/252638198897"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+252 63 8198897</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {currentYear} Guled Abdirahman Jama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
