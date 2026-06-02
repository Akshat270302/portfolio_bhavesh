import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 1px 2px rgba(15, 23, 42, 0.06), 0 10px 30px rgba(15, 23, 42, 0.04)',
      },
      colors: {
        paper: '#ffffff',
        ink: '#232323',
        muted: '#6c6c6c',
        line: '#e7e5df',
        green: '#6f9b77',
        gold: '#d5a24a',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;