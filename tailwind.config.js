/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: "#d1002c",
        semiTransparentBlack: "#000000cc",
        offWhite: "#f3f3f3",
        lightGrayishBlue: "#d9d9e1",
        desaturatedBlue: "#a0a0b4",
        translucentWhite: "#ffffff80",
      },
    },
  },
  plugins: [],
};
