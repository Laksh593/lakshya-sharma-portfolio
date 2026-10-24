import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projectsData as defaultProjectsData } from '../data/portfolio';
import { GithubIcon } from './Hero';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const ProjectActions = ({ project }) => {
  if (!project.github && !project.demo) return null;

  return (
    <div className="flex items-center gap-4 mt-4 pt-3 border-t border-glass-border">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-300 hover:text-primary-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan rounded px-1"
          aria-label={`${project.title} GitHub repository`}
        >
          <GithubIcon size={16} /> Code
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-300 hover:text-primary-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan rounded px-1"
          aria-label={`${project.title} Live Demo`}
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      )}
    </div>
  );
};

const Projects = ({ 
  projects = defaultProjectsData, 
  sectionNumber = "03.",
  title = "Featured Work" 
}) => {
  return (
    <motion.section
      id="projects"
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

      {/* First project — full width featured card */}
      {projects.length > 0 && (
        <motion.div variants={fadeIn} className="glass-card flex flex-col group mb-8">
          <div className="font-mono text-primary-cyan text-sm mb-2">
            {projects[0].type}
          </div>
          <h3 className="text-2xl font-bold mb-3">{projects[0].title}</h3>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
            {projects[0].desc}
          </p>
          {projects[0].highlights && projects[0].highlights.length > 0 && (
            <ul className="space-y-2 text-gray-500 text-sm mb-4">
              {projects[0].highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary-cyan text-xs mt-1 flex-shrink-0">▹</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}
          {projects[0].metrics && projects[0].metrics.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {projects[0].metrics.map((metric) => (
                <span
                  key={metric}
                  className="px-3 py-1 rounded-full bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.2)] text-primary-cyan text-xs font-mono"
                >
                  {metric}
                </span>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-glass-border">
            {projects[0].tech && projects[0].tech.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-gray-500 px-2 py-1 rounded bg-[rgba(138,43,226,0.08)]"
              >
                {tech}
              </span>
            ))}
          </div>
          <ProjectActions project={projects[0]} />
        </motion.div>
      )}

      {/* Remaining projects — 2-column grid */}
      {projects.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(1).map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              className="glass-card flex flex-col h-full group"
            >
              <div className="font-mono text-primary-cyan text-sm mb-2">
                {project.type}
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>

              <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                {project.desc}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <ul className="space-y-1.5 text-gray-500 text-sm mb-3 flex-grow">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary-cyan text-xs mt-1 flex-shrink-0">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {project.metrics && project.metrics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-3 py-1 rounded-full bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.2)] text-primary-cyan text-xs font-mono"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-glass-border">
                {project.tech && project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-gray-500 px-2 py-1 rounded bg-[rgba(138,43,226,0.08)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ProjectActions project={project} />
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
};

export default Projects;
