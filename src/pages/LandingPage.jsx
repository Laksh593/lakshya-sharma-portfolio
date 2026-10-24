import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Code2, 
  BrainCircuit, 
  Sparkles,
  Server,
  Layers,
  Database,
  Cpu
} from 'lucide-react';
import { useRouter } from '../router/context';
import { personalInfo } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from '../components/Hero';
import EmailActionPill from '../components/EmailActionPill';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function LandingPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-hidden">
      {/* Background ambient decorative glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary-purple/15 to-primary-cyan/10 blur-3xl -z-10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-primary-cyan/10 to-primary-purple/15 blur-3xl -z-10"
      />

      {/* Top Header / Brand Bar */}
      <header className="w-full py-6 px-6 md:px-12 max-w-7xl mx-auto flex items-center z-20">
        <div className="flex items-center">
          <span className="text-2xl font-extrabold tracking-widest text-white">
            LS<span className="text-primary-cyan">.</span>
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-12 py-8 md:py-12 flex flex-col justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          {/* Availability Indicator */}
          <motion.div variants={fadeIn} className="inline-block mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-primary-cyan/40 text-primary-cyan text-xs sm:text-sm font-mono rounded-full bg-[rgba(0,240,255,0.05)] shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-primary-cyan animate-pulse" />
              <span>Available for Full Stack Software Engineer &amp; AI/ML Engineer Opportunities</span>
            </div>
          </motion.div>

          {/* Name & Headline */}
          <motion.h1 
            variants={fadeIn}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight"
          >
            Lakshya Sharma
          </motion.h1>

          <motion.p 
            variants={fadeIn}
            className="text-lg sm:text-xl font-medium text-gray-300 mb-4"
          >
            Full Stack Software Engineer &amp; AI/ML Engineer
          </motion.p>

          <motion.p 
            variants={fadeIn}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            I&apos;m a software developer and MCA graduate interested in building scalable web applications, reliable backend systems, and intelligent AI-powered solutions. Select a profile below to explore the relevant experience, projects, and credentials.
          </motion.p>

          {/* Social Links with Text Labels */}
          <motion.div 
            variants={fadeIn}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <EmailActionPill />
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass-border bg-glass-bg text-gray-300 hover:text-primary-cyan hover:border-primary-cyan/40 hover:bg-[rgba(0,240,255,0.05)] transition-all duration-300 hover:-translate-y-0.5 text-xs sm:text-sm font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan shadow-sm"
            >
              <LinkedinIcon size={16} className="text-primary-cyan flex-shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass-border bg-glass-bg text-gray-300 hover:text-primary-cyan hover:border-primary-cyan/40 hover:bg-[rgba(0,240,255,0.05)] transition-all duration-300 hover:-translate-y-0.5 text-xs sm:text-sm font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan shadow-sm"
            >
              <GithubIcon size={16} className="text-primary-cyan flex-shrink-0" />
              <span>GitHub</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Two Role Selection Cards */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full"
        >
          {/* Card 1: Full Stack Software Engineer */}
          <motion.div
            variants={fadeIn}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="glass-card flex flex-col justify-between relative group p-8 md:p-10 border border-glass-border hover:border-primary-cyan/40 hover:shadow-[0_15px_35px_rgba(0,240,255,0.12)] cursor-pointer"
            onClick={() => navigate('/full-stack')}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate('/full-stack');
              }
            }}
            aria-label="Explore Full Stack Software Engineer Portfolio"
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-cyan to-primary-purple opacity-70 group-hover:opacity-100 transition-opacity rounded-t-xl" />

            <div>
              {/* Header with Icon and Role Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.25)] flex items-center justify-center text-primary-cyan group-hover:scale-105 transition-transform">
                  <Code2 size={30} />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[rgba(0,240,255,0.08)] text-primary-cyan border border-[rgba(0,240,255,0.2)]">
                  Web &amp; Backend
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white group-hover:text-primary-cyan transition-colors">
                Full Stack Software Engineer
              </h2>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                Building responsive web applications, robust backend services, REST APIs, and database-driven software solutions.
              </p>

              {/* Core Specializations */}
              <div className="space-y-2 mb-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Server size={15} className="text-primary-cyan flex-shrink-0" />
                  <span>FastAPI, Node.js &amp; Express RESTful microservices</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={15} className="text-primary-cyan flex-shrink-0" />
                  <span>React.js, Next.js &amp; responsive modern frontends</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database size={15} className="text-primary-cyan flex-shrink-0" />
                  <span>PostgreSQL, MySQL, MongoDB &amp; Docker containerization</span>
                </div>
              </div>

              {/* Technologies Pill Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Node.js', 'FastAPI', 'PostgreSQL', 'Docker', 'MongoDB', 'REST APIs'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[rgba(255,255,255,0.04)] border border-glass-border text-gray-400 group-hover:text-gray-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-glass-border flex items-center justify-between">
              <span className="text-sm font-semibold text-primary-cyan group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                Explore Full Stack Portfolio <ArrowRight size={18} />
              </span>
              <span className="text-xs font-mono text-gray-500">/full-stack</span>
            </div>
          </motion.div>

          {/* Card 2: AI/ML Engineer */}
          <motion.div
            variants={fadeIn}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="glass-card flex flex-col justify-between relative group p-8 md:p-10 border border-glass-border hover:border-primary-purple/40 hover:shadow-[0_15px_35px_rgba(138,43,226,0.12)] cursor-pointer"
            onClick={() => navigate('/ai-ml')}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate('/ai-ml');
              }
            }}
            aria-label="Explore AI/ML Engineer Portfolio"
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-purple to-primary-cyan opacity-70 group-hover:opacity-100 transition-opacity rounded-t-xl" />

            <div>
              {/* Header with Icon and Role Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[rgba(138,43,226,0.15)] border border-[rgba(138,43,226,0.3)] flex items-center justify-center text-primary-purple group-hover:scale-105 transition-transform">
                  <BrainCircuit size={30} />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[rgba(138,43,226,0.1)] text-purple-300 border border-[rgba(138,43,226,0.25)]">
                  Machine Learning &amp; GenAI
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                AI/ML Engineer
              </h2>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                Developing machine learning applications, generative AI solutions, RAG systems, and intelligent software experiences.
              </p>

              {/* Core Specializations */}
              <div className="space-y-2 mb-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Sparkles size={15} className="text-purple-400 flex-shrink-0" />
                  <span>Generative AI, LangChain, RAG &amp; Vector Databases</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu size={15} className="text-purple-400 flex-shrink-0" />
                  <span>Deep Learning (PyTorch, TensorFlow, CNNs, YOLOv8)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={15} className="text-purple-400 flex-shrink-0" />
                  <span>Multi-Agent AI pipelines (LangGraph) &amp; MLOps tracking</span>
                </div>
              </div>

              {/* Technologies Pill Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['PyTorch', 'LangChain', 'FastAPI', 'ChromaDB', 'Scikit-learn', 'Docker', 'RAG'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[rgba(255,255,255,0.04)] border border-glass-border text-gray-400 group-hover:text-gray-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-glass-border flex items-center justify-between">
              <span className="text-sm font-semibold text-purple-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                Explore AI/ML Portfolio <ArrowRight size={18} />
              </span>
              <span className="text-xs font-mono text-gray-500">/ai-ml</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Verified Quick Credentials Summary Strip */}
        <div className="mt-12 text-center text-xs font-mono text-gray-500 flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          <span>🎓 MCA, Vellore Institute of Technology (VIT Chennai)</span>
          <span className="hidden sm:inline">•</span>
          <span>📍 Jaipur, Rajasthan, India</span>
          <span className="hidden sm:inline">•</span>
          <span>✉️ lakshyasharma593@gmail.com</span>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 border-t border-glass-border text-center text-xs text-gray-500 font-mono">
        <p>Lakshya Sharma &copy; {new Date().getFullYear()} — Professional Dual-Role Engineering Portfolio</p>
      </footer>
    </div>
  );
}
