import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${(props) => props.theme.gainsboro};
    height: 100%;
  }
  html, #root, .App {
    height: 100%;
  }

`;
export default GlobalStyle;
