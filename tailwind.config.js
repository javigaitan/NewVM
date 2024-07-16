const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ['Gilroy', 'sans-serif'],
    },
    extend: {
      colors: {
        primaryVio: '#60007F',
        secondaryTur: '#00E2B8',
        secondaryTur2: '#70ED00',
        colorText: '#606060',
        colorWhite: '#FFFFFF', 
      },
    },
  },
  variants: {},
  plugins: [],
});
