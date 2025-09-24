import { imgBookCreativeConfidence, imgBookDontBelieve, imgBookEgoEnemy, imgBookFactfulness, imgBookHyperfocus, imgBookShoeDog, imgBookStartWithWhy, imgBookUserFriendly } from '../imageManifest';

export interface ReadItem {
  id: string;
  title: string; // fallback accessible label
  // For now we only have the original PNG exported from Figma. After optimization we will
  // populate webp1x/webp2x for <picture> sources. Keeping fields optional to allow gradual rollout.
  png: string;      // required base PNG (public path)
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
    png: imgBookCreativeConfidence,
    alt: 'Cover of the book Creative Confidence by Tom and David Kelley',},
  {
    id: 'read-1', title: 'Framework Reference 1',
    png: imgBookDontBelieve,
    alt: 'Cover of the book Don’t Believe Everything You Think by Thomas E. Brown',},
  {
    id: 'read-2', title: 'Framework Reference 2',
    png: imgBookEgoEnemy,
    alt: 'Cover of the book The Ego Is the Enemy by Ryan Holiday',},
  {
    id: 'read-3', title: 'Framework Reference 3',
    png: imgBookFactfulness,
    alt: 'Cover of the book Factfulness by Hans Rosling',},
  {
    id: 'read-4', title: 'Framework Reference 4',
    png: imgBookHyperfocus,
    alt: 'Cover of the book Hyperfocus by Chris Bailey',},
  {
    id: 'read-5', title: 'Framework Reference 5',
    png: imgBookShoeDog,
    alt: 'Cover of the book Shoe Dog by Phil Knight',},
  {
    id: 'read-6', title: 'Framework Reference 6',
    png: imgBookUserFriendly,
    alt: 'Cover of the book User Friendly by Cliff Kuang and Robert Fabricant',},
  {
    id: 'read-7', title: 'Framework Reference 7',
    png: imgBookStartWithWhy,
    alt: 'Cover of the book Start With Why by Simon Sinek',}
];

export function generateReadsData(dupe: number = 2): ReadsCarouselData {
  const items: ReadItem[] = [];
  for (let i = 0; i < dupe; i++) items.push(...baseReads.map(r => ({ ...r, id: r.id + '-d' + i })));
  return { items, total: items.length };
}

export const readsCarousel = generateReadsData(2);
