import React from 'react';
import '../styles/global.scss';
import { Button } from './Button';
import { imgArrow } from '../imageManifest';
import heroConfig from '../data/hero';

export const HERO_SECTION_ID = 'hero-section';

export const Hero: React.FC = () => {
  const { lines, intro, ctas } = heroConfig;
  const headingPlain = lines.map(l => l.parts.map(p => p.text).join(' ')).join(' ');
  return (
    <header id={HERO_SECTION_ID} className="hero surface-glass" aria-labelledby="hero-heading">
      <div className="hero__inner">
        <h1 id="hero-heading" className="visually-hidden">{headingPlain}</h1>
        <div className="hero-heading-group" aria-hidden="true">
          {lines.map((line, idx) => (
            <div key={idx} className="hero-line">
              {line.parts.map((part, i) => (
                <span
                  key={i}
                  className={part.variant === 'serif' ? 'h-hero-serif' : 'h-hero-sans'}
                >{part.text}</span>
              ))}
            </div>
          ))}
        </div>
        <p className="hero-intro text-subtext" aria-label={intro.map(s=>s.text).join(' ')}>
          {intro.map((seg, i) => (
            <span
              key={i}
              className={seg.variant === 'serif' ? 'text-subtext-serif hero-intro__em' : 'hero-intro__plain'}
              data-emphasis={seg.emphasis || undefined}
            >{seg.text + (i < intro.length - 1 ? ' ' : '')}</span>
          ))}
        </p>
        <div className="hero-ctas" role="group" aria-label="Primary navigation">
          {ctas.map(cta => (
            <a key={cta.id} href={cta.href} className="hero-cta-link">
              <Button variant={cta.variant} icon={<img src={imgArrow} alt="" aria-hidden="true" style={{ width: 16 }} />}>{cta.label}</Button>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
