const defaultTheme = require('tailwindcss/defaultTheme')

const colors = {
  'gray-darkest': '#222b34',
  'gray-darker': '#42505b',
  'gray-dark': '#8795a1',
  gray: '#b8c2cc',
  'gray-light': '#dae1e7',
  'gray-lighter': '#f1f5f8',
  'gray-lightest': '#f8fafc',

  'orange-darkest': '#462a16',
  'orange-darker': '#613b1f',
  'orange-dark': '#de751f',
  orange: '#f6993f',
  'orange-light': '#faad63',
  'orange-lighter': '#fcd9b6',
  'orange-lightest': '#fff5eb',

  'blue-darkest': '#12283a',
  'blue-darker': '#1c3d5a',
  'blue-dark': '#2779bd',
  blue: '#3490dc',
  'blue-light': '#68bdff',
  'blue-lighter': '#bcdefa',
  'blue-lightest': '#eff8ff',
}

let theme = {
  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },

  extend: {
    colors,
    fontFamily: {
      clean: ['montserrat', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      '4.75xl': '2.75rem',
      '7xl': '5rem',
    },
    borderWidth: {
      '0.5': '0.5px',
    },
  },
}

module.exports = {
  theme,
}
