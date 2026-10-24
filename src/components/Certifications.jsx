import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import { fullstackCertificationsData } from '../data/fullstack';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const Certifications = ({ 
  certifications = fullstackCertificationsData,
  sectionNumber = "06.",
  title = "Certifications"
}) => {
  return (
    <motion.section
      id="certifications"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn}
            className="glass-card p-6 flex items-start gap-4 group hover:border-primary-cyan/40 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.2)] flex items-center justify-center text-primary-cyan flex-shrink-0 group-hover:scale-110 transition-transform">
              <Award size={24} />
            </div>
            <div className="min-w-0 flex-1">
              {cert.category && (
                <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
                  {cert.category}
                </span>
              )}
              <h3 className="font-bold text-base sm:text-lg text-white mb-1 group-hover:text-primary-cyan transition-colors">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm flex items-center gap-1.5 font-medium">
                <CheckCircle size={14} className="text-primary-cyan flex-shrink-0" />
                <span>{cert.org}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
