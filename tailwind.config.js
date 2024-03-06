/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        't-mobile': '#CE005C',
        'dusty-pink': '#dd838e',
        'white-transparent': 'rgba(255,255,255,.2)',
        'white-transparent-3': 'rgba(255,255,255,.3)',
      },
      boxShadow: {
        around: '0 1rem 3rem rgba(0,0,0,.175)',
      },
      borderRadius: {
        '4xl': '3.125rem',
      }
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      poppins: ['var(--font-poppins)'],
      lato: ['var(--font-lato)'],
      higuen: ['var(--font-higuen)'],
      brittany: ['var(--font-brittany)']
    },
    
  },
  plugins: [],
}