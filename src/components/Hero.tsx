import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
      }}
    >
      {/* Radial gradient overlays */}
      <div className="absolute inset-0 radial-overlay" />
      
      {/* Floating background elements */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 float-animation"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 float-animation"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
          animationDelay: '2s'
        }}
      />
      
      <div className="content-container px-10 relative z-10 w-full">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="space-y-8 fade-in-up text-center">
            {/* Name and Title */}
            <div className="space-y-4">
              <h1 
                className="font-black gradient-text leading-tight"
                style={{ 
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  letterSpacing: '-0.02em'
                }}
              >
                Gowtham Valteru
              </h1>
              <h2 
                className="text-[#e0e0e0] font-semibold"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              >
                AI/ML Engineer & Full Stack Developer
              </h2>
              <p 
                className="text-[#d0d0d0] leading-[1.9] max-w-3xl mx-auto"
                style={{ fontSize: '1.05rem' }}
              >
                Passionate about building intelligent systems and solving real-world problems 
                through innovative machine learning solutions and cutting-edge web technologies.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { icon: "🎓", label: "B.Tech CSE", value: "LPU Punjab" },
                { icon: "🏆", label: "Top 10", value: "AWS Hackathon" },
                { icon: "🚀", label: "6+ Projects", value: "AI/ML & Web" },
                { icon: "⭐", label: "CGPA 7.78", value: "Academic Excellence" }
              ].map((item, index) => (
                <div 
                  key={item.label}
                  className="glass-card-no-hover p-4 rounded-xl fade-in-up"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    borderTop: '5px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-[#b0b0b0] text-xs font-semibold">{item.label}</p>
                      <p className="text-white font-bold text-sm">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative px-10 py-4 bg-white text-[#1a1a1a] rounded-full font-bold overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10">View Projects</span>
                <div 
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-600"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.05) 0%, transparent 70%)'
                  }}
                />
              </button>
              
              <a
                href="/cv.pdf"
                download="Gowtham_Valteru_CV.pdf"
                className="relative px-10 py-4 bg-transparent text-white rounded-full font-bold transition-all duration-300 hover:transform hover:-translate-y-1 hover:bg-white/10"
                style={{
                  border: '2px solid white'
                }}
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              {[
                { Icon: Linkedin, href: "https://linkedin.com/in/gowtham-valteru", label: "LinkedIn" },
                { Icon: Github, href: "https://github.com/ValteruGowtham", label: "GitHub" },
                { Icon: Mail, href: "mailto:gowtham.valteru05@gmail.com", label: "Email" }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-white/40"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}
                  title={label}
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;