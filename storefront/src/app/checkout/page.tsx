"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, CreditCard } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  const [step, setStep] = useState<"info" | "shipping" | "payment">("info");

  const inputClass =
    "w-full px-5 py-3.5 bg-white border border-black/[0.08] text-[13px] text-charcoal font-light placeholder:text-stone focus:outline-none focus:border-ink/30 transition-colors duration-500";

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-editorial text-3xl text-ink mb-4">
            Your bag is empty
          </h1>
          <Link href="/shop" className="btn-primary">
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/cart"
            className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-charcoal-light hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Bag
          </Link>
          <Link href="/" className="text-[13px] tracking-[0.3em] uppercase font-medium text-ink">
            Home
          </Link>
          <div className="flex items-center gap-1.5 text-[11px] tracking-[0.1em] uppercase text-stone-dark">
            <Lock size={12} />
            Secure
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Step indicators */}
              <div className="flex items-center gap-4 mb-10">
                {(["info", "shipping", "payment"] as const).map((s, i) => (
                  <button
                    key={s}
                    onClick={() => setStep(s)}
                    className={`text-[11px] tracking-[0.15em] uppercase ${
                      step === s
                        ? "text-ink font-medium border-b border-ink"
                        : "text-stone-dark"
                    }`}
                  >
                    {i + 1}. {s === "info" ? "Information" : s === "shipping" ? "Shipping" : "Payment"}
                  </button>
                ))}
              </div>

              {step === "info" && (
                <div className="space-y-6">
                  <h2 className="text-[12px] tracking-[0.2em] uppercase font-medium text-ink mb-4">
                    Contact Information
                  </h2>
                  <input type="email" placeholder="Email address" className={inputClass} />

                  <h2 className="text-[12px] tracking-[0.2em] uppercase font-medium text-ink mb-4 pt-4">
                    Shipping Address
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First name" className={inputClass} />
                    <input type="text" placeholder="Last name" className={inputClass} />
                  </div>
                  <input type="text" placeholder="Address" className={inputClass} />
                  <input type="text" placeholder="Apartment, suite, etc. (optional)" className={inputClass} />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="City" className={inputClass} />
                    <input type="text" placeholder="Postcode" className={inputClass} />
                  </div>
                  <select className={inputClass}>
                    <option value="">Country / Region</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                  </select>
                  <input type="tel" placeholder="Phone (optional)" className={inputClass} />

                  <button
                    onClick={() => setStep("shipping")}
                    className="btn-primary w-full mt-4"
                  >
                    Continue to Shipping
                  </button>
                </div>
              )}

              {step === "shipping" && (
                <div className="space-y-6">
                  <h2 className="text-[12px] tracking-[0.2em] uppercase font-medium text-ink mb-4">
                    Shipping Method
                  </h2>
                  <label className="flex items-center justify-between p-4 border border-ink cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="shipping" defaultChecked className="accent-ink" />
                      <div>
                        <p className="text-sm font-medium text-ink">Standard Shipping</p>
                        <p className="text-xs text-charcoal-light">3-5 business days</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium">
                      {subtotal >= 50 ? "Free" : formatPrice(3.99)}
                    </span>
                  </label>
                  <label className="flex items-center justify-between p-4 border border-parchment cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="shipping" className="accent-ink" />
                      <div>
                        <p className="text-sm font-medium text-ink">Express Shipping</p>
                        <p className="text-xs text-charcoal-light">1-2 business days</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium">{formatPrice(7.99)}</span>
                  </label>

                  <button
                    onClick={() => setStep("payment")}
                    className="btn-primary w-full mt-4"
                  >
                    Continue to Payment
                  </button>
                </div>
              )}

              {step === "payment" && (
                <div className="space-y-6">
                  <h2 className="text-[12px] tracking-[0.2em] uppercase font-medium text-ink mb-4">
                    Payment
                  </h2>
                  <div className="p-6 border border-parchment bg-cream space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CreditCard size={16} className="text-accent" />
                      <span className="text-[11px] tracking-[0.12em] uppercase font-medium">
                        Credit Card
                      </span>
                    </div>
                    <input type="text" placeholder="Card number" className={inputClass} />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="MM / YY" className={inputClass} />
                      <input type="text" placeholder="CVC" className={inputClass} />
                    </div>
                    <input type="text" placeholder="Name on card" className={inputClass} />
                  </div>

                  <div className="p-4 border border-parchment text-center">
                    <p className="text-sm text-charcoal-light font-light">
                      Or pay with
                    </p>
                    <div className="flex justify-center gap-4 mt-3">
                      <span className="px-6 py-2 border border-parchment text-xs font-medium text-charcoal">
                        Klarna
                      </span>
                      <span className="px-6 py-2 border border-parchment text-xs font-medium text-charcoal">
                        Apple Pay
                      </span>
                    </div>
                  </div>

                  <button className="btn-primary w-full mt-4 flex items-center justify-center gap-2">
                    <Lock size={14} />
                    Complete Order — {formatPrice(subtotal)}
                  </button>
                  <p className="text-[10px] text-center text-stone-dark font-light">
                    Your payment information is encrypted and secure.
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Order summary sidebar */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32 bg-cream border border-parchment p-6">
              <h3 className="text-[12px] tracking-[0.2em] uppercase font-medium text-ink mb-6">
                Your Order
              </h3>
              <div className="divide-y divide-parchment">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 py-4 first:pt-0">
                    <div className="relative w-16 h-20 bg-cream-dark flex-shrink-0">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-ink text-cream text-[9px] rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 flex justify-between">
                      <div>
                        <p className="text-sm font-medium text-ink">
                          {item.product.name}
                        </p>
                        <p className="text-[10px] text-stone-dark">
                          {item.product.size}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-ink">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="divider my-4" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-charcoal-light font-light">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-light font-light">Shipping</span>
                  <span className="text-charcoal-light font-light">
                    {subtotal >= 50 ? "Free" : "From " + formatPrice(3.99)}
                  </span>
                </div>
              </div>
              <div className="divider my-4" />
              <div className="flex justify-between">
                <span className="text-[12px] tracking-[0.15em] uppercase font-medium">
                  Total
                </span>
                <span className="text-lg font-medium text-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
