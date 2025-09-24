import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../styles/global.scss';
import { iconMe, iconAi, iconDesigningInterfaces, iconPlay, iconBook } from '../imageManifest';

type NavItem = {
  id: string; // section id in DOM (e.g., 'ai-projects')
  label: string;
  href: string;
  icon?: string; // svg url
};

const DEFAULT_ITEMS: NavItem[] = [
  { id: 'hero-section', label: 'Me', href: '#hero-section', icon: iconMe },
  { id: 'ai-projects', label: 'AI', href: '#ai-projects', icon: iconAi },
  { id: 'bento-design', label: 'Design', href: '#bento-design', icon: iconDesigningInterfaces },
  { id: 'play', label: 'Play', href: '#play', icon: iconPlay },
  { id: 'reads', label: 'Reads', href: '#reads', icon: iconBook }
];

export interface NavbarProps {
  items?: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ items = DEFAULT_ITEMS }) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  // Observe sections in viewport to set active tab
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const obs = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible[0]?.target && visible[0].intersectionRatio > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { root: null, rootMargin: '0px', threshold: [0.5, 0.66, 0.75] }
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  // Recompute indicator position continuously using observers
  const updateIndicator = useCallback(() => {
    const cont = containerRef.current;
    const activeEl = activeId ? tabRefs.current[activeId] : null;
    if (!cont || !activeEl) return;
    const contRect = cont.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
    setIndicator({ left: activeRect.left - contRect.left - (activeRect.width / 2), width: activeRect.width + 8 });
  }, [activeId]);

  // Observe size changes of container and active tab (handles label transitions)
  useEffect(() => {
    const cont = containerRef.current;
    const activeEl = activeId ? tabRefs.current[activeId] : null;
    if (!cont || !activeEl) return;

    // updateIndicator(); // initial sync

    const ro = new ResizeObserver(() => updateIndicator());
    ro.observe(cont);
    ro.observe(activeEl);

    // Also listen to label transition for smoother updates
    const labelEl = activeEl.querySelector('.navbar__label') as HTMLElement | null;
    const onTransition = () => updateIndicator();
    labelEl?.addEventListener('transitionstart', onTransition);
    labelEl?.addEventListener('transitionend', onTransition);

    // Fonts loading can change widths
    let canceled = false;
    if (typeof (document as any).fonts?.ready?.then === 'function') {
      (document as any).fonts.ready.then(() => { if (!canceled) updateIndicator(); });
    }
    const onLoad = () => updateIndicator();
    window.addEventListener('load', onLoad);

    return () => {
      canceled = true;
      ro.disconnect();
      labelEl?.removeEventListener('transitionstart', onTransition);
      labelEl?.removeEventListener('transitionend', onTransition);
      window.removeEventListener('load', onLoad);
    };
  }, [activeId, items, updateIndicator]);

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="navbar__inner" ref={containerRef}>
        {/* Animated sliding background */}
        <div
          className="navbar__indicator"
          style={indicator ? { transform: `translateX(${indicator.left}px)`, width: indicator.width } : undefined}
          aria-hidden="true"
        />
        {items.map((it) => (
          <a key={it.id} href={it.href} className="navbar__link-wrap">
            <button
              ref={(el) => (tabRefs.current[it.id] = el)}
              type="button"
              className={[
                'navbar__tab',
                activeId === it.id ? 'is-active' : undefined
              ]
                .filter(Boolean)
                .join(' ')}
              aria-pressed={activeId === it.id}
              aria-current={activeId === it.id ? 'page' : undefined}
            >
              {it.icon && (
                <span className="navbar__icon" style={{ ['--icon-url' as any]: `url(${it.icon})` }} aria-hidden="true" />
              )}
              <span className="navbar__label">{it.label}</span>
            </button>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
