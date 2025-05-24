/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryYellow: '#FBBF24', // warm yellow
        secondaryGrey: '#6B7280', // medium grey
        lightGrey: '#F3F4F6',     // light grey background
        darkGrey: '#374151',      // dark text
      },
    },
  },
  plugins: [],
}
