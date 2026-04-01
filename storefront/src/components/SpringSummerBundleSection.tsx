"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BUNDLE_BASIC_PLACEHOLDER,
  BUNDLE_CHOOSE_OWN_PLACEHOLDER,
} from "@/data/editorial-assets";
import { formatPrice } from "@/lib/utils";

function ImageFrameAccent() {
  return (
    <>
      <span
        className="pointer-events-none absolute left-4 top-4 z-10 h-6 w-6 border-t border-l border-black/12 sm:left-5 sm:top-5 sm:h-7 sm:w-7"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-4 right-4 z-10 h-6 w-6 border-r border-b border-black/12 sm:bottom-5 sm:right-5 sm:h-7 sm:w-7"
        aria-hidden
      />
    </>
  );
}

type Props = {
  href: string;
  imageSrc: string;
  name: string;
  price: number;
  currency: string;
  size: string;
};

export default function SpringSummerBundleSection({
  href,
  imageSrc,
  name,
  price,
  currency,
  size,
}: Props) {
  return (
    <section className="relative bg-editorial-surface px-4 py-8 text-neutral-950 sm:px-5 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1500px]">
        <article className="relative overflow-hidden border border-black/8 bg-white/55 shadow-[0_24px_80px_rgba(17,17,17,0.05)] backdrop-blur-[3px]">
          <ImageFrameAccent />
          <div className="relative min-h-120 sm:min-h-144 md:min-h-176">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,248,250,0.94)_0%,rgba(247,248,250,0.82)_28%,rgba(247,248,250,0.36)_52%,rgba(247,248,250,0.08)_78%,rgba(247,248,250,0.02)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.5),transparent_24%),radial-gradient(circle_at_74%_18%,rgba(244,223,197,0.26),transparent_22%)]" />

            <div className="relative z-2 flex min-h-120 items-center px-6 py-10 sm:min-h-144 sm:px-8 sm:py-12 md:min-h-176 md:px-10 lg:px-14 lg:py-14">
              <div className="w-full max-w-lg">
                <p className="eyebrow text-neutral-600">Deluxe / Spring-Summer bundle</p>
                <div className="mt-5 w-12 border-t border-black/10" />
                <h2 className="mt-6 max-w-[10ch] font-sans text-[clamp(2.4rem,5.5vw,5rem)] font-semibold leading-[0.92] tracking-tight text-neutral-950">
                  Five scents, one elevated seasonal edit.
                </h2>
                <p className="mt-5 max-w-120 text-sm leading-7 text-neutral-700 sm:text-[15px]">
                  A curated Spring / Summer bundle designed for brighter days,
                  warmer evenings, and easy testing before committing to a full
                  bottle.
                </p>
                <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-4">
                  <div>
                    <p className="eyebrow">Format</p>
                    <p className="mt-3 text-sm text-neutral-700">{size}</p>
                  </div>
                  <div>
                    <p className="eyebrow">Price</p>
                    <p className="mt-1 font-display text-4xl leading-none tracking-tight text-neutral-950 sm:text-5xl">
                      {formatPrice(price, currency)}
                    </p>
                  </div>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link href={href} className="btn-primary">
                    Buy the Bundle
                  </Link>
                  <p className="text-xs uppercase tracking-widest text-neutral-500">
                    Five scents / one edit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <article className="relative grid overflow-hidden border border-black/8 bg-white/50 shadow-[0_18px_50px_rgba(17,17,17,0.04)] backdrop-blur-[2px] md:grid-cols-2">
            <div className="relative min-h-52 border-b border-black/8 bg-editorial-panel/50 md:min-h-0 md:border-r md:border-b-0">
              <ImageFrameAccent />
              <div className="relative h-full min-h-52 md:absolute md:inset-0">
                <Image
                  src={BUNDLE_BASIC_PLACEHOLDER}
                  alt="Basic bundle placeholder"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <p className="eyebrow">Basic / build a smaller edit</p>
              <div className="mt-5 w-12 border-t border-black/10" />
              <h3 className="mt-5 max-w-[16ch] font-sans text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[0.98] tracking-tight text-neutral-950">
                Start with a lighter three-scent bundle.
              </h3>
              <p className="mt-4 max-w-120 text-sm leading-7 text-neutral-700 sm:text-[15px]">
                Prefer a leaner edit? Pick a tighter starter bundle from the
                fragrances below and keep the entry point simple.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="#fragrance-grid" className="btn-secondary">
                  Build the Basic Bundle
                </Link>
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  Three scents / your choice
                </p>
              </div>
            </div>
          </article>

          <article className="relative grid overflow-hidden border border-black/8 bg-white/50 shadow-[0_18px_50px_rgba(17,17,17,0.04)] backdrop-blur-[2px] md:grid-cols-2">
            <div className="relative min-h-52 border-b border-black/8 bg-editorial-panel/50 md:min-h-0 md:border-r md:border-b-0">
              <ImageFrameAccent />
              <div className="relative h-full min-h-52 md:absolute md:inset-0">
                <Image
                  src={BUNDLE_CHOOSE_OWN_PLACEHOLDER}
                  alt="Choose your own bundle placeholder"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <p className="eyebrow">Make your own / buy individual</p>
              <div className="mt-5 w-12 border-t border-black/10" />
              <h3 className="mt-5 max-w-[16ch] font-sans text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[0.98] tracking-tight text-neutral-950">
                Choose your own bundle or shop scents one by one.
              </h3>
              <p className="mt-4 max-w-120 text-sm leading-7 text-neutral-700 sm:text-[15px]">
                Skip the pre-curated route and browse each fragrance individually,
                whether you want to assemble your own edit or just try one.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="#fragrance-grid" className="btn-secondary">
                  Browse Individual Fragrances
                </Link>
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  Individual picks / custom mix
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
