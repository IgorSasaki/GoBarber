// Bibliotecas Externas
import React, { useCallback, useRef } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";

// Componentes
import Button from "../../components/Button";
import Input from "../../components/Input";
import getValidationErrors from "../../utils/getValidationErrors";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";

// Assets
import LogoImg from "../../assets/logo.svg";

// Estilização
import * as Styled from "./styles";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email("Digite um e-mail válido")
            .required("E-mail obrigatório"),
          password: Yup.string().required("Senha obrigatória"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push("/dashboard");
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: "error",
          title: "Erro na autenticação",
          description: "Ocorreu um erro ao fazer login, cheque as credenciais.",
        });
      }
    },
    [signIn, addToast, history]
  );

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.AnimatedContainer>
          <img src={LogoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>

            <a href="forgot">Esqueci minha senha</a>
          </Form>

          <Link to="/signup">
            <FiLogIn /> Criar conta
          </Link>
        </Styled.AnimatedContainer>
      </Styled.Content>

      <Styled.Background />
    </Styled.Container>
  );
};

export default SignIn;
