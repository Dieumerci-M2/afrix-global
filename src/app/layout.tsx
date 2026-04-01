import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Slab } from "next/font/google";

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
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
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Afrix Global",
              "url": "https://www.afrix.global",
              "logo": "https://www.afrix.global/images/logo.png",
              "description": "Afrix Global accélère les compétences digitales en Afrique via des formations, du mentoring et des services tech.",
              "sameAs": [
                "https://www.linkedin.com/company/afrix-global",
                "https://twitter.com/afrixglobal"
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Afrix Global",
              "url": "https://www.afrix.global",
              "description": "Plateforme EdTech pour l'éducation digitale en Afrique",
              "publisher": {
                "@type": "Organization",
                "name": "Afrix Global"
              }
            }),
          }}
        />
      </head>
      <body
      suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${robotoSlab.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
