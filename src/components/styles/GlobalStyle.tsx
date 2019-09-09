import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.secondary};
    font-family: sans-serif;
  }
`;

export default GlobalStyle;
