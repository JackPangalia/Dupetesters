"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-ink/15 backdrop-blur-sm"
            onClick={closeCart}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[100] w-full max-w-[420px] bg-cream shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-7 py-6 border-b border-parchment/60">
              <div className="flex items-center gap-3">
                <ShoppingBag size={16} strokeWidth={1.3} />
                <h2 className="text-[10px] tracking-[0.22em] uppercase font-normal">
                  Your Bag ({itemCount})
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="p-1 text-charcoal-light hover:text-ink transition-colors duration-300"
                aria-label="Close cart"
              >
                <X size={18} strokeWidth={1.3} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full px-8 text-center">
                  <ShoppingBag size={36} strokeWidth={0.8} className="text-stone mb-5" />
                  <p className="font-editorial text-[1.3rem] text-charcoal mb-2 tracking-tight">
                    Your bag is empty
                  </p>
                  <p className="text-[13px] text-stone-dark font-light mb-8">
                    Discover our curated collection of premium fragrance alternatives.
                  </p>
                  <Link href="/shop" onClick={closeCart} className="btn-primary">
                    Shop Now
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-parchment/60">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4 px-7 py-6">
                      <div className="relative w-[72px] h-[90px] bg-cream-dark flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="72px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[8.5px] tracking-[0.2em] uppercase text-stone-dark font-light">
                              {item.product.kind === "pack"
                                ? "Sampler pack"
                                : item.product.inspiredByBrand}
                            </p>
                            <h3 className="font-editorial text-[1rem] text-ink tracking-tight">
                              {item.product.name}
                            </h3>
                            {item.product.kind === "pack" && (
                              <p className="text-[10px] text-charcoal-light font-light mt-0.5">
                                {item.product.testerCount ?? 5} tester vials
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="p-1 text-stone hover:text-ink transition-colors duration-300"
                            aria-label="Remove item"
                          >
                            <X size={13} strokeWidth={1.3} />
                          </button>
                        </div>
                        <p className="text-[11px] text-charcoal-light font-light mt-0.5">
                          {item.product.size}
                        </p>
                        <div className="flex items-center justify-between mt-3.5">
                          <div className="flex items-center border border-parchment/80">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1.5 text-charcoal-light hover:text-ink transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={11} strokeWidth={1.3} />
                            </button>
                            <span className="w-7 text-center text-[11px] font-normal">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1.5 text-charcoal-light hover:text-ink transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={11} strokeWidth={1.3} />
                            </button>
                          </div>
                          <span className="text-[13px] font-normal text-ink">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-parchment/60 px-7 py-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.18em] uppercase text-charcoal-light font-light">
                    Subtotal
                  </span>
                  <span className="text-[17px] font-normal text-ink">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="text-[10.5px] text-stone-dark font-light">
                  Shipping and taxes calculated at checkout
                </p>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="btn-primary w-full text-center"
                >
                  Checkout
                </Link>
                <button
                  onClick={closeCart}
                  className="w-full text-center text-[10px] tracking-[0.15em] uppercase text-stone-dark hover:text-ink transition-colors duration-500 py-2 font-light"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
}
