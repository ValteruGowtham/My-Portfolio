import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ["about", "skills", "experience", "projects", "education", "achievements", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-500"
      style={{
        background: scrolled 
          ? 'linear-gradient(135deg, rgba(26, 26, 26, 0.98) 0%, rgba(45, 45, 45, 0.95) 100%)' 
          : 'rgba(26, 26, 26, 0.6)',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
        boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)' : 'none'
      }}
    >
      {/* Animated gradient line at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          animation: 'shimmerNav 3s ease-in-out infinite'
        }}
      />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[70px]">
          {/* Animated Logo */}
          <button 
            onClick={() => scrollToSection('#about')}
            className="flex items-center gap-2 group cursor-pointer relative"
          >
            {/* Glow effect behind logo */}
            <div 
              className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }}
            />
            <div className="relative flex items-center gap-2">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                }}
              >
                <span className="text-white font-black text-lg">VG</span>
              </div>
              <div className="hidden sm:block">
                <span 
                  className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                  style={{ 
                    letterSpacing: '0.02em',
                  }}
                >
                  <span className="group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-300 group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent">Valteru Gowtham</span>
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-4 py-2 rounded-full transition-all duration-300 font-medium group"
                  style={{
                    color: isActive ? '#ffffff' : '#94a3b8',
                    background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent'
                  }}
                >
                  <span className="relative z-10 text-sm">{item.label}</span>
                  {/* Hover background */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(255,255,255,0.08)' }}
                  />
                  {/* Active indicator dot */}
                  {isActive && (
                    <span 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white"
                      style={{ boxShadow: '0 0 8px rgba(255,255,255,0.8)' }}
                    />
                  )}
                </button>
              );
            })}
            <a
              href="/cv.pdf"
              download="Valteru_Gowtham_CV.pdf"
              className="relative ml-4 px-6 py-2.5 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 group"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #c7d2fe 100%)',
                color: '#050816',
                boxShadow: '0 4px 15px rgba(255,255,255,0.2)'
              }}
            >
              <span className="relative z-10 flex items-center gap-2 text-sm">
                <Sparkles className="w-4 h-4" />
                Download CV
              </span>
              {/* Animated shine effect */}
              <div 
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                }}
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 rounded-xl transition-all duration-300 hover:bg-white/10"
            style={{
              border: '1px solid rgba(255,255,255,0.1)'
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{
            background: 'linear-gradient(180deg, rgba(26, 26, 26, 0.98) 0%, rgba(35, 35, 35, 0.98) 100%)',
            backdropFilter: 'blur(25px)',
            WebkitBackdropFilter: 'blur(25px)',
            borderBottom: isOpen ? '1px solid rgba(255,255,255,0.1)' : 'none'
          }}
        >
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center w-full text-left py-3 px-4 rounded-xl transition-all duration-300"
                  style={{
                    color: isActive ? '#ffffff' : '#94a3b8',
                    background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent'
                  }}
                >
                  {isActive && <span className="w-2 h-2 rounded-full bg-white mr-3" style={{ boxShadow: '0 0 8px rgba(255,255,255,0.8)' }} />}
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
            <a
              href="/cv.pdf"
              download="Valteru_Gowtham_CV.pdf"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 mt-4 rounded-xl font-semibold transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #c7d2fe 100%)',
                color: '#050816'
              }}
            >
              <Sparkles className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>
      </div>
      
      {/* CSS for nav shimmer animation */}
      <style>{`
        @keyframes shimmerNav {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;