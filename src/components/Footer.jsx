import { personalInfo } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './Hero';

const Footer = () => {
  return (
    <footer className="border-t border-glass-border bg-[#111111] py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-400 hover:text-primary-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan rounded p-1"
          >
            <LinkedinIcon />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-400 hover:text-primary-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan rounded p-1"
          >
            <GithubIcon />
          </a>
        </div>
        <p className="text-gray-300 mb-2">
          Designed &amp; Built by {personalInfo.name}
        </p>
        <p className="text-xs font-mono text-gray-600">
          Powered by React, Tailwind CSS &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
