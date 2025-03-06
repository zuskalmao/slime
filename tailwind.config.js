/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slime: {
          300: '#3aff96',
          400: '#0aff7a',
          500: '#00d65e',
        },
      },
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'slime-radial': 'radial-gradient(circle at center, rgba(10, 255, 122, 0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
