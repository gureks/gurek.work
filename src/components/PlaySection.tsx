import React from 'react';
import '../styles/global.scss';
import { notWorkCarousel, NOT_WORK_SECTION_ID } from '../data/notWork';
import { useReveal } from '../hooks/useReveal';
import { imgArrow } from '../imageManifest';

// Placeholder avatar uses two layered arrow icons for now (replace with headshot svgs later)

export const PlaySection: React.FC = () => {
  const rowsRef = useReveal<HTMLDivElement>();
  const { rows } = notWorkCarousel;
  return (
    <section className="play-section" id={NOT_WORK_SECTION_ID} aria-labelledby="play-heading">
      <header>
        <h2 id="play-heading" className="visually-hidden">Not Work (Still Me)</h2>
        <p className="play-section__title" aria-hidden="true">
          <span className="sans">Not</span>
          <span className="sans">work,</span>
          <span className="sans">but</span>
          <span className="play-section__avatar" aria-hidden="true">
            <img src={imgArrow} alt="" loading="lazy" style={{ width: 24 }} />
          </span>
          <span className="serif">still</span>
          <span className="serif">me</span>
        </p>
      </header>
      <div ref={rowsRef} className="play-carousel reveal" aria-hidden="true">
        {rows.map((row, i) => {
          const direction = i % 2 === 0 ? 'forward' : 'reverse';
          return (
            <div key={i} className={`play-carousel__row play-carousel__row--${direction}`}>
              <div className="play-carousel__mask">
                <div className="play-carousel__track">
                  {[...row, ...row].map(tile => (
                    <div key={tile.id + Math.random()} className="play-tile">
                      <div className="play-tile__inner" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlaySection;