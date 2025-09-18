// Central data source for Bento Design Projects
export interface ProjectCardData {
  id: string;
  title: string;
  description: string;
  tags: string[];
  variant?: 'slider' | 'stacked' | 'imageRight' | 'imageTop';
}

export const projectsColumnLeft: ProjectCardData[] = [
  {
    id: 'epaper',
    title: 'Improving ePaper Readability',
    description: 'Enhanced the digital distribution across 4 publications, by improving usability & accessibility; resulting in significant user experience & engagement improvements.',
    tags: ['UX Audit', 'User Testing', 'Accessibility', 'Figma'],
    variant: 'slider'
  },
  {
    id: 'growfast',
    title: 'GrowFast',
    description: 'Scaled Masterclasses to 20Cr+ ARR; owning user journeys, designing curriculum, developing landing pages to optimise CRO, and handling speaker pipelines',
    tags: ['Marketing', 'Course Design', 'Quantitative Research', 'PR'],
    variant: 'stacked'
  }
];

export const projectsColumnMid: ProjectCardData[] = [
  {
    id: 'portfolio',
    title: 'this.portfolio',
    description: 'Designing & Developing in Public. Speed iterations with public feedback loop',
    tags: ['Figma', 'ClaudeMCP', 'ReactJS']
  },
  {
    id: 'product-reviews',
    title: 'Product Reviews Platform',
    description: 'Built the Ustraa Reviews and Moderation from scratch using Magento-based APIs for collating',
    tags: ['Angular', 'Magento', 'PHP'],
    variant: 'imageRight'
  }
];

export const projectsColumnWide: ProjectCardData[] = [
  {
    id: 'handoffs',
    title: 'Better Developer Handoffs',
    description: 'Created and maintaining Design System for ET Markets - stock research tools and news app, across all platforms;  essentially cutting handoff time, improving development turnaround, & enabled scalable theming',
    tags: ['Design Systems', 'Auto Layout', 'Accessibility', 'Tokens Studio'],
    variant: 'imageTop'
  }
];
