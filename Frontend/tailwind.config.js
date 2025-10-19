/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors:{
        coffee:{
            light: "#f5f2ed",
            medium: "#b08968",
            dark: "#6f4e37",
            deep: "#2c1810",
        }
      }
    },
  },
  plugins: [],
}

