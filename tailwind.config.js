/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Inconsolata': 'Inconsolata',
        'Raleway': 'Raleway'
      },
      screens: {
        'xxxl': '1440px',
        'xxl': '1330px',
        'sls': '1200px',
        'ssl': '1130px' ,
        'sss': '900px'
      },
      colors: {
        brand: {
          gray: '#3D3D3D'
        }
      }
    },
  },
  plugins: [],
}

