// Bibliotecas Externas
import React, { useCallback, useRef } from "react";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

// Componentes
import Button from "../../components/Button";
import Input from "../../components/Input";
import getValidationErrors from "../../utils/getValidationErrors";

// Assets
import LogoImg from "../../assets/logo.svg";

// Estilização
import * as Styled from "./styles";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().min(6, "No mínimo 6 digítos"),
      });

      await schema.validate(data, { abortEarly: false });

    } catch (error) {

      const errors = getValidationErrors(error)

      formRef.current?.setErrors(errors)
    }
  }, []);

  return (
    <Styled.Container>
      <Styled.Background />

      <Styled.Content>
        <img src={LogoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
