import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #13131a;
    --primary: #0084ff;
    --gray: #e1e1e1;
    --text: #a8a8b3;
    --base-text: #c4c4cc;
    --borders: #323238;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: var(--background);
    color: var(--text);
    font-family: 'Roboto', sans-serif;
  }
`;