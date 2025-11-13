export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
 extend: {
      colors: {
        primary: "#0f172a",
        accent: "#9333ea",
        neonGreen: "#22c55e",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};