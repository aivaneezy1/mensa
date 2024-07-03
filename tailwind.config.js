/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#3f4181",
        secondary:"#eef1f2",
        third:"#395a86",
        blueDaki: " #dee4eb",
        darkBrown: "#5D4037",
        darkGrey: "#333333",
        navyBlue: "#000080",
        teal: "#008080",
        black: "#000000",
        charcoal: "#36454F",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
