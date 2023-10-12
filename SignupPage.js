import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Simple validation check
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Handle signup logic here, like calling an API to register the user
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
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
      <TextInput 
        value={confirmPassword} 
        onChangeText={setConfirmPassword} 
        placeholder="Confirm Password" 
        secureTextEntry 
        style={styles.input} 
      />
      <Button title="Signup" onPress={handleSignup} />
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