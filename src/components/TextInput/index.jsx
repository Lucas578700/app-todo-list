import React from "react";
import { Error, Input, InputContainer, Label } from './styles';

const TextInputField = ({ label, name, value, onChange, placeholder, error, keyboardType, secureTextEntry }) => {
  return (
    <InputContainer>
      <Input
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      {error && <Error>{error.message}</Error>}
    </InputContainer>
  );
};

export default TextInputField;