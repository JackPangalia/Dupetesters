"use client";

import { motion } from "framer-motion";
import { Truck, RotateCcw, Globe, Clock } from "lucide-react";

export default function ShippingReturnsPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-20 text-center border-b border-parchment">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
            Policies
          </p>
          <h1 className="font-editorial text-4xl lg:text-5xl tracking-tightest text-ink">
            Shipping & Returns
          </h1>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
        {/* Quick overview */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            { icon: Truck, title: "Free Shipping", desc: "On all UK orders over £50" },
            { icon: Globe, title: "International", desc: "We ship worldwide" },
            { icon: Clock, title: "Fast Delivery", desc: "1-5 business days UK" },
            { icon: RotateCcw, title: "Easy Returns", desc: "30-day return window" },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-5 bg-cream-dark">
              <item.icon size={20} strokeWidth={1.2} className="text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-ink">{item.title}</h3>
                <p className="text-xs text-charcoal-light font-light mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping */}
        <div className="mb-16">
          <h2 className="font-editorial text-2xl text-ink mb-6">Shipping</h2>
          <div className="space-y-4 text-sm text-charcoal-light font-light leading-relaxed">
            <p>
              We aim to dispatch all orders within 1-2 business days. Once shipped,
              you&apos;ll receive a tracking number via email so you can follow your
              package every step of the way.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left mt-4">
                <thead>
                  <tr className="border-b border-parchment">
                    <th className="pb-3 text-[10px] tracking-[0.15em] uppercase font-medium text-ink">
                      Destination
                    </th>
                    <th className="pb-3 text-[10px] tracking-[0.15em] uppercase font-medium text-ink">
                      Standard
                    </th>
                    <th className="pb-3 text-[10px] tracking-[0.15em] uppercase font-medium text-ink">
                      Express
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment">
                  <tr>
                    <td className="py-3">United Kingdom</td>
                    <td className="py-3">3-5 days / Free over £50</td>
                    <td className="py-3">1-2 days / £7.99</td>
                  </tr>
                  <tr>
                    <td className="py-3">Europe</td>
                    <td className="py-3">5-8 days / £5.99</td>
                    <td className="py-3">3-5 days / £12.99</td>
                  </tr>
                  <tr>
                    <td className="py-3">USA & Canada</td>
                    <td className="py-3">7-10 days / £7.99</td>
                    <td className="py-3">4-6 days / £14.99</td>
                  </tr>
                  <tr>
                    <td className="py-3">Rest of World</td>
                    <td className="py-3">10-15 days / £9.99</td>
                    <td className="py-3">5-8 days / £16.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Returns */}
        <div>
          <h2 className="font-editorial text-2xl text-ink mb-6">Returns</h2>
          <div className="space-y-4 text-sm text-charcoal-light font-light leading-relaxed">
            <p>
              We want you to love your purchase. If something isn&apos;t right,
              we&apos;re here to help.
            </p>
            <h3 className="font-medium text-ink pt-2">30-Day Return Policy</h3>
            <p>
              You may return any unopened, unused product within 30 days of
              delivery for a full refund. Items must be in their original
              packaging and condition.
            </p>
            <h3 className="font-medium text-ink pt-2">How to Return</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>Contact us at support@dupetesters.com with your order number.</li>
              <li>We&apos;ll send you a return label and instructions.</li>
              <li>Ship the item back within 14 days of receiving the label.</li>
              <li>Once received and inspected, your refund will be processed within 5-7 business days.</li>
            </ol>
            <h3 className="font-medium text-ink pt-2">Opened Products</h3>
            <p>
              If you&apos;ve opened the product and aren&apos;t satisfied with the scent,
              please reach out. We may offer an exchange or store credit on a
              case-by-case basis.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
