import HomeClient from "./home-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Drops | Free to You, Paid by Brands",
  description: "A disruptive ad-revenue water company.",
  openGraph: {
    title: "Free Drops | Home",
    description: "Water should be free. Paid by brands you actually want to hear from.",
  },
};

export default function Home() {
  return <HomeClient />;
}
