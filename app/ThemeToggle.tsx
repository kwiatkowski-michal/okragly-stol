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