import { motion } from 'framer-motion';
import { skillsData, iconMap } from '../data/portfolio';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
    >
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="gradient-text">02.</span> Technical Arsenal
        </h2>
        <div className="h-[1px] flex-1 bg-glass-border" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((category, idx) => {
          const IconComponent = iconMap[category.iconName];
          return (
            <motion.div
              key={idx}
              variants={fadeIn}
              className="glass-card group hover:-translate-y-2"
            >
              {IconComponent && (
                <IconComponent size={36} className="text-primary-purple mb-4" />
              )}
              <h3 className="text-lg font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2 text-gray-400 font-mono text-sm">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2 group-hover:text-gray-300 transition-colors"
                  >
                    <span className="text-primary-cyan text-xs mt-1 flex-shrink-0">▹</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Skills;
