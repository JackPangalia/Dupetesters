import type { Product, Collection, Review } from "@/lib/types";
import { COLLECTION_CARD_IMAGE } from "@/data/editorial-assets";

export const collections: Collection[] = [
  {
    id: "sampler-packs",
    name: "Sampler packs",
    slug: "sampler-packs",
    description:
      "Five tester vials per pack — sample dupe fragrances that already exist on the market, curated by season.",
    image: COLLECTION_CARD_IMAGE,
    productCount: 1,
  },
];

export const products: Product[] = [
  {
    id: "pack-ss-2026",
    kind: "pack",
    purchasable: true,
    testerCount: 5,
    name: "Spring & Summer",
    slug: "spring-summer-pack",
    inspiredBy: "Five tester vials",
    inspiredByBrand: "Dupe sampler",
    price: 42.99,
    currency: "GBP",
    images: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1200&q=85&auto=format&fit=crop",
    ],
    category: "Pack",
    collection: "sampler-packs",
    description:
      "One pack, five small tester vials. Each is a dupe fragrance that already exists elsewhere — we don’t manufacture these scents; we curate and pack them so you can try before you buy full bottles from your favourite dupe houses. This edit is chosen for warmer weather: bright, airy, and easy to wear.",
    fragranceNotes: {
      top: ["Varies per vial"],
      middle: ["Varies per vial"],
      base: ["Varies per vial"],
    },
    performance: {
      longevity: "Varies by scent",
      sillage: "Sample wear",
      season: ["Spring", "Summer"],
      occasion: ["Home sampling", "Daily trial"],
    },
    size: "5 × 2ml tester vials",
    inStock: true,
    rating: 4.9,
    reviewCount: 128,
    packItems: [
      { name: "Bergamot Haze", inspiredBy: "Aventus", inspiredByBrand: "Creed" },
      { name: "Ocean Neroli", inspiredBy: "Neroli Portofino", inspiredByBrand: "Tom Ford" },
      { name: "Rose Absolute", inspiredBy: "Rose 31", inspiredByBrand: "Le Labo" },
      { name: "Iris Silk", inspiredBy: "Iris 39", inspiredByBrand: "Le Labo" },
      { name: "Santal Dusk", inspiredBy: "Santal 33", inspiredByBrand: "Le Labo" },
    ],
  },
  {
    id: "1",
    kind: "standard",
    purchasable: false,
    name: "Noir Velvet",
    slug: "noir-velvet",
    inspiredBy: "Oud Wood",
    inspiredByBrand: "Tom Ford",
    price: 24.99,
    compareAtPrice: 240,
    currency: "GBP",
    images: [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Unisex",
    collection: "designer-dupes",
    description: "A sophisticated blend of rare oud, smoky vetiver, and warm amber. This is luxury distilled — an unmistakable scent of quiet confidence, reimagined at a fraction of the price.",
    fragranceNotes: {
      top: ["Rosewood", "Cardamom"],
      middle: ["Oud Wood", "Sandalwood", "Vetiver"],
      base: ["Tonka Bean", "Amber"],
    },
    performance: {
      longevity: "8-10 hours",
      sillage: "Moderate to strong",
      season: ["Autumn", "Winter"],
      occasion: ["Evening", "Date Night", "Formal"],
    },
    size: "50ml",
    inStock: true,
    badge: "bestseller",
    rating: 4.8,
    reviewCount: 342,
  },
  {
    id: "2",
    kind: "standard",
    purchasable: false,
    name: "Santal Dusk",
    slug: "santal-dusk",
    inspiredBy: "Santal 33",
    inspiredByBrand: "Le Labo",
    price: 22.99,
    compareAtPrice: 195,
    currency: "GBP",
    images: [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Unisex",
    collection: "niche-dupes",
    description: "The unmistakable warmth of Australian sandalwood meets iris and violet — a modern classic that turns heads without trying. The cult favourite, made accessible.",
    fragranceNotes: {
      top: ["Cardamom", "Iris", "Violet"],
      middle: ["Ambrox", "Leather", "Australian Sandalwood"],
      base: ["Cedar", "Musk", "Amber"],
    },
    performance: {
      longevity: "8-12 hours",
      sillage: "Strong",
      season: ["All Year"],
      occasion: ["Daily", "Office", "Evening"],
    },
    size: "50ml",
    inStock: true,
    badge: "bestseller",
    rating: 4.9,
    reviewCount: 518,
  },
  {
    id: "3",
    kind: "standard",
    purchasable: false,
    name: "Bergamot Haze",
    slug: "bergamot-haze",
    inspiredBy: "Aventus",
    inspiredByBrand: "Creed",
    price: 26.99,
    compareAtPrice: 310,
    currency: "GBP",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Masculine",
    collection: "designer-dupes",
    description: "Smoky pineapple and crisp bergamot cut through a heart of birch and jasmine. The king of compliment-getters, now within reach.",
    fragranceNotes: {
      top: ["Pineapple", "Bergamot", "Black Currant"],
      middle: ["Birch", "Jasmine", "Rose"],
      base: ["Musk", "Oakmoss", "Ambergris", "Vanilla"],
    },
    performance: {
      longevity: "10-12 hours",
      sillage: "Strong",
      season: ["Spring", "Summer", "Autumn"],
      occasion: ["Daily", "Office", "Date Night"],
    },
    size: "50ml",
    inStock: true,
    badge: "bestseller",
    rating: 4.7,
    reviewCount: 891,
  },
  {
    id: "4",
    kind: "standard",
    purchasable: false,
    name: "Rose Absolute",
    slug: "rose-absolute",
    inspiredBy: "Rose 31",
    inspiredByBrand: "Le Labo",
    price: 23.99,
    compareAtPrice: 195,
    currency: "GBP",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Unisex",
    collection: "niche-dupes",
    description: "Not your grandmother's rose. This is rose stripped bare — raw, woody, and undeniably modern. Cumin and oud transform the floral into something unexpected.",
    fragranceNotes: {
      top: ["Cumin", "Rose"],
      middle: ["Cedar", "Oud", "Guaiac Wood"],
      base: ["Vetiver", "Amber", "Musk"],
    },
    performance: {
      longevity: "7-9 hours",
      sillage: "Moderate",
      season: ["Autumn", "Winter", "Spring"],
      occasion: ["Evening", "Date Night", "Creative"],
    },
    size: "50ml",
    inStock: true,
    badge: "new",
    rating: 4.6,
    reviewCount: 127,
  },
  {
    id: "5",
    kind: "standard",
    purchasable: false,
    name: "Tobacco Myth",
    slug: "tobacco-myth",
    inspiredBy: "Tobacco Vanille",
    inspiredByBrand: "Tom Ford",
    price: 25.99,
    compareAtPrice: 260,
    currency: "GBP",
    images: [
      "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Unisex",
    collection: "designer-dupes",
    description: "Rich tobacco leaf wrapped in warm vanilla, honey, and spice. Opulent, intoxicating, and utterly addictive. The definition of a cold-weather statement.",
    fragranceNotes: {
      top: ["Tobacco Leaf", "Spicy Notes"],
      middle: ["Vanilla", "Cacao", "Tonka Bean"],
      base: ["Dried Fruits", "Woody Notes"],
    },
    performance: {
      longevity: "10+ hours",
      sillage: "Beast mode",
      season: ["Autumn", "Winter"],
      occasion: ["Evening", "Date Night", "Formal"],
    },
    size: "50ml",
    inStock: true,
    rating: 4.8,
    reviewCount: 456,
  },
  {
    id: "6",
    kind: "standard",
    purchasable: false,
    name: "Iris Silk",
    slug: "iris-silk",
    inspiredBy: "Iris 39",
    inspiredByBrand: "Le Labo",
    price: 22.99,
    compareAtPrice: 195,
    currency: "GBP",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Feminine",
    collection: "niche-dupes",
    description: "Powdery iris meets warm musks and a touch of incense. Quietly beautiful, like freshly laundered cashmere on a cold morning.",
    fragranceNotes: {
      top: ["Egyptian Musk", "Violet"],
      middle: ["Iris Root", "Incense"],
      base: ["Patchouli", "Cashmeran", "Vanilla"],
    },
    performance: {
      longevity: "6-8 hours",
      sillage: "Intimate",
      season: ["All Year"],
      occasion: ["Daily", "Office", "Intimate"],
    },
    size: "50ml",
    inStock: true,
    badge: "new",
    rating: 4.5,
    reviewCount: 89,
  },
  {
    id: "7",
    kind: "standard",
    purchasable: false,
    name: "Amber Reign",
    slug: "amber-reign",
    inspiredBy: "Grand Soir",
    inspiredByBrand: "Maison Francis Kurkdjian",
    price: 27.99,
    compareAtPrice: 225,
    currency: "GBP",
    images: [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Unisex",
    collection: "niche-dupes",
    description: "Pure liquid amber — warm, enveloping, and endlessly sophisticated. One spray and you'll understand why the original has a cult following.",
    fragranceNotes: {
      top: ["Cinnamon", "Benzoin"],
      middle: ["Amber", "Styrax"],
      base: ["Tonka Bean", "Vanilla", "Labdanum"],
    },
    performance: {
      longevity: "12+ hours",
      sillage: "Strong",
      season: ["Autumn", "Winter"],
      occasion: ["Evening", "Date Night", "Formal"],
    },
    size: "50ml",
    inStock: true,
    badge: "limited",
    rating: 4.9,
    reviewCount: 267,
  },
  {
    id: "8",
    kind: "standard",
    purchasable: false,
    name: "Ocean Neroli",
    slug: "ocean-neroli",
    inspiredBy: "Neroli Portofino",
    inspiredByBrand: "Tom Ford",
    price: 23.99,
    compareAtPrice: 240,
    currency: "GBP",
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Unisex",
    collection: "designer-dupes",
    description: "Bright neroli, sparkling citrus, and clean amber evoke sun-drenched Italian coastlines. The ultimate warm-weather fragrance.",
    fragranceNotes: {
      top: ["Neroli", "Bergamot", "Lemon", "Mandarin"],
      middle: ["Neroli", "African Orange Flower", "Jasmine"],
      base: ["Amber", "Musk", "Angelica"],
    },
    performance: {
      longevity: "5-7 hours",
      sillage: "Moderate",
      season: ["Spring", "Summer"],
      occasion: ["Daily", "Beach", "Vacation"],
    },
    size: "50ml",
    inStock: true,
    rating: 4.6,
    reviewCount: 203,
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    author: "James T.",
    rating: 5,
    date: "2026-03-15",
    title: "Indistinguishable from the original",
    body: "I've worn Oud Wood for years. Noir Velvet is genuinely 95% there. My wife couldn't tell the difference. At this price point, it's an absolute no-brainer.",
    verified: true,
  },
  {
    id: "r2",
    author: "Sophie M.",
    rating: 5,
    date: "2026-03-10",
    title: "My new daily driver",
    body: "Santal Dusk has replaced the real thing in my rotation. The performance is actually better than the original — I still get compliments 8 hours later.",
    verified: true,
  },
  {
    id: "r3",
    author: "Marcus L.",
    rating: 4,
    date: "2026-02-28",
    title: "Brilliant quality for the price",
    body: "Bergamot Haze captures about 90% of Aventus. The pineapple note is slightly different but the dry-down is remarkably close. Already ordered two more.",
    verified: true,
  },
  {
    id: "r4",
    author: "Aisha K.",
    rating: 5,
    date: "2026-03-20",
    title: "Compliment magnet",
    body: "Rose Absolute is stunning. I get stopped at least twice a week asking what I'm wearing. Nobody believes me when I tell them the price.",
    verified: true,
  },
  {
    id: "r5",
    author: "Daniel R.",
    rating: 5,
    date: "2026-03-18",
    title: "Better than expected",
    body: "Was skeptical about dupe fragrances but Tobacco Myth genuinely surprised me. The richness and depth are incredible. Will be buying more from the collection.",
    verified: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getPurchasableProducts(): Product[] {
  return products.filter((p) => p.purchasable !== false);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((p) => p.collection === collectionSlug);
}

/** Listed on shop / collection pages only */
export function getPurchasableByCollection(collectionSlug: string): Product[] {
  return products.filter(
    (p) => p.purchasable !== false && p.collection === collectionSlug
  );
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return getPurchasableProducts();
}

/** Slugs for the five vials included in Spring & Summer (for catalog grid). */
export const SUMMER_PACK_LINE_SLUGS = [
  "bergamot-haze",
  "ocean-neroli",
  "rose-absolute",
  "iris-silk",
  "santal-dusk",
] as const;

/** Pack first, then the five summer lines — home / catalog grid. */
export function getCatalogGridProducts(): Product[] {
  const pack = getProductBySlug("spring-summer-pack");
  const lines = SUMMER_PACK_LINE_SLUGS.map((s) => getProductBySlug(s)).filter(
    (p): p is Product => !!p
  );
  return pack ? [pack, ...lines] : lines;
}

export function getNewArrivals(): Product[] {
  return getPurchasableProducts().filter((p) => p.badge === "new");
}
