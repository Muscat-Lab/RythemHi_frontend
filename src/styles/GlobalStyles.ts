import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  /* Box sizing rules */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Remove default padding and margin */
  body, h1, h2, h3, h4, h5, h6, p, ol, ul, div {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #111111;
    box-sizing: border-box;
  }

    /* Remove list styles on ul, ol elements */
  ul, ol {
    list-style: none;
  }


  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }


  /* Inherit fonts for inputs and buttons */
  input, button, textarea, select {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
