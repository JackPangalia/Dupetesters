"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CatalogSort = "bestselling" | "price-asc" | "price-desc" | "rating";

type CatalogFilterContextValue = {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  priceMin: number;
  priceMax: number;
  setPriceMin: (v: number) => void;
  setPriceMax: (v: number) => void;
  priceCeiling: number;
  selectedBrands: Set<string>;
  toggleBrand: (brand: string) => void;
  clearBrands: () => void;
  sortBy: CatalogSort;
  setSortBy: (v: CatalogSort) => void;
};

const CatalogFilterContext = createContext<CatalogFilterContextValue | null>(
  null
);

export function CatalogFilterProvider({
  children,
  priceCeiling,
}: {
  children: ReactNode;
  priceCeiling: number;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(priceCeiling);
  const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<CatalogSort>("bestselling");

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) => {
      const next = new Set(prev);
      if (next.has(brand)) next.delete(brand);
      else next.add(brand);
      return next;
    });
  };

  const clearBrands = () => setSelectedBrands(new Set());

  const value = useMemo(
    () => ({
      searchQuery,
      setSearchQuery,
      priceMin,
      priceMax,
      setPriceMin,
      setPriceMax,
      priceCeiling,
      selectedBrands,
      toggleBrand,
      clearBrands,
      sortBy,
      setSortBy,
    }),
    [
      searchQuery,
      priceMin,
      priceMax,
      priceCeiling,
      selectedBrands,
      sortBy,
    ]
  );

  return (
    <CatalogFilterContext.Provider value={value}>
      {children}
    </CatalogFilterContext.Provider>
  );
}

export function useCatalogFilters() {
  const ctx = useContext(CatalogFilterContext);
  if (!ctx) {
    throw new Error("useCatalogFilters must be used within CatalogFilterProvider");
  }
  return ctx;
}
