/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens:{
        xs:"480px",
        smd:"700px",
        xmd:"914px",
      },
    },
  },
  plugins: [],
}

