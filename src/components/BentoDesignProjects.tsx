import React from 'react';
import '../styles/global.scss';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { Tag } from './Tag';
import {
  iconArrowUpRight,
  imgGrowfastBottom,
  imgGrowfastMiddle,
  imgGrowfastTop,
  imgUstraa,
  imgMercury,
  iconDesigningInterfaces
} from '../imageManifest';
import { projectsColumnLeft, projectsColumnMid, projectsColumnWide } from '../data/projects';
import { useReveal } from '../hooks/useReveal';

// Project card data arrays are externalized in src/data/projects.ts for maintainability & reuse.

export const BentoDesignProjects: React.FC = () => {
  const leftRef = useReveal<HTMLDivElement>();
  const midRef = useReveal<HTMLDivElement>();
  const wideRef = useReveal<HTMLDivElement>();
  return (
    <section className="bento-design-projects" aria-labelledby="bento-heading" id="bento-design">
      <header className="bento-design-projects__intro">
        <h2 id="bento-heading" className="visually-hidden">Design Projects</h2>
        <p className="intro-line">
          <span className="h-title-sans">From</span>
          <span className="h-title-sans">Insight</span>
          <span className="h-title-sans">to</span>
          <span className="h-title-sans">Interface</span>
          <span className="bento-title__icon" aria-hidden="true">
            <img src={iconDesigningInterfaces} alt="" loading="lazy" style={{ width: 32 }} />
          </span>
          <span className="h-title-serif">My</span>
          <span className="h-title-serif">Design</span>
          <span className="h-title-serif">Career</span>
        </p>
        <p className="intro-sub text-subtext">
          I’ve led projects across <span className="text-subtext-serif">UX, frontend systems, and product thinking.</span>
          Here’s a look at what I’ve shipped.
        </p>
      </header>
      <div className="bento-grid">
        <div ref={leftRef} className="bento-col reveal">
          {projectsColumnLeft.map(p => (
            <article key={p.id} className={`bento-card ${p.variant}`}>
              <div className="bento-card__body">
                <div className="bento-card__head">
                  <h3 className="h-card-title bento-card__title">{p.title}</h3>
                  <div className="bento-card__arrow" aria-hidden="true"><img src={iconArrowUpRight} alt="" loading="lazy" /></div>
                </div>
                <p className="bento-card__desc text-label text-secondary">{p.description}</p>
                <div className="bento-card__tags">{p.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
              </div>
              {p.variant === 'slider' && (
                <div className="bento-card__media bento-card__media--slider">
                  <BeforeAfterSlider />
                </div>
              )}
              {p.variant === 'stacked' && (
                <div className="bento-card__media bento-card__media--stacked" aria-hidden="true">
                  <div className="stacked-images">
                    <div className="stacked-images__item rotate-left" style={{ backgroundImage: `url(${imgGrowfastBottom})` }} />
                    <div className="stacked-images__item base" style={{ backgroundImage: `url(${imgGrowfastMiddle})` }} />
                    <div className="stacked-images__item rotate-right" style={{ backgroundImage: `url(${imgGrowfastTop})` }} />
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
  <div ref={midRef} className="bento-col reveal">
          {projectsColumnMid.map(p => (
            <article key={p.id} className="bento-card" >
              <div className="bento-card__body">
                <div className="bento-card__head">
                  <h3 className="h-card-title bento-card__title">{p.title}</h3>
                  <div className="bento-card__arrow" aria-hidden="true"><img src={iconArrowUpRight} alt="" loading="lazy" /></div>
                </div>
                <p className="bento-card__desc text-label text-secondary">{p.description}</p>
                <div className="bento-card__tags">{p.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
              </div>
              {p.variant === 'imageRight' && (
                <div className="bento-card__media bento-card__media--image-right" aria-hidden="true">
                  <div className="image-right" style={{ backgroundImage: `url(${imgUstraa})` }} />
                </div>
              )}
            </article>
          ))}
        </div>
  <div ref={wideRef} className="bento-col bento-col--wide reveal">
          {projectsColumnWide.map(p => (
            <article key={p.id} className="bento-card bento-card--wide">
              <div className="bento-card__media" aria-hidden="true">
                <div className="image-top" style={{ backgroundImage: `url(${imgMercury})` }} />
              </div>
              <div className="bento-card__body">
                <div className="bento-card__head">
                  <h3 className="h-card-title bento-card__title">{p.title}</h3>
                  <div className="bento-card__arrow" aria-hidden="true"><img src={iconArrowUpRight} alt="" loading="lazy" /></div>
                </div>
                <p className="bento-card__desc text-label text-secondary">{p.description}</p>
                <div className="bento-card__tags">{p.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoDesignProjects;
