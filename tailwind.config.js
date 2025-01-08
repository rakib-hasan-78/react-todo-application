/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './*.{html,js}', 
    './src/**/*.{js,jsx}'
  ],
  screens:{
    sm:'480px',
    md:'767px',
    lg:'1020px',
    xl:'1440px'
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}