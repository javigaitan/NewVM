/** @type {import('tailwindcss').Config} */
export default {
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
}

