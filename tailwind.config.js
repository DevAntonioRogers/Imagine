/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '2-cols': 'repeat(2, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}