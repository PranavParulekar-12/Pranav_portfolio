/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        gtaGlow: "gtaGlow 8s ease-in-out infinite",
      },
      keyframes: {
        gtaGlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.4" },
          "50%": { transform: "scale(1.2)", opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
