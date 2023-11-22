import styled from 'styled-components/native';
import { Text, View, SafeAreaView, ScrollView, ImageBackground } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 0.4;
  z-index: 2;
  height: 300px;
  background-color: #fff;
`;

export const BackgroundText = styled(Text)`
  font-size: 25px;
  color: #000;
  padding-top: 10%;
  padding-left: 20%;
  text-transform: capitalize;
`;


export const ScrollViewContent = styled(ScrollView)`
  margin-top: 12%;
  background-color: #FFF;
`;

export const Card = styled.View`
  background-color: #000;
  margin-top: 10%;
  margin-bottom: 12px;
  padding-bottom: 10%;
  padding-left: 4px;
  padding-right: 4px;
  z-index: 10;
  width: 100%;
  justify-content: center;
  align-content: center;
`;

export const PerfilImage = styled.Image`
  width: 130px;
  height: 130px;
  align-self: center;
  border-radius: 70px;
`;

export const Label = styled.Text`
  font-size: 14px;
  text-align: left;
  margin-bottom: 12px;
  color: #000;
`;

export const Text2 = styled.Text`
  font-size: 14px;
  text-align: left;
  margin-bottom: 18px;
  color: #000;
`;

export const StyledTextDate = styled.Text`
  font-size: 12px;
  text-align: right;
  margin-bottom: 15%;
  color: gray;
`;

export const StyledTextDescription = styled.Text`
  font-size: 12px;
  text-align: center;
  margin-bottom: 6%;
  color: gray;
  border: 1px solid #68B2F8;
  padding: 24px;
  border-radius: 4px;
`;

export const StyledTextData = styled.Text`
  font-size: 12px;
  text-align: center;
  margin-bottom: 6%;
  color: #FFF;
  text-transform: capitalize;
  border: 1px solid #68B2F8;
  background-color: #68B2F8;
  padding: 8px;
  border-radius: 4px;
`;

export const StyledTextImage = styled.Text`
  font-size: 12px;
  text-align: center;
  margin-bottom: 6%;
  color: #FFF;
  text-transform: capitalize;
  border: 1px solid #68B2F8;
  background-color: #68B2F8;
  padding: 24px;
  border-radius: 4px;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  align-self: center;
  padding: 16px;
  border-radius: 12px;
  background-color: #68B2F8;
  margin-bottom: 12px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 18px;
  text-transform: capitalize;
`;

export const ModalContainer = styled.Modal``;

export const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro semi-transparente */
`;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 300px;
`;

export const ModalText = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

export const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #68B2F8;
  padding: 10px 12px;
  border-radius: 5px;
  margin-top: 10px;
`;

export const ModalButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;
