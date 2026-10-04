/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        surface: '#0F0F0F',
        'surface-2': '#171717',
        accent: '#FF3B30',
        'accent-green': '#32D74B',
        'accent-amber': '#FFD60A',
        line: 'rgba(255, 255, 255, 0.1)',
        'line-strong': 'rgba(255, 255, 255, 0.25)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Syne', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
