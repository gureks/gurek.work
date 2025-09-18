import React, { useEffect, useRef } from 'react';
import '../styles/global.scss';

interface TagTickerProps {
  tags: string[];
  direction?: 'left' | 'right';
  speed?: number; // approximate pixels per second basis
}

export const TagTicker: React.FC<TagTickerProps> = ({ tags, direction = 'left', speed = 40 }) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const duration = (tags.length * 160) / speed; // heuristic width per tag
  const animationName = direction === 'left' ? 'ticker-left' : 'ticker-right';

  useEffect(() => {
    if (prefersReducedMotion && trackRef.current) {
      trackRef.current.style.animation = 'none';
    }
  }, [prefersReducedMotion]);

  return (
    <div className="ai-tags-mask" aria-hidden>
      <div
        ref={trackRef}
        className="ai-tags-track"
        style={{ animation: `${animationName} linear infinite`, animationDuration: `${duration}s` }}
      >
        {tags.concat(tags).map((tag, i) => (
          <span className="tag" key={i}>{tag}</span>
        ))}
      </div>
    </div>
  );
};
