import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #13131a;
    --background-hover: #20202b;
    --modal-background: #20202b;
    --primary: #0084ff;
    --primary-hover: #006acc;
    --gray: #e1e1e1;
    --text: #a8a8b3;
    --base-text: #c4c4cc;
    --borders: #323238;
    --support: #737380;
    --white: #fff;
    --scrollbar: #323238;
    --red: #ED4245;
    --anchor-link: #58adfc;
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

  a {
    color: var(--anchor-link);
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--scrollbar);
  }
`;