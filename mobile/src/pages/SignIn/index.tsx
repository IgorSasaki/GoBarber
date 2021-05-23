// Bibliotecas externas
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

// Componentes
import Button from "../../components/Button";
import Input from "../../components/Input";

// Assets
import logoImg from "../../assets/logo.png";

// Estilização
import * as Styled from "./styles";

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Styled.Container>
            <Image source={logoImg} />

            <Styled.Title>Faça seu logon</Styled.Title>

            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button onPress={() => {}}>Entrar</Button>

            <Styled.ForgotPassword onPress={() => {}}>
              <Styled.ForgotPasswordText>
                Esqueci minha senha
              </Styled.ForgotPasswordText>
            </Styled.ForgotPassword>
          </Styled.Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <Styled.CreateAccountButton onPress={() => {}}>
        <Icon name="log-in" size={20} color="#ff9000" />

        <Styled.CreateAccountButtonText>
          Criar uma conta
        </Styled.CreateAccountButtonText>
      </Styled.CreateAccountButton>
    </>
  );
};

export default SignIn;
