// Bibliotecas Externa
import React from "react";
import SignIn from "./pages/SignIn";

// Estilização
import GlobalStyle from './styles/global'

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
