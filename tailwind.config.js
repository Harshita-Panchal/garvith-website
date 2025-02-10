/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "desktop": "1920px"
    },
    extend: {
      fontFamily: {
        sahitya: ['Sahitya'],
      },
      colors: {
        "red-warm": "#C30E59",
        "orange-peel": "#FF9C00",
        "secondary-orange": "#f9ae65",
        "primary-blue": "#256882",
        "light-gray": "#E1E4EB",
        "brownish-gray":"#4D4542", 
        "deep-blue": "#003372",
        "bright-red": "#F53333"
      }
    },
  },
  plugins: [],
}

