// Bibliotecas Externas
import React from "react";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";

// Estilização
import * as Styled from "./styles";

const ToastContainer: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Toast hasDescription={true}>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Styled.Toast>

      <Styled.Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Styled.Toast>

      <Styled.Toast type="error" hasDescription={true}>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Styled.Toast>
    </Styled.Container>
  );
};

export default ToastContainer;
