import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, color: "tech-blue" },
        { name: "C++", level: 85, color: "tech-purple" },
        { name: "SQL", level: 80, color: "tech-cyan" },
        { name: "Java", level: 75, color: "tech-green" },
        { name: "JavaScript", level: 80, color: "tech-blue" }
      ]
    },
    {
      title: "Technologies & Frameworks",
      skills: [
        "PyTorch", "Django", "Flask", "LangChain", "Scikit-learn", 
        "Linux", "Jenkins", "React", "Node.js"
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git", "GitHub", "VS Code", "MySQL", "Ollama", "Hugging Face",
        "AWS", "Docker", "Jupyter"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem-Solving", "Team Collaboration", "Communication", 
        "Time Management", "Leadership", "Adaptability"
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
                <CardTitle className="text-xl font-semibold text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.title === "Programming Languages" ? (
                  // Programming languages with progress bars
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  // Other categories with badges
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="px-3 py-1 bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 border-tech-blue/30 hover:from-tech-blue/30 hover:to-tech-purple/30 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
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
