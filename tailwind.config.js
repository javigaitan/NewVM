const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primaryVio: '#4B0077',
        secondaryTur: '#6EC1E4',
        secondaryTur2: '#61E5BE',
        colorText: '#707070',
      },
    },
  },
  variants: {},
  plugins: [],
});
