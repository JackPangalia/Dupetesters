import type { Metadata } from "next";
import { CartProvider } from "@/lib/cart-context";
import CatalogFilterProviderWrapper from "@/components/CatalogFilterProviderWrapper";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dupe fragrance tester packs — sample five vials",
  description:
    "Sampler packs of five dupe fragrance testers. We curate vials of scents that already exist on the market — Spring & Summer pack available now.",
  keywords: [
    "dupe fragrance testers",
    "fragrance sample pack",
    "perfume tester vials",
    "dupe perfume samples",
    "spring summer fragrance",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <CatalogFilterProviderWrapper>
            <Header />
            <Main>{children}</Main>
            <Footer />
            <CartDrawer />
          </CatalogFilterProviderWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
