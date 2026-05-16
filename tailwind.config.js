/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0E0C0A",
          surface: "#15110E",
          "surface-2": "#1C1814",
          fg: "#ECE6DC",
          "fg-mute": "#9A8E7A",
          "fg-dim": "#5A5046",
          accent: "#D4A574",
          "accent-soft": "rgba(212,165,116,0.12)",
          border: "rgba(236,230,220,0.08)",
        },
      },
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: [
          "Instrument Serif",
          "Cormorant Garamond",
          "Georgia",
          "serif",
        ],
        mono: [
          "Geist Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
