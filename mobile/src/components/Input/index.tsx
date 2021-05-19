// Bibliotecas externas
import React from "react";
import { TextInputProps } from "react-native";

// Componentes

// Estilização
import * as Styled from "./styles";

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <Styled.Container>
      <Styled.Icon name={icon} size={20} color="#666360" />

      <Styled.TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
      />
    </Styled.Container>
  );
};

export default Input;
