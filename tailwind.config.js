/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sunset: '#F75959',
        stawmilk: '#F35587',
        bggray: '#F8F9FD',
        oldgry: '#9ca4b0'
      },
      keyframes: {
        onePulse: {
          '0%': {
            opacity: '0',
            color: '#F35587'
          }
        }
      },
      animation: {
        'one-pulse': 'onePulse 2s ease-in'
      }
    }
  },
  plugins: []
};
