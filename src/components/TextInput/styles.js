import styled from 'styled-components/native';

export const InputContainer = styled.View`
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  padding-left: 10px; 
  color: gray;
`;

export const Error = styled.Text`
  color: red;
  font-size: 12px;
  padding-top: 6px;
`;