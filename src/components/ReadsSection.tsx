import React from 'react';
import '../styles/global.scss';
import { readsCarousel, READS_SECTION_ID, ReadItem } from '../data/reads';
// import { iconBook, imgBookCreativeConfidence, imgBookDontBelieve, imgBookEgoEnemy, imgBookFactfulness, imgBookHyperfocus, imgBookShoeDog, imgBookStartWithWhy, imgBookUserFriendly } from '../imageManifest';
import { iconBook } from '../imageManifest';
import { useReveal } from '../hooks/useReveal';

export const ReadsSection: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();
  const { items } = readsCarousel;
  // Duplicate items for seamless marquee
  const sequence = [...items, ...items];
  return (
    <section className="reads-section" aria-labelledby="reads-heading" id="reads">
      <header className="reads-section__header">
        <h2 id="reads-heading" className="visually-hidden">Frameworks I read not just build</h2>
        <p className="reads-section__title" aria-hidden="true">
          <span className="reads-title__serif">Frameworks</span>
          <span className="reads-title__serif">I</span>
          <span className="reads-title__serif">Read</span>
          <span className="reads-title__icon" aria-hidden="true">
            <img src={iconBook} alt="" />
          </span>
          <span className="reads-title__sans">Not</span>
          <span className="reads-title__sans">Just</span>
          <span className="reads-title__sans">Build</span>
        </p>
      </header>
      <div ref={ref} className="reads-marquee reveal" aria-hidden="true">
        <div className="reads-marquee__mask">
          <div className="reads-marquee__track">
            {sequence.map((item: ReadItem) => (
              <div key={item.id} className="reads-cover" style={{ backgroundImage: `url(${item.png})` }} >
                <img
                  src={item.png}
                  width={180}
                  height={276}
                  loading="lazy"
                  decoding="async"
                  alt={item.alt || ''}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadsSection;
