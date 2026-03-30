/** One vial inside a sampler pack (dupe scents sourced elsewhere — we curate & decant for sampling). */
export interface PackItem {
  name: string;
  inspiredBy: string;
  inspiredByBrand: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  inspiredBy: string;
  inspiredByBrand: string;
  price: number;
  compareAtPrice?: number;
  currency: string;
  images: string[];
  category: string;
  collection: string;
  description: string;
  fragranceNotes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  performance: {
    longevity: string;
    sillage: string;
    season: string[];
    occasion: string[];
  };
  size: string;
  inStock: boolean;
  badge?: "new" | "bestseller" | "limited";
  rating: number;
  reviewCount: number;
  /** `pack` = one SKU containing multiple tester vials */
  kind?: "pack" | "standard";
  /** When false, not listed on shop (e.g. reference scents only included in a pack). */
  purchasable?: boolean;
  testerCount?: number;
  packItems?: PackItem[];
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
}
