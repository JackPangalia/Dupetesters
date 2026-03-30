"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getCollectionBySlug, getPurchasableByCollection } from "@/data/products";

export default function CollectionPage() {
  const { slug } = useParams<{ slug: string }>();
  const collection = getCollectionBySlug(slug);

  const collectionProducts = getPurchasableByCollection(slug);

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-editorial text-3xl text-ink mb-4">
            Collection Not Found
          </h1>
          <Link href="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-ink/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="font-editorial text-4xl lg:text-6xl text-cream tracking-tightest mb-3">
            {collection.name}
          </h1>
          <p className="text-cream/60 font-light max-w-lg mx-auto">
            {collection.description}
          </p>
        </motion.div>
      </section>

      {/* Products */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/shop"
            className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-charcoal-light hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} />
            Shop
          </Link>
          <span className="text-[11px] tracking-[0.12em] uppercase text-stone-dark">
            {collectionProducts.length}{" "}
            {collectionProducts.length === 1 ? "pack" : "packs"}
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {collectionProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
