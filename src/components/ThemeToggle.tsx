import React, { useEffect, useState } from 'react';
import '../styles/global.scss';

const STORAGE_KEY = 'pref-theme';

export const ThemeToggle: React.FC = () => {
  // Initial theme: use saved preference or fall back to system preference
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem(STORAGE_KEY) as 'dark' | 'light' | null;
    if (stored) return stored;
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  // Apply theme and persist
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
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
