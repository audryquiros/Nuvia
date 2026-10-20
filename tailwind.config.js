/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nuvia: {
          purple: '#7C3AED',
          deep: '#4C1D95',
          lilac: '#A78BFA',
          lavender: '#EDE9FE',
          ink: '#1F2937',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
