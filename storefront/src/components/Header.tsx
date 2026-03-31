"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, User, ChevronDown, X, Menu } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useCatalogFilters } from "@/lib/catalog-filter-context";
import { formatPrice } from "@/lib/utils";

const FREE_SHIPPING_GBP = 50;

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Catalog", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shipping", href: "/shipping-returns" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { itemCount, openCart, subtotal } = useCart();
  const { searchQuery, setSearchQuery } = useCatalogFilters();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerSearch, setHeaderSearch] = useState(searchQuery);

  useEffect(() => {
    setHeaderSearch(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const remaining = Math.max(0, FREE_SHIPPING_GBP - subtotal);
  const qualifies = subtotal >= FREE_SHIPPING_GBP;

  const commitSearch = () => {
    setSearchQuery(headerSearch);
    if (pathname !== "/") {
      window.location.href = "/";
    }
  };

  return (
    <>
      {/* Announcement */}
      <div className="fixed top-0 left-0 right-0 z-[60] min-h-[var(--announcement-h)] flex items-center justify-center bg-cream border-b border-parchment text-center text-xs sm:text-sm py-2 px-4 text-accent">
        {qualifies ? (
          <span>You qualify for free UK shipping on this order.</span>
        ) : (
          <span>
            Add {formatPrice(remaining)} more to qualify for{" "}
            <strong className="font-semibold">FREE</strong> shipping (UK orders
            over {formatPrice(FREE_SHIPPING_GBP)}).
          </span>
        )}
      </div>

      <header className="fixed top-[var(--announcement-h)] left-0 right-0 z-50 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-5 lg:px-8">
          <div className="flex items-center gap-3 h-14 lg:h-[3.25rem]">
            <button
              type="button"
              className="lg:hidden p-2 -ml-2 text-white/90"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>

            <Link
              href="/"
              className="shrink-0 font-bold text-base sm:text-lg tracking-tight text-white pr-2"
            >
              Dupe Testers
            </Link>

            <nav
              className="hidden lg:flex items-center gap-6 text-[13px] text-white/85 ml-4"
              aria-label="Primary"
            >
              {navLinks.map((l) => (
                <Link
                  key={l.href + l.label}
                  href={l.href}
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex-1 hidden md:block max-w-md mx-4">
              <div className="relative">
                <Search
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-500"
                  size={16}
                  strokeWidth={1.5}
                />
                <input
                  type="search"
                  placeholder="Search testers…"
                  value={headerSearch}
                  onChange={(e) => setHeaderSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      commitSearch();
                    }
                  }}
                  className="w-full bg-white text-neutral-900 text-sm rounded-sm pl-9 pr-3 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-3 ml-auto shrink-0">
              <span className="hidden sm:flex items-center gap-1 text-xs text-white/70 cursor-default">
                GBP £
                <ChevronDown size={14} className="opacity-60" />
              </span>
              <span className="hidden sm:flex items-center gap-1 text-xs text-white/70 cursor-default">
                English
                <ChevronDown size={14} className="opacity-60" />
              </span>
              <Link
                href="/about"
                className="p-2 text-white/80 hover:text-white hidden sm:block"
                aria-label="Account"
              >
                <User size={20} strokeWidth={1.5} />
              </Link>
              <button
                type="button"
                onClick={openCart}
                className="group relative p-2 text-white/90 hover:text-white transition-colors duration-300"
                aria-label={`Cart, ${itemCount} items`}
              >
                <ShoppingCart size={21} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-accent text-[10px] font-bold text-cream shadow-sm transition-transform duration-300 motion-safe:group-hover:scale-105">
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="md:hidden pb-2">
            <div className="relative">
              <Search
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-500"
                size={16}
                strokeWidth={1.5}
              />
              <input
                type="search"
                placeholder="Search testers…"
                value={headerSearch}
                onChange={(e) => setHeaderSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    commitSearch();
                  }
                }}
                className="w-full bg-white text-neutral-900 text-sm rounded-sm pl-9 pr-3 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-white"
              />
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[min(100%,320px)] bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
              <span className="font-bold text-neutral-900">Menu</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 text-neutral-600"
                aria-label="Close"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href + l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm font-medium text-neutral-800 border-b border-neutral-100"
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
