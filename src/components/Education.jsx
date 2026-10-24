import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { educationData as defaultEducationData } from '../data/portfolio';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const Education = ({ 
  education = defaultEducationData, 
  sectionNumber = "04.",
  title = "Education" 
}) => {
  return (
    <motion.section
      id="education"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
    >
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="gradient-text">{sectionNumber}</span> {title}
        </h2>
        <div className="h-[1px] flex-1 bg-glass-border" />
      </div>

      <div className="max-w-3xl mx-auto">
        <h3 className="flex items-center gap-3 text-2xl font-bold mb-8 text-white">
          <GraduationCap className="text-primary-purple" /> Academic Background
        </h3>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-glass-border before:to-transparent">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              className="relative flex items-center group"
            >
              <div className="absolute left-0 w-4 h-4 rounded-full bg-primary-cyan border-[3px] border-bg-dark -translate-x-[7px] shadow-[0_0_10px_#00F0FF]" />
              <div className="ml-8 glass-card p-6 w-full">
                <div className="font-mono text-primary-cyan text-sm mb-1">
                  {item.dates}
                </div>
                <h4 className="text-lg font-bold mb-1">{item.degree}</h4>
                <p className="text-gray-400 text-sm mb-3">{item.school}</p>
                <span className="inline-block px-3 py-1 bg-[rgba(138,43,226,0.1)] rounded text-xs font-bold text-gray-300">
                  {item.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
