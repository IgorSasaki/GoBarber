// Bibliotecas Externas
import React from "react";

// Componentes
import { AuthProvider } from "./auth";
import { ToastProvider } from "./toast";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default AppProvider;