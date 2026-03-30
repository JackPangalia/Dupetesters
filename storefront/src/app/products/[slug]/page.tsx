"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Star,
  ArrowLeft,
  Minus,
  Plus,
  Shield,
  Truck,
  RotateCcw,
  ChevronDown,
} from "lucide-react";
import {
  getProductBySlug,
  reviews,
  getPurchasableProducts,
} from "@/data/products";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    if (!product || product.purchasable === false) return;
    setOpenAccordion(product.kind === "pack" ? "pack" : "notes");
  }, [slug, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-editorial text-3xl text-ink mb-4">
            Product Not Found
          </h1>
          <Link href="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  if (product.purchasable === false) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <p className="text-[10px] tracking-[0.25em] uppercase text-stone-dark mb-4">
          Not sold individually
        </p>
        <h1 className="font-editorial text-3xl text-ink mb-4 text-center">
          {product.name}
        </h1>
        <p className="text-sm text-charcoal-light text-center max-w-md mb-10 leading-relaxed">
          We only sell curated sampler packs of tester vials. This scent may be
          included in a pack — check the Spring &amp; Summer set.
        </p>
        <Link href="/products/spring-summer-pack" className="btn-primary">
          Spring &amp; Summer pack
        </Link>
        <Link
          href="/shop"
          className="mt-6 text-[10px] tracking-[0.2em] uppercase text-charcoal-light hover:text-ink"
        >
          All packs
        </Link>
      </div>
    );
  }

  const isPack = product.kind === "pack";

  const relatedProducts = getPurchasableProducts()
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const savings = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  const toggleAccordion = (key: string) =>
    setOpenAccordion((prev) => (prev === key ? null : key));

  return (
    <div>
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4">
        <div className="flex items-center gap-2 text-[10px] tracking-[0.12em] uppercase text-stone-dark">
          <Link href="/shop" className="hover:text-ink transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Product section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[3/4] bg-cream-dark overflow-hidden mb-4">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.badge && (
                <span className="absolute top-6 left-6 px-4 py-2 bg-ink text-cream text-[10px] tracking-[0.2em] uppercase font-medium">
                  {product.badge}
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-24 bg-cream-dark overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? "border-ink" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:py-4"
          >
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent mb-2">
              {isPack ? "Sampler pack" : `Inspired by ${product.inspiredByBrand}`}
            </p>
            <h1 className="font-editorial text-3xl lg:text-4xl tracking-tightest text-ink mb-1">
              {product.name}
            </h1>
            {isPack ? (
              <p className="text-sm text-charcoal-light mb-4 leading-relaxed">
                {product.testerCount ?? 5} tester vials of existing dupe
                fragrances — we don&apos;t make these scents; we pack them so you
                can try at home before buying full sizes elsewhere.
              </p>
            ) : (
              <p className="text-sm text-charcoal-light mb-4">
                Inspired by{" "}
                <span className="font-medium text-charcoal">
                  {product.inspiredBy}
                </span>{" "}
                by {product.inspiredByBrand}
              </p>
            )}

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={
                      i < Math.floor(product.rating)
                        ? "fill-accent text-accent"
                        : "text-parchment"
                    }
                  />
                ))}
              </div>
              <span className="text-xs text-charcoal-light">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-2xl font-medium text-ink">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <>
                  <span className="text-base text-stone-dark line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                  <span className="text-[10px] tracking-[0.15em] uppercase bg-success/10 text-success px-2 py-1 font-medium">
                    Save {savings}%
                  </span>
                </>
              )}
            </div>
            <p className="text-xs text-stone-dark mb-6">{product.size}</p>

            {/* Description */}
            <p className="text-sm text-charcoal-light font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Quantity + Add to Cart */}
            <div className="flex gap-3 mb-6">
              <div className="flex items-center border border-parchment">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal hover:text-ink transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal hover:text-ink transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button
                onClick={() => addItem(product, quantity)}
                className="btn-primary flex-1"
              >
                Add to Bag
              </button>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-parchment mb-6">
              {[
                {
                  icon: Shield,
                  label: isPack ? "Curated vials" : "Quality Guaranteed",
                },
                { icon: Truck, label: "Free Over £50" },
                { icon: RotateCcw, label: "30-Day Returns" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon
                    size={18}
                    strokeWidth={1.2}
                    className="mx-auto mb-1.5 text-accent"
                  />
                  <p className="text-[9px] tracking-[0.1em] uppercase text-charcoal-light">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="divide-y divide-parchment">
              {isPack && product.packItems && (
                <div>
                  <button
                    type="button"
                    onClick={() => toggleAccordion("pack")}
                    className="flex items-center justify-between w-full py-4 text-left"
                  >
                    <span className="text-[11px] tracking-[0.15em] uppercase font-medium text-ink">
                      What&apos;s in the pack
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-stone-dark transition-transform duration-300 ${
                        openAccordion === "pack" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAccordion === "pack" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="pb-5"
                    >
                      <ol className="space-y-4">
                        {product.packItems.map((item, idx) => (
                          <li
                            key={`${item.name}-${idx}`}
                            className="border-b border-parchment/60 pb-4 last:border-0 last:pb-0"
                          >
                            <p className="text-sm font-medium text-ink">
                              {idx + 1}. {item.name}
                            </p>
                            <p className="text-xs text-charcoal-light font-light mt-1">
                              Dupe inspired by {item.inspiredBy}{" "}
                              <span className="text-stone-dark">
                                ({item.inspiredByBrand})
                              </span>
                            </p>
                          </li>
                        ))}
                      </ol>
                    </motion.div>
                  )}
                </div>
              )}

              {!isPack && (
              <>
              <div>
                <button
                  type="button"
                  onClick={() => toggleAccordion("notes")}
                  className="flex items-center justify-between w-full py-4 text-left"
                >
                  <span className="text-[11px] tracking-[0.15em] uppercase font-medium text-ink">
                    Fragrance Notes
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-stone-dark transition-transform duration-300 ${
                      openAccordion === "notes" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openAccordion === "notes" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="pb-5"
                  >
                    <div className="space-y-4">
                      {(["top", "middle", "base"] as const).map((layer) => (
                        <div key={layer}>
                          <p className="text-[10px] tracking-[0.2em] uppercase text-accent mb-1.5">
                            {layer} Notes
                          </p>
                          <p className="text-sm text-charcoal-light font-light">
                            {product.fragranceNotes[layer].join(", ")}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => toggleAccordion("performance")}
                  className="flex items-center justify-between w-full py-4 text-left"
                >
                  <span className="text-[11px] tracking-[0.15em] uppercase font-medium text-ink">
                    Performance
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-stone-dark transition-transform duration-300 ${
                      openAccordion === "performance" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openAccordion === "performance" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="pb-5"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-accent mb-1">
                          Longevity
                        </p>
                        <p className="text-sm text-charcoal-light font-light">
                          {product.performance.longevity}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-accent mb-1">
                          Sillage
                        </p>
                        <p className="text-sm text-charcoal-light font-light">
                          {product.performance.sillage}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-accent mb-1">
                          Best Season
                        </p>
                        <p className="text-sm text-charcoal-light font-light">
                          {product.performance.season.join(", ")}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-accent mb-1">
                          Occasion
                        </p>
                        <p className="text-sm text-charcoal-light font-light">
                          {product.performance.occasion.join(", ")}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              </>
              )}

              <div>
                <button
                  onClick={() => toggleAccordion("shipping")}
                  className="flex items-center justify-between w-full py-4 text-left"
                >
                  <span className="text-[11px] tracking-[0.15em] uppercase font-medium text-ink">
                    Shipping & Returns
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-stone-dark transition-transform duration-300 ${
                      openAccordion === "shipping" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openAccordion === "shipping" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="pb-5 space-y-2 text-sm text-charcoal-light font-light"
                  >
                    <p>Free UK shipping on orders over £50.</p>
                    <p>International shipping available — calculated at checkout.</p>
                    <p>30-day hassle-free returns on unopened items.</p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews section */}
      <section className="bg-cream-dark py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-editorial text-2xl lg:text-3xl tracking-tightest text-ink">
              Customer Reviews
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={
                      i < Math.floor(product.rating)
                        ? "fill-accent text-accent"
                        : "text-parchment"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-light">
                {product.rating} from {product.reviewCount} reviews
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-cream p-6 border border-parchment"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      className={
                        j < review.rating
                          ? "fill-accent text-accent"
                          : "text-parchment"
                      }
                    />
                  ))}
                </div>
                <h4 className="text-sm font-medium text-ink mb-1.5">
                  {review.title}
                </h4>
                <p className="text-sm text-charcoal-light font-light leading-relaxed mb-3">
                  &ldquo;{review.body}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-ink">
                    {review.author}
                  </span>
                  {review.verified && (
                    <span className="text-[9px] tracking-[0.12em] uppercase text-success font-medium">
                      Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="font-editorial text-2xl lg:text-3xl tracking-tightest text-ink text-center mb-10">
              You Might Also Love
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
