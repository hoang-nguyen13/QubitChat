import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDz4QogR6MQBhXrz8Kheyqhg-Ka1P80KLs",
  authDomain: "qubit-65f65.firebaseapp.com",
  projectId: "qubit-65f65",
  storageBucket: "qubit-65f65.appspot.com",
  messagingSenderId: "1065876130644",
  appId: "1:1065876130644:web:d16143bbd785729cc156c1",
  measurementId: "G-W2WZ7SQJTC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

export { auth };
