"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=1800&q=80"
          alt="Our story"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-ink/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-cream/60 mb-4">
            Our Story
          </p>
          <h1 className="font-editorial text-4xl lg:text-6xl text-cream tracking-tightest">
            Redefining Luxury
          </h1>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
              The Mission
            </p>
            <h2 className="font-editorial text-3xl lg:text-4xl tracking-tightest text-ink leading-tight mb-8">
              We believe everyone deserves to smell{" "}
              <span className="italic">extraordinary</span>
            </h2>
            <div className="space-y-4 text-charcoal-light font-light leading-relaxed">
              <p>
                Dupetesters was born from a simple frustration: why should a
                world-class scent cost a month&apos;s rent? The fragrance industry
                charges for marketing, packaging, and brand prestige — not
                necessarily for what&apos;s inside the bottle.
              </p>
              <p>
                We work directly with experienced perfumers to reverse-engineer
                the most sought-after designer and niche fragrances. Using the
                same calibre of raw materials, we craft alternatives that
                capture 90%+ of the original character at a fraction of the cost.
              </p>
              <p>
                This isn&apos;t about cutting corners. It&apos;s about cutting
                through the gatekeeping.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink text-cream py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-cream/40 mb-4">
              What We Stand For
            </p>
            <h2 className="font-editorial text-3xl lg:text-4xl tracking-tightest">
              Our Principles
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                title: "Uncompromising Quality",
                body: "Every fragrance is crafted using premium-grade ingredients sourced from the same suppliers as luxury houses. We don't do cheap imitations — we do precision alternatives.",
              },
              {
                title: "Radical Transparency",
                body: "We tell you exactly what inspired each scent. No vague descriptions, no pretense. You know what you're getting, and you know why it's a fraction of the price.",
              },
              {
                title: "Accessible Luxury",
                body: "A great scent shouldn't require a luxury budget. Our mission is to democratise fragrance — making exceptional scents available to everyone.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <span className="font-editorial text-4xl text-cream/15">
                  0{i + 1}
                </span>
                <h3 className="font-editorial text-xl mt-4 mb-3">
                  {value.title}
                </h3>
                <p className="text-cream/50 font-light leading-relaxed text-sm">
                  {value.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1000&q=80"
                alt="Fragrance crafting process"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
                Our Process
              </p>
              <h2 className="font-editorial text-3xl lg:text-4xl tracking-tightest text-ink leading-tight mb-8">
                From Analysis{" "}
                <span className="italic">to Artistry</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Deconstruction",
                    body: "We begin by analysing the original fragrance at a molecular level, identifying each note and accord.",
                  },
                  {
                    step: "02",
                    title: "Formulation",
                    body: "Our perfumers craft the alternative using premium raw materials, iterating until the match exceeds 90%.",
                  },
                  {
                    step: "03",
                    title: "Testing",
                    body: "Each batch undergoes blind testing against the original to ensure quality, longevity, and projection meet our standards.",
                  },
                  {
                    step: "04",
                    title: "Delivery",
                    body: "Once approved, your fragrance is freshly prepared and shipped in premium packaging to your door.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <span className="font-editorial text-2xl text-parchment mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-medium text-ink mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-charcoal-light font-light leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-dark py-20 text-center">
        <motion.div {...fadeUp} className="max-w-lg mx-auto px-6">
          <h2 className="font-editorial text-3xl tracking-tightest text-ink mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-charcoal-light font-light mb-8">
            Browse our collection and find your new signature scent.
          </p>
          <Link href="/shop" className="btn-primary inline-flex items-center gap-3">
            Shop the Collection
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
