/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'purple-grey-glow': '0 0 8px #9f7aea, 0 0 15px #9f7aea, 0 0 20px #9f7aea, 0 0 25px #9f7aea',
            },
      colors: {
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
    require('tailwindcss-textshadow')
  ],
};
