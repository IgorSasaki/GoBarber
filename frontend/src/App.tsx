// Bibliotecas Externa
import React from "react";

// Componentes
import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";

// Estilização
import GlobalStyle from './styles/global'

const App: React.FC = () => (
  <>
    <SignIn />
    {/* <SignUp /> */}
    <GlobalStyle />
  </>
);

export default App;
