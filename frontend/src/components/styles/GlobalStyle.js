import {createGlobalStyle} from 'styled-components';
import {device} from "./MediaQueries";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'avenir next', avenir,
    'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial,
    sans-serif;
    margin: 0;
    padding: 0;
    text-decoration-skip-ink: auto;
  }
  
  body {
    max-width: ${device};
    background: linear-gradient(25deg,#CFBAF0,#A3C4F3);

  }

  :root {
    --gray-900: #111114;
    --gray-800: #222224;
    --gray-750: #363636; 
    --gray-700: #444444;
    --gray-600: #666664;
    --gray-500: #888884;
    --gray-400: #aaaaa4;
    --gray-300: #ccccc4;
    --gray-200: #e2e2e4;
    --gray-100: #f9f9f9;
    --white: white;
    --blue: #4299e1;
    --red: #f56565;
    --text-decoration-color: var(--gray-400);
    --text-color: var(--gray-800);
    --focus-ring-color: var(--blue);
    --border-radius: 4px;
  }

  ::selection,
  ::-moz-selection {
    background: var(--focus-ring-color); /* WebKit/Blink Browsers */
  }

  body {
    padding: 0;
    margin: 0;
    background-color: white;
    font-weight: 400;
    line-height: 1.563;
    color: var(--text-color);
    caret-color: var(--text-color);
  }

  @media (prefers-color-scheme: dark) {
    body {
      color: white;
      background-color: var(--gray-900);
      caret-color: white;
    }
  }

  /* Typography
  ––––––––––––––––––––––––––––––––– */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
    margin-top: 1em;
    font-weight: bold;
  }

  h1 {
    font-size: 3.052rem;
    letter-spacing: -0.04em;
    line-height: 1;
  }

  h2 {
    font-size: 2.441rem;
    letter-spacing: -0.04em;
    line-height: 1.2;
  }

  h3 {
    font-size: 1.953rem;
    letter-spacing: -0.03em;
    line-height: 1.2;
  }

  h4 {
    font-size: 1.563rem;
    line-height: 1.3;
  }

  h5 {
    font-size: 1.25rem;
    line-height: 1.4;
  }

  h6 {
    font-size: 1rem;
    letter-spacing: 0;
    line-height: 1.5;
  }
`

export default GlobalStyle;