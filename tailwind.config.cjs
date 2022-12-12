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
        "todo-dark": "hsl(237, 14%, 26%)",
        "todo-light": "hsl(0, 0%, 98%)",
        "circle-light": "hsl(236, 33%, 92%)",
        "circle-dark": "hsl(233, 14%, 35%)",
        "line-through": "hsl(233, 11%, 84%)",
        "dark-grayish-blue": "hsl(236, 9%, 61%)",
        "todo-text": "hsl(235, 19%, 35%)",
        "todo-text-dark": "hsl(234, 39%, 85%)",
        "todo-text-hover-dark": "hsl(236, 33%, 92%)",

        "very-dark-blue": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "line-through-dark": "hsl(234, 11%, 52%)",
      },
      backgroundImage: {
        "checked":
          "url('./src/images/icon-check.svg'), linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
      },
    },
    letterSpacing: {
      "widest": "0.8rem",
    },
  },
  plugins: [],
};
