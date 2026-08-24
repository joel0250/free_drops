import BrandClient from "./brand-client";

const MOCK_BRANDS: Record<
  string,
  { name: string; impact: string; offer: string; color: string }
> = {
  "liquid-death": {
    name: "Liquid Death",
    impact: "1,200 lbs of plastic saved",
    offer: "Murder Your Thirst - 20% Off",
    color: "#00F0FF",
  },
  "red-bull": {
    name: "Red Bull",
    impact: "500 trees planted",
    offer: "Get your wings - Free Shipping",
    color: "#FF0000",
  },
};

export function generateStaticParams() {
  return [
    { brand_id: "liquid-death" },
    { brand_id: "red-bull" },
    { brand_id: "multi-drop" },
  ];
}

import type { Metadata } from "next";

export async function generateMetadata(
  props: { params: Promise<{ brand_id: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const brandId = params.brand_id;
  const brand = MOCK_BRANDS[brandId] || { name: brandId, offer: "Special Offer Available" };

  return {
    title: `${brand.name} | Free Drops Partner`,
    description: `Claim your exclusive drop from ${brand.name}: ${brand.offer}`,
    openGraph: {
      title: `${brand.name} | Free Drops Partner`,
      description: `Claim your exclusive drop from ${brand.name}: ${brand.offer}`,
    }
  };
}

export default async function BrandPage(props: { params: Promise<{ brand_id: string }> }) {
  const params = await props.params;
  const brandId = params.brand_id;
  const brand = MOCK_BRANDS[brandId] || { name: brandId, offer: "Special Offer Available" };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${brand.name} Sponsored Drop`,
    "description": brand.offer,
    "brand": {
      "@type": "Brand",
      "name": brand.name
    }
  };

  return (
    <main className="min-h-screen bg-background p-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrandClient brandId={brandId} />
    </main>
  );
}
