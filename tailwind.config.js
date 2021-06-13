module.exports = {
    theme: {
      extend: {
        colors: {
          'primary-gray': '#F5F5F5',
          'primary-blue': '#02ACEE',
          'primary-deep-gray': '#707070',
          'primary-deep-blue': '#172C4F',
          'custom-teal': '#1BE0C0',
          'custom-yellow': '#F8BD0B',
          'custom-red': '#F80B0B',
          'custom-green': '#14f11b'
        },
        fontSize: {
          'tiny': '.5rem',
          'semi-tiny': '.65rem',
          '8xl': '8rem'
        },
        spacing: {
          '550px': '550px',
          '300px': '300px'
        }
      }
    },
    variants: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active']
    },
    plugins: []
  }
  