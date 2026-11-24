/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Manrope", "sans-serif"],
      },
      colors: {
        ink: "#071713",
        forest: "#0d2921",
        lime: "#c6f36b",
        mist: "#edf2eb",
      },
      boxShadow: {
        glow: "0 0 80px rgba(198,243,107,.13)",
      },
    },
  },
  plugins: [],
};
