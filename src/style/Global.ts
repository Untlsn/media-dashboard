import { createGlobalStyle } from 'styled-components'
import {ThemeSettings} from "./theme";

interface GlobalStylesProps {
  theme: ThemeSettings
}

export
const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
    transition: background, color .5s;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #___gatsby {
    height: 100%;
    width: 100%;
    min-height: 100vh;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`

export { darkTheme, lightTheme, ThemedProps } from './theme'
export { ThemedBackground, ThemedText, Tile } from './themedEl'
