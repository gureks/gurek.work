import { iconGurekSingh } from '../imageManifest';

export interface FooterCta {
  id: string;
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  external?: boolean;
}

export interface FooterConfig {
  heading: {
    parts: Array<{ text: string; variant: 'sans' | 'serif'; }>;
  };
  subheading: Array<{ text: string; variant: 'sans' | 'serif'; }>;
  ctas: FooterCta[];
  copyright: {
    prefix: string;
    licenseLabel: string;
    licenseUrl: string;
    suffix: string;
    year: number;
  };
  logomark: {
    left: string; // e.g. 'gurek'
    right: string; // e.g. 'singh'
    headshot: string; // public path to svg/png
  };
}

// Assets from Figma export placed in public/figma-assets/footer
const HEADSHOT = iconGurekSingh;

export const footerConfig: FooterConfig = {
  heading: {
    parts: [
      { text: 'Let’s', variant: 'sans' },
      { text: 'build', variant: 'sans' },
      { text: 'experiences', variant: 'serif' },
      { text: 'together!', variant: 'sans' }
    ]
  },
  subheading: [
    { text: 'I’m', variant: 'sans' },
    { text: 'open', variant: 'sans' },
    { text: 'to', variant: 'sans' },
    { text: 'full-time roles,', variant: 'serif' },
    { text: 'collaborations,', variant: 'serif' },
    { text: 'or consulting', variant: 'serif' },
    { text: 'in', variant: 'sans' },
    { text: 'Product,', variant: 'serif' },
    { text: 'UX, or', variant: 'serif' },
    { text: 'AI-first systems.', variant: 'serif' }
  ],
  ctas: [
    { id: 'talk', label: 'Let’s Talk', href: 'mailto:gurek@example.com', variant: 'primary' },
    { id: 'resume', label: 'Download Resume', href: '/resume.pdf', variant: 'secondary' }
  ],
  copyright: {
    prefix: '© Copyright',
    year: 2025,
    licenseLabel: 'rights and wrongs',
    licenseUrl: 'https://github.com/gureks/gureks.github.io/blob/main/LICENSE/',
    suffix: 'Reserved. Made with Umeed, Prathishtha & Anushasan ❤️'
  },
  logomark: {
    left: 'gurek',
    right: 'singh',
    headshot: HEADSHOT
  }
};

export default footerConfig;
