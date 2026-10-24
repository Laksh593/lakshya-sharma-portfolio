import { useState, useEffect, useCallback } from 'react';
import { RouterContext, normalizePath, useRouter } from './context';

export const RouterProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState(() => {
    return normalizePath(window.location.pathname);
  });

  // Listen to popstate (back/forward browser buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to, { replace = false, scrollToTop = true } = {}) => {
    const targetUrl = new URL(to, window.location.origin);
    const targetPath = normalizePath(targetUrl.pathname);
    const targetHash = targetUrl.hash;

    // If it's a pure anchor on the current page
    if (targetPath === normalizePath(window.location.pathname) && targetHash) {
      const element = document.querySelector(targetHash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (replace) {
      window.history.replaceState(null, '', to);
    } else {
      window.history.pushState(null, '', to);
    }

    setCurrentRoute(targetPath);

    if (targetHash) {
      setTimeout(() => {
        const element = document.querySelector(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <RouterContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Link = ({ to, children, className = '', onClick, replace = false, ...props }) => {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    // Let browser handle special clicks (Cmd/Ctrl + click, new tab, external links)
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey ||
      props.target === '_blank'
    ) {
      return;
    }

    // If it's an external URL
    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:') || to.startsWith('tel:')) {
      return;
    }

    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to, { replace });
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};
