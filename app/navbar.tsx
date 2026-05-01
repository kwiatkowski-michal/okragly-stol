"use client";

import { useState, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
          setIsOpen(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <div className="h-24 lg:h-32" />

      <nav 
        className={`
          fixed top-6 left-0 right-0 z-50 flex justify-center px-4
          transition-all duration-500 ease-in-out
          ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        <div className={`
          w-full max-w-7xl 
          bg-white/60 backdrop-blur-sm 
          border border-white/20 
          shadow-xl/3
          transition-all duration-500 ease-in-out
          ${isOpen ? 'rounded-[2rem]' : 'rounded-[3rem]'} 
        `}>
          
          {/* Header: Logo + Toggle - Stała wysokość zapobiega drżeniu */}
          <div className="px-6 lg:px-10">
            <div className="flex justify-between items-center h-16 lg:h-20">
              <div className="flex items-center gap-4">
                <Link href="/" className="flex items-center gap-2">
                  <img src="/sus-navbar.svg" alt="SUS Logo" className="h-8 lg:h-10 object-contain" />
                  <div className="px-1 text-[#FF4D4D]">
                    <X size={16} />
                  </div>
                  <img src="/pzu-navbar.svg" alt="PZU Logo" className="h-8 lg:h-10 object-contain" />
                </Link>
              </div>

              <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-gray-700">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="hover:text-red-600 transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>

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

          {/* Wrapper Grid dla idealnie gładkiej animacji wysokości */}
          <div
            className={`
              lg:hidden grid transition-all duration-500 ease-in-out
              ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
            `}
          >
            <div className="overflow-hidden">
              {/* Tutaj dajemy padding i border, żeby nie wpływały na wysokość w trakcie zamykania */}
              <div className="px-8 py-6 space-y-2 border-t border-gray-100/50 mx-6">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{ 
                        transitionDelay: isOpen ? `${index * 40}ms` : '0ms',
                    }}
                    className={`
                      block text-lg font-medium py-3 text-gray-700 
                      hover:text-red-600 transition-all transform
                      ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                    `}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;