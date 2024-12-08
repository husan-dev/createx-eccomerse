/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: "456px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": 0,
      },
      colors: {
        main: "#17696A",
        secondary: "#1E212C",
      },
    },
    container: {
      center: true,
      padding: "20px",
    },
  },
  plugins: [],
};
