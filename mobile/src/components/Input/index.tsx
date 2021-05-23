// Bibliotecas externas
import { useField } from "@unform/core";
import React, { useEffect, useRef } from "react";
import { TextInputProps } from "react-native";

// Componentes

// Estilização
import * as Styled from "./styles";

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const inputElementRef = useRef<any>(null);
  const { defaultValue = "", error, fieldName, registerField } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: "value",
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current?.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = "";
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Styled.Container>
      <Styled.Icon name={icon} size={20} color="#666360" />

      <Styled.TextInput
        ref={inputElementRef}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        defaultValue={defaultValue}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
      />
    </Styled.Container>
  );
};

export default Input;
