/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,css}","./code/*.{html,css}"],
  theme: {
    fontFamily: {
      'sans':['ui-sans-serif', 'system-ui'],
      'serif':['Georgia','ui-serif'],
      'mono':['ui-monospace','SFMono-Regular'],
      'special':['Fraunces'],
      'default':['Montserrat'],
    },
    extend: {},
    screens: {
        'smallscreen':'250px',
        'phone':'440px',
        'sm':'640px',
        'md':'768px',
        'mid-md':'900px',
        'lg':'1024px',
        'desktop': '1280px',
        'xl':'1280px',
        '2xl':'1536px'

        // => @media (min-width: 640px) { ... }
  
        // => @media (min-width: 1024px) { ... }
  
        // => @media (min-width: 1280px) { ... }
      },
  
  },
  plugins: [],
}
