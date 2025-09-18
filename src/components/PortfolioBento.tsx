import React from 'react';
import '../styles/global.scss';
import { Tag } from './Tag';
import { AiProjectCardPreset1 } from './AiProjectCard';

// Simplified representation of the bento/grid section
export const PortfolioBento: React.FC = () => {
  return (
    <section style={{ display: 'grid', gap: 40, marginTop: 80 }}>
      <div style={{ display: 'grid', gap: 32, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <div className="surface-glass" style={{ padding: 32 }}>
          <h3 className="h-card-title" style={{ margin: 0 }}>Improving ePaper Readability</h3>
          <p className="text-label text-secondary" style={{ marginTop: 8 }}>Enhanced distribution across 4 publications with accessibility + usability improvements.</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
            <Tag>UX Audit</Tag><Tag>User Testing</Tag><Tag>Accessibility</Tag><Tag>Figma</Tag>
          </div>
        </div>
        <div className="surface-glass" style={{ padding: 32 }}>
          <h3 className="h-card-title" style={{ margin: 0 }}>GrowFast</h3>
          <p className="text-label text-secondary" style={{ marginTop: 8 }}>Scaled Masterclasses to 20Cr+ ARR; journeys, curriculum, landing CRO, speaker pipeline.</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
            <Tag>Marketing</Tag><Tag>Course Design</Tag><Tag>Quant Research</Tag><Tag>PR</Tag>
          </div>
        </div>
        <div className="surface-glass" style={{ padding: 32 }}>
          <h3 className="h-card-title" style={{ margin: 0 }}>Product Reviews Platform</h3>
          <p className="text-label text-secondary" style={{ marginTop: 8 }}>Built Ustraa reviews + moderation using Magento APIs for ingestion.</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
            <Tag>Angular</Tag><Tag>Magento</Tag><Tag>PHP</Tag>
          </div>
        </div>
      </div>
      <AiProjectCardPreset1 />
    </section>
  );
};
