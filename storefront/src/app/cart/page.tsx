"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Minus, Plus, X, ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  return (
    <div>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-editorial text-3xl lg:text-4xl tracking-tightest text-ink mb-10"
        >
          Your Bag ({itemCount})
        </motion.h1>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <ShoppingBag size={48} strokeWidth={1} className="mx-auto text-stone mb-4" />
            <h2 className="font-editorial text-2xl text-charcoal mb-2">
              Your bag is empty
            </h2>
            <p className="text-sm text-stone-dark font-light mb-8">
              Discover our curated collection of premium fragrance alternatives.
            </p>
            <Link href="/shop" className="btn-primary">
              Shop Now
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2 divide-y divide-parchment">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-6 py-6 first:pt-0">
                  <Link
                    href={`/products/${item.product.slug}`}
                    className="relative w-28 h-36 lg:w-32 lg:h-40 bg-cream-dark flex-shrink-0"
                  >
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] tracking-[0.15em] uppercase text-stone-dark mb-0.5">
                          Inspired by {item.product.inspiredByBrand}
                        </p>
                        <Link
                          href={`/products/${item.product.slug}`}
                          className="font-editorial text-lg text-ink hover:text-accent transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs text-charcoal-light mt-0.5">
                          {item.product.size}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1 text-stone-dark hover:text-ink transition-colors"
                        aria-label="Remove"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center border border-parchment">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="p-2 text-charcoal hover:text-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-2 text-charcoal hover:text-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <span className="text-base font-medium text-ink">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:sticky lg:top-32 self-start">
              <div className="bg-white border border-parchment p-8">
                <h2 className="text-[12px] tracking-[0.2em] uppercase font-medium text-ink mb-6">
                  Order Summary
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-charcoal-light font-light">Subtotal</span>
                    <span className="font-medium text-ink">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-light font-light">Shipping</span>
                    <span className="text-charcoal-light font-light">
                      {subtotal >= 50 ? "Free" : "Calculated at checkout"}
                    </span>
                  </div>
                </div>
                <div className="divider my-5" />
                <div className="flex justify-between mb-6">
                  <span className="text-[12px] tracking-[0.15em] uppercase font-medium">
                    Total
                  </span>
                  <span className="text-xl font-medium text-ink">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <Link href="/checkout" className="btn-primary w-full text-center">
                  Proceed to Checkout
                </Link>
                <Link
                  href="/shop"
                  className="flex items-center justify-center gap-2 mt-4 text-[11px] tracking-[0.12em] uppercase text-charcoal-light hover:text-ink transition-colors"
                >
                  <ArrowLeft size={13} />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
