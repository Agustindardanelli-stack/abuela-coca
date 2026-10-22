/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Paleta de marca: crema de panadería, marrón tostado y el rosa del logo de la abuela
        cream: { DEFAULT: '#FBF6EE', 100: '#F6EDE0', 200: '#EADBC6' },
        ink: { DEFAULT: '#2B1A0F', 700: '#4A3222', 500: '#76604F', 300: '#B9A795' },
        brand: { DEFAULT: '#B4561C', dark: '#8F4113', light: '#F5E4D3' },
        blush: { DEFAULT: '#F1C5C8', dark: '#D9939A' },
        // Escala anterior (compatibilidad)
        primary: {
          50: '#fef7f0', 100: '#fdf2e7', 200: '#fbe6d1', 300: '#f8d7b5', 400: '#f4c291',
          500: '#efad6d', 600: '#d2691e', 700: '#8b4513', 800: '#6b3410', 900: '#4a2308',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      maxWidth: { site: '76rem' },
    },
  },
  plugins: [],
}
