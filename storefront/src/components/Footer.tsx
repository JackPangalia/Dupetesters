"use client";

import Link from "next/link";

const footerLinks = {
  Shop: [
    { label: "Catalog", href: "/" },
    { label: "Spring & Summer pack", href: "/products/spring-summer-pack" },
    { label: "Sampler packs", href: "/collections/sampler-packs" },
  ],
  Help: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping & Returns", href: "/shipping-returns" },
    { label: "Contact", href: "/contact" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-black/8 bg-editorial-surface text-neutral-700">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-5 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight text-neutral-950"
            >
              Dupe Testers
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600">
              Packs of five dupe fragrance testers — we curate vials of scents
              that already exist on the market; we don&apos;t blend them.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="eyebrow mb-4 text-neutral-500">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 transition-colors duration-300 hover:text-neutral-950"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-black/8 bg-editorial-surface-soft">
        <div className="max-w-[1600px] mx-auto flex flex-col items-center justify-between gap-3 px-4 py-5 sm:px-5 md:flex-row lg:px-8">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Dupe Testers. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">
            UK shipping · GBP pricing
          </p>
        </div>
      </div>
    </footer>
  );
}
