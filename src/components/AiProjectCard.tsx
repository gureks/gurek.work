import React from 'react';
import '../styles/global.scss';
// import '../styles/_ai-projects.scss';
import { iconArrowUpRight } from '../imageManifest';
import { AiProjectCardImageSpec } from '../data/AiProjectCardImageSpec';

export interface AiProjectCardProps {
  variant?: 'accent-1' | 'accent-2' | 'accent-3';
  title: string;
  description: string;
  images: AiProjectCardImageSpec[];
  accent?: 'brand-accent-1' | 'brand-accent-2' | 'brand-accent-3' | 'primary';
}

const accentClass: Record<string, string> = {
  'brand-accent-1': 'ai-project-card--accent-1',
  'brand-accent-2': 'ai-project-card--accent-2',
  'brand-accent-3': 'ai-project-card--accent-3',
  'primary': 'ai-project-card--accent-primary'
};

export const AiProjectCard: React.FC<AiProjectCardProps> = ({
  title,
  description,
  images,
  accent = 'primary'
}) => {
  const classes = ['ai-project-card', accentClass[accent]].join(' ');
  return (
    <div className={classes}>
      <div className="ai-project-card__head">
        <div className="container">
          <h3 className="h-card-title ai-project-card__title">{title}</h3>
          <p className="ai-project-card__desc text-label text-secondary">{description}</p>
        </div>
        <div className="ai-project-card__icon" aria-hidden="true">
          <img src={iconArrowUpRight} alt="" loading="lazy" />
        </div>
      </div>
      <div className="ai-project-card__images" aria-hidden="true">
        {images.map((img, i) => {
          const { top='50%', left='50%', rotation = 0, scale = 1, translateX = '0', translateY = '0' } = img;
          // Extend style with CSS custom properties via index signature casting
          const style: React.CSSProperties & Record<string, string> = {
            // top: img.top || '50%',
            // left: img.left || '50%',
            // transform: `rotate(${rotation}deg) translate(${translateX}, ${translateY}) scale(${scale.toString()})`,

            // Hover deltas (defaults neutral)
            // ['--img-hover-scale']: (img.hoverScale ?? 1).toString(),
            // ['--img-hover-translate-x']: img.hoverTranslateX || '0',
            // ['--img-hover-translate-y']: img.hoverTranslateY || '0',
            // ['--img-hover-rotate']: (img.hoverRotate ?? 0) + 'deg'
          };
          // generate unique identifier
          const uid = `hoverable-${i}`;

          if (img.zIndex !== undefined) style.zIndex = String(img.zIndex);
          return (
            <React.Fragment key={uid}>
            <div key={i} data-hover-id={uid} id={uid} className={['ai-project-card__img', img.className].filter(Boolean).join(' ')} style={style}>
              <div className="ai-project-card__img-inner" style={{ backgroundImage: `url(${img.src})` }} />
            </div>
            <style>
                {`
                  .${accentClass[accent]} [data-hover-id="${uid}"] {
                    transition: transform 1s ease;
                    width: ${img.width || '300px'};
                    height: ${img.height || '195px'};
                    top: ${img.top || '50%'};
                    left: ${img.left || '50%'};
                    transform: rotate(${rotation}deg) translate(${translateX}, ${translateY}) scale(${scale.toString()});
                  }
                  .${accentClass[accent]}:hover [data-hover-id="${uid}"] {
                    transform: rotate(${img.hoverRotate}deg)
                              translate(${img.hoverTranslateX || '0'}, ${img.hoverTranslateY || '0'})
                              scale(${(img.hoverScale ?? 1).toString()});
                  }
                `}
              </style>
            </React.Fragment>
          );
        })}
      </div>
      <div className="ai-project-card__border" aria-hidden="true" />
    </div>
  );
};

// (Presets removed – now data-driven via aiProjects.ts)
