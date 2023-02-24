import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

html {
  scrollbar-width: thin;
  scrollbar-color: #0F1624;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0F1624;
    border-radius: 10px;
  }
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  overflow-x: hidden;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
}

button {
  cursor: pointer;
}
`;