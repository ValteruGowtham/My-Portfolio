import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Achievements from "@/components/Achievements";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: '#050816' }}>
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      
      {/* Footer */}
      <footer 
        className="relative py-12 px-10 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #050816 0%, #151515 100%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        {/* Subtle gradient line at top */}
        <div 
          className="absolute top-0 left-1/4 right-1/4 h-[1px]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }}
        />
        
        <div className="max-w-[1600px] mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <span className="text-white font-bold text-sm">VG</span>
            </div>
            <span className="text-white font-semibold">Valteru Gowtham</span>
          </div>
          <p className="text-[#64748b] text-sm mb-2">
            Software Developer & AI/ML Engineer
          </p>
          <p className="text-[#475569] text-xs">
            © 2026 • Built with React, TypeScript, Three.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
