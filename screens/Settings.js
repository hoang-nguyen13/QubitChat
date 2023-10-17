import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase/compat'; // Import Firebase

const Settings = () => {
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut(); // Sign the user out from Firebase
      navigation.navigate('Login'); // Navigate to the login screen or any other appropriate screen
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Logged Out Screen</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

