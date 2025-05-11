/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f9ff',
          100: '#ccf3ff',
          200: '#99e7ff',
          300: '#66dbff',
          400: '#33cfff',
          500: '#00E5FF', // Updated primary color
          600: '#00c2d9',
          700: '#00a8bf',
          800: '#008799',
          900: '#005c66',
        },
        secondary: {
          50: '#e6fff4',
          100: '#ccffe9',
          200: '#99ffd3',
          300: '#66ffbd',
          400: '#33ffa7',
          500: '#00FF8A', // Neon green
          600: '#00d975',
          700: '#00bf66',
          800: '#009952',
          900: '#006638',
        },
        dark: {
          400: '#4a4a4a',
          500: '#303030',
          600: '#242424',
          700: '#1a1a1a',
          800: '#171717',
          900: '#121212', // Near black
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'grid-pattern': "url('/src/assets/grid-pattern.svg')"
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};