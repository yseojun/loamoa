import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, #root {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
`;

export default GlobalStyle;