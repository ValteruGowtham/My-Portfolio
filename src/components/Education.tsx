import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

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
      type: "university"
    },
    {
      institution: "VDA Junior College",
      degree: "Intermediate",
      field: "Science",
      cgpa: "9.7",
      period: "Jun 2020 - Mar 2022",
      location: "Vizag, Andhra Pradesh",
      status: "Completed",
      type: "college"
    },
    {
      institution: "SASI E.M HIGH School",
      degree: "Secondary Education",
      field: "General",
      cgpa: "10.0",
      period: "Jun 2019 - Mar 2020",
      location: "Tanuku, Andhra Pradesh",
      status: "Completed",
      type: "school"
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

  const achievements = [
    "Participated in Smart India Hackathon, showcasing strong problem-solving and innovation skills",
    "Ranked among the top 10 participants in the AWS Prompt Engineer Hackathon",
    "Completed comprehensive Machine Learning and Data Science course from GeeksforGeeks",
    "Active contributor to open-source projects and technical communities"
  ];

  const getStatusColor = (status: string) => {
    return status === "Current" ? "tech-green" : "tech-blue";
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case "university": return "🎓";
      case "college": return "📚";
      case "school": return "🏫";
      default: return "🎓";
    }
  };

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education & Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey and professional certifications that shaped my expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-tech-blue" />
                Academic Background
              </h3>
              
              {education.map((edu, index) => (
                <Card 
                  key={edu.institution}
                  className="glass-card border-border/50 hover:border-tech-blue/50 transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{getTypeIcon(edu.type)}</div>
                        <div>
                          <CardTitle className="text-lg font-bold">
                            {edu.institution}
                          </CardTitle>
                          <p className="text-tech-blue font-semibold">
                            {edu.degree} - {edu.field}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            📍 {edu.location}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          className={`bg-gradient-to-r from-${getStatusColor(edu.status)} to-${getStatusColor(edu.status)}/80 text-white border-none mb-2`}
                        >
                          {edu.status}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">CGPA:</span>
                      <span className="text-lg font-bold text-tech-green">
                        {edu.cgpa}/10.0
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certificates & Achievements */}
          <div className="space-y-8">
            {/* Certificates */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-tech-purple" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <Card 
                    key={cert.title}
                    className="glass-card border-border/50 hover:border-tech-purple/50 transition-all duration-300 fade-in-up"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <h4 className="font-semibold text-sm">{cert.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {cert.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-tech-purple font-medium">
                          {cert.issuer}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {cert.date}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                Key Achievements
              </h3>
              <Card className="glass-card border-border/50">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <li 
                        key={index}
                        className="text-sm text-muted-foreground flex items-start fade-in-up"
                        style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                      >
                        <span className="text-tech-green mr-2 mt-1">▪</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Training */}
            <div>
              <h3 className="text-xl font-bold mb-4">Specialized Training</h3>
              <Card className="glass-card border-border/50">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-tech-blue">
                        Complete Machine Learning and Data Science
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        GeeksforGeeks • May 2024 - Jun 2024
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Comprehensive course covering data preprocessing, feature engineering, 
                        model optimization, and real-world problem-solving using Python.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;