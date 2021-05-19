// Bibliotecas externas
import React from "react";
import { Image } from "react-native";

// Componentes
import Button from "../../components/Button";
import Input from "../../components/Input";

// Assets
import logoImg from "../../assets/logo.png";

// Estilização
import * as Styled from "./styles";

const SignIn: React.FC = () => {
  return (
    <Styled.Container>
      <Image source={logoImg} />

      <Styled.Title>Faça seu logon</Styled.Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button onPress={() => {}}>Entrar</Button>
    </Styled.Container>
  );
};

export default SignIn;
