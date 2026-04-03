import type { Metadata } from "next";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ana & Matt Duo | Acoustic Duo for Events & Cruise Ships",
  description:
    "Ana & Matt are a husband-and-wife acoustic duo from Brazil, performing country, rockabilly, classic rock, and timeless hits from the 50s to today. Available for cruise ships, events, and private shows.",
  keywords: [
    "acoustic duo",
    "cruise ship musicians",
    "live music",
    "country",
    "rockabilly",
    "classic rock",
    "wedding band",
    "event musicians",
  ],
  openGraph: {
    title: "Ana & Matt Duo | Acoustic Duo",
    description:
      "A dynamic husband-and-wife acoustic duo delivering unforgettable live performances.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
