/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6EE',
        'warm-white': '#FFFDF9',
        'soft-beige': '#F3EBDD',
        'pastel-pink': '#F8D7DA',
        'soft-pink': '#F2C4CE',
        'muted-brown': '#8C7A6B',
        'dark-brown': '#4A3B32',
        'accent-red': '#E65B65',
        'tape-yellow': 'rgba(243, 229, 171, 0.75)',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
        display: ['Fredoka', 'sans-serif'],
      },
      boxShadow: {
        'scrapbook': '0 8px 24px -4px rgba(74, 59, 50, 0.12), 0 2px 6px -1px rgba(74, 59, 50, 0.08)',
        'polaroid': '0 10px 20px rgba(0,0,0,0.08), 0 3px 6px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}