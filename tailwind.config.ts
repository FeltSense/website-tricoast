import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF5F7',
          100: '#D7EBF0',
          200: '#AFD7E0',
          300: '#87C3D1',
          400: '#5FAFC1',
          500: '#4A8FA4',
          600: '#3C7283',
          700: '#2D5662',
          800: '#1E3942',
          900: '#0F1D21',
        },
        secondary: {
          50: '#F0F7F4',
          100: '#E1EFE9',
          200: '#C3DFD3',
          300: '#A5CFBD',
          400: '#87BFA7',
          500: '#6A9F8A',
          600: '#557F6E',
          700: '#405F53',
          800: '#2B4037',
          900: '#15201C',
        },
        accent: {
          50: '#FFF8F0',
          100: '#FFF1E1',
          200: '#FFE3C3',
          300: '#FFD5A5',
          400: '#FFC787',
          500: '#E5A05F',
          600: '#B8804C',
          700: '#8A6039',
          800: '#5C4026',
          900: '#2E2013',
        },
      },
    },
  },
  plugins: [],
};

export default config;
