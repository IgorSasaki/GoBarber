// Bibliotecas Externas
import React from "react";
import { FiLogIn } from "react-icons/fi";

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

        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

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
