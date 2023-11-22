import styled from 'styled-components/native';

export const Background = styled.View`
  flex:1;
  background-color: #FFF;
`;

export const Container = styled.KeyboardAvoidingView`
  flex:1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 20%;
  width: 237px;
  height: 266px;
`;

export const AreaInput = styled.View`
  width: 90%;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #000;
  margin-left: 2%;
`;

export const Input = styled.TextInput`
  width: 100%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: gray;
  border-bottom-color: gray; 
  border-bottom-width: 1px; 
  margin-bottom: 15px;
`;



export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: #162c46;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #FFF;
`;

export const Link = styled.TouchableOpacity`
  padding-top: 8%;
`;

export const LinkText = styled.Text`
  color: #171717;
`;