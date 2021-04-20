import theme from './index'

const lightTheme = {
  ...theme,
  // None of these are set colors
  color: {
    background: 'white',
    linkHover: '#6d76f7',
    secondaryBackground: '#eee',
    primary: '#FF6347',
    secondary: 'brown',
    tertiary: 'red',
    accent: 'green',
    navBackground: 'linear-gradient( 90deg, #1E4903 0%, #348005 100%)'
  }
}

export default lightTheme
