import { ConfiguradorProvider } from "./context/ConfiguradorContext";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import MetaPixel from "@/components/MetaPixel";
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
  metadataBase: new URL("https://almoria.store"),

  title: "Almoria | Personaliza tu portalápicero",

  description:
    "Personaliza un portalápicero exclusivo para hinchas de Universitario, Alianza Lima y Sporting Cristal. Envíos a todo el Perú.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Almoria | Personaliza tu portalápicero",

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

    title: "Almoria | Regalos personalizados para hinchas",

    description:
      "Diseña un regalo único para verdaderos hinchas.",

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
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <ConfiguradorProvider>
          {children}
        </ConfiguradorProvider>

        <MetaPixel />
        <GoogleAnalytics gaId="G-52JLKJM7NS" />
      </body>
    </html>
  );
}