"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Products",
    questions: [
      {
        q: "What exactly are dupe fragrances?",
        a: "Dupe fragrances are premium alternatives inspired by popular designer and niche scents. They're crafted using high-quality ingredients to closely match the scent profile of the originals at a much more accessible price point.",
      },
      {
        q: "How close are your fragrances to the originals?",
        a: "Our fragrances achieve a 90%+ match rate to the originals. We use the same grade of raw materials and work with experienced perfumers who specialise in scent replication. Most customers (and even fragrance enthusiasts) find them remarkably close.",
      },
      {
        q: "How long do your fragrances last?",
        a: "Performance varies by scent, but most of our fragrances last between 6-12 hours on skin. Each product page includes specific longevity and sillage information to help you choose.",
      },
      {
        q: "Are your products tested on animals?",
        a: "Absolutely not. All Dupetesters products are cruelty-free. We never test on animals and we only work with suppliers who share this commitment.",
      },
    ],
  },
  {
    category: "Orders & Shipping",
    questions: [
      {
        q: "How long does shipping take?",
        a: "UK orders typically arrive within 3-5 business days with standard shipping, or 1-2 business days with express. International shipping times vary by destination — usually 5-10 business days.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes! We ship worldwide. Shipping costs and delivery times are calculated at checkout based on your location.",
      },
      {
        q: "Is there free shipping?",
        a: "Yes — all UK orders over £50 qualify for free standard shipping. We regularly run promotions offering free shipping at lower thresholds too.",
      },
    ],
  },
  {
    category: "Returns & Guarantees",
    questions: [
      {
        q: "What's your return policy?",
        a: "We offer a 30-day return policy on all unopened items. If you've opened the product and aren't satisfied, please contact our team — we're committed to making it right.",
      },
      {
        q: "What if I don't like the scent?",
        a: "Fragrance is personal, and we understand not every scent will be a match. Reach out to our customer service team and we'll work with you on an exchange or store credit.",
      },
    ],
  },
  {
    category: "Payments",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit and debit cards (Visa, Mastercard, Amex), Apple Pay, Google Pay, and Klarna for buy-now-pay-later options.",
      },
      {
        q: "Can I pay in instalments?",
        a: "Yes! We offer Klarna at checkout, which lets you split your payment into 3 interest-free instalments. Available in select regions.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

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
            Support
          </p>
          <h1 className="font-editorial text-4xl lg:text-5xl tracking-tightest text-ink mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-charcoal-light font-light max-w-md mx-auto">
            Everything you need to know about Dupetesters.
          </p>
        </motion.div>
      </section>

      {/* FAQ sections */}
      <section className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
        {faqs.map((section) => (
          <div key={section.category} className="mb-12">
            <h2 className="text-[11px] tracking-[0.2em] uppercase font-medium text-accent mb-6">
              {section.category}
            </h2>
            <div className="divide-y divide-parchment border-t border-b border-parchment">
              {section.questions.map((faq) => {
                const key = `${section.category}-${faq.q}`;
                const isOpen = openIndex === key;
                return (
                  <div key={key}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : key)}
                      className="flex items-center justify-between w-full py-5 text-left gap-4"
                    >
                      <span className="text-sm font-medium text-ink leading-snug">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-stone-dark flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="pb-5"
                      >
                        <p className="text-sm text-charcoal-light font-light leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Still have questions */}
        <div className="text-center py-10 bg-cream-dark px-8">
          <h3 className="font-editorial text-xl text-ink mb-2">
            Still have questions?
          </h3>
          <p className="text-sm text-charcoal-light font-light mb-6">
            Our team is here to help.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
