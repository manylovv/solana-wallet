/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sol-purple': {
          50: '#f9f5ff',
          100: '#f2e7ff',
          200: '#e6d3ff',
          300: '#d3b0ff',
          400: '#b87eff',
          500: '#9945ff',
          600: '#872af3',
          700: '#741ad6',
          800: '#631aaf',
          900: '#52178c',
          950: '#360269',
        },
        'sol-green': {
          50: '#eefff7',
          100: '#d8ffee',
          200: '#b3ffde',
          300: '#78fdc5',
          400: '#37f1a3',
          500: '#14f195',
          600: '#04b56b',
          700: '#078e57',
          800: '#0c6f47',
          900: '#0c5b3c',
          950: '#003320',
        },
      },
    },
  },
  plugins: [],
};
