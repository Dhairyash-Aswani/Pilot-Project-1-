/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // include TypeScript if used in future
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4B2B', // custom brand red
      },
      spacing: {
        64: '16rem', // used for sidebar width
      },
    },
  },
  plugins: [],
}
