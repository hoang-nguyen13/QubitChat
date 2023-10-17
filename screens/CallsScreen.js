import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import {writeUserContacts} from '../firebase';
import firebase from 'firebase/compat';
const CallScreen = ({ uid }) => {
  const [contactFirstName, setContactFirstName] = useState('');
  const [contactLastName, setContactLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [contacts, setContacts] = useState([]);

  const handleAddContact = () => {
    writeUserContacts(uid, contactFirstName, contactLastName, phoneNumber);
  };

  useEffect(() => {
    const userId = uid;
    const userContactsRef = firebase.database().ref(`contacts/${userId}`);

    // This listener will get triggered every time the data changes
    const handleDataChange = snapshot => {
        if (snapshot.val()) {
            // Convert Firebase object to array of contact objects
            const firebaseContactsArray = Object.values(snapshot.val());
            setContacts(firebaseContactsArray);
        }
    };

    userContactsRef.on('value', handleDataChange);

    // Clean up listener on component unmount
    return () => {
        userContactsRef.off('value', handleDataChange);
    };
}, []);

  return (
    <View style={styles.container}>
      {contacts.map((contact, index) => (
            <View key={index} style={{ marginBottom: 20 }}>
                <Text>First name: {contact.contactFirstName} Last name: {contact.contactLastName}</Text>
                <Text>Number: {contact.phoneNumber}</Text>
            </View>
        ))}
      <Text style={styles.title}>Add Contact</Text>
      <TextInput
        placeholder="Contact First Name"
        value={contactFirstName}
        onChangeText={setContactFirstName}
        style={styles.input}
      />
      <TextInput
        placeholder="Contact Last Name"
        value={contactLastName}
        onChangeText={setContactLastName}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
      />
      <Button title="Add Contact" onPress={handleAddContact} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '80%', // Adjust the width as needed
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default CallScreen;