import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RouterProvider } from './router/RouterContext';
import { useRouter } from './router/context';
import { usePageMetadata } from './utils/seo';
import LandingPage from './pages/LandingPage';
import FullStackPortfolio from './pages/FullStackPortfolio';
import AiMlPortfolio from './pages/AiMlPortfolio';

function AppContent() {
  const { currentRoute } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Sync title and SEO metadata on route change
  usePageMetadata(currentRoute);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Track hover on interactive elements globally for the custom cursor glow
  useEffect(() => {
    const interactiveSelectors = 'a, button, .glass-card, [role="button"]';
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const elements = document.querySelectorAll(interactiveSelectors);
    elements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  });

  // Render active page based on current route
  const renderPage = () => {
    switch (currentRoute) {
      case '/full-stack':
        return <FullStackPortfolio isScrolled={isScrolled} />;
      case '/ai-ml':
        return <AiMlPortfolio isScrolled={isScrolled} />;
      case '/':
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-noise" />

      {/* Custom Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none mix-blend-screen z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - (isHovering ? 200 : 150),
          y: mousePosition.y - (isHovering ? 200 : 150),
          width: isHovering ? 400 : 300,
          height: isHovering ? 400 : 300,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
        style={{
          background: `radial-gradient(circle, ${
            isHovering
              ? 'rgba(0, 240, 255, 0.15)'
              : 'rgba(138, 43, 226, 0.15)'
          } 0%, rgba(0, 0, 0, 0) 70%)`,
        }}
      />

      {renderPage()}
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
