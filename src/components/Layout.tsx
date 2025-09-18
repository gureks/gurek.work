import React from 'react';

export const Layout: React.FC<React.PropsWithChildren<{ maxWidth?: number }>> = ({ children, maxWidth = 1280 }) => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth, padding: '0 24px' }}>{children}</div>
    </div>
  );
};
