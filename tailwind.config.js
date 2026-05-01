// module.exports = {
//   theme: {
//     extend: {
//       backdropBlur: {
//         xs: '2px',
//       }
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Włącza przełączanie motywu za pomocą klasy "dark"
  darkMode: 'class', 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Definiujemy własne nazwy kolorów mapowane na zmienne CSS
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
};