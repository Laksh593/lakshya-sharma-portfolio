import { motion } from 'framer-motion';
import { Calendar, Building2, Sparkles } from 'lucide-react';
import { fullstackExperienceData } from '../data/fullstack';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Experience = ({ 
  experience = fullstackExperienceData, 
  sectionNumber = "04.",
  title = "Experience"
}) => {
  return (
    <motion.section
      id="experience"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
    >
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="gradient-text">{sectionNumber}</span> {title}
        </h2>
        <div className="h-[1px] flex-1 bg-glass-border" />
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {experience.map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn}
            className="glass-card p-6 sm:p-8 relative group hover:border-primary-cyan/40 transition-all duration-300 shadow-lg"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              {/* Left Column: Job Title, Badge & Academic Context */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-primary-cyan transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.25)] text-primary-cyan font-medium inline-flex items-center gap-1.5">
                    <Sparkles size={12} className="text-primary-cyan" />
                    {item.badge}
                  </span>
                </div>

                {item.context && (
                  <p className="text-xs sm:text-sm font-mono text-purple-300/90 bg-[rgba(138,43,226,0.08)] px-3 py-1.5 rounded-lg border border-[rgba(138,43,226,0.2)] inline-block">
                    {item.context}
                  </p>
                )}
              </div>

              {/* Right Column: Date Range & Institution */}
              <div className="flex flex-col sm:items-end gap-2 text-xs font-mono flex-shrink-0">
                <span className="inline-flex items-center gap-2 text-primary-cyan bg-[rgba(0,240,255,0.06)] border border-[rgba(0,240,255,0.15)] px-3 py-1.5 rounded-full w-fit sm:w-auto">
                  <Calendar size={13} />
                  <span>{item.period}</span>
                </span>
                <span className="text-gray-400 flex items-center gap-1.5 sm:text-right">
                  <Building2 size={14} className="text-primary-purple flex-shrink-0" />
                  <span>{item.institution}</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
