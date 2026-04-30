"use client"; // Konieczne do obsługi hooków

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b rounded-b-3xl border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <a href="/">
              <div className="flex items-center gap-2">
                <img src="/sus-navbar.svg" alt="SUS Logo" className="h-10 object-contain" />
                <div className="p-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 shrink-0 text-[#FF4D4D]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
                <img src="/pzu-navbar.svg" alt="PZU Logo" className="h-10 object-contain" />
              </div>
            </a>
          </div>

          {/* Logika dla Linków: Strona Główna vs Pozostałe */}
<div className="hidden md:flex items-center">
  {isHomePage ? (
    /* Linki widoczne tylko na HOME */
    <div id="nav-links" className="flex items-center space-x-8 text-sm font-medium text-gray-600">
      <a href="#o-wydarzeniu" className="hover:text-red-600 transition-colors">O wydarzeniu</a>
      <a href="#rejestracja" className="hover:text-red-600 transition-colors">Rejestracja</a>
      <a href="#agenda" className="hover:text-red-600 transition-colors">Agenda</a>
      <a href="#pobierz" className="hover:text-red-600 transition-colors">Do pobrania</a>
      <a href="#kontakt" className="hover:text-red-600 transition-colors border border-gray-200 px-4 py-2 rounded-full">Kontakt</a>
    </div>
  ) : (
    /* Przycisk powrotu widoczny na wszystkich innych stronach */
    <Link 
      href="/" 
      className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors group"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-4 w-4 transition-transform group-hover:-translate-x-1" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Wróć do strony głównej
    </Link>
  )}
</div>
        </div>
      </div>
    </nav>
  );
}