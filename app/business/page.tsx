import BusinessClient from "./business-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Platform | Free Drops",
  description: "Marketing with water. Stop paying for ignored digital ads and put your brand directly into their hands.",
  openGraph: {
    title: "B2B Platform | Free Drops",
    description: "Marketing with water. Calculate your ROI on the platform.",
  },
};

export default function BusinessPage() {
  return <BusinessClient />;
}
