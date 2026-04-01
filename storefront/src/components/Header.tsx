"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, User, ChevronDown, X, Menu } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";

const FREE_SHIPPING_GBP = 50;

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Shipping", href: "/shipping-returns" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const { itemCount, openCart, subtotal } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const remaining = Math.max(0, FREE_SHIPPING_GBP - subtotal);
  const qualifies = subtotal >= FREE_SHIPPING_GBP;

  return (
    <>
      {/* Announcement */}
      <div className="fixed top-0 left-0 right-0 z-60 min-h-(--announcement-h) flex items-center justify-center border-b border-black/8 bg-editorial-surface text-center text-[11px] sm:text-xs py-2 px-4 text-neutral-600">
        {qualifies ? (
          <span>You qualify for free UK shipping on this order.</span>
        ) : (
          <span>
            Add {formatPrice(remaining)} more to qualify for{" "}
            <strong className="font-medium text-neutral-950">FREE</strong>{" "}
            shipping (UK orders
            over {formatPrice(FREE_SHIPPING_GBP)}).
          </span>
        )}
      </div>

      <header className="fixed top-(--announcement-h) left-0 right-0 z-50 border-b border-black/8 bg-editorial-surface/96 text-neutral-950 backdrop-blur-sm">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="flex items-center gap-3 h-14">
            <button
              type="button"
              className="lg:hidden p-2 -ml-2 text-neutral-700"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>

            <Link
              href="/"
              className="shrink-0 pr-2 text-sm font-semibold tracking-tight text-neutral-950 sm:text-base"
            >
              Dupe Testers
            </Link>

            <nav
              className="ml-4 hidden items-center gap-6 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-600 lg:flex"
              aria-label="Primary"
            >
              {navLinks.map((l) => (
                <Link
                  key={l.href + l.label}
                  href={l.href}
                  className="whitespace-nowrap transition-colors hover:text-neutral-950"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1 sm:gap-3 ml-auto shrink-0">
              <span className="hidden cursor-default items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-neutral-500 sm:flex">
                GBP £
                <ChevronDown size={14} className="opacity-60" />
              </span>
              <span className="hidden cursor-default items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-neutral-500 sm:flex">
                English
                <ChevronDown size={14} className="opacity-60" />
              </span>
              <Link
                href="/about"
                className="hidden p-2 text-neutral-500 transition-colors hover:text-neutral-950 sm:block"
                aria-label="Account"
              >
                <User size={20} strokeWidth={1.5} />
              </Link>
              <button
                type="button"
                onClick={openCart}
                className="group relative p-2 text-neutral-700 transition-colors duration-300 hover:text-neutral-950"
                aria-label={`Cart, ${itemCount} items`}
              >
                <ShoppingCart size={21} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-neutral-950 px-1 text-[10px] font-semibold text-white shadow-sm transition-transform duration-300 motion-safe:group-hover:scale-105">
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-70 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 flex w-[min(100%,320px)] flex-col border-r border-black/8 bg-editorial-surface shadow-xl">
            <div className="flex items-center justify-between border-b border-black/8 px-4 py-3">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-950">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 text-neutral-600"
                aria-label="Close"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href + l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-black/8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-700"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
