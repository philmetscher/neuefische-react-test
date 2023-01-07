import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Im richtigen Projekt lokal eingebunden, aber keine Zeit verschwendet diesmal */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  :root {
    --primary: rgb(255, 74, 17);
    --secondary: rgb(37, 38, 41);
    --secondary050: rgba(37, 38, 41, .5);
    --bg-option-1: rgb(243, 245, 249);
    --bg-option-2: rgb(228, 232, 240);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  html {
    font-size: 100%;
  }
  html, body, #root, .App {
    width: 100;
    min-height: 100vh;
  }
  body {
    background: var(--bg-option-2);
    font-size: 1rem;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    background: none;
    border: none;
  }

  /* general css classes */
  .container {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default GlobalStyle;
