import React from 'react';
import '../styles/global.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', icon, children, as = 'button', href, ...rest }) => {
  const className = `button button--${variant}`;
  if (as === 'a' && href) {
    const anchorProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={className} href={href} {...anchorProps}>
        <span>{children}</span>
        {icon && <span className="icon-circle">{icon}</span>}
      </a>
    );
  }
  return (
    <button className={className} {...rest}>
      <span>{children}</span>
      {icon && <span className="icon-circle">{icon}</span>}
    </button>
  );
};
