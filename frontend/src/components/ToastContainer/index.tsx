// Bibliotecas Externas
import React from "react";
import { useTransition } from "react-spring";

// Componentes
import { ToastMessage } from "../../hooks/toast";
import Toast from "./Toast";

// Estilização
import * as Styled from "./styles";

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message: ToastMessage) => message.id,
    {
      from: { right: "-120%", opacity: 0 },
      enter: { right: "0%", opacity: 1 },
      leave: { right: "-120%", opacity: 1 },
    }
  );

  return (
    <Styled.Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Styled.Container>
  );
};

export default ToastContainer;
