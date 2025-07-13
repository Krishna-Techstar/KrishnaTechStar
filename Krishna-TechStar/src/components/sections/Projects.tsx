
import { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import "@/styles/custom.css";

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Personal Server Setup",
      description: "Converted old gaming laptop into self-hosted server with custom Linux configuration",
      detailedDescription: "Built a complete self-hosting solution using Arch Linux, configured web services, file sharing, and remote access. Implemented security hardening and automated backup systems.",
      techStack: ["Linux", "Docker", "Nginx", "SSH", "Shell Scripting"],
      githubUrl: "#",
      liveUrl: null,
      status: "Ongoing"
    },
    {
      title: "Flutter Cross-Platform App",
      description: "Mobile application built with Flutter and Firebase backend",
      detailedDescription: "Developed a cross-platform mobile app with real-time data synchronization, user authentication, and cloud storage. Implemented responsive UI and offline functionality.",
      techStack: ["Flutter", "Dart", "Firebase", "Firestore", "Cloud Functions"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Ongoing"
    },
    {
      title: "ACM Web Application",
      description: "Full-stack web application with modern React frontend and Express backend",
      detailedDescription: "Created a complete web application with user authentication, CRUD operations, real-time updates, and responsive design. Deployed using modern DevOps practices.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
      githubUrl: "https://github.com/Krishna-Techstar/ACM-WEBSITE",
      liveUrl: "https://acm-website-seven.vercel.app/",
      status: "Completed"
    },
    {
      title: "Cybersecurity Tools Collection",
      description: "Custom penetration testing and security analysis tools",
      detailedDescription: "Developed various cybersecurity tools including network scanners, vulnerability assessments, and automated security reports. All tools are ethical and educational.",
      techStack: ["Python", "Bash", "Nmap", "Wireshark", "Metasploit"],
      githubUrl: "#",
      liveUrl: null,
      status: "Ongoing"
    },
    {
      title: "Spring Boot Microservices",
      description: "Learning project exploring microservices architecture",
      detailedDescription: "Currently building a microservices-based application to understand distributed systems, API gateway patterns, and service communication.",
      techStack: ["Spring Boot", "Java", "MySQL", "Docker", "Eureka"],
      githubUrl: "#",
      liveUrl: null,
      status: "In Progress"
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };



  return (
    <section id="projects" className="projects-section">
      <div className="about-container">
        <h2 className="section-title animate-fade-in-up">
          <span className="section-title-bracket">&lt;</span>
          Projects
          <span className="section-title-bracket"> /&gt;</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card animate-fade-in-scale delay-${(index % 3 + 1) * 200}`}
            >
              <div className="project-card-header">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 className="project-card-title">{project.title}</h3>
                  <div 
                    style={{ 
                      width: '12px', 
                      height: '12px', 
                      borderRadius: '50%',
                      backgroundColor: project.status === 'Completed' ? 'var(--accent-color)' : 
                                     project.status === 'In Progress' ? '#eab308' : 'var(--primary-color)'
                    }}
                  ></div>
                </div>
                <p className="project-card-description">{project.description}</p>
              </div>
              
              <div className="project-card-content">
                {/* Tech Stack */}
                <div className="project-tech-stack">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="project-tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expanded Details */}
                {expandedProject === index && (
                  <div style={{ 
                    marginBottom: '1rem', 
                    padding: '0.75rem', 
                    backgroundColor: 'var(--background-secondary)', 
                    borderRadius: 'var(--border-radius)', 
                    border: '1px solid var(--border-color)' 
                  }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>{project.detailedDescription}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                    style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
                  >
                    <Github size={16} style={{ marginRight: '0.25rem' }} />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-primary"
                      style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
                    >
                      <ExternalLink size={16} style={{ marginRight: '0.25rem' }} />
                      Live
                    </a>
                  )}
                  
                  <button
                    className="project-btn"
                    onClick={() => toggleExpanded(index)}
                    style={{ marginLeft: 'auto' }}
                  >
                    {expandedProject === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }} className="animate-fade-in-up delay-700">
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>More projects coming soon! Follow my journey:</p>
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <Github style={{ marginRight: '0.5rem' }} size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
