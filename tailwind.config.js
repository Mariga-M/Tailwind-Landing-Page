/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen:{
      sm: '480px',
      md: '780px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightGreen: 'hsl(137, 88%, 59%)',
        brightGreenLight: 'hsl(137, 88%, 69%)',
        brightGreenSupLight: 'hsl(137, 88%, 95%)',
        darkPurple: 'hsl(275, 39%, 23%)',
        darkGrayishPurple: 'hsl(292, 12%, 61%)',
        veryDarkPurple: 'hsl(286, 12%, 13%)',
        veryPaleGreen: 'hsl(137, 100%, 96%)',
        veryLightPurple: 'hsl(346, 25%, 90%)'
      }
    },
  },
  plugins: [],
}

