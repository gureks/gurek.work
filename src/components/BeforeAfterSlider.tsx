import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../styles/global.scss';
import { imgEpaperAfter, imgEpaperBefore, iconSliderHandle } from '../imageManifest';

interface BeforeAfterSliderProps {
  beforeSrc?: string;
  afterSrc?: string;
  initial?: number; // 0..1
  labelBefore?: string;
  labelAfter?: string;
  className?: string;
  snapThreshold?: number; // distance from ends to snap (0..1)
  snapPoints?: number[]; // additional snap ratios
}

// Accessible before/after image comparison slider
export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeSrc = imgEpaperBefore,
  afterSrc = imgEpaperAfter,
  initial = 0.25,
  labelBefore = 'Before',
  labelAfter = 'After',
  className = '',
  snapThreshold = 0.4,
  snapPoints = [0.5]
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ratio, setRatio] = useState(initial);
  const [isDragging, setDragging] = useState(false);

  const clamp = (v: number) => Math.min(0.95, Math.max(0.05, v));

  // Snap logic: if near a snap point or ends apply easing
  const applySnap = (v: number) => {
    const targets = [0.1, 0.9, ...snapPoints];
    for (const t of targets) {
      if (Math.abs(v - t) <= snapThreshold) return t;
    }
    return v;
  };

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const raw = clamp((clientX - rect.left) / rect.width);
    const snapped = applySnap(raw);
    setRatio(snapped);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = useCallback((e: PointerEvent) => {
    if (!isDragging) return;
    updateFromClientX(e.clientX);
  }, [isDragging, updateFromClientX]);
  const endDrag = useCallback(() => setDragging(false), []);

  useEffect(() => {
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointerleave', endDrag);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', endDrag);
      window.removeEventListener('pointerleave', endDrag);
    };
  }, [onPointerMove, endDrag]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); setRatio(r => applySnap(clamp(r - 0.05))); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); setRatio(r => applySnap(clamp(r + 0.05))); }
    else if (e.key === 'Home') { e.preventDefault(); setRatio(0.05); }
    else if (e.key === 'End') { e.preventDefault(); setRatio(0.95); }
  };

  return (
    <div
      ref={containerRef}
      className={`before-after-slider ${className}`.trim()}
      aria-label="Before after comparison"
      role="group"
    >
      <img src={afterSrc} alt={labelAfter} className="before-after__image" loading="lazy" />
      <div className="before-after__clip" style={{ width: `${ratio * 100}%` }}>
        <img src={beforeSrc} alt={labelBefore} className="before-after__image" loading="lazy" />
      </div>
      <div
        className="before-after__handle"
        role="slider"
        aria-valuemin={5}
        aria-valuemax={95}
        aria-valuenow={Math.round(ratio * 100)}
        aria-label="Drag to reveal before / after"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        style={{ left: `${ratio * 100}%` }}
      >
  <img src={iconSliderHandle} alt="" aria-hidden="true" loading="lazy" />
      </div>
      <div className="before-after__labels">
        <span className="before-after__label before" aria-hidden="true">{labelBefore}</span>
        <span className="before-after__label after" aria-hidden="true">{labelAfter}</span>
      </div>
      <div className="before-after__overlay before" aria-hidden="true" style={{ opacity: 1 - ratio }} />
      <div className="before-after__overlay after" aria-hidden="true" style={{ opacity: ratio }} />
    </div>
  );
};

export default BeforeAfterSlider;
