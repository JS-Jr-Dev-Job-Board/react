import theme from './index'

const darkTheme = {
  ...theme,
  // None of these are set colors
  color: {
    background: 'black',
    linkHover: '#006400',
    secondaryBackground: '#bfbfbf',
    primary: '#FF6347',
    secondary: 'yellow',
    tertiary: 'blue',
    accent: 'blue',
    navBackground:
      'linear-gradient( 90deg, rgb(110, 94, 254) 0%, rgba(73, 63, 252, 1) 100%)',
    white: '#fff',
  }
}

export default darkTheme
