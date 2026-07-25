import { ConfiguradorProvider } from "./context/ConfiguradorContext";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Almoria | Personaliza tu portalápices",
  description:
    "Personaliza un portalápices exclusivo para hinchas de Universitario, Alianza Lima y Sporting Cristal. Envíos a todo el Perú.",

  openGraph: {
    title: "Almoria | Personaliza tu portalápices",
    description:
      "Diseña un regalo único para verdaderos hinchas. Personalización en minutos y envío a todo el Perú.",
    url: "https://almoria.store",
    siteName: "Almoria",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Almoria",
      },
    ],
    locale: "es_PE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Almoria",
    description:
      "Portalápices personalizados para hinchas.",
    images: ["/og-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <ConfiguradorProvider>
          {children}
        </ConfiguradorProvider>
      </body>
    </html>
  );
}