module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
        'kaushan': ['Kaushan Script', 'cursive'],
    },
    extend: {
      colors: {
        orange: {
          DEFAULT: '#ff9f1c',
        },
      },
    },
  },
  plugins: [],
}
