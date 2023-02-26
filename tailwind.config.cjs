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
      },
      padding: {
        "32-170": "clamp(2rem, -1.037rem + 12.96vw, 10.625rem)",
      },
      fontSize: {
        "16-18": "clamp(1rem, 0.96rem + 0.19vw, 1.125rem)",
      }
    },
  },
  plugins: [],
}
