"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Zakładam, że masz lucide-react

const navLinks = [
  { name: "O wydarzeniu", href: "/#o-wydarzeniu" },
  { name: "Rejestracja", href: "/#rejestracja" },
  { name: "Agenda", href: "/#agenda" },
  { name: "Do pobrania", href: "/#pobierz" },
  { name: "Kontakt", href: "/#kontakt", isButton: true },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b rounded-b-3xl border-gray-100">
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

          {/* Desktop Links (Widoczne od md:) */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={link.isButton 
                  ? "border border-gray-200 px-4 py-2 rounded-full hover:text-red-600 transition-colors" 
                  : "hover:text-red-600 transition-colors"
                }
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button (Widoczne tylko na mobile) */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Rozwijane) */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 pt-2 pb-6 space-y-4 bg-white border-t border-gray-50 rounded-b-3xl shadow-lg text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Zamknij menu po kliknięciu
              className="block text-lg font-medium text-gray-600 hover:text-red-600 py-2"
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