/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Diatype', 'sans-serif'],
      mono: ['ABCDiatype Mono', 'monospace'],
    },
    extend: {
      colors: {
        eyebrow: 'rgb(100 169 242)',
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
      backgroundImage: {
        'button-gradient':
          'linear-gradient(90deg,#c766ef,#7928d2 51.04%,#2b0c52)',
        'gradient-mono-blue':
          'linear-gradient(100.22deg, #1fcff1 30.11%, #234cb6 66.43%, rgba(35, 76, 182, .1) 120.76%)',
        'gradient-mono-purple':
          'linear-gradient(100.51deg, #f087ff 27.61%, #6e1fce 62.14%, rgba(110, 31, 206, .1) 113.78%)',
        'gradient-mono-green':
          'linear-gradient(97.65deg,#19fb9b 11.36%,#199890 54.3%,#005f59 100.78%)',
      },
    },
  },
  plugins: [],
};
