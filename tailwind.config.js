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
        ligthMax: '#E8E8E8',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        xl: '100px',
      },
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      md: '10px',
      lg: '0.5rem',
      xl: '20px',
      full: '9999px',
      large: '12px',
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
    extend: {
      spacing: {
        '93': '360px',
        '92': '343px',
        '26': '6.25rem',
        '29': '115.2px'
      }

    },
  },
  plugins: [],
};
