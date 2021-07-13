// Bibliotecas Externas
import React from "react";

// Componentes
import { AuthProvider } from "./auth";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
