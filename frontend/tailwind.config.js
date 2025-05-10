/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        verdeMate: '#99B898',
        crema:    '#FECEA8',
        coral:    '#FF847C',
        coralDark: '#E84A5F',
        rojoMate: '#E84A5F',
        carbon:   '#2A363B',
        gris: '#F0F0F0',
        grisOscuro: '#2E2E2E',
        azulPetroleo: '#52796F',
        azulPetroleoHover: '#3f5f58',
      },
      fontFamily: {
        cursiva: ['Satisfy', 'cursive'],
        quicksand: ['Quicksand', 'sands-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 0.7s ease-in-out forwards',
      },
      keyframes: {
        'gradient-x': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
