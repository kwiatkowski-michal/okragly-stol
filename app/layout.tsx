import type { Metadata } from "next";
import Link from "next/link";
import { Manrope, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ogólnopolski Okrągły Stół ds. Strategii Młodzieżowej",
  description: "Pierwsze w Polsce od ponad 20 lat konsultacje na rzecz Krajowej Strategii Młodzieżowej. Twój głos ma realny wpływ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${manrope.variable} ${bricolageGrotesque.variable} h-full antialiased scroll-smooth scroll-pt-90`}
    >
      <body className="">
        <Navbar></Navbar>


        {children}
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
    return (
        <footer className="w-full bg-[#F2313E] text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Kolumna 1: Main Logo & Event Name */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              {/* Tutaj Twój szklany logotyp/ozdobnik */}
              <img src="stol.png" alt="Okrągły Stół Logo" className="h-12 w-auto opacity-90 invert brightness-0 pointer-events-none" />
            </div>
            <p className="text-sm opacity-90 font-light">
              Partnerem wydarzenia jest Fundacja PZU
            </p>
          </div>

          {/* Kolumna 2: Links & Copyright */}
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
             <div className="h-12 w-auto opacity-100 invert brightness-0 pointer-events-none">
                <img src="/sus-navbar.svg" alt="SUS Logo" className="h-full" />
             </div>
             <div className="h-10 w-auto opacity-100 invert brightness-0 pointer-events-none">
                <img src="/pzu-navbar.svg" alt="PZU Logo" className="h-full" />
             </div>
          </div>

        </div>
      </div>
    </footer>
    )
}