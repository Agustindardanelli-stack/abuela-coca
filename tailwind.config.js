/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Borgoña profundo (fondo de la página) + rosa chicle (el rosa del logo de la abuela)
        // + papel hueso para las fichas impresas. Dos tintas sobre un color de papel.
        wine: { DEFAULT: '#3a0414', 700: '#4c0a1f', soft: '#8a4a5c' },
        pink: { DEFAULT: '#ff8fc9', light: '#ffb3db', soft: '#d79cb6' },
        paper: { DEFAULT: '#f5ebea', dim: '#e9dbda' },
      },
      fontFamily: {
        sans: ['var(--font-display)', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      maxWidth: { site: '76rem' },
    },
  },
  plugins: [],
}
