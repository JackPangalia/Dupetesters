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
    <footer className="bg-neutral-50 border-t border-neutral-200 text-neutral-700">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-5 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="text-sm font-bold text-neutral-900 tracking-tight"
            >
              Dupe Testers
            </Link>
            <p className="mt-4 text-sm text-neutral-600 leading-relaxed max-w-xs">
              Packs of five dupe fragrance testers — we curate vials of scents
              that already exist on the market; we don&apos;t blend them.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-neutral-900 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-accent transition-colors duration-300"
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

      <div className="border-t border-neutral-200 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-5 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
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
