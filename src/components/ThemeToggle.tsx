import React, { useEffect, useState } from 'react';
import '../styles/global.scss';

const STORAGE_KEY = 'pref-theme';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = (localStorage.getItem(STORAGE_KEY) as 'dark' | 'light' | null);
    if (stored) return stored;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <button
      type="button"
      className="button button--secondary theme-transition"
      onClick={toggle}
      aria-pressed={theme === 'light'}
      aria-label="Toggle light / dark theme"
      style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}
    >
      <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
};

export default ThemeToggle;
