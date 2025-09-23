export interface HeroHeadingPart { text: string; variant: 'sans' | 'serif'; icon?: string; iconPosition?: 'left' | 'right'; }
export interface HeroLine { parts: HeroHeadingPart[]; }
export interface HeroCta { id: string; label: string; href: string; variant: 'primary' | 'secondary'; }
import { iconDesigningInterfaces, iconEngineeringIntelligence, iconBuildingProducts, iconGurekSingh } from '../imageManifest';

export interface HeroIntroSegment { text: string; variant: 'sans' | 'serif'; emphasis?: boolean; }

export interface HeroConfig {
  lines: HeroLine[];
  intro: HeroIntroSegment[];
  ctas: HeroCta[];
  decorativeIcons: { id: string; src: string; alt?: string }[]; // future use for inline hero icons
}
export const heroConfig: HeroConfig = {
  lines: [
    { parts: [
      { icon: iconDesigningInterfaces, iconPosition: 'left', text: 'Designing', variant: 'sans' },
      { text: 'Interfaces.', variant: 'serif' }
    ] },
    { parts: [
      { text: 'Engineering', variant: 'sans', icon: iconEngineeringIntelligence, iconPosition: 'right' },
      { text: 'Intelligence.', variant: 'serif' }
    ] },
    { parts: [
      { text: 'Building', variant: 'sans'},
      { text: 'Products.', variant: 'serif', icon: iconBuildingProducts, iconPosition: 'right' }
    ] }
  ],
  intro: [
    { text: "I'm", variant: 'sans' },
    { text: 'Gurek', variant: 'serif', emphasis: true, icon: iconGurekSingh},
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
    { id: 'interface', src: iconDesigningInterfaces, alt: '' },
    { id: 'engineering', src: iconEngineeringIntelligence, alt: '' },
    { id: 'products', src: iconBuildingProducts, alt: '' }
  ]
};

export default heroConfig;
