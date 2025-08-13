/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#fdf2e7',
          200: '#fbe6d1',
          300: '#f8d7b5',
          400: '#f4c291',
          500: '#efad6d',
          600: '#d2691e',
          700: '#8b4513',
          800: '#6b3410',
          900: '#4a2308',
        },
        secondary: {
          50: '#fef3f2',
          100: '#fee4e2',
          200: '#fecdd3',
          300: '#fdaab7',
          400: '#fb7c95',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be1237',
          800: '#9f1239',
          900: '#881337',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'display': ['Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.5s ease-in',
        'slideUp': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}