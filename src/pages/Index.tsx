import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Gowtham Valteru. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
