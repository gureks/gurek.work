import React from 'react';
import '../styles/global.scss';
import footerConfig from '../data/footer';

export const FOOTER_SECTION_ID = 'footer-section';

export const Footer: React.FC = () => {
  const { heading, subheading, ctas, copyright, logomark } = footerConfig;
  return (
    <footer id={FOOTER_SECTION_ID} className="footer" aria-labelledby="footer-heading">
      <div className="footer__border" aria-hidden="true" />
      <div className="footer__inner">
        <div className="footer__titles">
          <h2 id="footer-heading" className="visually-hidden">Footer Call To Action</h2>
          <p className="footer-heading" aria-label={heading.parts.map(p=>p.text).join(' ')}>
            {heading.parts.map((part, i) => (
              <span key={i} className={part.variant === 'serif' ? 'footer-heading__serif' : 'footer-heading__sans'}>{part.text}</span>
            ))}
          </p>
          <p className="footer-subheading" aria-label={subheading.map(p=>p.text).join(' ')}>
            {subheading.map((part, i) => (
              <span key={i} className={part.variant === 'serif' ? 'footer-subheading__serif' : 'footer-subheading__sans'}>{part.text}</span>
            ))}
          </p>
          <div className="footer-ctas" role="group" aria-label="Primary actions">
            {ctas.map(cta => (
              <a
                key={cta.id}
                href={cta.href}
                className={`button button--${cta.kind}`}
                {...(cta.external ? { rel: 'noopener noreferrer', target: '_blank' } : {})}
              >
                <span className="button__label">{cta.label}</span>
                <span className="icon-circle" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="footer__logomark" aria-hidden="true">
          <span className="footer-logoword footer-logoword--left">{logomark.left}</span>
          <span className="footer-headshot">
            <img src={logomark.headshot} width={108} height={108} alt="" loading="lazy" decoding="async" />
          </span>
          <span className="footer-logoword footer-logoword--right">{logomark.right}</span>
        </div>
        <p className="footer__copyright">
          <span>{copyright.prefix} {copyright.year}. All </span>
          <a href={copyright.licenseUrl} className="footer__license">{copyright.licenseLabel}</a>
          <span> {copyright.suffix}</span>
        </p>
      </div>
    </footer>
  );
};
