// Bibliotecas externas
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/core";

// Componentes
import Button from "../../components/Button";
import Input from "../../components/Input";

// Assets
import logoImg from "../../assets/logo.png";

// Estilização
import * as Styled from "./styles";

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Styled.Container>
            <Image source={logoImg} />

            <View>
              <Styled.Title>Faça seu logon</Styled.Title>
            </View>

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

      <Styled.CreateAccountButton onPress={() => navigation.navigate("SignUp")}>
        <Icon name="log-in" size={20} color="#ff9000" />

        <Styled.CreateAccountButtonText>
          Criar uma conta
        </Styled.CreateAccountButtonText>
      </Styled.CreateAccountButton>
    </>
  );
};

export default SignIn;
