/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: "#c4f542",
          dim: "#9fcc2e",
          glow: "#d4ff4d",
        },
        ink: {
          DEFAULT: "#050505",
          card: "#0d0d0d",
          muted: "#141414",
        },
      },
      fontFamily: {
        display: ["Bebas Neue", "Impact", "sans-serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,5,5,0.2), #050505), linear-gradient(rgba(196,245,66,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(196,245,66,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
