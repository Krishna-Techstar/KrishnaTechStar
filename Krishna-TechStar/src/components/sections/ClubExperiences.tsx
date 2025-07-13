
import { Users, Trophy, Code, Globe } from "lucide-react";

export const ClubExperiences = () => {
  const experiences = [
    {
      title: "BETA Student Council",
      role: "Co-Coordinator",
      duration: "2023 - Present",
      icon: Trophy,
      color: "#8b5cf6",
      achievements: [
        "Joined as Member, later promoted to Co-Coordinator",
        "Took complete responsibility for Free Fire esports event — from planning to execution",
        "Contributed to events like FIFA, BGMI, Valorant, CODM, Blawal Hallo",
        "Handled livestreaming, in-game technical coordination, and crowd control",
        "Designed promotional material, did editing, and managed PR",
        "Balanced between creative work, operations, and execution under pressure"
      ]
    },
    {
      title: "GeeksforGeeks Student Chapter",
      role: "Technical Co-Head",
      duration: "2023 - Present",
      icon: Code,
      color: "#10b981",
      achievements: [
        "Started as Technical Executive, promoted to Technical Co-Head",
        "Managed end-to-end technical operations for major events",
        "Led PR campaigns, boosting Code Relay registrations from 5 to 25+ teams",
        "Executed tasks like form creation, backend troubleshooting, live fixes, and cross-team coordination",
        "Balanced technical setup with public relations, improving event visibility and engagement",
        "Handled DevWithAI Hackathon promotions, bringing in 15+ participants in 1 day"
      ]
    },
    {
      title: "HackWithIndia Chapter",
      role: "PR and Sponsorship Head",
      duration: "2024 - Present",
      icon: Users,
      color: "#f59e0b",
      achievements: [
        "Recently joined as PR and Sponsorship Head",
        "Currently preparing to contribute towards event outreach, brand partnerships, and participant engagement strategies",
        "Looking forward to building strong communication channels and maximizing visibility for upcoming events"
      ]
    },
    {
      title: "ACM Student Chapter",
      role: "Frontend Developer",
      duration: "2023 - Present",
      icon: Globe,
      color: "#3b82f6",
      achievements: [
        "Worked on the frontend and UI/UX of the official ACM website",
        "Contributed to responsive layout development and user interface refinements",
        "Maintained design consistency and optimized user experience"
      ]
    }
  ];

  return (
    <section id="club-experiences" className="club-experience-section">
      <div className="about-container">
        <h2 className="section-title animate-fade-in-up">
          <span className="section-title-bracket">&lt;</span>
          Club Experiences
          <span className="section-title-bracket"> /&gt;</span>
        </h2>

        <div className="club-experience-grid">
          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className={`club-experience-card animate-fade-in-scale delay-${(index % 3 + 1) * 200}`}
            >
              <div className="club-experience-header">
                <div className="club-experience-main">
                  <div 
                    className="club-experience-icon"
                    style={{ backgroundColor: experience.color }}
                  >
                    <experience.icon size={24} color="white" />
                  </div>
                  <div className="club-experience-info">
                    <h3>{experience.title}</h3>
                    <div className="club-experience-role">{experience.role}</div>
                    <div className="club-experience-duration">{experience.duration}</div>
                  </div>
                </div>
              </div>

              <div className="club-experience-content">
                <div className="club-experience-description">
                  <div className="club-experience-achievements">
                    <ul>
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="club-experience-philosophy animate-fade-in-up delay-700">
          <div className="club-experience-philosophy-card">
            <h4>🎯 Leadership Philosophy</h4>
            <p>
              "Success in student organizations isn't just about technical skills — it's about 
              balancing multiple responsibilities, managing teams under pressure, and delivering 
              results while maintaining creativity and innovation. Every role has taught me the 
              importance of adaptability, clear communication, and leading by example."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
