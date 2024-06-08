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
        'primary': 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        'secondary': 'var(--color-secondary)',
        'secondary-light': 'var(--color-secondary-light)',
        'secondary-dark': 'var(--color-secondary-dark)',
        'error': 'var(--color-error)',
        'error-light': 'var(--color-error-light)',
        'error-dark': 'var(--color-error-dark)',
        'success': 'var(--color-success)',
        'success-light': 'var(--color-success-light)',
        'success-dark': 'var(--color-success-dark)',
        'warning': 'var(--color-warning)',
        'warning-light': 'var(--color-warning-light)',
        'warning-dark': 'var(--color-warning-dark)',
        'info': 'var(--color-info)',
        'info-light': 'var(--color-info-light)',
        'info-dark': 'var(--color-info-dark)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwindcss-textshadow'),
    require('@tailwindcss/aspect-ratio')
  ],
};