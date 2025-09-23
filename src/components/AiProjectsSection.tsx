import React from 'react';
import '../styles/global.scss';
import { AiProjectCard } from './AiProjectCard';
import { TagTicker } from './TagTicker';
import { useReveal } from '../hooks/useReveal';
import { aiProjects } from '../data/aiProjects';
import { iconAi, iconHumans } from '../imageManifest';


export const AiProjectsSection: React.FC = () => {
  const leftRef = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>();
  const tags = ['OpenAI APIs','RAG Stack','Rapid Prototyping','Gemini','Python','LangChain','LLMs','FAISS','PostgresSQL','Vector Store','QLoras','HeyGen','Supabase','Codex'];
  return (
    <section className="ai-projects-section" aria-labelledby="ai-projects-heading">
      <div className="ai-projects-layout">
        <div ref={leftRef} className="ai-projects-left reveal">
          <div className="lines" aria-hidden="true">
            <div className="line">
              <span className="h-title-sans">Built with</span>
              <img src={iconAi} alt="" aria-hidden="true" className="ai-projects-title__icon" />
              <span className="h-title-serif" style={{ fontStyle: 'italic', fontWeight: 300 }}>AI,</span>
            </div>
            <div className="line">
              <span className="h-title-sans">Designed for</span>
              <img src={iconHumans} alt="" aria-hidden="true" className="ai-projects-title__icon" />
              <span className="h-title-serif" style={{ fontStyle: 'italic', fontWeight: 300 }}>humans.</span>
            </div>
          </div>
          <h2 id="ai-projects-heading" className="visually-hidden">AI Projects</h2>
          <p className="text-subtext description"><span className="text-secondary">From automation to storytelling, these </span><span className="text-subtext-serif" style={{ fontStyle: 'italic' }}>AI-native projects </span><span className="text-subtext-serif" style={{ fontStyle: 'italic' }}>reshape experiences, and personalise at scale.</span></p>
          <div className="ticker-group">
            <TagTicker tags={tags} direction="left" />
            <TagTicker tags={tags} direction="right" />
          </div>
        </div>
        <div ref={rightRef} className="ai-projects-right reveal">
          {aiProjects.map(p => (
            <div key={p.id} className={`card-wrap offset-${p.offset}`}>
              <AiProjectCard
                title={p.title}
                description={p.description}
                images={p.images}
                accent={p.accent}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
