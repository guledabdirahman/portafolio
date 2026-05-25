import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Create mailto link
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:guledbdi115@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast.success("Opening your email client...");
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Contact <span className="text-primary text-glow">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground text-lg">
                Have a project in mind or want to collaborate? I'm always open to discussing 
                new opportunities and creative ideas. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href="mailto:guledbdi115@gmail.com"
                className="flex items-center gap-4 p-6 bg-card border border-border rounded-2xl hover:border-primary transition-all duration-300 box-glow group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                    guledbdi115@gmail.com
                  </p>
                </div>
              </a>

              <a 
                href="https://wa.me/252638198897"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-card border border-border rounded-2xl hover:border-primary transition-all duration-300 box-glow group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                  <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                    +252 63 8198897
                  </p>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-8 box-glow">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground box-glow-strong group"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
