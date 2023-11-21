import React, { useState, useContext, useEffect } from 'react';
import { Platform, ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth'

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Label,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText
} from './styles';

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

        <AreaInput>
        <Label>E-MAIL</Label>
          <Input
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={(text) => setEmail(text.toLowerCase())}
          />
        </AreaInput>

        <AreaInput>
        <Label>SENHA</Label>
          <Input
            placeholder="Digite sua senha"
            value={password}
            onChangeText={(text) => setPassword(text.toLowerCase())}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <SubmitText>Login</SubmitText>
            )
          }
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar nova conta</LinkText>
        </Link>

      </Container>
    </Background>
  )
}