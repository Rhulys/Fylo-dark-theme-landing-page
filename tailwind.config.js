/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Dark_Blue-1" : "hsl(217, 28%, 15%)",
        "Dark_Blue-2" : "hsl(218, 28%, 13%)",
        "Dark_Blue-3" : "hsl(216, 53%, 9%)",
        "Dark_Blue-4" : "hsl(219, 30%, 18%)",
        "Cyan" : "hsl(176, 68%, 64%)",
        "Blue" : "hsl(198, 60%, 50%)",
        "Light_Red" : "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        "Raleway" : "Raleway",
        "OpenSans" : "Open Sans"
      }
    },
  },
  plugins: [],
}