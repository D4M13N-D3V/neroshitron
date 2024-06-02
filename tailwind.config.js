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
        // 'pink-glow': '0 0 4px #524FFD, 0 0 4px #524FFD, 0 0 4px #524FFD, 0 0 4px #524FFD',
      },
      colors: {
        'primary': '#201240',
        'primary-light': '#403260',
        'primary-dark': '#100120',
        'secondary': '#4F3D70',
        'secondary-light': '#6F5D90',
        'secondary-dark': '#2F1D50',
        'free': '#04396F',
        'free-light': '#04396F',
        'free-dark': '#001A35',
        'tier1': '#006197',
        'tier1-light': '#006197',
        'tier1-dark': '#003D5E',
        'tier2': '#008BB3',
        'tier2-light': '#4AC8E1',
        'tier2-dark': '#005F7A',
        'tier3': '#00B5C0',
        'tier3-light': '#6CE2E8',
        'tier3-dark': '#008B94',
        'error': '#862117',
        'error-light': '#C44C4C',
        'error-dark': '#5C0D0D',
        'success': '#00C9A6',
        'success-light': '#20E9C6',
        'success-dark': '#00A986',
        'warning': '#E17558',
        'warning-light': '#E39578',
        'warning-dark': '#C15538',
        'info': '#222140',
        'info-light': '#424260',
        'info-dark': '#020120',
        'neutral': '#78639A',
        'neutral-light': '#9883BA',
        'neutral-dark': '#58427A',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwindcss-textshadow'),
    require('@tailwindcss/aspect-ratio')
  ],
};