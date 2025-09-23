import React from 'react';
import '../styles/global.scss';
import { Button } from './Button';
import { iconArrowUpRight, iconArrowDownRight } from '../imageManifest';
import heroConfig from '../data/hero';

export const HERO_SECTION_ID = 'hero-section';

export const Hero: React.FC = () => {
  const { lines, intro, ctas } = heroConfig;
  const headingPlain = lines.map((l: { parts: { text: string }[] }) => l.parts.map((p: { text: string }) => p.text).join(' ')).join(' ');
  return (
    <header id={HERO_SECTION_ID} className="hero surface-glass" aria-labelledby="hero-heading">
      <div className="hero__inner">
        <h1 id="hero-heading" className="visually-hidden">{headingPlain}</h1>
        <div className="hero-heading-group" aria-hidden="true">
          {lines.map((line: { parts: any[] }, idx: number) => (
            <div key={idx} className="hero-line">
              {line.parts.map((part: { text: string; variant: string; icon?: string; iconPosition?: 'left' | 'right' }, i: number) => (
                <span
                  key={i}
                  className={part.variant === 'serif' ? 'h-hero-serif' : 'h-hero-sans'}
                >
                  {/* Icon left */}
                  {part.icon && part.iconPosition === 'left' && (
                    <img src={part.icon} alt="" aria-hidden="true" className="hero-line__icon" style={{ verticalAlign: 'middle', marginRight: 6 }} />
                  )}
                  {/* Text always rendered */}
                  {part.text}
                  {/* Icon right */}
                  {part.icon && part.iconPosition === 'right' && (
                    <img src={part.icon} alt="" aria-hidden="true" className="hero-line__icon" style={{ verticalAlign: 'middle', marginLeft: 6 }} />
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>
        <p className="hero-intro text-subtext" aria-label={intro.map((s: { text: string }) => s.text).join(' ')}>
          {intro.map((seg: { text: string; variant: string; emphasis?: boolean }, i: number) => (
            <span
              key={i}
              className={seg.variant === 'serif' ? 'text-subtext-serif hero-intro__em' : 'hero-intro__plain'}
              data-emphasis={seg.emphasis || undefined}
            >{seg.text + (i < intro.length - 1 ? ' ' : '')}
              {seg.icon && (
                <img src={seg.icon} alt="" aria-hidden="true" className="hero-text__icon" />
              )}
            </span>
          ))}
        </p>
        <div className="hero-ctas" role="group" aria-label="Primary navigation">
          {ctas.map((cta: { id: string; label: string; href: string; variant: 'primary' | 'secondary' }) => (
            <a key={cta.id} href={cta.href} className="hero-cta-link">
              <Button variant={cta.variant} icon={<img src={cta.variant === 'primary' ? iconArrowDownRight : iconArrowUpRight} alt="" aria-hidden="true" style={{ width: 16 }} />}>{cta.label}</Button>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
