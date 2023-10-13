import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CamScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
  }

  return (
    <View style={styles.container}>
      <Text>CamScreen</Text>
    </View>
  )
}

export default CamScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})