
import { Heart, Code, Coffee } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="about-container">
        <div className="footer-content">
          {/* Copyright */}
          <div className="footer-copyright">
            <p>© {currentYear} Krishnakant Sharma. All rights reserved.</p>
          </div>

          {/* Made with love section */}
          <div className="footer-made-with">
            <span>Made with</span>
            <Heart style={{ color: 'var(--primary-color)' }} size={16} fill="currentColor" />
            <span>and</span>
            <Code style={{ color: 'var(--primary-color)' }} size={16} />
            <span>powered by</span>
            <Coffee style={{ color: 'var(--primary-color)' }} size={16} />
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="footer-link"
            >
              Back to Top
            </button>
            <a 
              href="https://github.com/Krishna-Techstar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/krishnakant-sharma-23p/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider">
          <p className="footer-quote">
            "Build it. Break it. Rebuild it better. Repeat." 
            <span className="footer-signature">- KS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
