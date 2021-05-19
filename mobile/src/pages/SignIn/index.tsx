// Bibliotecas externas
import React from "react";
import { Image } from "react-native";

// Componentes

// Assets
import logoImg from "../../assets/logo.png";

// Estilização
import * as Styled from "./styles";

const SignIn: React.FC = () => {
  return (
    <Styled.Container>
      <Image source={logoImg} />
      <Styled.Title>Faça seu logon</Styled.Title>
    </Styled.Container>
  );
};

export default SignIn;
