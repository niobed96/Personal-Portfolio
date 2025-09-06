/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "Sans-serif"],
        Inter: ["inter", "Sans-serif"],
      },
      height: {
        hlv: ["400px"],
      },
    },
  },
  plugins: [],
};
