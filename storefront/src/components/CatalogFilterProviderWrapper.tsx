"use client";

import { CatalogFilterProvider } from "@/lib/catalog-filter-context";
import { getCatalogPriceCeiling } from "@/data/products";

export default function CatalogFilterProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CatalogFilterProvider priceCeiling={getCatalogPriceCeiling()}>
      {children}
    </CatalogFilterProvider>
  );
}
