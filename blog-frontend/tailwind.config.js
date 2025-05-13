/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
    extend: {
      colors: {
        playground: {
          50: 'oklch(97.7% 0.023 35.4)',
          100: 'oklch(84.6% 0.078 31.7)',
          200: 'oklch(70.5% 0.135 29.5)',
          300: 'oklch(57.8% 0.153 27.8)',
          400: 'oklch(45.8% 0.165 26.3)',
          500: 'oklch(32.7% 0.181 24.5)',
          600: 'oklch(30.3% 0.205 22.9)',
          700: 'oklch(24.5% 0.228 21.5)',
          800: 'oklch(19.4% 0.249 20.0)',
          900: 'oklch(14.3% 0.268 18.5)',
        },
      },
    },
  },
  plugins: [],
}

