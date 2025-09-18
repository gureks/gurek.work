export interface ReadItem {
  id: string;
  title: string; // fallback accessible label
  // For now we only have the original PNG exported from Figma. After optimization we will
  // populate webp1x/webp2x for <picture> sources. Keeping fields optional to allow gradual rollout.
  png: string;      // required base PNG (public path)
  webp1x?: string;  // optimized 1x webp (180x276)
  webp2x?: string;  // optimized 2x webp (360x552)
  alt?: string;     // alt text (if decorative, can be empty string)
  href?: string;    // future link target
}

export interface ReadsCarouselData {
  items: ReadItem[]; // single row sequence
  total: number;
}

export const READS_SECTION_ID = 'reads-section';

// Figma exported cover assets (placeholder mapping; replace with central manifest if desired)
// Reusing available image assets (substitute later with dedicated covers)
// Map the eight Figma PNG exports (hash filenames) located under public/figma-assets.
// These resolve at runtime since Vite serves /public at root.
// TODO: After running optimization script, add corresponding webp variants.
const baseReads: ReadItem[] = [
  {
    id: 'read-0', title: 'Framework Reference 0',
    png: '/figma-assets/0318d832bb2bea1acffab20b7a68ceda21dd081c.png',
    webp1x: '/figma-assets/optimized/0318d832bb2bea1acffab20b7a68ceda21dd081c-180w.webp',
    webp2x: '/figma-assets/optimized/0318d832bb2bea1acffab20b7a68ceda21dd081c-360w.webp', alt: ''
  },
  {
    id: 'read-1', title: 'Framework Reference 1',
    png: '/figma-assets/57a756d84a3ded6df3c3fa5ba53ce40bf1d7ac76.png',
    webp1x: '/figma-assets/optimized/57a756d84a3ded6df3c3fa5ba53ce40bf1d7ac76-180w.webp',
    webp2x: '/figma-assets/optimized/57a756d84a3ded6df3c3fa5ba53ce40bf1d7ac76-360w.webp', alt: ''
  },
  {
    id: 'read-2', title: 'Framework Reference 2',
    png: '/figma-assets/590b70389c10b655dec7bfe4e6797c36f5385cb9.png',
    webp1x: '/figma-assets/optimized/590b70389c10b655dec7bfe4e6797c36f5385cb9-180w.webp',
    webp2x: '/figma-assets/optimized/590b70389c10b655dec7bfe4e6797c36f5385cb9-360w.webp', alt: ''
  },
  {
    id: 'read-3', title: 'Framework Reference 3',
    png: '/figma-assets/7177699d52f9a59a0f8fedece84e34d0d077128b.png',
    webp1x: '/figma-assets/optimized/7177699d52f9a59a0f8fedece84e34d0d077128b-180w.webp',
    webp2x: '/figma-assets/optimized/7177699d52f9a59a0f8fedece84e34d0d077128b-360w.webp', alt: ''
  },
  {
    id: 'read-4', title: 'Framework Reference 4',
    png: '/figma-assets/7183fd4808b9c2d6938eee6ee2c59abc39a68ea9.png',
    webp1x: '/figma-assets/optimized/7183fd4808b9c2d6938eee6ee2c59abc39a68ea9-180w.webp',
    webp2x: '/figma-assets/optimized/7183fd4808b9c2d6938eee6ee2c59abc39a68ea9-360w.webp', alt: ''
  },
  {
    id: 'read-5', title: 'Framework Reference 5',
    png: '/figma-assets/9f8566fe9f21f23fa9b1fd2463180ebd229f4522.png',
    webp1x: '/figma-assets/optimized/9f8566fe9f21f23fa9b1fd2463180ebd229f4522-180w.webp',
    webp2x: '/figma-assets/optimized/9f8566fe9f21f23fa9b1fd2463180ebd229f4522-360w.webp', alt: ''
  },
  {
    id: 'read-6', title: 'Framework Reference 6',
    png: '/figma-assets/c71eb51acbcae35c15f5f5dbb410de4ed8ec10c1.png',
    webp1x: '/figma-assets/optimized/c71eb51acbcae35c15f5f5dbb410de4ed8ec10c1-180w.webp',
    webp2x: '/figma-assets/optimized/c71eb51acbcae35c15f5f5dbb410de4ed8ec10c1-360w.webp', alt: ''
  },
  {
    id: 'read-7', title: 'Framework Reference 7',
    png: '/figma-assets/f50fa8d5f1147d1ae36eb1eefe6d3002c3f851e7.png',
    webp1x: '/figma-assets/optimized/f50fa8d5f1147d1ae36eb1eefe6d3002c3f851e7-180w.webp',
    webp2x: '/figma-assets/optimized/f50fa8d5f1147d1ae36eb1eefe6d3002c3f851e7-360w.webp', alt: ''
  }
];

export function generateReadsData(dupe: number = 2): ReadsCarouselData {
  const items: ReadItem[] = [];
  for (let i = 0; i < dupe; i++) items.push(...baseReads.map(r => ({ ...r, id: r.id + '-d' + i })));
  return { items, total: items.length };
}

export const readsCarousel = generateReadsData(2);
