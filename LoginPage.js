import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from './firebase';
import HomeScreen from './HomeScreen';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      if (user) {
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert("Login Error", "Invalid user data received. Please try again.");
      }
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert("Login Error", errorMessage);
     });
     
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput 
        value={email} 
        onChangeText={setEmail} 
        placeholder="Email" 
        style={styles.input} 
      />
      <TextInput 
        value={password} 
        onChangeText={setPassword} 
        placeholder="Password" 
        secureTextEntry 
        style={styles.input} 
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginPage;
