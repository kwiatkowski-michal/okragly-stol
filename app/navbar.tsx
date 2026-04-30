"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: "O wydarzeniu", href: "/#o-wydarzeniu" },
  { name: "Rejestracja", href: "/#rejestracja" },
  { name: "Agenda", href: "/#agenda" },
  { name: "Do pobrania", href: "/#pobierz" },
  { name: "Kontakt", href: "/#kontakt" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Główny kontener z efektem szkła
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-white/20 rounded-b-3xl shadow-sm/1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <div className="flex items-center gap-2">
                <img src="/sus-navbar.svg" alt="SUS Logo" className="h-10 object-contain" />
                <div className="p-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-[#FF4D4D]" fill="none">
                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                  </svg>
                </div>
                <img src="/pzu-navbar.svg" alt="PZU Logo" className="h-10 object-contain" />
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-12 text-sm font-medium text-gray-600 border border-gray-100 px-6 py-3 rounded-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-red-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2 focus:outline-none transition-transform active:scale-90"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Rozwijane - Full Glass) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out 
        ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        {/* Usunięto solidne tło bg-white/80 na rzecz bg-transparent, 
            ponieważ tło i blur są już na nadrzędnym elemencie <nav> */}
        <div className="px-4 pt-2 pb-8 space-y-2 text-center border-t border-white/20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-semibold py-4 text-gray-700 hover:text-red-600 transition-all active:bg-white/20 rounded-xl"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;