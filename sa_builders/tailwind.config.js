/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/comps/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f7ae3b', 
      },
      animation: {
        'back-clr-change': 'bcc 5s linear infinite',
        'navbar': 'nav 2s ease-out 1 forwards'
      },
      keyframes: {
        'bcc': {
          '0%': {'background-position': '0 50%'},
          '100%': {'background-position': '100% 50%'},
        },
        'nav': {
          '0%' : {'top': '-100px'},
          '100%' : {'top': '0', 'animation-play-state': 'paused'}
        }
      }, 
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'sa': ['RobotoSA'],
      }
    }
  },
  plugins: [
    plugin(function({addUtilities}) {
      addUtilities({
        '.text-shadow': {
          'box-shadow' : '0 0 10px #f7ae3b'
        },
      })
    })
  ],
}
