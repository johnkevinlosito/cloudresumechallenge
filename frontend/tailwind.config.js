/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      print: { "raw": "print" },
      xsm: "500px",
      sm: "640px",
      md: "833px",
      lg: "1079.5px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        "firasans": ['"Fira Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#4468b1'
      },
      fontSize: {
        sm2: "0.9375rem",
        base: "1rem",
        md: "1.0625rem",
        lg: "1.125rem",
      },
      lineHeight: {
        snugish: "1.32",
        normal: "1.34",
      },
      maxWidth: {
        "letter": "66.40625rem",
      },
      height: {
        "letter": "85.9375rem",
        "letter-col": "72.22rem",
        "letter-col-full": "77.9375rem",
      },
      spacing: {
        "0.5": "2px",
        "1.5": "0.375rem",
        "1.6": "0.4375rem",
        "2.1": "0.5625rem",
        "2.5": "10px",
        "3.2": "0.8125rem",
        "4.5": "1.125rem",
        "11": "2.75rem",
      },
    },
  },
  plugins: [],
}

