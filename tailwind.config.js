/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#03A9F4",
        error: "#F44336",
        black: "#000000",
        orange: "#FFB74D",
        green: "#4CAF50",
        purple: "#F2E9FF",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
