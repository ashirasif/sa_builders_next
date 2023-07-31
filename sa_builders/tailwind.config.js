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
        'navbar': 'nav 2s ease-out 1 forwards',
        'white-glow' : 'glow-sync 3s ease-in-out infinite',
        'text-center' : 'text-center 2s ease-in-out 1 forwards',
        'text-btm' : 'text-btm 2s ease-out 1 forwards 3s'
      },
      keyframes: {
        'bcc': {
          '0%': {'background-position': '0 50%'},
          '100%': {'background-position': '100% 50%'},
        },
        'nav': {
          '0%' : {'top': '-100px'},
          '100%' : {'top': '0', 'animation-play-state': 'paused'}
        },
        'glow-sync' : {
          '0% 100%' : {'text-shadow': '0 0 0px #ffffff'},
          '50%': {'text-shadow': '0 0 50px #ffffff'}
        },
        'text-center': {
          '0%': {'position':'relative', 'top':'-100%'},
          '100%' : {'position':'relative', 'top':'10%'}
        },
        'text-btm': {
          '0%' : {'postion':'relative', 'bottom': '-100%'},
          '100%': {'position': 'relative', 'bottom': '-10%'}
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
        '.text-shadow-primary': {
          'text-shadow' : '0 0 10px #f7ae3b'
        },
        '.text-shadow-white': {
          'text-shadow' : '0 0 50px #ffffff'
        },

      })
    })
  ],
}
