export interface AiProjectCardImageSpec {
  src: string;
  alt?: string;
  rotation?: number; // degrees
  className?: string;
  /** Percentage or length for fine positioning (defaults 50%) */
  top?: string;
  left?: string;
  width?: string;
  height?: string;
  /** Optional additional transforms applied after rotation */
  scale?: number; // base scale (default 1)
  translateX?: string; // e.g. '4%' or '8px'
  translateY?: string;
  // layering & hover deltas
  zIndex?: number;
  hoverScale?: number;
  hoverTranslateX?: string;
  hoverTranslateY?: string;
  hoverRotate?: number;
}