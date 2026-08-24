import ScanClient from "./scan-client";

export function generateStaticParams() {
  return [
    { brand_id: "liquid-death" },
    { brand_id: "red-bull" },
    { brand_id: "multi-drop" },
  ];
}

export default async function ScanPage(props: { params: Promise<{ brand_id: string }> }) {
  const params = await props.params;
  return <ScanClient brandId={params.brand_id} />;
}
