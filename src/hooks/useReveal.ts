import { useEffect, useRef } from 'react';

/**
 * useReveal
 * Adds an intersection observer to toggle visibility class for reveal animations.
 * Respects prefers-reduced-motion: if reduced, class is added immediately.
 */
export function useReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.classList.add('is-visible');
      return; // skip observer
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // reveal once
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px',
      ...options
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return ref;
}
