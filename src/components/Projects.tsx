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

  const otherProjects = [
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
  ];

  return (
    <section className="section-container bg-reverse-dark radial-overlay">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 
            className="font-black mb-4 gradient-text"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              letterSpacing: '-0.03em'
            }}
          >
            Featured Projects
          </h2>
          <p className="text-[#d0d0d0] text-lg max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            A showcase of innovative projects demonstrating expertise in AI/ML, web development, and software engineering
          </p>
        </div>

        {/* Main Projects Grid - 3 columns */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-[20px] p-6 fade-in-up group relative overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Top border accent */}
              <div 
                className="absolute top-0 left-0 right-0 h-[5px] origin-left transition-transform duration-300 group-hover:scale-x-100"
                style={{
                  background: 'linear-gradient(90deg, #ffffff, #e0e0e0, #c0c0c0)',
                  transform: 'scaleX(0.3)'
                }}
              />

              {/* Category Badge & Period */}
              <div className="flex items-start justify-between mb-4 mt-2">
                <span 
                  className="tech-pill"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.75rem',
                    borderRadius: '50px',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {project.category}
                </span>
                <div className="flex items-center gap-1 text-[#b0b0b0] text-xs">
                  <Calendar className="w-3 h-3" />
                  {project.period}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-[1.1rem] mb-3 group-hover:text-[#e0e0e0] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#d0d0d0] text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-4">
                <h4 className="text-[#c0c0c0] font-semibold text-xs mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-[#b0b0b0] text-xs flex items-start">
                      <span className="text-[#c0c0c0] mr-2">▪</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-white font-semibold text-xs mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-white text-[0.7rem] px-2 py-1 rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:bg-white/20"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm px-4 py-2 rounded-full transition-all duration-300 hover:transform hover:-translate-y-1"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Github className="w-4 h-4" />
                View Code
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        {/* Other Projects Section */}
        <div className="text-center mb-12">
          <h3 
            className="text-white font-bold text-2xl mb-8"
            style={{ letterSpacing: '-0.02em' }}
          >
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="rounded-[20px] p-6 fade-in-up transition-all duration-300 hover:transform hover:translateY(-8px) hover:scale-[1.01]"
                style={{
                  animationDelay: `${0.6 + index * 0.1}s`,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  borderLeft: '5px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-white font-semibold text-base">{project.title}</h4>
                  <span className="text-[#b0b0b0] text-xs whitespace-nowrap ml-2">{project.period}</span>
                </div>
                <p className="text-[#d0d0d0] text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-white text-xs px-2 py-1 rounded-full"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
