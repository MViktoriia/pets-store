/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      yellow: '#FFC54B',
      orange: '#FF9100',
      cyan: {
        light: '#68BBBB',
        DEFAULT: '#308D8D',
        dark: '#124B4B',
      },
      white: '#ffffff',
      black: '#000000',
      red: '#DD0000',
      gray: {
        light: '#d3dce6',
        extraLight: '#E6E6E7',
        DEFAULT: '3C3C3C',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        xl: '100px',
      },
    },
    fontFamily: {
      serif: ['var(--font-cormorant)'],
      sans: ['var(--font-montserrat)'],
    },
    fontSize: {
      base: ['16px', '1.4'],
      sm: ['12px', '1.4'],
    },
    content: {
      triangle: 'url("/icons/triangle.svg")',
      triangleMob: 'url("/icons/triangle-mobile.svg")',
    },
    extend: {},
  },
  plugins: [],
};
