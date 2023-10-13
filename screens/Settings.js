import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Settings = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
  }

  return (
    <View style={styles.container}>
      <Text>SettingScreen</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})