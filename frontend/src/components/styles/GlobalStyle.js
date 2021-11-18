import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    scrollbar-color: var(--t-bg-accent) var(--t-bg-super);
    scrollbar-width: thin;
  }

  html {
    margin: 0;
    padding: 0;
    text-decoration-skip-ink: auto;
    font-family: var(--t-font-primary);
    font-size: var(--t-font-size-normal);
    color: var(--t-text-light-primary);
    height: 100%;
  }

  body,
  #background {
    content: '';
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 0%;
    background: linear-gradient(25deg,#CFBAF0,#A3C4F3);
  }

  :root {
    --t-font-primary: "Overpass", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    --t-font-secondary: "ArgentumNovus", Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    --t-font-size-tiny: .75rem;
    --t-font-size-small: .875rem;
    --t-font-size-normal: 1rem;
    --t-font-size-elements: 1.125rem;
    --t-font-size-large1: 1.5rem;
    --t-font-size-large2: 2rem;
    --t-font-size-large3: 2.5rem;
    --t-font-size-hero: 4.5rem;
    --t-text-non-themed-light-primary: #fff;
    --t-text-non-themed-light-secondary: #e4e4e4;
    --t-text-non-themed-dark-primary: #1f1f1f;
    --t-text-non-themed-dark-secondary: #363636;
    --t-text-light-primary: #fff;
    --t-text-light-secondary: #e4e4e4;
    --t-text-dark-primary: #1f1f1f;
    --t-text-dark-secondary: #363636;
    --t-primary: rgba(83, 1, 226, var(--t-color-opacity, 1));
    --t-primary-shade-1: rgba(39, 1, 105, var(--t-color-opacity, 1));
    --t-primary-shade-2: rgba(59, 2, 158, var(--t-color-opacity, 1));
    --t-primary-shade-3: rgba(105, 20, 252, var(--t-color-opacity, 1));
    --t-primary-shade-4: rgba(140, 84, 237, var(--t-color-opacity, 1));
    --t-secondary: rgba(0, 219, 219, var(--t-color-opacity, 1));
    --t-secondary-shade-1: rgba(0, 93, 93, var(--t-color-opacity, 1));
    --t-secondary-shade-2: rgba(0, 139, 139, var(--t-color-opacity, 1));
    --t-secondary-shade-3: rgba(0, 251, 251, var(--t-color-opacity, 1));
    --t-secondary-shade-4: rgba(67, 233, 233, var(--t-color-opacity, 1));
    --t-tertiary: rgba(248, 0, 53, var(--t-color-opacity, 1));
    --t-tertiary-shade-1: rgba(143, 0, 31, var(--t-color-opacity, 1));
    --t-tertiary-shade-2: rgba(215, 0, 46, var(--t-color-opacity, 1));
    --t-tertiary-shade-3: rgba(254, 0, 55, var(--t-color-opacity, 1));
    --t-tertiary-shade-4: rgba(251, 72, 111, var(--t-color-opacity, 1));
    --t-bg-super: #000;
    --t-bg-primary: #101010;
    --t-bg-secondary: #1a1a1a;
    --t-bg-accent: #222;
    --t-inverse-bg-super: #fff;
    --t-inverse-bg-primary: #f0f0f0;
    --t-inverse-bg-secondary: #e6e6e6;
    --t-inverse-bg-accent: #dedede;
    --t-dark-super: #000;
    --t-dark-primary: #101010;
    --t-dark-secondary: #1a1a1a;
    --t-dark-accent: #222;
    --t-light-super: #fff;
    --t-light-primary: #f0f0f0;
    --t-light-secondary: #e6e6e6;
    --t-light-accent: #dedede;
    --t-nav-height: 65px;
    --grnk-video-bar-color: var(--t-secondary-shade-4);
    --grnk-video-font: var(--t-font-secondary);
    --t-info: #4937ef;
    --t-info-text: #fff;
    --t-error: #dd1a2d;
    --t-error-text: #fff;
    --t-warning: #ddd507;
    --t-warning-text: #1a1a1a;
    --t-success: #4bcd72;
    --t-success-text: #1a1a1a;
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