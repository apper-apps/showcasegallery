/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'bottle-green': {
          50: '#f0f8f4',
          100: '#dbeee5',
          200: '#b9ddcd',
          300: '#8cc4ab',
          400: '#5da285',
          500: '#3d8266',
          600: '#2d5a3d',
          700: '#1b4332',
          800: '#15362a',
          900: '#112d22',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'skill-bar': 'skillBar 1.5s ease-out 0.5s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        skillBar: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--skill-width)' },
        }
      }
    },
  },
  plugins: [],
}