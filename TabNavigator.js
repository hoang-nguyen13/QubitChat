import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CallsScreen from "./screens/CallsScreen";
import CamScreen from "./screens/CamScreen";
import Settings from "./screens/Settings";
import StatusScreen from "./screens/StatusScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabNavigator = ({ route }) => {
  const { uid } = route.params;

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
      <Tab.Screen name="Calls">
        {() => <CallsScreen uid={uid} />}
      </Tab.Screen>
      <Tab.Screen name="Camera" component={CamScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});