/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Tailwind will scan all files inside src
    "./public/index.html"         // Optional: if you're referencing classes in index.html
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
   // Force only light mode
  
}

