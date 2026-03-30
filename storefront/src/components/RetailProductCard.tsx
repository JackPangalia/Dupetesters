"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { formatPrice, cn } from "@/lib/utils";

function pctOff(price: number, compareAt?: number) {
  if (!compareAt || compareAt <= price) return null;
  return Math.round((1 - price / compareAt) * 100);
}

export default function RetailProductCard({ product }: { product: Product }) {
  const [wish, setWish] = useState(false);
  const isPack = product.kind === "pack";
  const off = pctOff(product.price, product.compareAtPrice);
  const fullStars = Math.round(product.rating);

  return (
    <article className="group relative bg-white border border-neutral-200/80 rounded-sm p-3 pb-4 hover:shadow-sm transition-shadow">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-neutral-50 mb-3 overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {isPack && (
            <span className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide bg-[#c41e3a] text-white">
              Summer pack
            </span>
          )}
          {product.badge === "bestseller" && !isPack && (
            <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide bg-neutral-800 text-white">
              Bestseller
            </span>
          )}
          {product.badge === "new" && !isPack && (
            <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide bg-[#c41e3a] text-white">
              New
            </span>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setWish((w) => !w);
            }}
            className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 border border-neutral-200/80 hover:bg-white"
            aria-label={wish ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              size={16}
              className={cn(
                wish ? "fill-[#c41e3a] text-[#c41e3a]" : "text-neutral-500"
              )}
              strokeWidth={1.5}
            />
          </button>
        </div>

        <h3 className="text-sm font-medium text-neutral-900 leading-snug line-clamp-2 min-h-[2.5rem]">
          {product.name}
          {!isPack && (
            <span className="font-normal text-neutral-500">
              {" "}
              — inspired by {product.inspiredBy}
            </span>
          )}
        </h3>

        <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-[15px] font-bold text-[#c41e3a]">
            {isPack ? "From " : ""}
            {formatPrice(product.price, product.currency)}
          </span>
          {product.compareAtPrice != null && (
            <span className="text-sm text-neutral-400 line-through">
              {formatPrice(product.compareAtPrice, product.currency)}
            </span>
          )}
          {off != null && off > 0 && (
            <span className="text-[11px] font-semibold text-[#c41e3a]">
              {off}% OFF
            </span>
          )}
        </div>

        <div className="mt-2 flex items-center gap-1">
          <span className="flex text-amber-500" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={cn(
                  i < fullStars ? "fill-amber-400 text-amber-400" : "text-neutral-200"
                )}
                strokeWidth={0}
              />
            ))}
          </span>
          <span className="text-xs text-neutral-500">
            ({product.reviewCount})
          </span>
        </div>

        {!isPack && (
          <p className="mt-2 text-[11px] text-neutral-500">
            Not sold individually — included in the Spring &amp; Summer pack.
          </p>
        )}
      </Link>
    </article>
  );
}
