import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDz4QogR6MQBhXrz8Kheyqhg-Ka1P80KLs",
  authDomain: "qubit-65f65.firebaseapp.com",
  projectId: "qubit-65f65",
  storageBucket: "qubit-65f65.appspot.com",
  messagingSenderId: "1065876130644",
  appId: "1:1065876130644:web:d16143bbd785729cc156c1",
  measurementId: "G-W2WZ7SQJTC",
  databaseURL: "https://qubit-65f65-default-rtdb.firebaseio.com/",
  storageBucket: 'gs://qubit-65f65.appspot.com'
};

export function writeUserData(userId, email) {
  // Reference to the database.
  const database = firebase.database();
  const usersRef = database.ref('users');

  // Set the user data using their UID as the key.
  usersRef.child(userId).set({
    userId: userId,
    email: email
  });
}

export function writeUserContacts(userId, contactFirstName, contactLastName, phoneNumber) {
  const database = firebase.database();
  const userContactsRef = database.ref(`contacts/${userId}`);
  
  // Generate a unique key for the new contact
  const newContactKey = userContactsRef.push().key;

  // Data to store for the contact
  const contactData = {
    contactFirstName: contactFirstName,
    contactLastName: contactLastName,
    phoneNumber: phoneNumber,
  };
  console.log("Contact added")
  // Set the contact data under the unique key
  const newContactRef = userContactsRef.push(contactData);
}

export function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child("images/" + file.name);

  return fileRef.put(file).then((snapshot) => {
    console.log("Uploaded an image!");
    return fileRef.getDownloadURL();
  });
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();
export { auth, database, storage };
