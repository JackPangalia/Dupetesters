/**
 * Editorial imagery for the home hero — verified Unsplash URLs (photo IDs return 200).
 * License: https://unsplash.com/license
 */
const u = (id: string, w: number, q: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const EDITORIAL_HERO = {
  /** Perfume bottle with editorial lighting */
  thePack: u("1587017539504-67cfbddac569", 1400, 88),
  /** Classic fragrance bottle */
  theEdit: u("1541643600914-78b084683601", 1400, 88),
} as const;

export const COLLECTION_CARD_IMAGE = u("1523293182086-7651a899d37f", 800, 80);

/** Placeholders for homepage bundle promo tiles (replace with real assets later). */
export const BUNDLE_BASIC_PLACEHOLDER = u("1596462502278-27bfdc403348", 900, 85);
export const BUNDLE_CHOOSE_OWN_PLACEHOLDER = u("1512496015851-a90fb38ba796", 900, 85);
