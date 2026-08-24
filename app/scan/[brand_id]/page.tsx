import ScanClient from "./scan-client";

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
  const brandId = params.brand_id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `Scan ${brandId} Drop | Free Drops`,
    description: `Authenticating your ${brandId} free drop. Please wait while we verify your scan.`,
    robots: { index: false, follow: false } // Scan pages usually shouldn't be indexed directly
  };
}

export default async function ScanPage(props: { params: Promise<{ brand_id: string }> }) {
  const params = await props.params;
  return <ScanClient brandId={params.brand_id} />;
}
