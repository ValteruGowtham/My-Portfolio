import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-card/50" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-tech-blue/20 rounded-full blur-xl float-animation" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-tech-purple/20 rounded-full blur-xl float-animation" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 fade-in-up">
          {/* Profile section */}
          <div className="space-y-4">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-tech-blue to-tech-purple rounded-full flex items-center justify-center text-4xl font-bold tech-glow">
              GV
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Gowtham Valteru</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              AI/ML Engineer & Full Stack Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about building intelligent systems and solving real-world problems 
              through innovative machine learning solutions and web technologies.
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              gowtham.valteru05@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 7989178386
            </div>
            <div className="flex items-center gap-2">
              📍 Eluru, Andhra Pradesh
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-tech-blue to-tech-purple hover:opacity-90 transition-opacity"
            >
              View Projects
            </Button>
            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://linkedin.com/in/gowtham-valteru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-tech-blue/20 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/ValteruGowtham" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-tech-purple/20 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:gowtham.valteru05@gmail.com"
              className="p-3 rounded-full glass-card hover:bg-tech-cyan/20 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;