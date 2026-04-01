"use client";

import { useMemo } from "react";
import { getCatalogGridProducts } from "@/data/products";
import type { Product } from "@/lib/types";
import RetailProductCard from "@/components/RetailProductCard";
import HeroFluidCanvas from "@/components/HeroFluidCanvas";

export default function CatalogHome() {
  const all = useMemo(() => getCatalogGridProducts(), []);

  const catalogProducts = useMemo(() => {
    return all
      .filter((p) => p.kind !== "pack")
      .sort(
        (a, b) =>
          b.reviewCount - a.reviewCount || a.name.localeCompare(b.name)
      );
  }, [all]);

  return (
    <section
      id="fragrance-grid"
      className="relative bg-editorial-surface px-4 pb-14 text-neutral-900 sm:px-5 sm:pb-16 lg:px-8 lg:pb-18"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="relative overflow-hidden border border-black/8 bg-white/50 shadow-[0_18px_50px_rgba(17,17,17,0.04)] backdrop-blur-[2px]">
          <HeroFluidCanvas opacity={0.08} />

          <div className="relative z-2 grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-12">
            <div className="border border-black/8 bg-editorial-panel/45 p-6 md:col-span-2 sm:p-8 lg:col-span-4">
              <p className="eyebrow">Choose your edit</p>
              <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight text-neutral-950">
                Individual fragrances
              </h2>
              <p className="mt-4 max-w-120 text-sm leading-7 text-neutral-700 sm:text-[15px]">
                Build your own bundle or browse each scent one by one. These
                are the five fragrances featured in the Spring / Summer edit.
              </p>
              <div className="mt-8 w-14 border-t border-black/10" />
              <p className="mt-8 text-xs uppercase tracking-widest text-neutral-500">
                Five scents / modular picks
              </p>
            </div>

            {catalogProducts.map((p) => (
              <div key={p.id} className="lg:col-span-4">
                <RetailProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
