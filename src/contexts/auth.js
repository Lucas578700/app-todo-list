import React, { createContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { signInWithEmailAndPassword, signOut, getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {app} from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const auth = getAuth(app);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {

    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@user');
      
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);

      }
      setLoading(false);
    }
    setLoading(true);
    loadStorage();
  }, [])

  
     async function signIn(email, password){
    await signInWithEmailAndPassword(auth, email, password)
    .then( (value) => {
      setUser(value.user);
      AsyncStorage.setItem('@user', JSON.stringify(value.user));
    })
    .catch( (error) => {        
        Alert.alert('E-mail ou senha incorretos!');
        setLoadingAuth(false);
        return;
    })
  }

  async function signOutApp(){
    await signOut(auth);
    then(() => {
        setUser(null);
    })
    navigation.navigate('SignIn');
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut: signOutApp, loadingAuth, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
