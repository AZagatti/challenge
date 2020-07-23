import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  button {
    cursor: pointer;
  }
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
