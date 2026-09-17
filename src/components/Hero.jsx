import { motion } from 'framer-motion';
import { ArrowRight, Brain, Download } from 'lucide-react';
import TypewriterText from './TypewriterText';
import { personalInfo, heroData } from '../data/portfolio';

const GithubIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export { GithubIcon, LinkedinIcon };

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 md:pt-0 gap-8 md:gap-12 relative overflow-hidden md:overflow-visible">
      <div className="flex-1 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 border border-primary-cyan text-primary-cyan text-sm font-mono rounded-full mb-6 bg-[rgba(0,240,255,0.05)]">
            {personalInfo.availabilityBadge}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 relative tracking-tight">
            {personalInfo.name}
          </h1>
          <TypewriterText words={heroData.typewriterWords} />
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
            {heroData.description}
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#projects"
              className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <a
              href={personalInfo.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan"
            >
              <Download size={18} /> Resume
            </a>
            <div className="flex gap-3 sm:gap-4">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-11 h-11 rounded-full border border-glass-border flex items-center justify-center hover:text-primary-cyan hover:border-primary-cyan transition-all hover:-translate-y-1 bg-glass-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-11 h-11 rounded-full border border-glass-border flex items-center justify-center hover:text-primary-cyan hover:border-primary-cyan transition-all hover:-translate-y-1 bg-glass-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan"
              >
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 flex justify-center items-center relative w-full aspect-square md:h-[600px] mt-6 md:mt-0 max-w-[320px] sm:max-w-[400px] md:max-w-none">
        <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] flex justify-center items-center">
          {/* Animated Rings */}
          <div className="absolute w-full h-full border border-[rgba(0,240,255,0.3)] border-t-primary-purple rounded-full animate-rotate" />
          <div className="absolute w-[120%] h-[120%] border border-[rgba(0,240,255,0.2)] border-r-primary-cyan rounded-full animate-rotate-reverse" />

          {/* Inner Orb */}
          <div className="w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-primary-purple to-primary-cyan opacity-20 blur-xl animate-pulse-glow absolute" />
          <Brain size={80} className="text-primary-cyan opacity-80 z-10 animate-float sm:w-[100px] sm:h-[100px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
