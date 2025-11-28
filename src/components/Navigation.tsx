import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
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
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(26, 26, 26, 0.95)' : 'rgba(26, 26, 26, 0.8)',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        borderBottom: '1px solid rgba(80, 80, 80, 0.3)',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none'
      }}
    >
      <div className="max-w-[1600px] mx-auto px-10">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#about')}
            className="flex items-center group cursor-pointer"
          >
            <span 
              className="text-2xl font-bold gradient-text"
              style={{ letterSpacing: '0.05em' }}
            >
              Gowtham Valteru
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative text-[#e0e0e0] hover:text-white transition-all duration-300 font-medium group"
              >
                {item.label}
                <span 
                  className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-white to-[#e0e0e0] transition-all duration-300 group-hover:w-full"
                />
              </button>
            ))}
            <a
              href="/cv.pdf"
              download="Gowtham_Valteru_CV.pdf"
              className="relative px-8 py-3 bg-white text-[#1a1a1a] rounded-full font-semibold overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,255,255,0.3)]"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <span className="relative z-10">Download CV</span>
              <div 
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-600"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)'
                }}
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-[#c0c0c0] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className="md:hidden absolute top-full left-0 right-0 border-t"
            style={{
              background: 'rgba(26, 26, 26, 0.98)',
              backdropFilter: 'blur(25px)',
              WebkitBackdropFilter: 'blur(25px)',
              borderColor: 'rgba(80, 80, 80, 0.3)'
            }}
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-[#e0e0e0] hover:text-white transition-colors font-medium py-3 border-b border-white/10"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/cv.pdf"
                download="Gowtham_Valteru_CV.pdf"
                className="block w-full text-center px-8 py-3 bg-white text-[#1a1a1a] rounded-full font-semibold mt-4"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;