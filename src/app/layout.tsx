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
    "Afrix Global propose des formations numériques, des services tech et de l’accompagnement startup pour l’Afrique. Rejoignez notre écosystème d’innovation digitale.",
  keywords: [
    "Afrix Global",
    "formations numérique",
    "EdTech Afrique",
    "développement web",
    "marketing digital",
    "inclusion numérique",
  ],
  authors: [{ name: "Afrix Global", url: "https://afrix-global.com" }],
  metadataBase: new URL("https://afrix-global.com"),
  openGraph: {
    title: "Afrix Global - Éducation et innovation digitale en Afrique",
    description:
      "Afrix Global accélère les compétences digitales en Afrique via des formations, du mentoring et des services tech.",
    type: "website",
    locale: "fr_FR",
    siteName: "Afrix Global",
    images: [
      {
        url: "https://afrix-global.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Afrix Global EdTech",
      },
    ],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoSlab.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
