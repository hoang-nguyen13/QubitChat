import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { auth } from './firebase'; // Importing auth directly
const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      
      if (user) {
        user.sendEmailVerification()
        .then(() => {
          Alert.alert("Account created", "Please verify your email.");
        })
        .catch(verificationError => {
          // Handle any errors that occur during the email verification process
          Alert.alert("Verification email send error", verificationError.message);
        });
      }
    })
    .catch(error => {
      Alert.alert("Signup error", error.message);
    });
}


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput 
        value={email} 
        onChangeText={setEmail} 
        placeholder="Email" 
        style={styles.input}
        autoCapitalize="none" 
      />
      <TextInput 
        value={password} 
        onChangeText={setPassword} 
        placeholder="Password" 
        secureTextEntry 
        style={styles.input} 
      />
      <Button title="Signup" onPress={handleSignUp} />
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

export default SignupPage;
