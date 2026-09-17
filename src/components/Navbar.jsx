import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo, navItems } from '../data/portfolio';

const NavLinks = ({ mobile = false, onNavigate }) => (
  <ul className={`flex ${mobile ? 'flex-col items-center gap-8 text-xl' : 'gap-8 items-center'} font-medium`}>
    {navItems.map((item) => (
      <li key={item}>
        <a
          href={`#${item.toLowerCase()}`}
          onClick={onNavigate}
          className="hover:text-primary-cyan transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan rounded px-1"
        >
          {item}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-cyan transition-all duration-300 group-hover:w-full" />
        </a>
      </li>
    ))}
    <li>
      <a
        href="#contact"
        onClick={onNavigate}
        className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan"
      >
        Let&apos;s Talk
      </a>
    </li>
  </ul>
);

const Navbar = ({ isScrolled }) => {
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
          <a
            href="#"
            className="text-2xl font-extrabold tracking-widest z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan rounded"
            aria-label="Lakshya Sharma home"
          >
            {personalInfo.initials}
            <span className="text-primary-cyan">.</span>
          </a>

          <div className="hidden md:block">
            <NavLinks />
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
        <NavLinks mobile onNavigate={closeMobileMenu} />
      </div>
    </>
  );
};

export default Navbar;
