import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: inherit;
    font: inherit;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    list-style: none;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    scrollbar-color: rgb(34, 34, 34) rgb(0, 0, 0);
    scrollbar-width: thin;
  }

  .container {
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }

  .element-container {
    display: flex;
    height: 2.5rem;
    align-items: center;
    margin: 1rem;
  }

  .textfield {
    text-align: inherit;
    font-size: 0.9rem;
    margin-left: .5rem;
    margin-right: .5rem;
  }

  button, input, select, textarea {
    margin: 0;
  }

  .button {
    background-color: transparent;
    color: #363636;
    cursor: pointer;
    border: 1px solid #363636 !important;

    :hover {
      transition: all ease .3s;
      background-color: #A3C4F3;
    }

    :active {
      background-color: rgba(255, 255, 255, .7);
    }
  }

  .control {
    font-size: 0.9rem;
    text-align: inherit;
  }

  .input, .select {
    height: 2.5rem;
  }

  .select {
    display: inline-block;
    max-width: 100%;
    position: relative;
    vertical-align: top;
    width: 100%;
  }

  .select select:not([multiple]) {
    padding-right: 2.5em;
  }

  .select:not(.is-multiple) {
    height: 2.5rem;
  }

  .select select {
    cursor: pointer;
    display: block;
    font-size: 1em;
    max-width: 100%;
    outline: none;
    position: relative;
    width: 100%;
  }

  .input, .textarea, .select select {
    background-color: white;
    border-color: #dbdbdb;
    border-radius: 4px;
    color: #363636;
  }

  .button, .input, .textarea, .select select {
    -moz-appearance: none;
    -webkit-appearance: none;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: none;
    display: inline-flex;
    font-size: 0.9rem;
    justify-content: flex-start;
    line-height: 1.5;
    padding: calc(0.5em - 1px) calc(0.75em - 1px);
    position: relative;
    vertical-align: top;
  }

  form .button, form .textarea, form .select select, form .input {
    height: 2.5rem;
  }

  form .button {
    margin-left: 1rem;
  }

  .select::after {
    right: 1.125em;
    z-index: 4;
    border: 3px solid transparent;
    border-top-color: transparent;
    border-top-style: solid;
    border-top-width: 3px;
    border-right-color: transparent;
    border-right-style: solid;
    border-right-width: 3px;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-radius: 2px;
    border-right: 0;
    border-right-color: currentcolor;
    border-top: 0;
    border-top-color: currentcolor;
    content: " ";
    display: block;
    height: 0.625em;
    margin-top: -0.4375em;
    pointer-events: none;
    position: absolute;
    top: 50%;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: center;
    transform-origin: center;
    width: 0.625em;
    border-color: #3d2856;
  }

  :focus-visible, ::before, ::after, ::-moz-focus-inner {
    outline: none !important;
  }

  html {
    text-decoration-skip-ink: auto;
    font-family: "SF Pro Display", sans-serif;
    font-size: 1rem;
    color: #363636;
    height: 100%;
  }

  body {
    background: linear-gradient(25deg, #CFBAF0, #A3C4F3);
    background-attachment: fixed;
    height: 100%;
    margin: 0;
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