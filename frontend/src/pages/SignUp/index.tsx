// Bibliotecas Externas
import React from "react";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import { Form } from "@unform/web";

// Componentes
import Button from "../../components/Button";
import Input from "../../components/Input";

// Assets
import LogoImg from "../../assets/logo.svg";

// Estilização
import * as Styled from "./styles";

const SignUp: React.FC = () => {
  const handleSubmit = (data: object):void => {

    console.log(data);
  };

  return (
    <Styled.Container>
      <Styled.Background />

      <Styled.Content>
        <img src={LogoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="login">
          <FiArrowLeft /> Voltar para logon
        </a>
      </Styled.Content>
    </Styled.Container>
  );
};

export default SignUp;
