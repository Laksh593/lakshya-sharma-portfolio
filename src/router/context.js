import { createContext, useContext } from 'react';

export const RouterContext = createContext(null);

export const normalizePath = (pathname) => {
  if (!pathname) return '/';
  const clean = pathname.replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
