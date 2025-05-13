/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Ensures dark mode applies via class, not system settings
  theme: {
    extend: {
      colors: {
        'primary': '#FF9900', // AWS Orange
        'secondary': '#EC7211', // AWS Secondary Orange
        'accent': '#00A1C9', // AWS Blue accent
        'dark': '#161E2D', // AWS Dark Blue (Used for dark mode background)
        'darker': '#0D1117', // AWS Darker Blue
        'light': '#F1F5F9', // Light mode background
        'code-bg': '#232F3E', // AWS Navy
      },
      fontFamily: {
        'mono': ['Fira Code', 'JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'border-pulse': 'border-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 153, 0, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 153, 0, 0.8)' }
        },
        'border-pulse': {
          '0%, 100%': { borderColor: 'rgba(255, 153, 0, 0.5)' },
          '50%': { borderColor: 'rgba(255, 153, 0, 0.8)' }
        }
      }
    },
  },
  plugins: [],
};
