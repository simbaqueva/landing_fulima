/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'fulima-dark-blue': '#003366',
        'fulima-gold': '#FFD700',
        'fulima-light-blue': '#29ABE2',
        'fulima-green': '#7BC043',
        'fulima-red': '#E32636',
        'fulima-cream': '#F8F7F4',
      },
      fontFamily: {
        'fredoka': ['Fredoka', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Don't reset base styles (we have custom CSS)
  },
}