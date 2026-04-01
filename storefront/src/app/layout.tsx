import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Outfit } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

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
  const fontVars = `${outfit.variable} ${cormorant.variable} ${bodoni.variable}`;

  return (
    <html lang="en" className={fontVars}>
      <body>
        <CartProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
