// Bibliotecas Externas
import React from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

// Componentes
import Button from "../../components/Button";
import Input from "../../components/Input";

// Assets
import LogoImg from "../../assets/logo.svg";

// Estilização
import * as Styled from "./styles";

const SignIn: React.FC = () => (
  <Styled.Container>
    <Styled.Content>
      <img src={LogoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn /> Criar conta
      </a>
    </Styled.Content>

    <Styled.Background />
  </Styled.Container>
);

export default SignIn;
