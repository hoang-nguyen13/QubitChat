import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase/compat';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { useAuthRequest, ResponseType } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userUid, setUserUid] = useState(null); // State to capture the user's uid

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                if (user) {
                    setUserUid(user.uid);
                    navigation.navigate('HomeScreen', { uid: userUid });
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
    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: '1065876130644-gl5b6s2452nt0ek29t7bfidsrocp16pr.apps.googleusercontent.com',
            scopes: ['openid', 'profile', 'email'],
            redirectUri: AuthSession.makeRedirectUri({
                useProxy: true,
            }),
            responseType: ResponseType.Token,
        },
        {
            authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
            tokenEndpoint: 'https://oauth2.googleapis.com/token',
            revocationEndpoint: 'https://oauth2.googleapis.com/revoke',
        }
    );
    useEffect(() => {
        if (response?.type === 'success') {
            const { access_token } = response.params;
            // Use the access token to authenticate the user with Firebase
            const credential = firebase.auth.GoogleAuthProvider.credential(null, access_token);
            firebase.auth().signInWithCredential(credential);
        }
    }, [response]);

    const handleLoginGoogle = () => {
        promptAsync();
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Qubit</Text>
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
            <Button title="Login" onPress={handleLogin} />
            <Button title="Signup" onPress={() => navigation.navigate('SignupPage')} />
            <Button title="Sign in with Google" onPress={handleLoginGoogle} />
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
