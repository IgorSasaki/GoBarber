// Bibliotecas Externas
import React, { useCallback, useRef } from "react";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";

// Componentes
import Button from "../../components/Button";
import Input from "../../components/Input";
import getValidationErrors from "../../utils/getValidationErrors";
import { useToast } from "../../hooks/toast";

// Services
import api from "../../services/api";

// Assets
import LogoImg from "../../assets/logo.svg";

// Estilização
import * as Styled from "./styles";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório"),
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().min(6, "No mínimo 6 digítos"),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post("/users", data);

        history.push("/");

        addToast({
          type: "success",
          title: "Cadastro realizado com sucesso!",
          description: "Você já pode fazer seu login no GoBarber!",
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: "error",
          title: "Erro no cadastro",
          description: "Ocorreu um erro ao fazer o cadastro, tente novamente.",
        });
      }
    },
    [addToast, history]
  );

  return (
    <Styled.Container>
      <Styled.Background />

      <Styled.Content>
        <Styled.AnimatedContainer>
          <img src={LogoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
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

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft /> Voltar para logon
          </Link>
        </Styled.AnimatedContainer>
      </Styled.Content>
    </Styled.Container>
  );
};

export default SignUp;
