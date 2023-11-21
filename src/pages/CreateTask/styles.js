import styled from "styled-components/native";
import { Text, View, SafeAreaView, ScrollView, ImageBackground } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #FFF;
  padding-bottom: 12%;
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 0.8;
  z-index: 2;
  height: 300px;
  background-color: #FFF;
`;

export const BackgroundText = styled(Text)`
  font-size: 36px;
  color: #FFF;
  padding-top: 15%;
  padding-left: 10%;
  text-transform: capitalize;
`;

export const BackgroundTextAlt = styled(Text)`
  font-size: 20px;
  color: #FFF;
  padding-top: 2%;
  padding-left: 10%;
`;

export const ContainerLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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
  font-size: 16px;
  margin-bottom: 6px;
  color: #000; /* Cor de texto padrão */
`;

export const ErrorText = styled(Text)`
  color: #FF0000; /* Cor para mensagens de erro */
  font-size: 14px;
  margin-top: 5px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #68B2F8;
  width: 100%;
  height: 45px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;