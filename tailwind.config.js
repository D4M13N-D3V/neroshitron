/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    extend: {
      textStrokeColor: {
        'black': '#000',
      },
      textStrokeWidth: {
        '1': '1px',
      },
      aspectRatio: {}, // enable aspect-ratio plugin
      textShadow: {
        'pink-glow': '0 0 4px #524FFD, 0 0 4px #524FFD, 0 0 4px #524FFD, 0 0 4px #524FFD',
        'purple-grey-glow': '0 0 4px #9f7aea, 0 0 15px #9f7aea, 0 0 20px #9f7aea, 0 0 25px #9f7aea',
        'green-grey-glow': '0 0 4px #32CD32, 0 0 15px #32CD32, 0 0 20px #32CD32, 0 0 25px #32CD32',
      },
      colors: {
        
        "neroshi-blue": {
          50: "#EBEBFF",
          100: "#D2D2FE",
          200: "#A6A4FE",
          300: "#7E7CFD",
          400: "#524FFD",
          500: "#2522FC",
          600: "#0703E2",
          700: "#0502AB",
          800: "#03026F",
          900: "#020137",
          950: "#01001E"
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwindcss-textshadow'),
    require('@tailwindcss/aspect-ratio')
  ],
};
