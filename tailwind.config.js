/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {DEFAULT:"#F2902F", red: "#8B2024"}
      }
    },
  },
  plugins: [],
}