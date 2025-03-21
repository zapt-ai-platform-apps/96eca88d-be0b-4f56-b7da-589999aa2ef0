export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#c2e0ff',
          200: '#99ccff',
          300: '#66b2ff',
          400: '#3399ff',
          500: '#0080ff',
          600: '#0066cc',
          700: '#0052a3',
          800: '#003d80',
          900: '#002952',
        },
        secondary: {
          50: '#f5e6ff',
          100: '#e5ccff',
          200: '#d699ff',
          300: '#c266ff',
          400: '#b84dff',
          500: '#a333ff',
          600: '#8c29cc',
          700: '#7021a3',
          800: '#55197a',
          900: '#3a1152',
        },
        background: {
          light: '#1a1a1a',
          DEFAULT: '#121212',
          dark: '#0a0a0a',
        },
        surface: {
          light: '#2a2a2a',
          DEFAULT: '#1e1e1e',
          dark: '#141414',
        },
        dark: {
          100: '#d5d5d5',
          200: '#ababab',
          300: '#808080',
          400: '#555555',
          500: '#2a2a2a',
          600: '#1e1e1e',
          700: '#141414',
          800: '#0a0a0a',
          900: '#050505',
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.5), 0 10px 20px -2px rgba(0, 0, 0, 0.25)',
        'fancy': '0 0 20px rgba(0, 0, 0, 0.5)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-out': 'slideOut 0.3s ease-in',
        'fade-in': 'fadeIn 0.3s ease-out',
        'bounce-in': 'bounceIn 0.5s',
        'scale': 'scale 0.3s ease-in-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideOut: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(20px)', opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '70%': { transform: 'scale(1.05)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};