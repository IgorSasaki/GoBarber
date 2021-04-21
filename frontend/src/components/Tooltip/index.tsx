// Bibliotecas Externas
import React from "react";

// Estilização
import * as Styled from "./styles";

interface TooltipProps {
  title: string;
  className?: string
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <Styled.Container className={className}>
      {children}
      <span>{title}</span>
    </Styled.Container>
  );
};

export default Tooltip;
