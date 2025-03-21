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
          light: '#1e1e2e',
          DEFAULT: '#181825',
          dark: '#11111b',
        },
        surface: {
          light: '#2d2d3d',
          DEFAULT: '#242434',
          dark: '#1a1a27',
        },
        dark: {
          100: '#d5d5d5',
          200: '#ababab',
          300: '#808080',
          400: '#555555',
          500: '#2d2d3d',
          600: '#242434',
          700: '#1a1a27',
          800: '#11111b',
          900: '#08080f',
        },
      },
      boxShadow: {
        'soft': '0 4px 20px -3px rgba(0, 0, 0, 0.3), 0 8px 16px -4px rgba(0, 0, 0, 0.2)',
        'fancy': '0 0 25px rgba(0, 0, 0, 0.3), 0 10px 15px -5px rgba(0, 0, 0, 0.2)',
        'inner-glow': 'inset 0 2px 6px 0 rgba(0, 0, 0, 0.2)',
        'glow': '0 0 15px rgba(51, 153, 255, 0.3)',
        'button': '0 2px 5px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-out': 'slideOut 0.3s ease-in',
        'fade-in': 'fadeIn 0.3s ease-out',
        'bounce-in': 'bounceIn 0.5s',
        'scale': 'scale 0.3s ease-in-out',
        'pulse-subtle': 'pulseSubtle 2s infinite',
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
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '70%': { transform: 'scale(1.03)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.97)' },
          '100%': { transform: 'scale(1)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.85 },
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};