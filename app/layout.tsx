import type { Metadata } from "next";
import { Manrope, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./theme-provider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});
import type { Viewport } from 'next'

import Footer from "./components/footer";

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFBFB' },
    { media: '(prefers-color-scheme: dark)', color: '#1E1E1E' },
  ],
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://okraglystol.sus.org.pl';
export const metadata: Metadata = {

  metadataBase: new URL(baseUrl),
  // openGraph: {
  //   title: 'Ogólnopolski Okrągły Stół ds. Strategii Młodzieżowej',
  //   description: 'Stowarzyszenie Umarłych Statutów x Fundacja PZU | Pierwsze w Polsce od ponad 20 lat konsultacje na rzecz Krajowej Strategii Młodzieżowej. Twój głos ma realny wpływ.',
  //   url: '/',
  //   siteName: 'Ogólnopolski Okrągły Stół ds. Strategii Młodzieżowej',
  //   images: [
  //     {
  //       url: '/og.png',
  //       width: 800,
  //       height: 600,
  //       alt: 'Ogólnopolski Okrągły Stół ds. Strategii Młodzieżowej',
  //     },
  //     {
  //       url: '/og-alt.png',
  //       width: 1800,
  //       height: 1600,
  //       alt: 'Ogólnopolski Okrągły Stół ds. Strategii Młodzieżowej',
  //     },
  //   ],
  //   locale: 'pl_PL',
  //   type: 'website',
  // },
  title: {
    default: "Ogólnopolski Okrągły Stół ds. Strategii Młodzieżowej",
    template: "%s | Ogólnopolski Okrągły Stół ds. Strategii Młodzieżowej",
  },
  description: "Pierwsze w Polsce od ponad 20 lat konsultacje na rzecz Krajowej Strategii Młodzieżowej. Twój głos ma realny wpływ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="pl"
      className={`${manrope.variable} ${bricolageGrotesque.variable} h-full antialiased scroll-smooth scroll-pt-30`}
    >
      <head>
        <meta property="og:image" content="/512.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}


