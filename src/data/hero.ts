export interface HeroHeadingPart { text: string; variant: 'sans' | 'serif'; }
export interface HeroLine { parts: HeroHeadingPart[]; }
export interface HeroCta { id: string; label: string; href: string; variant: 'primary' | 'secondary'; }

export interface HeroIntroSegment { text: string; variant: 'sans' | 'serif'; emphasis?: boolean; }

export interface HeroConfig {
  lines: HeroLine[];
  intro: HeroIntroSegment[];
  ctas: HeroCta[];
  decorativeIcons: { id: string; src: string; alt?: string }[]; // future use for inline hero icons
}

// Public Figma exported icons (subset – can be extended)
const ICON_INTERFACE = '/figma-assets/hero/f8e383e268379c015875c4021a88eccbbe1b10f8.svg';
const ICON_ENGINEERING = '/figma-assets/hero/c82e8221f826fb92316bcd1dbf51898099124a8c.svg';
const ICON_PRODUCTS = '/figma-assets/hero/b35970f73a003c10307feec9b8aa04c2b2f1b6bc.svg';

export const heroConfig: HeroConfig = {
  lines: [
    { parts: [ { text: 'Designing', variant: 'sans' }, { text: 'Interfaces.', variant: 'serif' } ] },
    { parts: [ { text: 'Engineering', variant: 'sans' }, { text: 'Intelligence.', variant: 'serif' } ] },
    { parts: [ { text: 'Building', variant: 'sans' }, { text: 'Products.', variant: 'serif' } ] }
  ],
  intro: [
    { text: 'I\'m', variant: 'sans' },
    { text: 'Gurek', variant: 'serif', emphasis: true },
    { text: 'Singh', variant: 'serif', emphasis: true },
    { text: '-', variant: 'sans' },
    { text: 'UX Engineer', variant: 'sans' },
    { text: 'and', variant: 'sans' },
    { text: 'Generalist PM.', variant: 'sans' },
    { text: 'I turn', variant: 'sans' },
    { text: 'abstract ideas', variant: 'serif', emphasis: true },
    { text: 'into', variant: 'sans' },
    { text: 'launched features', variant: 'serif', emphasis: true },
    { text: 'by blending together code, craft, and AI to build thoughtful and scalable systems.', variant: 'sans' }
  ],
  ctas: [
    { id: 'work', label: 'Explore My Work', href: '#ai-projects', variant: 'primary' },
    { id: 'resume', label: 'View Resume', href: '/resume.pdf', variant: 'secondary' }
  ],
  decorativeIcons: [
    { id: 'interface', src: ICON_INTERFACE, alt: '' },
    { id: 'engineering', src: ICON_ENGINEERING, alt: '' },
    { id: 'products', src: ICON_PRODUCTS, alt: '' }
  ]
};

export default heroConfig;
