import { 
  Code2, Database, Globe, Server, GitBranch, Terminal, 
  Brain, Cloud, FileCode, Settings, Package, Monitor,
  Layers, Users, MessageSquare, Clock, Star, Lightbulb, Zap
} from "lucide-react";

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
    <section id="skills" className="section-container bg-dark-gradient radial-overlay">
      <div className="content-container">
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
          <p className="text-[#d0d0d0] text-lg max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card rounded-[20px] p-6 fade-in-up"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3">
                  <category.icon className="w-6 h-6 text-white" />
                  <h3 className="text-white font-bold text-xl" style={{ letterSpacing: '-0.02em' }}>
                    {category.title}
                  </h3>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="tech-pill flex items-center justify-center gap-2 py-3 px-4 transition-all duration-300 hover:transform hover:-translate-y-2"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '50px'
                    }}
                  >
                    {typeof skill.icon === 'string' ? (
                      <span className="text-lg">{skill.icon}</span>
                    ) : (
                      <skill.icon className="w-4 h-4 text-white" />
                    )}
                    <span className="text-white text-sm font-bold">{skill.name}</span>
                  </div>
                ))}
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
                className="rounded-[20px] p-6 text-center fade-in-up transition-all duration-300 hover:transform hover:-translate-y-8 hover:scale-[1.01]"
                style={{
                  animationDelay: `${0.5 + index * 0.1}s`,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div className="text-5xl mb-4">{spec.icon}</div>
                <h4 className="text-white font-bold text-lg mb-2">{spec.title}</h4>
                <p className="text-[#d0d0d0] text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
