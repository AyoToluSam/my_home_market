import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --primary-color: rgba(44, 42, 59, 1);
  --secondary-color: rgba(240, 237, 233, 0.65);
}

* {
    box-sizing: border-box;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
  }

html {
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #0F1624;

  ::-webkit-scrollbar {
    width: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #0F1624;
    border-radius: 10px;
  }
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;  
  margin: 0;
  padding: 0;

    ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #0F1624;
    border-radius: 10px;
  }
}

a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}

button {
  cursor: pointer;
}
`;
