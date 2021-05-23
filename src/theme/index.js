const theme = {
  breakpoint: {
    1: '1440px',
    2: '1024px',
    3: '768px',
    4: '550px',
    5: '300px',
  },
  font: {
    primary: '',
    secondary: '',
  },
  size: {
    placeholder: '1.4rem',
    smallest: '1.6rem',
    small: '2.4rem',
    medium: '3.6rem',
    large: '8rem',
    largest: '16rem',
  },
  radius: {
    slight: '8px',
    serious: '32px',
  },
  height: {
    container: '78vh',
  },
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
}

export default theme
