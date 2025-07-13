
import { ArrowDown, Github, Linkedin, Mail, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import "@/styles/custom.css";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="hero-section"
    >
      {/* Floating Elements */}
      <div className="hero-floating-element hero-floating-1"></div>
      <div className="hero-floating-element hero-floating-2"></div>
      <div className="hero-floating-element hero-floating-3"></div>

      <div className="hero-content">
        {/* Iron Man Arc Reactor */}
        {/* Enhanced Iron Man Arc Reactor with KS */}
        <div className="arc-reactor animate-zoom-in">
          <div className="arc-reactor-center"></div>
        </div>

        {/* Typing Animation Effect */}
        <h1 className="hero-title animate-fade-in-up">
          <span>Hi, I'm </span>
          <span className="text-gradient">Krishnakant Sharma</span>
        </h1>

        <div className="hero-subtitle animate-fade-in-up delay-200">
          <p>🎓 B.Tech CSE Student | Full-Stack Developer</p>
          <p>Tech Explorer 🚀 | Cybersecurity Enthusiast 🔐</p>
        </div>

        <p className="hero-description animate-fade-in-up delay-300">
          Building, breaking, and rebuilding systems better. From MERN stack to Flutter apps, 
          exploring the depths of cybersecurity and system internals.
        </p>

        {/* Social Links */}
        <div className="hero-social-links animate-fade-in-up delay-400">
          <a 
            href="https://github.com/Krishna-Techstar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/krishnakant-sharma-23p/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:krishnakantpsharma23@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a 
            href="https://www.youtube.com/@KrishnakantPawanSharma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="YouTube Channel 1"
          >
            <Youtube size={20} />
          </a>
          <a 
            href="https://www.youtube.com/@The_StartUp_Mafia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="YouTube Channel 2"
          >
            <Youtube size={20} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta-container animate-fade-in-up delay-500">
          <Button 
            className="hero-cta"
            onClick={scrollToProjects}
          >
            View My Work
            <ArrowDown style={{ marginLeft: '0.5rem' }} size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};