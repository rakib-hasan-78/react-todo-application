/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './*.{html,js}', 
    './src/**/*.{js,jsx}'
  ],
  screens: {
    'xs': '320px', // Extra small (your custom sm)
    sm: '375px', // Example: slightly larger phone
    md: '768px', // Typical tablet
    lg: '1024px', // Typical laptop
    xl: '1280px', // Large desktop
    '2xl': '1536px',
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}