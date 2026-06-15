import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afrix Global - EdTech et Formation Digitale en Afrique",
  description:
    "Afrix Global accélère les compétences digitales en Afrique via des formations, du mentoring et des services tech.",
  keywords: [
    "Afrix Global",
    "formations numérique",
    "EdTech Afrique",
    "développement web",
    "marketing digital",
    "inclusion numérique",
  ],
  authors: [{ name: "Afrix Global", url: "https://www.afrix.global" }],
  metadataBase: new URL("https://www.afrix.global"),
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://www.afrix.global",
  },
  openGraph: {
    title: "Afrix Global - Éducation et innovation digitale en Afrique",
    description:
      "Afrix Global offre des services en développement web, marketing digital et bureautique, tout en proposant des formations pour renforcer les compétences digitales.",
    type: "website",
    locale: "fr_FR",
    siteName: "Afrix Global",
    images: [
      {
        url: "https://www.afrix.global/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Afrix Global EdTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afrix Global - Éducation et innovation digitale en Afrique",
    description:
      "Afrix Global offre des services en développement web, marketing digital et bureautique, tout en proposant des formations pour renforcer les compétences digitales.",
    images: ["https://www.afrix.global/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/favicon.png",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
