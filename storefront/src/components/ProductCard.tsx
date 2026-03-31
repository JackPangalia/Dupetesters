"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const badgeStyles = {
  new: "bg-ink text-cream",
  bestseller: "bg-ink text-cream",
  limited: "bg-accent text-cream",
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const isPack = product.kind === "pack";
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }
      }
      className="group relative"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark mb-5">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-luxury)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/[0.06] transition-colors duration-700" />

          {isPack && (
            <span className="absolute top-4 left-4 px-3 py-1.5 text-[8px] tracking-[0.22em] uppercase font-normal bg-white/90 text-ink">
              {product.testerCount ?? 5} testers
            </span>
          )}

          {product.badge && !isPack && (
            <span
              className={`absolute top-4 left-4 px-3 py-1.5 text-[8px] tracking-[0.22em] uppercase font-normal ${badgeStyles[product.badge]}`}
            >
              {product.badge}
            </span>
          )}

          <motion.button
            whileHover={reduceMotion ? undefined : { scale: 1.04 }}
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="absolute bottom-4 right-4 p-3.5 bg-white/90 backdrop-blur-sm text-ink opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-ink hover:text-cream"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={15} strokeWidth={1.3} />
          </motion.button>
        </div>

        <div className="space-y-1">
          <p className="text-[9px] tracking-[0.22em] uppercase text-stone-dark font-light">
            {isPack ? "Sampler pack" : product.inspiredByBrand}
          </p>
          <h3 className="font-editorial text-[1.15rem] tracking-tight text-ink group-hover:text-accent transition-colors duration-500">
            {product.name}
          </h3>
          <p className="text-[10.5px] tracking-[0.02em] text-charcoal-light font-light">
            {isPack
              ? `${product.testerCount ?? 5} dupe tester vials · ${product.size}`
              : `Inspired by ${product.inspiredBy}`}
          </p>
          <div className="flex items-center gap-3 pt-1.5">
            <span className="text-[13px] font-normal text-ink">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-[11px] text-stone line-through font-light">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
