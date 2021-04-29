// Bibliotecas Externa
import React from "react";

// Componentes
import SignIn from "./pages/SignIn";
import ToastContainer from "./components/ToastContainer";
import { AuthProvider } from "./hooks/AuthContext";

// Estilização
import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
