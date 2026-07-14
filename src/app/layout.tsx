import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

export const inter = Inter({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const poppins = Poppins({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://byuzumclone.vercel.app"),

  title: {
    default: "ByUzum Clone",
    template: "%s | ByUzum Clone",
  },

  description:
    "ByUzum Clone is a modern e-commerce web application inspired by Uzum Market. Built with Next.js 15, React 19, TypeScript, Tailwind CSS, and designed as an educational portfolio project.",

  applicationName: "ByUzum Clone",

  authors: [
    {
      name: "Asilbek Egamnazarov",
    },
  ],

  creator: "Asilbek Egamnazarov",

  publisher: "Asilbek Egamnazarov",

  keywords: [
    "ByUzum Clone",
    "Uzum Market Clone",
    "Next.js",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "E-commerce",
    "Online Shopping",
    "Frontend Portfolio",
    "Next.js Portfolio",
    "Modern Web App",
    "JavaScript",
    "Responsive Design",
  ],

  category: "shopping",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "ByUzum Clone",
    description:
      "A modern Uzum Market inspired e-commerce clone built with Next.js 15 and TypeScript.",

    url: "https://byuzumclone.vercel.app",

    siteName: "ByUzum Clone",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ByUzum Clone",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ByUzum Clone",
    description:
      "Modern e-commerce clone built with Next.js 15, React 19 and TypeScript.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
