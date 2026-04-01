import CatalogHome from "@/components/CatalogHome";
import SpringSummerBundleSection from "@/components/SpringSummerBundleSection";
import { getProductBySlug } from "@/data/products";

export default function HomePage() {
  const pack = getProductBySlug("spring-summer-pack");

  return (
    <>
      {pack && (
        <>
          <SpringSummerBundleSection
            href={`/products/${pack.slug}`}
            imageSrc={pack.images[0]}
            name={pack.name}
            price={pack.price}
            currency={pack.currency}
            size={pack.size}
          />
        </>
      )}
      <CatalogHome />
    </>
  );
}
