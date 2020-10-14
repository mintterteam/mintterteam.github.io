module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    typography: (theme) => ({
      default: {
        css: {
          fontSize: '1.125rem',
          color: theme('colors.gray.900'),

          strong: {
            color: theme('colors.gray.900'),
          },
        },
      },
    }),
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
