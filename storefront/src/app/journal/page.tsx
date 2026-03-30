"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "why-dupe-fragrances-are-the-future",
    title: "Why Dupe Fragrances Are the Future",
    excerpt:
      "The fragrance industry is changing. Here's why more people than ever are choosing alternatives over originals.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
    date: "March 2026",
    readTime: "5 min read",
    category: "Industry",
  },
  {
    slug: "how-to-make-your-fragrance-last-longer",
    title: "How to Make Your Fragrance Last All Day",
    excerpt:
      "From pulse points to layering techniques — our guide to getting the most out of every spray.",
    image: "https://images.unsplash.com/photo-1594035910387-fea081e83b26?w=800&q=80",
    date: "March 2026",
    readTime: "4 min read",
    category: "Tips",
  },
  {
    slug: "top-5-scents-for-spring-2026",
    title: "Top 5 Scents for Spring 2026",
    excerpt:
      "Fresh, floral, and perfectly balanced — our picks for the best fragrances this season.",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80",
    date: "February 2026",
    readTime: "3 min read",
    category: "Seasonal",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function JournalPage() {
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
            Stories & Guides
          </p>
          <h1 className="font-editorial text-4xl lg:text-5xl tracking-tightest text-ink mb-3">
            The Journal
          </h1>
          <p className="text-charcoal-light font-light max-w-md mx-auto">
            Fragrance education, tips, and the latest from Dupetesters.
          </p>
        </motion.div>
      </section>

      {/* Featured article */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <motion.div {...fadeUp}>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-accent font-medium">
                  {articles[0].category}
                </span>
                <span className="text-[10px] tracking-[0.1em] uppercase text-stone-dark">
                  {articles[0].date}
                </span>
              </div>
              <h2 className="font-editorial text-3xl lg:text-4xl tracking-tightest text-ink mb-4 leading-tight">
                {articles[0].title}
              </h2>
              <p className="text-charcoal-light font-light leading-relaxed mb-6">
                {articles[0].excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-medium text-ink">
                Read Article
                <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </motion.div>

        {/* Article grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.slug}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark mb-5">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[var(--ease-luxury)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-accent font-medium">
                  {article.category}
                </span>
                <span className="text-[10px] tracking-[0.1em] uppercase text-stone-dark">
                  {article.readTime}
                </span>
              </div>
              <h3 className="font-editorial text-lg text-ink mb-2 group-hover:text-accent transition-colors duration-300">
                {article.title}
              </h3>
              <p className="text-sm text-charcoal-light font-light leading-relaxed">
                {article.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
