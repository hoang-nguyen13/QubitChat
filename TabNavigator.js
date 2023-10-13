// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
// import HomeScreen from './screens/HomeScreen';
// import SettingScreen from './screens/SettingScreen';
// import Ionicons from "react-native-vector-icons/Ionicons";
// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator

//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Settings') {
//             iconName = focused ? 'settings' : 'settings-outline';
//           }
//           return <Icon name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "blue",
//         tabBarInactiveTintColor: "gray",
//         tabBarStyle: [
//           {
//             display: "flex"
//           },
//           null
//         ]
//       })}
//       tabBarOptions={{
//         activeTintColor: 'blue',
//         inactiveTintColor: 'gray',
//       }}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingScreen} />
//     </Tab.Navigator>
//   );
// }

// export default TabNavigator;

import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CallsScreen from "./screens/CallsScreen";
import CamScreen from "./screens/CamScreen";
import Settings from "./screens/Settings";
import StatusScreen from "./screens/StatusScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { height: 80 },
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Status") {
            iconName = "person-outline";
          } else if (route.name === "Calls") {
            iconName = "call-outline";
          } else if (route.name === "Camera") {
            iconName = "camera-outline";
          } else if (route.name === "Settings") {
            iconName = "cog-outline";
          }
          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
      <Tab.Screen name="Camera" component={CamScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});