import styled from "styled-components/native";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #F0F4FF;
  padding-bottom: 12%;
`;

export const ScrollViewContent = styled(ScrollView)`
  padding: 20px;
`;

export const FormArea = styled.View`
  padding: 18px;
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const InputContainer = styled(View)`
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const Label = styled(Text)`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const ErrorText = styled(Text)`
  color: #FF0000; /* Cor para mensagens de erro */
  font-size: 14px;
  margin-top: 5px;
`;

export const StyledSwitch = styled.Switch`
  width: 40px;
  height: 40px;
`;

export const ContainerButton = styled(View)`
  margin-bottom: 10%;
`;
