import { motion } from 'framer-motion';
import { aboutData as defaultAboutData, projectsData as defaultProjectsData } from '../data/portfolio';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const About = ({ 
  data = defaultAboutData, 
  projectCount = defaultProjectsData.length,
  sectionNumber = "01."
}) => {
  // Dynamically compute stats, ensuring "Featured Projects" reflects project count
  const stats = data.stats.map((stat) =>
    stat.label === 'Featured Projects'
      ? { ...stat, value: `${projectCount}` }
      : stat
  );

  return (
    <motion.section
      id="about"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
    >
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="gradient-text">{sectionNumber}</span> About Me
        </h2>
        <div className="h-[1px] flex-1 bg-glass-border" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeIn} className="glass-card">
          <div className="space-y-4 text-gray-300">
            {data.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="glass-card text-center p-6 flex flex-col justify-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary-cyan mb-2">
                {stat.value}
              </h3>
              <p className="text-sm font-mono text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
