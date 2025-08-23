import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personalized AI Health Assistant",
      description: "Multimodal AI system integrating NLP (BERT), CNNs, and time-series models for personalized health monitoring and recommendations. Achieved over 90% accuracy in early disease detection.",
      technologies: ["Python", "PyTorch", "BERT", "CNN", "Time-series Analysis", "NLP"],
      period: "Mar 25 - May 25",
      category: "AI/ML",
      highlights: [
        "Implemented multimodal data fusion architecture",
        "90%+ accuracy in early disease detection",
        "Real-time health monitoring capabilities"
      ],
      codeUrl: "https://github.com/ValteruGowtham/Personalized-AI-Health-Assistant-Using-Multimodal-Machine-Learning"
    },
    {
      title: "AI-Powered Research Assistant (RAG System)",
      description: "Domain-specific AI assistant performing retrieval-augmented generation over custom documents like PDFs and websites using FAISS vector database and transformer-based embeddings.",
      technologies: ["Python", "LangChain", "FAISS", "Sentence-BERT", "Hugging Face"],
      period: "Nov 24 - Dec 24",
      category: "AI/ML",
      highlights: [
        "Custom document processing pipeline",
        "Semantic search using FAISS vector database", 
        "LLM-powered Q&A with contextual awareness"
      ],
      codeUrl: "https://github.com/ValteruGowtham/AI-Powered-Research-Assistant-RAG-System"
    },
    {
      title: "Dynamic Route Optimization System",
      description: "City map optimization using weighted graphs and Dijkstra's Algorithm with A* Search for real-time delivery route optimization, showcasing expertise in data structures and algorithms.",
      technologies: ["C++", "Graph Algorithms", "Dijkstra's Algorithm", "A* Search"],
      period: "Jan 25 - Mar 25",
      category: "Algorithms",
      highlights: [
        "Real-time route optimization",
        "Scalable graph-based architecture",
        "Significant delivery time reduction"
      ],
      codeUrl: "https://github.com/ValteruGowtham/Dynamic-Route-Optimization-for-Delivery-Systems"
    },
    {
      title: "AI Interview Coach Web App",
      description: "Full-stack interview simulator generating job-specific questions and evaluating responses using OpenAI GPT-4 API. Features clean Django-based frontend with user authentication.",
      technologies: ["Python", "Django", "OpenAI GPT-4", "JavaScript", "PostgreSQL"],
      period: "Apr 24 - Jun 24",
      category: "Web App",
      highlights: [
        "Job-specific question generation",
        "Real-time response evaluation",
        "User progress tracking and analytics"
      ],
      codeUrl: "https://github.com/ValteruGowtham/AI-Interview-Coach-Web-App"
    },
    {
      title: "Emotion Recognition from Social Media",
      description: "End-to-end emotion recognition system analyzing both visual and audio content from social media videos using Convolutional Neural Networks for facial expression recognition.",
      technologies: ["Python", "OpenCV", "CNN", "TensorFlow", "Computer Vision"],
      period: "Apr 24 - Jun 24",
      category: "Computer Vision",
      highlights: [
        "Multimodal emotion detection",
        "Real-time video processing",
        "High accuracy facial expression recognition"
      ],
      codeUrl: "https://github.com/ValteruGowtham/Emotion-recogination-using-social-media-content-"
    },
    {
      title: "News Article Recommender System",
      description: "Intelligent recommendation system using collaborative filtering (user-based and item-based) and content-based approaches with NLP techniques for content similarity analysis.",
      technologies: ["Python", "Scikit-learn", "NLP", "TF-IDF", "Word2Vec"],
      period: "Nov 24 - Dec 24",
      category: "ML/Recommendation",
      highlights: [
        "Hybrid recommendation approach",
        "Natural language processing for content analysis",
        "Personalized user experience"
      ],
      codeUrl: "https://github.com/ValteruGowtham/News-Article-Recommender"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML": return "from-tech-blue to-tech-purple";
      case "Web App": return "from-tech-green to-tech-cyan";
      case "Computer Vision": return "from-tech-purple to-tech-blue";
      case "Algorithms": return "from-tech-cyan to-tech-green";
      default: return "from-tech-blue to-tech-purple";
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative projects demonstrating expertise in AI/ML, web development, and software engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-card border-border/50 hover:border-tech-blue/50 transition-all duration-300 group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge 
                    className={`bg-gradient-to-r ${getCategoryColor(project.category)} text-white border-none`}
                  >
                    {project.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.period}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-tech-blue transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Key highlights */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-tech-blue">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-tech-green mr-2">▪</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className="text-xs border-tech-blue/30 hover:border-tech-blue/50 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    asChild
                    size="sm" 
                    variant="outline"
                    className="hover:bg-tech-blue/10 hover:border-tech-blue/50"
                  >
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional projects section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Tic-Tac-Toe with AI (Minimax Algorithm)",
                description: "Terminal-based game implementing Minimax algorithm for optimal AI moves",
                tech: ["C++", "Game Theory", "Minimax Algorithm"],
                period: "Oct 24 - Nov 24"
              },
              {
                title: "Student Record Management System",
                description: "Console-based CRUD system using OOP concepts with persistent data storage",
                tech: ["C++", "OOP", "File I/O", "Data Structures"],
                period: "Apr 24 - Jun 24"
              }
            ].map((project, index) => (
              <Card 
                key={project.title}
                className="glass-card border-border/50 hover:border-tech-cyan/50 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-lg">{project.title}</h4>
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;