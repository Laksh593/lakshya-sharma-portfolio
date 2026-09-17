import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './Hero';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-32 text-center max-w-3xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeIn}>
        <div className="font-mono text-primary-cyan mb-4">What&apos;s Next?</div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">Get In Touch</h2>
        <p className="text-gray-400 text-base sm:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Let&apos;s build intelligent systems that solve real-world problems. I&apos;m
          open to opportunities in AI/ML, GenAI, Python backend, and machine
          learning engineering.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary text-base sm:text-lg px-8 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan"
          >
            Say Hello <Send size={20} />
          </a>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <a
            href={`mailto:${personalInfo.email}`}
            className="glass-card p-5 flex items-center gap-4 text-left hover:border-primary-cyan/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan"
          >
            <div className="w-10 h-10 rounded-full bg-[rgba(138,43,226,0.15)] flex items-center justify-center flex-shrink-0">
              <Mail size={20} className="text-primary-purple" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-mono text-gray-500 mb-0.5">Email</p>
              <p className="text-gray-300 text-sm font-medium break-all sm:break-normal">{personalInfo.email}</p>
            </div>
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="glass-card p-5 flex items-center gap-4 text-left hover:border-primary-cyan/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan"
          >
            <div className="w-10 h-10 rounded-full bg-[rgba(138,43,226,0.15)] flex items-center justify-center flex-shrink-0">
              <Phone size={20} className="text-primary-purple" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-mono text-gray-500 mb-0.5">Phone</p>
              <p className="text-gray-300 text-sm font-medium">{personalInfo.phoneDisplay}</p>
            </div>
          </a>

          <a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 flex items-center gap-4 text-left hover:border-primary-cyan/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan"
            aria-label="LinkedIn profile"
          >
            <div className="w-10 h-10 rounded-full bg-[rgba(138,43,226,0.15)] flex items-center justify-center flex-shrink-0">
              <LinkedinIcon size={20} className="text-primary-purple" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-mono text-gray-500 mb-0.5">LinkedIn</p>
              <p className="text-gray-300 text-sm font-medium">lakshya-01-sharma</p>
            </div>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 flex items-center gap-4 text-left hover:border-primary-cyan/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan"
            aria-label="GitHub profile"
          >
            <div className="w-10 h-10 rounded-full bg-[rgba(138,43,226,0.15)] flex items-center justify-center flex-shrink-0">
              <GithubIcon size={20} className="text-primary-purple" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-mono text-gray-500 mb-0.5">GitHub</p>
              <p className="text-gray-300 text-sm font-medium">Laksh593</p>
            </div>
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
