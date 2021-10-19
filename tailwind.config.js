module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'sm': '500px',
        'md': '700px',
      },
      maxHeight: {
        '1/2': '50vh',
        '1/3': '30vh',
        '1/4': '25vh',
        '3/4': '75vh',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
 }
