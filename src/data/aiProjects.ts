import { imgMsmeAwards, imgStep4Processing, imgStep3, img0SydmAno8XDbdIh1, imgImage, imgWinnerCertificate } from '../imageManifest';

export interface AiProjectSpec {
  id: string;
  title: string;
  description: string;
  images: {
    src: string;
    rotation?: number;
    /** Optional fine positioning within stack (percentage offsets) */
    top?: string;
    left?: string;
    /** Additional transform (e.g., scale) appended after rotation */
    scale?: number;
    translateX?: string;
    translateY?: string;
    /** Optional stacking order */
    zIndex?: number;
    /** Hover transform deltas (applied multiplicatively/additively) */
    hoverScale?: number; // multiply base scale
    hoverTranslateX?: string; // additive offset on hover
    hoverTranslateY?: string;
    hoverRotate?: number; // additive degrees on hover
  }[];
  accent: 'brand-accent-1' | 'brand-accent-3' | 'primary';
  offset: 1 | 2 | 3; // sticky offset ordering
}

export const aiProjects: AiProjectSpec[] = [
  {
    id: 'avatar-system',
    title: 'AI Avatar System',
    description: 'Trusted Stories, Humanized. Automated anchor-led videos → 80% faster, 60% cheaper',
    images: [
      { src: imgMsmeAwards, rotation: 15, top: '48%', left: '52%', scale: 1.02, zIndex: 3, hoverScale: 1.06, hoverTranslateX: '2%', hoverTranslateY: '-2%' },
      { src: imgStep4Processing, rotation: -7.5, top: '50%', left: '48%', scale: 0.98, zIndex: 2, hoverScale: 1.04, hoverTranslateX: '-1%', hoverTranslateY: '-1%' },
      { src: imgStep3, rotation: 0, top: '50%', left: '50%', scale: 1, zIndex: 1, hoverScale: 1.03 }
    ],
    accent: 'brand-accent-1',
    offset: 1
  },
  {
    id: 'til-intelligence-layer',
    title: 'Times Intelligence Layer',
    description: 'Reusable AI capable of powering summarisation, experiential copilots, real-time generated podcasts & Live TV, and entire knowledge grids',
    images: [
      { src: img0SydmAno8XDbdIh1, rotation: 0, top: '50%', left: '50%', scale: 1, zIndex: 1, hoverScale: 1.04 }
    ],
    accent: 'primary',
    offset: 2
  },
  {
    id: 'hackathon-winner',
    title: 'TIL AI Hackathon Winner 👑',
    description: 'Solo prototype → now in production video tooling stack',
    images: [
      { src: imgImage, rotation: -15, top: '52%', left: '48%', scale: 1.05, zIndex: 2, hoverScale: 1.06, hoverTranslateX: '-1%', hoverTranslateY: '-2%' },
      { src: imgWinnerCertificate, rotation: 0, top: '50%', left: '50%', scale: 0.95, zIndex: 1, hoverScale: 1.05, hoverTranslateY: '1%' }
    ],
    accent: 'brand-accent-3',
    offset: 3
  }
];
