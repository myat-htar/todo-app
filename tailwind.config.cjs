/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "primary": ["Josefin Sans", "sans-serif"],
      },
      colors: {
        "footer": "hsl(228, 45%, 44%)",
        "heading": "hsl(0, 0%, 98%)",
      },
      backgroundColor: {
        "todo-dark": "hsl(237, 14%, 26%)",
        "todo-light": "hsl(0, 0%, 98%)",
      },
    },
    letterSpacing: {
      "widest": "0.8rem",
    },
  },
  plugins: [],
};
