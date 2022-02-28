import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.colors.white};
    font-family: 'Roboto', sans-serif;
  }
`;