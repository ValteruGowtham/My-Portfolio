import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gowtham.valteru05@gmail.com",
      link: "mailto:gowtham.valteru05@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7989178386",
      link: "tel:+917989178386"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Eluru, Andhra Pradesh 522107",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ValteruGowtham",
      link: "https://github.com/ValteruGowtham"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/gowtham-valteru",
      link: "https://linkedin.com/in/gowtham-valteru"
    }
  ];

  return (
    <section id="contact" className="section-container bg-dark-gradient radial-overlay">
      <div className="content-container max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 
            className="font-black mb-4 gradient-text"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              letterSpacing: '-0.03em'
            }}
          >
            Get In Touch
          </h2>
          <p className="text-[#d0d0d0] text-lg max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Let's discuss opportunities, collaborations, or just have a tech conversation!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information (left) */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-2xl mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div 
                  key={contact.label}
                  className="rounded-[20px] p-5 fade-in-up transition-all duration-300 hover:transform hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))'
                      }}
                    >
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#b0b0b0] text-sm font-semibold mb-1">{contact.label}</p>
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          className="text-white hover:text-[#e0e0e0] transition-colors break-words"
                          target={contact.link.startsWith('http') ? '_blank' : undefined}
                          rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white break-words">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-white font-bold text-lg mb-4">Connect With Me</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <div 
                    key={social.label}
                    className="rounded-[16px] p-4 fade-in-up transition-all duration-300 hover:transform hover:-translate-y-2"
                    style={{
                      animationDelay: `${0.3 + index * 0.1}s`,
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <a 
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))'
                        }}
                      >
                        <social.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold text-sm mb-1">{social.label}</p>
                        <p className="text-[#b0b0b0] text-xs group-hover:text-white transition-colors">
                          {social.value}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form (right) */}
          <div 
            className="rounded-[20px] p-8 fade-in-right"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            <h3 className="text-white font-bold text-2xl mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[#e0e0e0] text-sm font-semibold">Name</label>
                  <input 
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:ring-2 transition-all"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      focusRing: '2px solid rgba(255, 255, 255, 0.3)'
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[#e0e0e0] text-sm font-semibold">Email</label>
                  <input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:ring-2 transition-all"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[#e0e0e0] text-sm font-semibold">Subject</label>
                <input 
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:ring-2 transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[#e0e0e0] text-sm font-semibold">Message</label>
                <textarea 
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:ring-2 transition-all resize-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />
              </div>
              
              <button 
                type="submit"
                className="w-full px-10 py-4 bg-white text-[#1a1a1a] rounded-full font-bold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[#b0b0b0] text-sm">
                Or reach out directly via{" "}
                <a 
                  href="mailto:gowtham.valteru05@gmail.com"
                  className="text-white hover:text-[#e0e0e0] underline transition-colors"
                >
                  email
                </a>
                {" "}for faster response
              </p>
            </div>
          </div>
        </div>

        {/* Availability Status */}
        <div 
          className="relative overflow-hidden mt-12 rounded-[20px] p-6 text-center"
          style={{
            background: 'rgba(76, 175, 80, 0.08)',
            border: '1px solid rgba(76, 175, 80, 0.3)'
          }}
        >
          <div 
            className="pointer-events-none absolute -inset-1 opacity-40 blur-2xl"
            style={{
              background: 'radial-gradient(circle, rgba(76, 175, 80, 0.15) 0%, transparent 70%)'
            }}
          />
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-green-400 pulse-animation" />
              <h4 className="text-green-400 font-bold text-lg">Currently Available</h4>
            </div>
            <p className="text-[#d0d0d0] text-sm mb-4">
              Open to new opportunities in AI/ML engineering, full-stack development, and innovative tech projects. Let's build something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span 
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  background: 'rgba(76, 175, 80, 0.2)',
                  color: '#4caf50',
                  border: '1px solid rgba(76, 175, 80, 0.4)'
                }}
              >
                Full-time positions
              </span>
              <span 
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                Internships
              </span>
              <span 
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                Freelance projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
