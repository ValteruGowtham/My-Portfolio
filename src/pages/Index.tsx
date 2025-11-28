import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Achievements from "@/components/Achievements";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: '#1a1a1a' }}>
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      
      {/* Footer */}
      <footer 
        className="py-8 px-10"
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(26, 26, 26, 0.95)'
        }}
      >
        <div className="max-w-[1600px] mx-auto text-center">
          <p className="text-[#b0b0b0] text-sm">
            © 2024 Gowtham Valteru. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-[#b0b0b0] text-xs mt-2">
            Designed with a matte black aesthetic for a modern, professional portfolio experience.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
