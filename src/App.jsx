import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Track hover on interactive elements globally
  useEffect(() => {
    const interactiveSelectors = 'a, button, .glass-card';
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const elements = document.querySelectorAll(interactiveSelectors);
    elements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  });

  return (
    <div className="min-h-screen">
      <div className="bg-noise" />

      {/* Custom Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none mix-blend-screen z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - (isHovering ? 200 : 150),
          y: mousePosition.y - (isHovering ? 200 : 150),
          width: isHovering ? 400 : 300,
          height: isHovering ? 400 : 300,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
        style={{
          background: `radial-gradient(circle, ${
            isHovering
              ? 'rgba(0, 240, 255, 0.15)'
              : 'rgba(138, 43, 226, 0.15)'
          } 0%, rgba(0, 0, 0, 0) 70%)`,
        }}
      />

      <Navbar isScrolled={isScrolled} />

      <main className="max-w-7xl mx-auto px-6 md:px-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
