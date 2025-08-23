import { Card, CardContent } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    "Participated in Smart India Hackathon, showcasing strong problem-solving and innovation skills",
    "Ranked among the top 10 participants in the AWS Prompt Engineer Hackathon",
    "Completed comprehensive Machine Learning and Data Science course from GeeksforGeeks",
    "Active contributor to open-source projects and technical communities",
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Key Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Highlights that reflect impact, excellence, and dedication
          </p>
        </div>

        <Card className="relative overflow-hidden glass-card border border-tech-green/40 hover:border-tech-green/60 transition-all duration-300">
          <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-tech-green/20 via-tech-cyan/10 to-tech-purple/20 blur-2xl opacity-40" />
          <CardContent className="relative p-6">
            <ul className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="text-sm md:text-base text-foreground/90 flex items-start fade-in-up bg-gradient-to-r from-tech-blue/5 to-tech-purple/5 rounded-md p-3 border border-border/40 hover:border-tech-blue/40 hover:shadow-[0_0_22px_rgba(14,165,233,0.35)] transition-all"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-tech-green mr-2 mt-1">⚡</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Achievements;



