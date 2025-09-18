import React from 'react';
import '../styles/global.scss';

export const Tag: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ children, ...rest }) => (
  <span className="tag" {...rest}>{children}</span>
);
