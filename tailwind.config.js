/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        "2xl": "992px",
      },
      colors: {
        main: "#17696A",
        secondary: "#1E212C",
        typography: "",
      },
    },
  },
  plugins: [],
};
