// Bibliotecas Externa
import React from "react";

// Componentes
import SignIn from "./pages/SignIn";
import AppProvider from "./hooks";

// Estilização
import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
