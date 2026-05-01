"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="transition-colors hover:text-[#F2313E] focus:outline-none"
    >
      {theme === "dark" ? <IoIosMoon className="h-6 w-6" /> : <IoIosSunny className="h-6 w-6" />}
    </button>
  );
}

export function ThemeToggleText() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <a
      suppressHydrationWarning
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`block text-lg font-medium py-3 ${theme === "dark" ? "text-gray-300" : "text-gray-700"} hover:text-[#F2313E] transition-all transform`}
    >
      {theme === "dark" ? "Zmień motyw na jasny" : "Zmień motyw na ciemny"}
    </a>
  );
}