import { AiProjectCardImageSpec } from './AiProjectCardImageSpec';
import { imgAvatarLeft, imgAvatarMiddle, imgAvatarRight, imgHackathonLeft, imgHackathonRight, imgTilayerMiddle } from '../imageManifest';

export interface AiProjectSpec {
  id: string;
  title: string;
  description: string;
  images: AiProjectCardImageSpec[];
  accent: 'brand-accent-1' | 'brand-accent-3' | 'primary';
  offset: 1 | 2 | 3; // sticky offset ordering
}

export const aiProjects: AiProjectSpec[] = [
  {
    id: 'avatar-system',
    title: 'AI Avatar System',
    description: 'Trusted Stories, Humanized. Automated anchor-led videos → 80% faster, 60% cheaper',
    images: [
      { src: imgAvatarLeft, rotation: 15, top: '48%', left: '52%', scale: 1.02, zIndex: 3, hoverScale: 1.06, hoverTranslateX: '2%', hoverTranslateY: '-2%' },
      { src: imgAvatarMiddle, rotation: -7.5, top: '50%', left: '48%', scale: 0.98, zIndex: 2, hoverScale: 1.04, hoverTranslateX: '-1%', hoverTranslateY: '-1%' },
      { src: imgAvatarRight, rotation: 0, top: '50%', left: '50%', scale: 1, zIndex: 1, hoverScale: 1.03 }
    ],
    accent: 'brand-accent-1',
    offset: 1
  },
  {
    id: 'til-intelligence-layer',
    title: 'Times Intelligence Layer',
    description: 'Reusable AI capable of powering summarisation, experiential copilots, real-time generated podcasts & Live TV, and entire knowledge grids',
    images: [
      { src: imgTilayerMiddle, rotation: 0, top: '50%', left: '50%', scale: 1, zIndex: 1, hoverScale: 1.04 }
    ],
    accent: 'primary',
    offset: 2
  },
  {
    id: 'hackathon-winner',
    title: 'TIL AI Hackathon Winner 👑',
    description: 'Solo prototype → now in production video tooling stack',
    images: [
      { src: imgHackathonLeft, rotation: -15, top: '52%', left: '48%', scale: 1.05, zIndex: 2, hoverScale: 1.06, hoverTranslateX: '-1%', hoverTranslateY: '-2%' },
      { src: imgHackathonRight, rotation: 0, top: '50%', left: '50%', scale: 0.95, zIndex: 1, hoverScale: 1.05, hoverTranslateY: '1%' }
    ],
    accent: 'brand-accent-3',
    offset: 3
  }
];
