// @type {import('tailwindcss').Config}
export default {
  content: [
    './components/**/*.{html,jsx}',
    './pages/**/*.{html,jsx}',
    './index.html',
    '../src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens:{
      'sm': {'max': '576px'},
      'lg': {'min': '768px'}
    },
    fontFamily:{
      display: ['Abril Fatface'],
      body: ['Domine']
    },
    extend: {
    },
  },
  plugins: [],
}