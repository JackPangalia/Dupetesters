"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import {
  getCatalogGridProducts,
  getProductBySlug,
} from "@/data/products";
import type { Product } from "@/lib/types";
import {
  useCatalogFilters,
  type CatalogSort,
} from "@/lib/catalog-filter-context";
import { formatPrice } from "@/lib/utils";
import RetailProductCard from "@/components/RetailProductCard";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function normalize(s: string) {
  return s.toLowerCase().trim();
}

function productSearchHaystack(p: Product) {
  return normalize(
    `${p.name} ${p.inspiredBy} ${p.inspiredByBrand} ${p.description}`
  );
}

export default function CatalogHome() {
  const pack = getProductBySlug("spring-summer-pack");
  const all = useMemo(() => getCatalogGridProducts(), []);
  const {
    searchQuery,
    setSearchQuery,
    priceMin,
    priceMax,
    setPriceMin,
    setPriceMax,
    priceCeiling,
    selectedBrands,
    toggleBrand,
    clearBrands,
    sortBy,
    setSortBy,
  } = useCatalogFilters();

  const brands = useMemo(() => {
    const set = new Set<string>();
    for (const p of all) {
      if (p.kind === "pack") set.add("Dupe Testers");
      else set.add(p.inspiredByBrand);
    }
    return [...set].sort((a, b) => a.localeCompare(b));
  }, [all]);

  const filtered = useMemo(() => {
    const q = normalize(searchQuery);
    let list = all.filter((p) => {
      if (q && !productSearchHaystack(p).includes(q)) return false;
      if (p.price < priceMin || p.price > priceMax) return false;
      if (selectedBrands.size > 0) {
        const b = p.kind === "pack" ? "Dupe Testers" : p.inspiredByBrand;
        if (!selectedBrands.has(b)) return false;
      }
      return true;
    });

    const packFirst = (a: Product, b: Product) => {
      if (a.kind === "pack" && b.kind !== "pack") return -1;
      if (b.kind === "pack" && a.kind !== "pack") return 1;
      return 0;
    };

    list = [...list].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price || packFirst(a, b);
        case "price-desc":
          return b.price - a.price || packFirst(a, b);
        case "rating":
          return b.rating - a.rating || packFirst(a, b);
        case "bestselling":
        default:
          return (
            packFirst(a, b) ||
            b.reviewCount - a.reviewCount ||
            a.name.localeCompare(b.name)
          );
      }
    });

    return list;
  }, [all, searchQuery, priceMin, priceMax, selectedBrands, sortBy]);

  const jumpToLetter = (letter: string) => {
    const el = document.getElementById(`brand-${letter}`);
    el?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  };

  const onMinChange = (v: number) => {
    const next = Math.min(v, priceMax);
    setPriceMin(next);
  };
  const onMaxChange = (v: number) => {
    const next = Math.max(v, priceMin);
    setPriceMax(next);
  };

  return (
    <div className="bg-white text-neutral-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-5 lg:px-8 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Sidebar */}
          <aside className="w-full lg:w-[260px] shrink-0 space-y-6">
            <div>
              <label htmlFor="catalog-filter-search" className="sr-only">
                Search testers
              </label>
              <input
                id="catalog-filter-search"
                type="search"
                placeholder="Search this list…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-neutral-300 rounded-sm px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
              />
            </div>

            <details open className="border-b border-neutral-200 pb-5">
              <summary className="cursor-pointer text-sm font-semibold text-neutral-900 list-none flex justify-between items-center">
                Price
                <span className="text-neutral-400 font-normal text-xs">▼</span>
              </summary>
              <div className="mt-4 space-y-4">
                <div className="flex flex-col gap-2">
                  <input
                    type="range"
                    min={0}
                    max={priceCeiling}
                    value={priceMin}
                    onChange={(e) => onMinChange(Number(e.target.value))}
                    className="w-full accent-[#c41e3a] h-1"
                  />
                  <input
                    type="range"
                    min={0}
                    max={priceCeiling}
                    value={priceMax}
                    onChange={(e) => onMaxChange(Number(e.target.value))}
                    className="w-full accent-[#c41e3a] h-1"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wide">
                      From
                    </span>
                    <input
                      type="number"
                      min={0}
                      max={priceCeiling}
                      value={priceMin}
                      onChange={(e) => onMinChange(Number(e.target.value) || 0)}
                      className="mt-1 w-full border border-neutral-300 rounded-sm px-2 py-1.5 text-sm"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wide">
                      To
                    </span>
                    <input
                      type="number"
                      min={0}
                      max={priceCeiling}
                      value={priceMax}
                      onChange={(e) =>
                        onMaxChange(Number(e.target.value) || priceCeiling)
                      }
                      className="mt-1 w-full border border-neutral-300 rounded-sm px-2 py-1.5 text-sm"
                    />
                  </div>
                </div>
              </div>
            </details>

            <div>
              <p className="text-sm font-semibold text-neutral-900 mb-2">
                Brand
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {LETTERS.map((L) => (
                  <button
                    key={L}
                    type="button"
                    onClick={() => jumpToLetter(L)}
                    className="text-[11px] w-6 h-6 flex items-center justify-center text-neutral-600 hover:text-[#c41e3a] hover:underline"
                  >
                    {L}
                  </button>
                ))}
              </div>
              {selectedBrands.size > 0 && (
                <button
                  type="button"
                  onClick={clearBrands}
                  className="text-xs text-[#c41e3a] underline mb-2"
                >
                  Clear brands
                </button>
              )}
              <div className="max-h-[320px] overflow-y-auto border border-neutral-200 rounded-sm divide-y divide-neutral-100">
                {LETTERS.map((letter) => {
                  const group = brands.filter(
                    (b) => b.charAt(0).toUpperCase() === letter
                  );
                  if (group.length === 0) return null;
                  return (
                    <div key={letter} id={`brand-${letter}`}>
                      {group.map((brand) => (
                        <label
                          key={brand}
                          className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedBrands.has(brand)}
                            onChange={() => toggleBrand(brand)}
                            className="rounded border-neutral-300 accent-[#c41e3a]"
                          />
                          <span>{brand}</span>
                        </label>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            <header className="mb-6">
              <h1 className="text-2xl lg:text-3xl font-bold text-neutral-900 tracking-tight">
                Dupe testers
              </h1>
              <p className="mt-2 text-sm text-neutral-600 max-w-2xl leading-relaxed">
                Small sampler vials of dupe fragrances — we curate packs of
                five so you can try a seasonal edit at home. Individual lines
                below show what&apos;s inside the Spring &amp; Summer pack;
                only the pack is for sale right now.
              </p>
            </header>

            {pack && (
              <section className="mb-8 border border-neutral-200 rounded-sm overflow-hidden bg-neutral-50/50">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px] bg-white">
                    <Image
                      src={pack.images[0]}
                      alt={pack.name}
                      fill
                      className="object-contain p-8"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-center bg-white">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#c41e3a] mb-2">
                      Featured — Summer collection
                    </p>
                    <h2 className="text-xl lg:text-2xl font-bold text-neutral-900">
                      Spring &amp; Summer pack
                    </h2>
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                      Five × 2ml tester vials: Bergamot Haze, Ocean Neroli,
                      Rose Absolute, Iris Silk, and Santal Dusk.{" "}
                      {formatPrice(pack.price, pack.currency)} — add to cart on
                      the product page.
                    </p>
                    <Link
                      href="/products/spring-summer-pack"
                      className="mt-6 inline-flex items-center justify-center w-fit px-6 py-3 bg-[#c41e3a] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#a01830] transition-colors"
                    >
                      View pack &amp; buy
                    </Link>
                  </div>
                </div>
              </section>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-3 border-y border-neutral-200 mb-6">
              <label className="flex items-center gap-2 text-sm text-neutral-700">
                <span className="text-neutral-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as CatalogSort)
                  }
                  className="border border-neutral-300 rounded-sm px-2 py-1.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                >
                  <option value="bestselling">Best selling</option>
                  <option value="price-asc">Price: low to high</option>
                  <option value="price-desc">Price: high to low</option>
                  <option value="rating">Rating</option>
                </select>
              </label>
              <p className="text-sm text-neutral-600">
                <span className="font-medium text-neutral-900">
                  {filtered.length}
                </span>{" "}
                {filtered.length === 1 ? "product" : "products"}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {filtered.map((p, i) => (
                <div key={p.id} className="contents">
                  {i === 2 && (
                    <div className="col-span-2 bg-[#c41e3a] text-white p-6 lg:p-8 flex flex-col justify-center min-h-[200px] rounded-sm border border-[#a01830]">
                      <p className="text-lg lg:text-xl font-semibold leading-snug">
                        Not sure what to try first?
                      </p>
                      <p className="mt-2 text-sm text-white/90 leading-relaxed">
                        The Spring &amp; Summer pack bundles all five testers
                        in one shipment — easiest way to sample the full edit.
                      </p>
                      <Link
                        href="/products/spring-summer-pack"
                        className="mt-4 text-xs font-bold uppercase tracking-wider underline underline-offset-4 hover:text-white/80 w-fit"
                      >
                        Shop the pack
                      </Link>
                    </div>
                  )}
                  <RetailProductCard product={p} />
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="py-16 text-center text-neutral-500 text-sm">
                No products match your filters. Try clearing search or brand
                filters.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
