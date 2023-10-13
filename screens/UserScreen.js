import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
const UserScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
      <ImageBackground
        source={item.image}
        style={[styles.user]}
        imageStyle={styles.userImage}
      ></ImageBackground>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  user: {
    width: 80,
    height: 80,
  },
  userImage: {
    borderRadius: 50,
  },
});
