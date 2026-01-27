import { Briefcase, Calendar, MapPin, Rocket } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer Intern",
      company: "Veridia.io",
      period: "Dec 2025 - Feb 2026",
      location: "Remote",
      highlights: [
        "Built end-to-end ML pipeline to classify 4k+ resumes across 24 job categories achieving 88% accuracy using XGBoost and TF-IDF feature extraction with engineered features",
        "Created a responsive web application and Flask REST API with real-time resume upload, PDF parsing, and classification output",
        "Reduced manual HR resume screening time through automated classification with precision-recall optimization"
      ],
      technologies: ["Python", "XGBoost", "TF-IDF", "Flask", "REST API", "Machine Learning"]
    }
  ];

  return (
    <section id="experience" className="section-container relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #1f1f1f 50%, #1a1a1a 100%)' }}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-1 h-1 rounded-full bg-white/30 float-animation" />
        <div className="absolute top-1/3 right-20 w-2 h-2 rounded-full bg-white/20 float-animation" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-white/25 float-animation" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-white/30 float-animation" style={{ animationDelay: '0.5s' }} />
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, rgba(200,200,200,0.1) 0%, transparent 70%)' }} />
      
      <div className="content-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Rocket className="w-4 h-4 text-white" />
            <span className="text-sm text-[#c0c0c0] font-medium">Professional Journey</span>
          </div>
          <h2
            className="font-black mb-4 gradient-text"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              letterSpacing: '-0.03em'
            }}
          >
            Work Experience
          </h2>
          <p className="text-[#b0b0b0] text-lg max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Professional experience in building AI/ML solutions and software systems
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="group relative rounded-[28px] p-8 fade-in-up overflow-hidden transition-all duration-500 hover:scale-[1.01]"
              style={{
                animationDelay: `${index * 0.15}s`,
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
              }}
            >
              {/* Animated left border */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-[28px] transition-all duration-500"
                style={{
                  background: 'linear-gradient(180deg, #ffffff, #c0c0c0, #808080)',
                }}
              />
              
              {/* Glow effect on hover */}
              <div 
                className="absolute -inset-1 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
                style={{ background: 'radial-gradient(circle at 0% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)' }}
              />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-[#c0c0c0]">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 text-[#b0b0b0] text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#d0d0d0]">
                      <span className="text-white mt-1.5 text-xs">▹</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tech-pill text-xs"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        padding: '0.4rem 0.8rem'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
