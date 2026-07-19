import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      cgpa: "7.78",
      period: "Aug 2022 - Present",
      location: "Phagwara, Punjab",
      status: "Current",
      type: "🎓"
    },
    {
      institution: "VDA Junior College",
      degree: "Intermediate",
      field: "Science",
      cgpa: "95.4%",
      period: "Jun 2020 - Mar 2022",
      location: "Vizag, Andhra Pradesh",
      status: "Completed",
      type: "📚"
    },
    {
      institution: "SASI E.M HIGH School",
      degree: "Secondary Education",
      field: "General",
      cgpa: "100%",
      period: "Jun 2019 - Mar 2020",
      location: "Tanuku, Andhra Pradesh",
      status: "Completed",
      type: "🏫"
    }
  ];

  const certificates = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Dec 2024",
      type: "Professional"
    },
    {
      title: "Generative AI",
      issuer: "Coursera",
      date: "Jun 2024",
      type: "Professional"
    },
    {
      title: "Advanced Python",
      issuer: "Udemy",
      date: "Mar 2024",
      type: "Technical"
    }
  ];

  return (
    <section id="education" className="section-container relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #1f1f1f 0%, #050816 50%, #1f1f1f 100%)' }}>
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-1.5 h-1.5 rounded-full bg-white/25 float-animation" />
        <div className="absolute top-1/3 left-10 w-1 h-1 rounded-full bg-white/30 float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-white/15 float-animation" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-1 h-1 rounded-full bg-white/20 float-animation" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, rgba(200,200,200,0.1) 0%, transparent 70%)' }} />
      
      <div className="content-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <BookOpen className="w-4 h-4 text-white" />
            <span className="text-sm text-[#a5b4fc] font-medium">Learning Path</span>
          </div>
          <h2 
            className="font-black mb-4 gradient-text"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              letterSpacing: '-0.03em'
            }}
          >
            Education
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Academic journey and professional certifications that shaped my expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline - 2/3 width */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-7 h-7 text-white" />
              <h3 className="text-white font-bold text-2xl" style={{ letterSpacing: '-0.02em' }}>
                Academic Background
              </h3>
            </div>
            
            <div className="relative space-y-6">
              {/* Timeline Line */}
              <div 
                className="absolute left-[31px] top-8 bottom-8 w-[3px] rounded-full"
                style={{
                  background: 'linear-gradient(180deg, #ffffff, #c7d2fe, transparent)',
                }}
              />

              {education.map((edu, index) => (
                <div key={edu.institution} className="relative flex gap-6 fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Icon */}
                  <div 
                    className="relative flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl pulse-animation transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff, #c7d2fe)',
                      color: '#050816',
                      boxShadow: '0 8px 32px rgba(255, 255, 255, 0.3), 0 0 0 0 rgba(255, 255, 255, 0.4)',
                      zIndex: 1
                    }}
                  >
                    {edu.type}
                  </div>

                  {/* Content Card */}
                  <div 
                    className="flex-1 rounded-[20px] p-6 transition-all duration-300 group-hover:transform group-hover:-translate-y-3 group-hover:translate-x-2"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      borderLeft: '5px solid rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-lg mb-1">{edu.institution}</h4>
                        <p className="text-[#c7d2fe] font-semibold text-sm mb-1">
                          {edu.degree} - {edu.field}
                        </p>
                        <div className="flex items-center gap-1 text-[#94a3b8] text-sm">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2"
                          style={{
                            background: edu.status === 'Current' 
                              ? 'rgba(76, 175, 80, 0.2)' 
                              : 'rgba(255, 255, 255, 0.1)',
                            color: edu.status === 'Current' ? '#4caf50' : '#ffffff',
                            border: edu.status === 'Current'
                              ? '1px solid rgba(76, 175, 80, 0.4)'
                              : '1px solid rgba(255, 255, 255, 0.2)'
                          }}
                        >
                          {edu.status}
                        </span>
                        <div className="flex items-center gap-1 text-[#94a3b8] text-xs justify-end">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <span className="text-[#94a3b8] text-sm">Percentage:</span>
                      <span className="text-white font-bold text-lg">{edu.cgpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Training - 1/3 width */}
          <div className="space-y-8">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-white" />
                <h3 className="text-white font-bold text-xl" style={{ letterSpacing: '-0.02em' }}>
                  Certifications
                </h3>
              </div>
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <div 
                    key={cert.title}
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
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="text-white font-semibold text-sm flex-1">{cert.title}</h4>
                        <span 
                          className="px-2 py-1 rounded-full text-xs font-bold"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                          }}
                        >
                          {cert.type}
                        </span>
                      </div>
                      <p className="text-[#c7d2fe] font-medium text-sm">{cert.issuer}</p>
                      <p className="text-[#94a3b8] text-xs">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Training */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Specialized Training</h3>
              <div 
                className="relative overflow-hidden rounded-[16px] p-5"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div 
                  className="pointer-events-none absolute -inset-1 opacity-40 blur-2xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)'
                  }}
                />
                <div className="relative space-y-2">
                  <h4 className="text-white font-bold text-sm">
                    Complete Machine Learning and Data Science
                  </h4>
                  <p className="text-[#94a3b8] text-xs">
                    GeeksforGeeks • May 2024 - Jun 2024
                  </p>
                  <p className="text-[#cbd5e1] text-xs leading-relaxed mt-2">
                    Comprehensive course covering data preprocessing, feature engineering, 
                    model optimization, and real-world problem-solving using Python.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
