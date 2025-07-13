import { Code, Shield, Database, Globe, Smartphone, Server } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React", percentage: 90 },
        { name: "TypeScript", percentage: 85 },
        { name: "HTML/CSS", percentage: 95 },
        { name: "JavaScript", percentage: 90 },
        { name: "Tailwind CSS", percentage: 80 }
      ],
      tags: ["React", "TypeScript", "HTML", "CSS", "JavaScript", "Tailwind"]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", percentage: 85 },
        { name: "Express.js", percentage: 80 },
        { name: "Spring Boot", percentage: 20 },
        { name: "REST APIs", percentage: 85 }
      ],
      tags: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "Flutter", percentage: 80 },
        { name: "Dart", percentage: 75 },
        { name: "Andriod Development", percentage: 50 },
        { name: "Firebase", percentage: 85 }
      ],
      tags: ["Flutter", "Dart", "Andriod Development", "Firebase"]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: [
        { name: "Penetration Testing", percentage: 85 },
        { name: "Network Security", percentage: 80 },
        { name: "Cryptography", percentage: 75 },
        { name: "Security Tools", percentage: 90 }
      ],
      tags: ["Penetration Testing", "Network Security", "Cryptography", "Security Tools"]
    },
    {
      title: "DevOps & Tools",
      icon: Code,
      skills: [
        { name: "Git", percentage: 90 },
        { name: "Docker", percentage: 50 },
        { name: "Linux", percentage: 70 },
        { name: "CI/CD", percentage: 35 }
      ],
      tags: ["Git", "Docker", "Linux", "CI/CD"]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "MongoDB", percentage: 75 },
        { name: "PostgreSQL", percentage: 50 },
        { name: "Firebase", percentage: 85 },
        { name: "AWS", percentage: 25 },
        { name: "Google Cloud", percentage: 25 }
      ],
      tags: ["MongoDB","PostgreSQL", "Firebase", "AWS", "Google Cloud"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="about-container">
        <h2 className="section-title animate-fade-in-up">
          <span className="section-title-bracket">&lt;</span>
          Skills & Technologies
          <span className="section-title-bracket"> /&gt;</span>
        </h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="skill-category animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  <category.icon size={24} />
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>

              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-bar-fill"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="skill-tags">
                {category.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-philosophy animate-fade-in-scale delay-700">
          <div className="skills-philosophy-card">
            <h4>💡 Learning Philosophy</h4>
            <p>
              "Technology evolves rapidly, but the fundamentals remain constant. I focus on understanding core concepts 
              while staying adaptable to new tools and frameworks. Every skill is a building block for the next innovation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 