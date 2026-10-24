import Navbar from '../components/Navbar';
import FullStackHero from '../components/FullStackHero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { 
  fullstackNavItems, 
  fullstackAboutData, 
  fullstackSkillsData, 
  fullstackIconMap, 
  fullstackProjectsData, 
  fullstackExperienceData, 
  fullstackEducationData, 
  fullstackAchievementsData,
  fullstackCertificationsData,
  fullstackPersonalInfo 
} from '../data/fullstack';

export default function FullStackPortfolio({ isScrolled }) {
  return (
    <>
      <Navbar isScrolled={isScrolled} role="fullstack" items={fullstackNavItems} />

      <main className="max-w-7xl mx-auto px-6 md:px-12">
        <FullStackHero />
        <About 
          data={fullstackAboutData} 
          projectCount={fullstackProjectsData.length} 
          sectionNumber="01." 
        />
        <Skills 
          skills={fullstackSkillsData} 
          icons={fullstackIconMap} 
          sectionNumber="02." 
          title="Technical Skills" 
        />
        <Projects 
          projects={fullstackProjectsData} 
          sectionNumber="03." 
          title="Featured Projects" 
        />
        <Experience 
          experience={fullstackExperienceData} 
          sectionNumber="04." 
          title="Experience" 
        />
        <Education 
          education={fullstackEducationData} 
          sectionNumber="05." 
          title="Education" 
        />
        <Achievements 
          achievements={fullstackAchievementsData}
          certifications={fullstackCertificationsData} 
          sectionNumber="06." 
        />
        <Contact 
          personal={fullstackPersonalInfo} 
          role="fullstack" 
        />
      </main>

      <Footer />
    </>
  );
}
