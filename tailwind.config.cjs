/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        "pr-soft-blue": "hsl(231, 69%, 60%)",
        "pr-soft-red": "hsl(0, 94%, 66%)",
        "nt-grayish-blue": "hsl(229, 8%, 60%)",
        "nt-dark-blue": "hsl(229, 31%, 21%)"
      },
      fontFamily: {
        "rubik": ["Rubik", "sans-serif"],
      }
    },
  },
  plugins: [],
}
