/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      }
    },
    extend: {
      fontFamily: {
        notosans: ['Noto Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },

      animation: {
        'gradient-y': 'gradient-y 20s ease infinite',
        'gradient-x': 'gradient-x 20s ease infinite',
      },

      keyframes: {
        'gradient-x': {
          '0%': {
            'background-size': '600% 600%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '600% 600%',
            'background-position': 'right center'
          }, 
          '100%': {
            'background-size': '600% 600%',
            'background-position': 'left right'
          },
        },
        'gradient-y': {
          '0%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': 'right left'
          },
        }
      },

      colors: {
        'eb-orange': '#FF7F50',
        'eb-green': '#424530',
        'eb-light-yellow': '#FFEFCD',
        'eb-brown': '#8B4513',
        'eb-light-brown': '#A58E74',
        'eb-dark-grey': '#333333',
        'eb-yellow': '#DAA520',
      },
    },
  },
  plugins: [],
}

