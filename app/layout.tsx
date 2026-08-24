import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});



export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Useful for preventing auto-zoom on forms in mobile
};

export const metadata: Metadata = {
  title: "Free Drops | Free to You, Paid by Brands",
  description: "A disruptive ad-revenue water company.",
  openGraph: {
    title: "Free Drops",
    description: "Water should be free. Paid by brands you actually want to hear from.",
    url: "https://freedrops.com",
    siteName: "Free Drops",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Drops",
    description: "Water should be free. Paid by brands you actually want to hear from.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${interTight.variable}`}>
      <body
        className="font-sans antialiased bg-background text-foreground"
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
