/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          brand: '#6B9C1F',
          dark: '#4A6B10',
          light: '#8AB82E',
        },
        gold: {
          brand: '#E8A800',
          dark: '#C08A00',
          light: '#F5C842',
        },
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
