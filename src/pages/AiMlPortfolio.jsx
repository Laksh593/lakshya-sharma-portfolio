import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { navItems, experienceData } from '../data/portfolio';

export default function AiMlPortfolio({ isScrolled }) {
  return (
    <>
      <Navbar isScrolled={isScrolled} role="aiml" items={navItems} />

      <main className="max-w-7xl mx-auto px-6 md:px-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience 
          experience={experienceData} 
          sectionNumber="04." 
          title="Experience" 
        />
        <Education 
          sectionNumber="05." 
          title="Education" 
        />
        <Achievements sectionNumber="06." />
        <Contact role="aiml" />
      </main>

      <Footer />
    </>
  );
}
