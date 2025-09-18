import React, { useState } from 'react';
import nudgeConfig from '../data/nudge';

export const NudgeAlert: React.FC = () => {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  const { messageParts, dismissible, ariaLabel, role = 'status', id } = nudgeConfig;
  return (
    <div
      className="nudge" data-nudge-id={id}
      role={role}
      aria-label={ariaLabel}
    >
      <p className="nudge__content">
        {messageParts.map((part, i) => {
          if (part.type === 'text' || part.type === 'emoji') return <span key={i}>{part.text}</span>;
          if (part.type === 'link') return <a key={i} href={part.href} className="nudge__link" target="_blank" rel="noopener noreferrer">{part.text}</a>;
          return null;
        })}
      </p>
      {dismissible && (
        <button
          type="button"
          className="nudge__close"
          aria-label="Dismiss announcement"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default NudgeAlert;
