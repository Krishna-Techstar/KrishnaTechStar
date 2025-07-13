import { Briefcase, TrendingUp } from "lucide-react";

export const IndustryExperience = () => {
  return (
    <section id="industry-experience" className="industry-experience-section">
      <div className="about-container">
        <h2 className="section-title animate-fade-in-up">
          <span className="section-title-bracket">&lt;</span>
          Industry Experience
          <span className="section-title-bracket"> /&gt;</span>
        </h2>

        <div className="industry-experience-content animate-fade-in-up delay-200">
          <div className="industry-placeholder-card">
            <div className="industry-placeholder-icon">
              <Briefcase size={48} />
            </div>
            <h3>Coming Soon!</h3>
            <p className="industry-placeholder-description">
              I'm actively seeking industry opportunities to apply my technical skills 
              and leadership experience in real-world projects. Currently focused on:
            </p>
            
            <div className="industry-focus-areas">
              <div className="focus-area">
                <TrendingUp size={20} />
                <span>Full-Stack Development</span>
              </div>
              <div className="focus-area">
                <TrendingUp size={20} />
                <span>Cybersecurity</span>
              </div>
              <div className="focus-area">
                <TrendingUp size={20} />
                <span>Mobile App Development</span>
              </div>
              <div className="focus-area">
                <TrendingUp size={20} />
                <span>DevOps & Cloud</span>
              </div>
            </div>

            <div className="industry-cta">
              <p>Interested in collaborating? Let's connect!</p>
              <a 
                href="mailto:krishnakantpsharma23@gmail.com"
                className="industry-contact-btn"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 