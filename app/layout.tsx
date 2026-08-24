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
  metadataBase: new URL('https://joel0250.github.io/free_drops'),
  title: {
    default: "Free Drops | Free to You, Paid by Brands",
    template: "%s | Free Drops"
  },
  description: "A disruptive ad-revenue water company. We flipped the model: premium aluminum bottles, pristine water, paid for by brands you actually want to hear from.",
  applicationName: "Free Drops",
  authors: [{ name: "Joel Thomas" }],
  generator: "Next.js",
  keywords: ["free water", "ad revenue", "sustainable water", "aluminum bottles", "brand sponsored"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Drops",
    description: "Water should be free. Paid by brands you actually want to hear from.",
    url: "/",
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
    <html lang="en" className={`dark ${interTight.variable}`} suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-background text-foreground"
        suppressHydrationWarning
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
