import { motion } from 'framer-motion';
import { ArrowRight, Code2, Download } from 'lucide-react';
import TypewriterText from './TypewriterText';
import { fullstackPersonalInfo, fullstackHeroData } from '../data/fullstack';
import { GithubIcon, LinkedinIcon } from './Hero';

const FullStackHero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 md:pt-0 gap-8 md:gap-12 relative overflow-hidden md:overflow-visible">
      <div className="flex-1 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 border border-primary-cyan text-primary-cyan text-sm font-mono rounded-full mb-6 bg-[rgba(0,240,255,0.05)]">
            {fullstackPersonalInfo.availabilityBadge}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 relative tracking-tight">
            {fullstackPersonalInfo.name}
          </h1>

          <TypewriterText words={fullstackHeroData.typewriterWords} />

          <p className="text-base sm:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
            {fullstackHeroData.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#projects"
              className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <a
              href={fullstackPersonalInfo.resumeFile}
              download="Lakshya_Sharma_Full_Stack_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan"
            >
              <Download size={18} /> Resume
            </a>
            <div className="flex gap-3 sm:gap-4">
              <a
                href={fullstackPersonalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-11 h-11 rounded-full border border-glass-border flex items-center justify-center hover:text-primary-cyan hover:border-primary-cyan transition-all hover:-translate-y-1 bg-glass-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={fullstackPersonalInfo.github}
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
          <Code2 size={80} className="text-primary-cyan opacity-80 z-10 animate-float sm:w-[100px] sm:h-[100px]" />
        </div>
      </div>
    </section>
  );
};

export default FullStackHero;
