// Bibliotecas externas
import React, { useCallback, useRef } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
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

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSignUp = useCallback((data: object) => {
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
              <Styled.Title>Crie sua conta</Styled.Title>
            </View>

            <Form
              ref={formRef}
              onSubmit={handleSignUp}
              style={{ width: "100%" }}
            >
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="email" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha" />

              <Button onPress={() => formRef.current?.submitForm()}>
                Entrar
              </Button>
            </Form>
          </Styled.Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <Styled.BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />

        <Styled.BackToSignInText>Voltar para logon</Styled.BackToSignInText>
      </Styled.BackToSignIn>
    </>
  );
};

export default SignUp;
