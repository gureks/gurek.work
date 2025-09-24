import React, { useEffect } from 'react';
import '../styles/global.scss';

export const ThemeToggle: React.FC = () => {
  // Auto-detect and apply system theme; no storage, no UI
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = (isDark: boolean) => {
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    };
    // apply immediately
    apply(mql.matches);
    // react to future system changes
    const handler = (e: MediaQueryListEvent) => apply(e.matches);
    if (mql.addEventListener) mql.addEventListener('change', handler);
    else mql.addListener(handler as any);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', handler);
      else mql.removeListener(handler as any);
    };
  }, []);
  return null;
};

export default ThemeToggle;
