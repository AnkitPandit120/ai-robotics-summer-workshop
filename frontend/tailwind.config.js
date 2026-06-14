/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kidrove: {
          orange: '#FF5E14',
          blue: '#2B66F6',
          pink: '#E91E63',
          yellow: '#FFC107',
          green: '#4CAF50',
          purple: '#9C27B0',
          dark: '#1E293B',
          lightBlue: '#F0F5FF'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
