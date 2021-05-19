// Bibliotecas externas
import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";

// Componentes

// Estilização
import * as Styled from "./styles";

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<RectButtonProperties> = ({ children, ...rest }) => {
  return (
    <Styled.Container {...rest}>
      <Styled.ButtonText>{children}</Styled.ButtonText>
    </Styled.Container>
  );
};

export default Button;
