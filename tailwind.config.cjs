/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Orbitron"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(255, 77, 77, 0.35), 0 10px 40px rgba(255, 77, 77, 0.18)',
      },
      colors: {
        brand: {
          50: '#fff2f2',
          100: '#ffd7d7',
          200: '#ffadad',
          300: '#ff7d7d',
          400: '#ff5252',
          500: '#ff4d4d',
          600: '#ea3434',
          700: '#c52121',
          800: '#921919',
          900: '#5c1111',
        },
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.16) 1px, transparent 0)',
        'hero-sheen': 'radial-gradient(circle at 20% 20%, rgba(255,77,77,0.24), transparent 30%), radial-gradient(circle at 85% 10%, rgba(71, 136, 255, 0.2), transparent 26%)',
      },
    },
  },
  plugins: [],
};