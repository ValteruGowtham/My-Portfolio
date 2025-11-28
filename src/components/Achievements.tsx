const Achievements = () => {
  const achievements = [
    {
      icon: "🏆",
      title: "Smart India Hackathon",
      description: "Participated showcasing strong problem-solving and innovation skills"
    },
    {
      icon: "⭐",
      title: "AWS Prompt Engineer Hackathon",
      description: "Ranked among the top 10 participants"
    },
    {
      icon: "📚",
      title: "Machine Learning & Data Science",
      description: "Completed comprehensive course from GeeksforGeeks"
    },
    {
      icon: "💻",
      title: "Open Source Contributor",
      description: "Active contributor to open-source projects and technical communities"
    }
  ];

  return (
    <section id="achievements" className="section-container bg-reverse-dark radial-overlay">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 
            className="font-black mb-4 gradient-text"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              letterSpacing: '-0.03em'
            }}
          >
            Key Achievements
          </h2>
          <p className="text-[#d0d0d0] text-lg max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Highlights that reflect impact, excellence, and dedication
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="rounded-[20px] p-6 fade-in-up group transition-all duration-300 hover:transform hover:-translate-y-3 hover:scale-[1.01]"
              style={{
                animationDelay: `${index * 0.1}s`,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                borderTop: '5px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#e0e0e0] transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-[#d0d0d0] text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
