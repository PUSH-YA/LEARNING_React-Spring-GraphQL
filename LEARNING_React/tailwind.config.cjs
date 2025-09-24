// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // <-- use class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // scan your React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
