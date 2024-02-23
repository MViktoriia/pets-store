/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
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
      serif: ['var(--font-crimson)'],
      sans: ['var(--font-montserrat)'],
    },
    extend: {
      spacing: {
        '93': '360px',
        '26': '6.25rem'
      }
    },
  },
  plugins: [],
};
