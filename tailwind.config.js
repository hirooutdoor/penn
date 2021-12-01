module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
      },
      colors: {
        'penn-green': '#00B6B9',
        'penn-lightGreen': '#00FFF0',
        'penn-darkGreen': '#008E90',
        'penn-gray': '#788292',
        'penn-dark': '#203758',
        'penn-light': '#9EA7B6',
        'penn-darkGray': '#0D1117',
      },
      fontSize: {
        tiny: '.5rem',
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      backgroundImage: {
        'login-pattern': "url('/city-highway.svg')",
        'signin-pattern': "url('/city.svg')",
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-down': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
      },
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
      Ubuntu: ['Ubuntu, sans-serif'],
    },
    container: {
      height: '100%',
      center: true,
      padding: '8rem',
      screens: {
        lg: '2824px',
        xl: '2824px',
        '2xl': '2824px',
      },
    },
  },
  variants: {
    extend: { backgroundColor: ['active'], fontColor: ['active'] },
  },
  plugins: [],
};
