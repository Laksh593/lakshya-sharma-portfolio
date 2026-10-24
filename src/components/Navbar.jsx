import { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { personalInfo, navItems as defaultNavItems } from '../data/portfolio';
import { Link } from '../router/RouterContext';

const NavLinks = ({ 
  mobile = false, 
  onNavigate, 
  items = defaultNavItems, 
}) => {

  const handleAnchorClick = (e, targetHash) => {
    e.preventDefault();
    if (onNavigate) onNavigate();
    const element = document.querySelector(targetHash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul className={`flex ${mobile ? 'flex-col items-center gap-6 text-lg' : 'gap-6 lg:gap-8 items-center'} font-medium`}>
      {/* Home link */}
      <li>
        <Link
          to="/"
          onClick={onNavigate}
          className="hover:text-primary-cyan transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan rounded px-1 flex items-center gap-1.5 text-gray-300"
          aria-label="Return to Main Landing Page"
        >
          <Home size={16} />
          <span>Home</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-cyan transition-all duration-300 group-hover:w-full" />
        </Link>
      </li>

      {/* Dynamic Section Navigation Items */}
      {items.map((item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            onClick={(e) => handleAnchorClick(e, `#${item.toLowerCase()}`)}
            className="hover:text-primary-cyan transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan rounded px-1 text-gray-300"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-cyan transition-all duration-300 group-hover:w-full" />
          </a>
        </li>
      ))}

      {/* Let's Talk CTA */}
      <li>
        <a
          href="#contact"
          onClick={(e) => handleAnchorClick(e, '#contact')}
          className="btn-outline text-sm py-2 px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan"
        >
          Let&apos;s Talk
        </a>
      </li>
    </ul>
  );
};

const Navbar = ({ isScrolled, role = 'aiml', items = defaultNavItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[rgba(5,5,5,0.85)] backdrop-blur-md py-4 shadow-lg border-b border-glass-border'
            : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-widest z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan rounded flex items-center gap-2 group"
            aria-label="Lakshya Sharma home"
          >
            <span>
              {personalInfo.initials}
              <span className="text-primary-cyan">.</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono font-normal px-2 py-0.5 rounded border border-glass-border bg-glass-bg text-gray-400 group-hover:text-primary-cyan transition-colors">
              {role === 'aiml' ? 'AI/ML' : 'Full Stack'}
            </span>
          </Link>

          <div className="hidden md:block">
            <NavLinks items={items} />
          </div>

          <button
            className="md:hidden z-50 text-white p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0A0A0A] z-40 transition-transform duration-300 flex items-center justify-center ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <NavLinks 
          mobile 
          onNavigate={closeMobileMenu} 
          items={items} 
        />
      </div>
    </>
  );
};

export default Navbar;
