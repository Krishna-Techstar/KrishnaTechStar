
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import "@/styles/custom.css";

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title animate-fade-in-up">
          <span className="section-title-bracket">&lt;</span>
          About Me
          <span className="section-title-bracket"> /&gt;</span>
        </h2>

        <div className="about-grid">
          {/* Bio Section */}
          <div className="about-content animate-fade-in-left delay-200">
            <div style={{ marginBottom: '1.5rem' }}>
              <p className="about-text">
                Hey! I'm <span className="about-highlight">Krishnakant Sharma</span> — a Computer Science student, 
                self-taught developer, full-time tech explorer, and part-time <span className="about-highlight">Arch Linux survivor</span> 😅.
              </p>
              
              <p className="about-text">
                My journey into tech started in 2010 at age 5, thanks to my dad and our first PC. 
                What began as gaming became an obsession with systems, code, cybersecurity, and building things from scratch.
              </p>

              <div className="about-card" style={{ marginTop: '1.5rem' }}>
                <p className="about-card-title">💭 Motto:</p>
                <p className="about-card-content" style={{ fontStyle: 'italic', margin: 0 }}>"Build it. Break it. Rebuild it better. Repeat."</p>
              </div>
            </div>

            <Button 
              className="hero-cta"
              onClick={() => window.open('#', '_blank')}
              style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', border: 'none' }}
            >
              <Download style={{ marginRight: '0.5rem' }} size={16} />
              Download Resume
            </Button>
          </div>

          {/* Highlights Cards */}
          <div className="about-cards animate-fade-in-right delay-300">
            <div className="about-card hover-lift">
              <h3 className="about-card-title">🎓 Education</h3>
              <div className="about-card-content">
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: '500' }}>B.Tech CSE Student at BVDU</p>
                <p style={{ margin: 0, fontSize: '0.875rem' }}>Cybersecurity Minor</p>
              </div>
            </div>

            <div className="about-card hover-lift">
              <h3 className="about-card-title">🔐 Focus Areas</h3>
              <ul className="about-card-content" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>• Cybersecurity & System Internals</li>
                <li style={{ marginBottom: '0.5rem' }}>• Full-Stack Development</li>
                <li style={{ marginBottom: '0.5rem' }}>• Open Source Contributions</li>
                <li style={{ marginBottom: 0 }}>• Competitive Programming</li>
              </ul>
            </div>

            <div className="about-card hover-lift">
              <h3 className="about-card-title">🚀 Currently</h3>
              <ul className="about-card-content" style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>• Prepping for GSoC & Open Source</li>
                <li style={{ marginBottom: '0.5rem' }}>• Learning Spring Boot</li>
                <li style={{ marginBottom: '0.5rem' }}>• Growing YouTube channel</li>
                <li style={{ marginBottom: 0 }}>• Exploring crypto-tech startup ideas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fun Fact */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <div className="about-card animate-fade-in-scale delay-500" style={{ display: 'inline-block', maxWidth: '600px' }}>
            <p className="about-card-content" style={{ margin: 0 }}>
              💻 Fun fact: I converted an old gaming laptop into a self-hosted personal server 
              because I believe in <span className="about-highlight">data sovereignty</span> — 
              if your data lives in the cloud, you should control it!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
