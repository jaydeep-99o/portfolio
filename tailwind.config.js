/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brgray: "var(--color-btn-light-bg)",
        brblue: "var(--color-accent)",
        // A function so opacity modifiers like bg-bg/85 compile against the
        // CSS-variable theme colour (a plain var() string silently drops them).
        bg: ({ opacityValue }) =>
          opacityValue === undefined || String(opacityValue).includes("--tw-")
            ? "var(--color-bg)"
            : `color-mix(in srgb, var(--color-bg) calc(${opacityValue} * 100%), transparent)`,
        "bg-alt": "var(--color-bg-alt)",
        fg: "var(--color-text)",
        "fg-muted": "var(--color-text-muted)",
        "fg-subtle": "var(--color-text-subtle)",
        accent: "var(--color-accent)",
        "accent-soft": "var(--color-accent-soft)",
        "theme-border": "var(--color-border)",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", "Inter", "sans-serif"],
      Inter: ["var(--font-inter)", "Inter", "sans-serif"],
      Aeonik: ["var(--font-inter)", "Inter", "sans-serif"],
      AeonikBold: ["var(--font-inter)", "Inter", "sans-serif"],
      AeonikMedium: ["var(--font-inter)", "Inter", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-3d")],
};
