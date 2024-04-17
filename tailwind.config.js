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
        backdrop: 'rgba(18, 75, 75, 0.7)',
      },
      white: '#ffffff',
      black: '#000000',
      red: '#DD0000',
      gray: {
        light: '#d3dce6',
        extraLight: '#E6E6E7',
        DEFAULT: '#3C3C3C',
        ligthMax: '#E8E8E8',
      },
      transparent: 'transparent',
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
      xxl: '40px',
      full: '9999px',
      large: '12px',
    },
    fontFamily: {
      serif: ['var(--font-cormorant)'],
      sans: ['var(--font-montserrat)'],
      crimson: ['var(--font-crimson)'],
      inter: ['var(--font-inter)'],
    },
    fontSize: {
      xxl: ['48px', '1.4'],
      xlMob: ['40px', '1.4'],
      xl: ['36px', '1.4'],
      lg: ['24px', '1.4'],
      mdDesc: ['20px', '1.4'],
      mdLiNav: ['22px', '1.4'],
      md: ['18px', '1.4'],
      base: ['16px', '1.4'],
      baseM: ['16px', '22.4px'],
      sm: ['14px', '1.4'],
      xs: ['12px', '1.4'],
    },
    content: {
      triangle: 'url("/icons/triangle.svg")',
      triangleMob: 'url("/icons/triangle-mobile.svg")',
      deliveryCheck: 'url("/icons/check-icon.svg")',
      deliveryCar: 'url("/icons/car-delivery.svg")',
      quotes: 'url("/icons/quotes-reviews.svg")',
    },
    extend: {
      spacing: {
        93: '360px',
        92: '343px',
        26: '6.25rem',
        29: '115.2px',
        97: '480px',
        34: '136px',
        63: '250px'
      },
      backgroundImage: {
        salesBanerImage: "url('/images/dog-banner-sales-2x.png')",
        salesBanerMobileImage: "url('/images/dog-banner-sales-mobile-2x.png')",
      },
    },
  },
  plugins: [],
};
