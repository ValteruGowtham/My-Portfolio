import { 
  Code2, Database, Globe, Server, GitBranch, Terminal, 
  Brain, Cloud, FileCode, Settings, Package, Monitor,
  Layers, Users, MessageSquare, Clock, Star, Lightbulb, Zap
} from "lucide-react";
import ThreeSkillsScene from "./ThreeSkillsScene";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "C++", icon: "⚡" },
        { name: "SQL", icon: "🗃️" },
        { name: "Java", icon: "☕" }
      ]
    },
    {
      title: "Technologies & Frameworks",
      icon: Layers,
      skills: [
        { name: "PyTorch", icon: Brain },
        { name: "Django", icon: Globe },
        { name: "Flask", icon: Server },
        { name: "LangChain", icon: Layers },
        { name: "Scikit-learn", icon: Brain },
        { name: "Linux", icon: Terminal },
        { name: "Jenkins", icon: Settings }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "GitHub", icon: GitBranch },
        { name: "VS Code", icon: FileCode },
        { name: "MySQL", icon: Database },
        { name: "Ollama", icon: Brain },
        { name: "Hugging Face", icon: Brain },
        { name: "AWS", icon: Cloud },
        { name: "Docker", icon: Package },
        { name: "Jupyter", icon: Monitor }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Problem-Solving", icon: Lightbulb },
        { name: "Team Collaboration", icon: Users },
        { name: "Communication", icon: MessageSquare },
        { name: "Time Management", icon: Clock },
        { name: "Leadership", icon: Star },
        { name: "Adaptability", icon: Zap }
      ]
    }
  ];

  const specializations = [
    {
      title: "Machine Learning & AI",
      description: "Deep learning, NLP, computer vision, and intelligent systems",
      icon: "🤖"
    },
    {
      title: "Web Development",
      description: "Full-stack development with modern frameworks and technologies",
      icon: "🌐"
    },
    {
      title: "Data Science",
      description: "Data analysis, visualization, and predictive modeling",
      icon: "📊"
    }
  ];

  return (
    <section id="skills" className="section-container relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050816 0%, #252525 50%, #050816 100%)' }}>
      {/* 3D Background */}
      <ThreeSkillsScene />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-10 float-animation" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10 float-animation" style={{ background: 'radial-gradient(circle, rgba(200,200,200,0.2) 0%, transparent 70%)', animationDelay: '3s' }} />
      
      <div className="content-container relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="font-black mb-4 gradient-text"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              letterSpacing: '-0.03em'
            }}
          >
            Technical Skills
          </h2>
          <p className="text-[#cbd5e1] text-lg max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group relative rounded-[20px] p-6 fade-in-up overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
              }}
            >
              {/* Animated border gradient */}
              <div 
                className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
                  padding: '1px'
                }}
              />
              
              {/* Glow effect on hover */}
              <div 
                className="absolute -inset-1 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)' }}
              />

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3">
                    <div 
                      className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)' }}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-xl" style={{ letterSpacing: '-0.02em' }}>
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group/skill relative flex items-center justify-center gap-2 py-3 px-4 rounded-full transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                      style={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        animationDelay: `${skillIndex * 0.05}s`
                      }}
                    >
                      {/* Shine effect */}
                      <div 
                        className="absolute inset-0 -translate-x-full group-hover/skill:translate-x-full transition-transform duration-700"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }}
                      />
                      {typeof skill.icon === 'string' ? (
                        <span className="text-lg">{skill.icon}</span>
                      ) : (
                        <skill.icon className="w-4 h-4 text-white" />
                      )}
                      <span className="text-white text-sm font-bold relative z-10">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="text-center mb-12">
          <h3 
            className="text-white font-bold text-2xl mb-8"
            style={{ letterSpacing: '-0.02em' }}
          >
            Core Specializations
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <div 
                key={spec.title}
                className="group relative rounded-[20px] p-8 text-center fade-in-up overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-4"
                style={{
                  animationDelay: `${0.5 + index * 0.1}s`,
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                }}
              >
                {/* Animated background gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 60%)'
                  }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="inline-block text-5xl mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                    style={{ filter: 'drop-shadow(0 4px 20px rgba(255,255,255,0.3))' }}
                  >
                    {spec.icon}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{spec.title}</h4>
                  <p className="text-[#94a3b8] text-sm">{spec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
