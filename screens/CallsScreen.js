import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const CallsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.privacyButton}>
        <Button style={styles.edit} title="Edit" color="tomato" />
      </View>
      <View style={styles.header}>
        <Text style={styles.call}>Calls</Text>
      </View>
    </View>
  )
}

export default CallsScreen

const styles = StyleSheet.create({
  header: {
    paddingTop: 100,
    paddingHorizontal: 20,
    fontSize: 50,
  },
  privacyButton: {
    position: 'absolute',
    paddingTop: 50,
    paddingHorizontal: 15
  },
  privacy: {
    fontSize: 20
  },
  call: {
    fontSize: 50,
    color: "black"
  }
})