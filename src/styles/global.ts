import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #13131a;
    --background-hover: #20202b;
    --primary: #0084ff;
    --gray: #e1e1e1;
    --text: #a8a8b3;
    --base-text: #c4c4cc;
    --borders: #323238;
    --support: #737380;
    --white: #fff;
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
    font-size: 16px;
  }

  ul {
    list-style: none;
  }
  
  button, input {
    font-family: 'Roboto', sans-serif;
    font-size: .75rem;
    
    color: var(--white);

    outline: none;
    background: none;
    border: none;

    &:hover {
      outline: none;
    }
  }
`;