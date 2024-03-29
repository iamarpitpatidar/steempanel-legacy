const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  purge: [
    './src/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          350: '#B7BCC5'
        },
        blueGray: colors.blueGray,
        light: {
          50: '#EFF6FF'
        },
        steem: {
          1: '#171fc9',
          2: '#11a7f2',
          3: '#5f00de'
        },
        discord: {
          1: '#7289DA'
        }
      },
      fontFamily: {
        sans: ['Cairo', ...defaultTheme.fontFamily.sans]
      },
      maxHeight: {
        unset: 'unset'
      }
    }
  }
}
