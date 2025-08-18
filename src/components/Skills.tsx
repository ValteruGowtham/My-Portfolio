import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, Database, Globe, Server, GitBranch, Terminal, 
  Cpu, Brain, Cloud, Smartphone, Monitor, FileCode,
  Settings, Wrench, Zap, Shield, Package, Layers,
  Users, Clock, MessageSquare, Target, Lightbulb, Star
} from "lucide-react";

const Skills = () => {
  // Icon mapping for technologies and tools
  const getSkillIcon = (skillName: string) => {
    const iconMap: Record<string, any> = {
      // Technologies & Frameworks
      "PyTorch": Brain,
      "Django": Globe,
      "Flask": Server,
      "LangChain": Layers,
      "Scikit-learn": Brain,
      "Linux": Terminal,
      "Jenkins": Settings,
      "React": Code2,
      "Node.js": Server,
      
      // Tools & Platforms
      "Git": GitBranch,
      "GitHub": GitBranch,
      "VS Code": FileCode,
      "MySQL": Database,
      "Ollama": Brain,
      "Hugging Face": Brain,
      "AWS": Cloud,
      "Docker": Package,
      "Jupyter": Monitor,
      
      // Soft Skills
      "Problem-Solving": Lightbulb,
      "Team Collaboration": Users,
      "Communication": MessageSquare,
      "Time Management": Clock,
      "Leadership": Star,
      "Adaptability": Zap
    };
    
    return iconMap[skillName] || Code2;
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Python", level: 90, color: "tech-blue", icon: "🐍" },
        { name: "C++", level: 85, color: "tech-purple", icon: "⚡" },
        { name: "SQL", level: 80, color: "tech-cyan", icon: "🗃️" },
        { name: "Java", level: 75, color: "tech-green", icon: "☕" },
        { name: "JavaScript", level: 80, color: "tech-blue", icon: "🟨" }
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
        { name: "Jenkins", icon: Settings },
        { name: "React", icon: Code2 },
        { name: "Node.js", icon: Server }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
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

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass-card border-border/50 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center flex items-center justify-center gap-3">
                  <category.icon className="w-6 h-6 text-tech-blue" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.title === "Programming Languages" ? (
                  // Programming languages with emojis only
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-tech-blue/10 to-tech-purple/10 border border-tech-blue/20 hover:from-tech-blue/20 hover:to-tech-purple/20 hover:border-tech-blue/40 transition-all duration-300 group"
                      >
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium truncate">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Other categories with icons and badges
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-tech-blue/10 to-tech-purple/10 border border-tech-blue/20 hover:from-tech-blue/20 hover:to-tech-purple/20 hover:border-tech-blue/40 transition-all duration-300 group"
                      >
                        <skill.icon className="w-4 h-4 text-tech-blue group-hover:text-tech-purple transition-colors" />
                        <span className="text-sm font-medium truncate">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Core Specializations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
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
            ].map((spec, index) => (
              <Card 
                key={spec.title}
                className="glass-card border-border/50 hover:border-tech-blue/50 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{spec.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{spec.title}</h4>
                  <p className="text-muted-foreground text-sm">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
