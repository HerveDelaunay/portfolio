/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors: {
      'cyan': '#5FB4A2',
      'blue': '#203A4C',
      'dark-blue': '#33323D',
      'light-grey': '#FAFAFA',
      'grey': '#EAEAEB',
      'red': '#F43030',
    },
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
      serif: ['Ibarra Real Nova', 'serif'],
    },
    extend: {
      backgroundImage: {
        'website-logo': "url('/Users/herve/Desktop/code/FrontendMentor/minimalist portfolio website/my portfolio website/src/assets/images/logo.svg')",
        'hamburger-icon': "url('/Users/herve/Desktop/code/FrontendMentor/minimalist portfolio website/my portfolio website/src/assets/images/icons/hamburger.svg')",
        'down-arrows': "url('/Users/herve/Desktop/code/FrontendMentor/minimalist portfolio website/my portfolio website/src/assets/images/icons/down-arrows.svg')",
      },
      width: {
        '15': '3.75rem',
        '38': '9.5rem'
      },
      height: {
        '3.75': '0.812rem',
      }
    },
    fontSize: {
      'h2': ['40px', {
        letterSpacing: '-0.36px',
        lineHeight: '42px',
      }],
    },
    
  },
  plugins: [],
}
