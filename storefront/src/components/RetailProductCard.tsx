import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";

export default function RetailProductCard({ product }: { product: Product }) {
  return (
    <article className="group h-full">
      <Link
        href={`/products/${product.slug}`}
        className="flex h-full flex-col overflow-hidden border border-black/8 bg-white/55 shadow-[0_18px_50px_rgba(17,17,17,0.04)] backdrop-blur-[2px] transition-[background-color,transform] duration-500 ease-luxury hover:bg-white/72"
      >
        <div className="relative aspect-4/5 overflow-hidden border-b border-black/8 bg-editorial-panel/60">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain p-6 motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-luxury group-hover:scale-105 sm:p-7"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
          <div>
            <p className="eyebrow">Individual fragrance</p>
            <h3 className="mt-3 text-sm font-medium uppercase tracking-widest text-neutral-800 transition-colors duration-300 group-hover:text-neutral-950 sm:text-[11px]">
              {product.name}
            </h3>
          </div>
          <p className="mt-6 text-[11px] uppercase tracking-widest text-neutral-500">
            View fragrance
          </p>
        </div>
      </Link>
    </article>
  );
}
