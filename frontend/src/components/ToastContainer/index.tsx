// Bibliotecas Externas
import React from "react";

// Componentes
import { ToastMessage } from "../../hooks/toast";
import Toast from "./Toast";

// Estilização
import * as Styled from "./styles";

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Styled.Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Styled.Container>
  );
};

export default ToastContainer;
