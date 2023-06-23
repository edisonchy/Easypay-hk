/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      keyframes: {
        'scale-loop': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        },
        'move-up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%' : {transform: 'translateY(5px)'}
        },
        'move-left': {
          '0%': { 'background-position': '0%'},
          '100%': { 'background-position': '400%'}
        },
        'pinging': {
          '75%, 100%': {
            transform: 'scale(1.3)',
            opacity:'0'
          },
        },
        'spinner': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        scale: 'scale-loop 2s ease-in-out infinite',
        move: 'move-up-down 1s linear infinite',
        left: 'move-left 8s linear infinite',
        pinger: 'pinging 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        spinny: 'spinner 3s linear infinite'
      },
      colors: {
        bloo: 'rgb(64, 71, 122, 0.92)',
        purp: 'rgb(43, 24, 69, 0.92)',
        purry: '#8b5cf6',
        litbloo: '#93c5fd',
        gree: '#68d391',
        pin: '#f687b3',
        pur: '#9333ea',
      },
      scale: {
        '120': '1.20',
      },
      spacing: {
        '150%': '150%',
      }
    },
  },
  plugins: [],
}
