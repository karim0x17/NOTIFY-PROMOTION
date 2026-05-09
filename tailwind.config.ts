import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#091726',
        navy: '#10304f',
        teal: '#00a7c7',
        cyan: '#7de5ff',
        mist: '#eaf4fb',
        blush: '#fff0f7',
        accent: '#ff2f92',
        accentSoft: '#ff87bb',
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', 'Segoe UI', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        halo: '0 45px 120px -45px rgba(16, 48, 79, 0.45)',
        panel: '0 28px 70px -30px rgba(16, 48, 79, 0.28)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(16, 48, 79, 0.075) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 48, 79, 0.075) 1px, transparent 1px)',
      },
      animation: {
        'slow-spin': 'slow-spin 18s linear infinite',
      },
      keyframes: {
        'slow-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
