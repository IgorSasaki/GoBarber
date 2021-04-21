// Bibliotecas Externas
import React, { ButtonHTMLAttributes } from "react";

// Estilização
import * as Styled from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Styled.Container {...rest}>{children}</Styled.Container>
);

export default Button;
