import { Trophy } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: "🏆",
      title: "Smart India Hackathon",
      description: "Participated showcasing strong problem-solving and innovation skills",
      color: "from-yellow-500/20 to-orange-500/10"
    },
    {
      icon: "⭐",
      title: "AWS Prompt Engineer Hackathon",
      description: "Ranked among the top 10 participants",
      color: "from-blue-500/20 to-purple-500/10"
    },
    {
      icon: "📚",
      title: "Machine Learning & Data Science",
      description: "Completed comprehensive course from GeeksforGeeks",
      color: "from-green-500/20 to-teal-500/10"
    },
    {
      icon: "💻",
      title: "Open Source Contributor",
      description: "Active contributor to open-source projects and technical communities",
      color: "from-purple-500/20 to-pink-500/10"
    }
  ];

  return (
    <section id="achievements" className="section-container relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #1f1f1f 0%, #050816 50%, #1f1f1f 100%)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-white/20 float-animation" />
        <div className="absolute top-40 right-20 w-1 h-1 rounded-full bg-white/30 float-animation" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 rounded-full bg-white/25 float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-10 w-2 h-2 rounded-full bg-white/15 float-animation" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 rounded-full bg-white/30 float-animation" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, rgba(200,200,200,0.1) 0%, transparent 70%)' }} />
      
      <div className="content-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Trophy className="w-4 h-4 text-white" />
            <span className="text-sm text-[#a5b4fc] font-medium">Recognition</span>
          </div>
          <h2 
            className="font-black mb-4 gradient-text"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              letterSpacing: '-0.03em'
            }}
          >
            Key Achievements
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Highlights that reflect impact, excellence, and dedication
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="group relative rounded-[24px] p-6 fade-in-up overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.1}s`,
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
              }}
            >
              {/* Gradient overlay on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]`}
              />
              
              {/* Glow effect */}
              <div 
                className="absolute -inset-1 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
                style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)' }}
              />
              
              {/* Top accent line */}
              <div 
                className="absolute top-0 left-0 h-[3px] transition-all duration-500 group-hover:w-full rounded-t-[24px]"
                style={{
                  width: '0%',
                  background: 'linear-gradient(90deg, transparent, #ffffff, transparent)',
                }}
              />

              <div className="relative z-10 flex items-start gap-4">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                  }}
                >
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-white transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed group-hover:text-[#a5b4fc] transition-colors">
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
