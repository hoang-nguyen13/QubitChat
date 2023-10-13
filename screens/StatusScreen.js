import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const StatusScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.privacyButton}>
        <Button style={styles.privacy} title="Privacy" color="tomato" />
      </View>
      <View style={styles.header}>
        <Text style={styles.status}>Status</Text>
      </View>
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({
  container: {
  },
  privacyButton: {
    position: 'absolute',
    paddingTop: 50,
    paddingHorizontal: 15
  },
  privacy: {
    fontSize: 20
  },
  header: {
    paddingTop: 100,
    paddingHorizontal: 20,
    fontSize: 50,
  },
  status: {
    fontSize: 50,
    color: "black"
  }
});