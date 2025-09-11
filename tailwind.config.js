/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ravaa-orange': '#FF8C00',
        'ravaa-blue': '#87CEEB',
        'ravaa-red': '#DC143C',
        'ravaa-cream': '#FFF8DC',
        'ravaa-brown': '#D2691E',
        'ravaa-dark': '#8B4513',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
