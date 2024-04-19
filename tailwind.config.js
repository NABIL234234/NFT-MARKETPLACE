/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      rd: '350px',
      smm: '400px',
      sm: '640px',
      mdd: '770px',
      md: '880px',
      lgg: '995px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1560px'
    },
    extend: {},
  },
  plugins: [],
}

