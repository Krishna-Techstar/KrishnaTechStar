import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { ClubExperiences } from "./components/sections/ClubExperiences";
import { IndustryExperience } from "./components/sections/IndustryExperience";
import { Contact } from "./components/sections/Contact";
import { Navbar } from "./components/Layout/Navbar";
import { Footer } from "./components/Layout/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/custom.css";

const App = () => (
  <ThemeProvider>
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ClubExperiences />
        <IndustryExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
