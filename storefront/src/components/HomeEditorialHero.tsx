"use client";

import Link from "next/link";
import HeroFluidCanvas from "./HeroFluidCanvas";

type HeroPanelProps = {
  href: string;
  kicker: string;
  mastheadWord: string;
  animationDelay?: string;
};

function CropMarks() {
  const mark = "pointer-events-none absolute z-[3] border-black/[0.12]";
  const len = "w-5 h-5 md:w-7 md:h-7";

  return (
    <>
      <span className={`${mark} ${len} top-5 left-5 border-t border-l md:top-7 md:left-7`} aria-hidden />
      <span className={`${mark} ${len} top-5 right-5 border-t border-r md:top-7 md:right-7`} aria-hidden />
      <span className={`${mark} ${len} bottom-5 left-5 border-b border-l md:bottom-7 md:left-7`} aria-hidden />
      <span className={`${mark} ${len} bottom-5 right-5 border-b border-r md:bottom-7 md:right-7`} aria-hidden />
      <span className={`${mark} left-1/2 top-1/2 h-6 w-px -translate-x-1/2 -translate-y-1/2 bg-black/8 md:h-8`} aria-hidden />
      <span className={`${mark} left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 bg-black/8 md:w-8`} aria-hidden />
    </>
  );
}

function HeroBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundColor: "#f7f8fa",
          backgroundImage: `
            radial-gradient(circle at 18% 20%, rgba(150, 224, 219, 0.5), transparent 28%),
            radial-gradient(circle at 78% 18%, rgba(160, 196, 236, 0.42), transparent 30%),
            radial-gradient(circle at 50% 62%, rgba(255, 255, 255, 0.75), transparent 34%),
            linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(246,249,252,0.78) 48%, rgba(255,255,255,0.9) 100%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.14]"
        aria-hidden
        style={{
          backgroundImage: `
            radial-gradient(rgba(17,17,17,0.08) 0.55px, transparent 0.7px),
            radial-gradient(rgba(255,255,255,0.6) 0.55px, transparent 0.7px)
          `,
          backgroundPosition: "0 0, 8px 8px",
          backgroundSize: "16px 16px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-black/6"
        aria-hidden
      />
    </>
  );
}

function HeroPanel({ href, kicker, mastheadWord, animationDelay = "0ms" }: HeroPanelProps) {
  return (
    <Link
      href={href}
      className="group relative block min-h-120 overflow-hidden border-b border-black/8 bg-transparent text-neutral-950 outline-none ring-inset transition-[background-color] duration-700 ease-luxury last:border-b-0 hover:bg-white/18 focus-visible:ring-2 focus-visible:ring-neutral-950 sm:min-h-144 md:min-h-176 md:border-r md:border-b-0 md:border-black/8 last:md:border-r-0"
    >
      <span className="sr-only">{mastheadWord} — {kicker}</span>

      <CropMarks />

      <p className="eyebrow absolute top-8 left-8 z-20 max-w-[min(85%,18rem)] leading-[1.65] md:top-10 md:left-10">
        {kicker}
      </p>

      {/* Overflow clip so the word slides up into view */}
      <span
        className="pointer-events-none absolute bottom-8 left-1/2 z-2 -translate-x-1/2 overflow-hidden md:bottom-10"
        aria-hidden
      >
        <span
          className="block select-none font-display text-[clamp(2.5rem,13.5vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.035em] text-neutral-950"
          style={{
            animation: `masthead-up 1.1s cubic-bezier(0.16,1,0.3,1) ${animationDelay} both`,
          }}
        >
          {mastheadWord}
        </span>
      </span>
    </Link>
  );
}

type HomeEditorialHeroProps = {
  packHref: string;
  packName: string;
};

export default function HomeEditorialHero({ packHref, packName }: HomeEditorialHeroProps) {
  return (
    <section
      className="relative bg-editorial-surface px-4 pt-3 pb-4 sm:px-5 sm:pt-4 sm:pb-5 lg:px-8 lg:pt-5 lg:pb-6"
      aria-labelledby="editorial-hero-heading"
    >
      <div className="mx-auto max-w-[1500px]">
        <article className="relative overflow-hidden border border-black/8 bg-white/55 shadow-[0_24px_80px_rgba(17,17,17,0.05)] backdrop-blur-[3px]">
          <h2 id="editorial-hero-heading" className="sr-only">
            Editorial — {packName}
          </h2>

          <HeroBackground />
          <HeroFluidCanvas opacity={0.18} />

          <div className="relative z-2 grid grid-cols-1 md:grid-cols-2">
            <HeroPanel
              href={packHref}
              kicker="Five dupe testers / 2ml vials"
              mastheadWord="DUPE"
              animationDelay="100ms"
            />
            <HeroPanel
              href={packHref}
              kicker="Curated sample pack / try at home"
              mastheadWord="TESTERS"
              animationDelay="250ms"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
