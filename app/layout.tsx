import type { Metadata } from "next";
import Link from "next/link";
import { Manrope, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFBFB' },
    { media: '(prefers-color-scheme: dark)', color: '#1E1E1E' },
  ],
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://okraglystol.sus.org.pl';
export const metadata: Metadata = {

  metadataBase: new URL(baseUrl),
  openGraph: {
    title: 'Ogólnopolski Okrągły Stół ds. Strategii Młodzieżowej',
    description: 'Stowarzyszenie Umarłych Statutów x Fundacja PZU | Pierwsze w Polsce od ponad 20 lat konsultacje na rzecz Krajowej Strategii Młodzieżowej. Twój głos ma realny wpływ.',
    url: '/',
    siteName: 'Ogólnopolski Okrągły Stół ds. Strategii Młodzieżowej',
    images: [
      {
        url: '/og.png',
        width: 800,
        height: 600,
        alt: 'Ogólnopolski Okrągły Stół ds. Strategii Młodzieżowej',
      },
      {
        url: '/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'Ogólnopolski Okrągły Stół ds. Strategii Młodzieżowej',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
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
      className={`${manrope.variable} ${bricolageGrotesque.variable} h-full antialiased dark scroll-smooth`}
    >
      <head>
        {/* <link
          rel="icon"
          href="/icons/512.png"
          type="image/png"
          sizes="512x512"
        /> */}
        <link
          rel="apple-touch-icon"
          href="/icons/apple-icon.png"
          type="image/png"
          sizes="760x760"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
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

function Footer() {
  return (
    <footer className="w-full bg-[#F2313E] text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img src="stol.png" alt="Okrągły Stół Logo" className="h-12 w-auto opacity-90 invert brightness-0 pointer-events-none" />
            </div>
            <p className="text-sm opacity-90 font-light">
              Partnerem wydarzenia jest Fundacja PZU
            </p>
          </div>
          <div className="flex flex-col space-y-8 text-sm">
            <div className="space-y-2">
              <Link href="https://umarlestatuty.pl/polityka-prywatnosci" className="block hover:underline opacity-90">
                Polityka prywatności
              </Link>
              <Link href="https://sus.org.pl/rodo" className="block hover:underline opacity-90">
                RODO
              </Link>
            </div>
            <div className="opacity-80 leading-relaxed pt-4">
              © {new Date().getFullYear()} Stowarzyszenie
              Umarłych Statutów
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end space-y-8">
            <a href="https://sus.org.pl" target="_blank" rel="noopener noreferrer" className="h-12 w-auto opacity-100 invert brightness-0">
              <img src="/sus-navbar.svg" alt="SUS Logo" className="h-full" />
            </a>
            <a href="https://pzu.pl" target="_blank" rel="noopener noreferrer" className="h-10 w-auto opacity-100 invert brightness-0">
              <img src="/pzu-navbar.svg" alt="PZU Logo" className="h-full" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}