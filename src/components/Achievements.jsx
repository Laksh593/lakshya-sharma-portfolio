import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';
import { achievementsData, certificationsData } from '../data/portfolio';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const Achievements = ({ 
  achievements = achievementsData,
  certifications = certificationsData,
  sectionNumber = "06." 
}) => {
  return (
    <motion.section
      id="achievements"
      className="py-24 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
    >
      <div id="certifications" className="absolute -top-24 pointer-events-none" />

      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="gradient-text">{sectionNumber}</span> Achievements &amp; Certifications
        </h2>
        <div className="h-[1px] flex-1 bg-glass-border" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column: Achievements */}
        <div>
          <h3 className="flex items-center gap-3 text-2xl font-bold mb-6 text-white">
            <Trophy className="text-primary-purple" size={24} /> Achievements
          </h3>
          <div className="grid gap-4">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="glass-card p-5"
              >
                <div className="flex items-start gap-4">
                  <Trophy className="text-primary-cyan flex-shrink-0 mt-0.5" size={22} />
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="font-bold text-[15px]">{item.title}</h4>
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        item.highlight === 'Participant'
                          ? 'bg-[rgba(138,43,226,0.15)] text-gray-300'
                          : 'bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.25)] text-primary-cyan'
                      }`}>
                        {item.highlight}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs font-mono mb-1">{item.org}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Certifications */}
        <div>
          <h3 className="flex items-center gap-3 text-2xl font-bold mb-6 text-white">
            <Award className="text-primary-purple" size={24} /> Certifications
          </h3>
          <div className="grid gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="glass-card p-5 flex items-center gap-4"
              >
                <Award className="text-primary-cyan flex-shrink-0" size={20} />
                <div>
                  {cert.category && (
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block mb-0.5">
                      {cert.category}
                    </span>
                  )}
                  <h4 className="font-bold text-[15px]">{cert.title}</h4>
                  <p className="text-gray-400 text-sm">{cert.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;
