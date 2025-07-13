
import { useState } from "react";
import { Send, Mail, Copy, CheckCircle, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [emailCopied, setEmailCopied] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received!",
      description: "Thanks for reaching out! I'll get back to you soon. For now, contact form is frontend-only.",
    });
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("krishnakantpsharma23@gmail.com");
    setEmailCopied(true);
    toast({
      title: "Email Copied!",
      description: "Email address has been copied to your clipboard.",
    });
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="about-container">
        <h2 className="section-title animate-fade-in-up">
          <span className="section-title-bracket">&lt;</span>
          Contact Me
          <span className="section-title-bracket"> /&gt;</span>
        </h2>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info animate-fade-in-left delay-200">
            <h3>Let's Connect!</h3>
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and innovation.
            </p>
            
            <div className="contact-links">
              <div className="contact-link" onClick={copyEmail}>
                <Mail size={20} />
                <span>krishnakantpsharma23@gmail.com</span>
                {emailCopied ? <CheckCircle size={16} color="var(--accent-color)" /> : <Copy size={16} />}
              </div>
              
              <a 
                href="https://github.com/Krishna-Techstar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Github size={20} />
                <span>GitHub Profile</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/krishnakant-sharma-23p/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form animate-fade-in-right delay-300">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows={5}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="form-submit">
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
