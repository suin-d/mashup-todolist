import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoApp from "./containers/TodoApp";

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoApp />
    </>
  );
}

export default App;
