import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignupPage" component={SignupPage} />
      <Stack.Screen name="HomeScreen" component={TabNavigator} />
    </Stack.Navigator>
  );
}

export default Navigator;

