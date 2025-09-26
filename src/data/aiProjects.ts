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
      { src: imgAvatarLeft, rotation: -7.5, top: '20%', left: '2%', scale: 1, zIndex: 2, hoverScale: 0.75, hoverTranslateX: '20%', hoverTranslateY: '-30%', hoverRotate: 7.5},
      { src: imgAvatarMiddle, rotation: 0, top: '40%', left: '25%', scale: 1.25, zIndex: 3, hoverScale: 1.5, hoverTranslateX: '0%', hoverTranslateY: '-10%', hoverRotate: 0 },
      { src: imgAvatarRight, rotation: 7.5, top: '10%', left: '50%', scale: 1, zIndex: 1, hoverScale: 0.75, hoverTranslateX: '-25%', hoverTranslateY: '-20%', hoverRotate: -7.5 }
    ],
    accent: 'brand-accent-1',
    offset: 1
  },
  {
    id: 'til-intelligence-layer',
    title: 'Times Intelligence Layer',
    description: 'Reusable AI capable of powering summarisation, experiential copilots, real-time generated podcasts & Live TV, and entire knowledge grids',
    images: [
      { src: imgTilayerMiddle, rotation: 0, top: '40%', left: '25%', scale: 1.5, zIndex: 1, hoverScale: 1.5, hoverTranslateX: '0%', hoverTranslateY: '-10%', hoverRotate: 0 }
    ],
    accent: 'primary',
    offset: 2
  },
  {
    id: 'hackathon-winner',
    title: 'TIL AI Hackathon Winner 👑',
    description: 'Solo prototype → now in production video tooling stack',
    images: [
      { src: imgHackathonLeft, rotation: -15, top: '10%', left: '10%', width: '268px', height: '275px', scale: 1, zIndex: 1, hoverScale: 0.5, hoverTranslateX: '40%', hoverTranslateY: '20%', hoverRotate: 0 },
      { src: imgHackathonRight, rotation: 0, top: '20%', left: '40%', width: '300px', height: '424px', scale: 1, zIndex: 2, hoverScale: 1.1, hoverTranslateX: '-35%', hoverTranslateY: '-5%', hoverRotate: 0 }
    ],
    accent: 'brand-accent-3',
    offset: 3
  }
];
