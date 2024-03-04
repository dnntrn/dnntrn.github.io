/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      poppins: ['var(--font-poppins)'],
      lato: ['var(--font-lato)'],
      higuen: ['var(--font-higuen)'],
      commons: ['var(--font-commons)'],
    },
  },
  plugins: [],
}