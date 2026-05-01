"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { IoIosClose, IoIosMenu } from 'react-icons/io';
import { ThemeToggle, ThemeToggleText } from './ThemeToggle';
import { useTheme } from 'next-themes';

const navLinks = [
  { name: "O wydarzeniu", href: "/#o-wydarzeniu" },
  { name: "Rejestracja", href: "/#rejestracja" },
  { name: "Agenda", href: "/#agenda" },
  { name: "Do pobrania", href: "/#pobierz" },
  { name: "Kontakt", href: "/#kontakt" },
];

function NavBar() {
  const { theme, setTheme } = useTheme();
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
          ${isVisible ? "translate-y-0" : "-translate-y-[150%]"} 
        `}
      >
        <div className={`
          w-full max-w-7xl 
          ${theme === "dark" ? "bg-gray-800/50 border-black/20" : " bg-white/50 border-white/20"} backdrop-blur-sm 
          border 
          shadow-xl/3
          transition-all duration-500 ease-in-out
          rounded-t-[3rem]
          ${isOpen ? 'rounded-b-[2rem]' : 'rounded-b-[3rem]'} 
        `}>
          
          <div className="px-6 lg:px-10">
            <div className="flex justify-between items-center h-16 lg:h-20">
              <div className="flex items-center gap-4">
                <Link href="/" className="flex items-center gap-2">
                  {theme === "light" ? ( <img src="/sus-navbar.svg" alt="SUS Logo" className="h-8 lg:h-10 object-contain" /> ) : (
                    <img src="/sus-navbar-white.svg" alt="SUS Logo" className="h-8 lg:h-10 object-contain" />
                  )}
                  <div className="px-1 text-[#FF4D4D]">
                    <X size={16} />
                  </div>
                  {theme === "light" ? ( <img src="/pzu-navbar.svg" alt="PZU Logo" className="h-8 lg:h-10 object-contain" /> ) : (
                    <img src="/pzu-navbar-white.svg" alt="PZU Logo" className="h-8 lg:h-10 object-contain" />
                  )}
                </Link>
              </div>

              <div className='hidden lg:flex items-center space-x-8 text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}'>
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="hover:text-[#F2313E] transition-colors">
                    {link.name}
                  </Link>
                ))}
                <ThemeToggle />
              </div>

              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className='${theme === "dark" ? "text-gray-300" : "text-gray-700"} p-2 focus:outline-none transition-transform active:scale-90'
                >
                  {isOpen ? <IoIosClose size={35} /> : <IoIosMenu size={28} />}
                </button>
              </div>
            </div>
          </div>

          <div
            className={`
              lg:hidden grid transition-all duration-500 ease-in-out
              ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
            `}
          >
            <div className="overflow-hidden">
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
                      block text-lg font-medium py-3 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
                      hover:text-[#F2313E] transition-all transform
                      ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                    `}
                  >
                    {link.name}
                    
                  </Link>
                ))}
                <ThemeToggleText />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;