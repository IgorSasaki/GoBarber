// Bibliotecas Externa
import React from "react";
import { BrowserRouter } from "react-router-dom";

// Componentes
import AppProvider from "./hooks";
import Routes from "./routes";

// Estilização
import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <>
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
