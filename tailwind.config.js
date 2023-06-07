/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '.625rem',
      },
      strokeWidth: {
        8: '8px',
      },
      colors: {
        gold: '#E0AF65',
        crimson: '#89192D',
        brilliance: '#7DFFBA',
        'anger-light': '#CD8290',
        'gray-gold': '#776756',
        gray: '#1B1B1B',
        brown: '#24130A',
        order: {
          power: '#F4B547',
          giants: '#EB544D',
          titans: '#EC68A8',
          skill: '#706DFF',
          perfection: '#8E35FF',
          twins: '#0020C6',
          reflection: '#00A2AA',
          detection: '#139757',
          fox: '#D47230',
          vitriol: '#59A509',
          brilliance: '#7DFFBA',
          enlightenment: '#1380FF',
          protection: '#00C3A1',
          fury: '#82005E',
          rage: '#C74800',
          anger: '#89192D',
        },
      }
    },
  },
  plugins: [],
}

