// Bibliotecas externas
import React, { useCallback, useRef } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/core";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

// Componentes
import Button from "../../components/Button";
import Input from "../../components/Input";

// Assets
import logoImg from "../../assets/logo.png";

// Estilização
import * as Styled from "./styles";

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, []);

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

            <Form
              ref={formRef}
              onSubmit={handleSignIn}
              style={{ width: "100%" }}
            >
              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry={true}
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
                ref={passwordInputRef}
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                Entrar
              </Button>
            </Form>

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
